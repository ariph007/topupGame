import Image from 'next/image';
import React from 'react';
import Auth from './Auth';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-light bg-light bg-white  pb-lg-40  pb-50'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/#'>
            <Image src='/icon/logo.svg' width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto text-lg gap-lg-0 gap-2'>
              <Menu title='Home' active href='/' />
              <Menu title='Games' href='/games' />
              <Menu title='Reward' href='/reward' />
              <Menu title='Discover' href='/discover' />
              <Menu title='Global Rank' href='/globar-rank' />
              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
