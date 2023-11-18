// Navbar
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (window.pageYOffset >= section.offsetTop && window.pageYOffset < section.offsetTop + section.offsetHeight) {
                    setCurrentSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="sticky top-0 container h-[75px] border-b border-accent flex items-center justify-between">
            {/* Logo */}
            <Link 
            href="/"            
            >
                <p className='align-middle'>Logo</p>
            </Link>
            {/* Map out links */}
            <ul className="flex flex-row space-x-10 justify-end align-middle">
                {navLinks.map((link) => (
                    <li key={link.label} className={currentSection === link.href ? 'text-accent' : ''}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;