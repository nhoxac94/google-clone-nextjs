import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';
import React from 'react';
import HomeSearch from './HomeSearch';

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className='flex flex-col items-center mt-24'>
        <Image
          width='300'
          height='100'
          src='https://mobileworld.com.vn/uploads/product/brand/thumbs/google.webp'
          alt='logo'
        />

        <HomeSearch />
      </div>
    </>
  );
}
