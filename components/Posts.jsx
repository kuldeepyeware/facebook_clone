import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import { firebaseApp } from "firebase/app";
import React from "react";
import {
  query,
  collection,
  orderBy,
  getFirestore,
} from "firebase/firestore";

const Posts = () => {
  const postsCollectionRef = collection(getFirestore(firebaseApp), "posts");

  const orderedPostsCollectionRef = query(
    postsCollectionRef,
    orderBy("timestamp", "desc"),
  );

  const [value, loading, error] = useCollection(orderedPostsCollectionRef);

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span className='flex justify-center'>Loading...</span>}
      {value && (
        <>
          {value?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
