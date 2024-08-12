'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgTransparent = () => {
        if (pathname === '/') {
            return scrolling ? 'bg-[#2176FF]' : 'bg-transparent';
        } else {
            return 'bg-[#2176FF]';
        }
    };

    return (
        <nav className={`p-6 fixed top-0 left-0 right-0 z-50 ${bgTransparent()}`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-lg font-bold">
                    <Link href="/">Gulzar Soft</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className={`text-white hover:text-black ${pathname === '/' ? 'underline text-black' : ''}`}>Home</Link>
                    <Link href="/service" className={`text-white hover:text-black ${pathname === '/service' ? 'underline text-black' : ''}`}>Services We Offer</Link>
                    <Link href="/portfolio" className={`text-white hover:text-black ${pathname === '/portfolio' ? 'underline text-black' : ''}`}>Portfolio</Link>
                    <Link href="/hiring" className={`text-white hover:text-black ${pathname === '/hiring' ? 'underline text-black' : ''}`}>Hire Developers</Link>
                    <Link href="/career" className={`text-white hover:text-black ${pathname === '/career' ? 'underline text-black' : ''}`}>Careers</Link>
                    <Link href="/about" className={`text-white hover:text-black ${pathname === '/about' ? 'underline text-black' : ''}`}>About Us</Link>
                    <Link href="/contact" className={`text-white hover:text-black ${pathname === '/contact' ? 'underline text-black' : ''}`}>Contact</Link>
                </div>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2">
                    <div className="flex flex-col items-center space-y-2">
                        <Link href="/" className={`text-white hover:text-black ${pathname === '/' ? 'underline text-black' : ''}`}>Home</Link>
                        <Link href="/about" className={`text-white hover:text-black ${pathname === '/about' ? 'underline text-black' : ''}`}>About Us</Link>
                        <Link href="/contact" className={`text-white hover:text-black ${pathname === '/contact' ? 'underline text-black' : ''}`}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
