import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";
const Feed = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 ml-4 mr-3 xl:mr-10 overflow-y-auto scrollbar-hide'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
