// Navbar
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';
// import { SelectedPage } from '../app/types.d.ts';

enum SelectedPage {
  Home = 'home',
  Featured = 'featured',
  Services = 'services',
  Menu = 'menu',
  About = 'about',
  Location = 'location',
}

const Navbar = () => {
  // state to hold which section is currently in view
  const [currentSection, setCurrentSection] = useState<SelectedPage>(
    SelectedPage.Home
  ); // using the enum to set the default page
  // state for topOfPage
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect to setTopOfPage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setCurrentSection(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll); // add event listener

    return () => window.removeEventListener('scroll', handleScroll); // remove event listener
  }, []);

  const navbarBackground = isTopOfPage
    ? ''
    : 'bg-accent text-white rounded-bl-xl rounded-br-xl drop-shadow-xl';

  return (
    <nav
      className={`${navbarBackground} sticky top-0 container h-[75px] border-b border-accent flex items-center justify-between`}
    >
      {/* Logo */}
      <Link href='/'>
        <p className='align-middle'>Logo</p>
      </Link>
      {/* Map out links */}
      <ul className='flex flex-row space-x-10 justify-end align-middle'>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={currentSection === link.href ? 'text-accent' : ''}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
