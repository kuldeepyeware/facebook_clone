import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Contact from "./Contact";

const contacts = [
  {
    name: "Ratan Tata",
    src: "https://iili.io/HN5Ahzv.jpg",
  },
  {
    name: "Narendra Modi",
    src: "https://iili.io/HN5RdBV.webp",
  },
  {
    name: "Anand Mahindra",
    src: "https://iili.io/HN55gV4.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://iili.io/Hh44FQn.jpg",
  },
  {
    name: "Mark Zukerberg",
    src: "https://iili.io/Hh4tF19.webp",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/zvy",
  },
];

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <MagnifyingGlassIcon className='h-6' />
          <EllipsisHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
