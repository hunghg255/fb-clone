import React from 'react';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  PlayIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayerIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';

export default function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-400 flex-shrink'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow items-center">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
