import Storycard from "./Storycard";
const stories = [
  {
    name: "Narayan Murthy",
    src: "https://iili.io/HN50nSV.jpg",
    profile: "https://iili.io/HN50xHB.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/kxk",
    profile: "https://iili.io/Hh4hQX2.webp",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://iili.io/Hh44FQn.jpg",
  },
  {
    name: "Mark Zukerberg",
    src: "https://iili.io/Hh4tF19.webp",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <Storycard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
