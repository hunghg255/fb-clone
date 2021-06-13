import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  {
    src: 'https://links.papareact.com/f0p',
    name: 'Jeff Bezoz',
  },
  {
    src: 'https://links.papareact.com/kxk',
    name: 'Elon Musk',
  },
  {
    src: 'https://links.papareact.com/zvy',
    name: 'Bill Gates',
  },
  {
    src: 'https://links.papareact.com/snf',
    name: 'Mark Zuckerberg',
  },
  {
    src: 'https://links.papareact.com/d0c',
    name: 'Harry Potter',
  },
  {
    src: 'https://links.papareact.com/6gg',
    name: 'The Queen',
  },
  {
    src: 'https://links.papareact.com/r57',
    name: 'Hames Bond',
  },
];

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>

        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />

          <SearchIcon className='h-6' />

          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>

      {contacts.map((contact) => {
        return (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        );
      })}
    </div>
  );
}

export default Widgets;
