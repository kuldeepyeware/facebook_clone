import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "@firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const usersCollectionRef = collection(db, "posts");

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(usersCollectionRef, {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((docum) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${docum.id}`);

        uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setDoc(
              doc(db, "posts", docum.id),
              { postImage: url },
              { merge: true }
            );
          });
          removeImage();
        });
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          width={40}
          height={40}
          fixed='true'
          alt='image'
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100  px-5 focus:outline-none flex-grow'
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind ${session.user.name}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-10 object-contain'
              src={imageToPost}
              alt='selectedFile'
            />
            <p
              onClick={removeImage}
              className='text-xs text-red-500 text-center'>
              Remove
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type='file'
            hidden
          />
        </div>
        <div className='inputIcon'>
          <FaceSmileIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
