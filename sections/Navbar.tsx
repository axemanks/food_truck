// Navbar
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';




const Navbar = () => {

  // state for topOfPage
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect to setTopOfPage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
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
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
