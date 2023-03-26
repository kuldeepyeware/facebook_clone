import Image from "next/image";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className='grid place-items-center '>
      <Image
        src='https://iili.io/HhAo6LF.png'
        width={300}
        height={300}
        alt='Logo'
        className='mt-10'
        priority={true}
      />
      <h1
        onClick={signIn}
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-12'>
        Login with Socialbook
      </h1>
      <p className='mt-10'>Just for educational purpose</p>
    </div>
  );
};

export default Login;
