import Image from "next/image";
import {
  HomeIcon,
  UserGroupIcon,
  ChevronDownIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image
          src='https://iili.io/HhAo6LF.png'
          width={40}
          height={40}
          alt='Logo'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <MagnifyingGlassIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Socialbook'
          />
        </div>
      </div>
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image
          onClick={signOut}
          src={session.user.image}
          className='rounded-full cursor-pointer'
          width='40'
          height='40'
          alt='Profile-Image'
        />
        <p className='whitespace-nowrap font-semibold pr-3'>
          {session.user.name}
        </p>
        <Squares2X2Icon className='icon' />
        <ChatBubbleOvalLeftIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
};

export default Header;
