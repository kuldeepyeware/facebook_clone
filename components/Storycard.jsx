import Image from "next/image";

const Storycard = ({ name, src, profile }) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <Image
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 w-10 h-10 object-cover'
        src={profile}
        width={40}
        height={40}
        alt='Profile'
        style={{ objectFit: "cover" }}
        fixed='true'
        priority={true}
      />
      <Image
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        alt='Story'
        fill='true'
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority={true}
      />
      <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  );
};

export default Storycard;
