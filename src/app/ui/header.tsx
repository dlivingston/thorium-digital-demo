'use client';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import styles from './header.module.css';

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Our Portfolio',
    href: '/placeholder',
  },
  {
    name: 'Suppliers',
    href: '/placeholder',
  },
  {
    name: 'Careers',
    href: '/placeholder',
  },
  {
    name: 'Our Causes',
    href: '/placeholder',
  },
  {
    name: 'News',
    href: '/placeholder',
  },
  {
    name: 'About Us',
    href: '/placeholder',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={`flex flex-row justify-between items-center w-full p-4 ${styles['sg-header']}`}>
      <Link href="/">
        <Image className={styles['sg-logo']} src="/sg_logo.svg" alt="SG Logo" width={85} height={85} />
      </Link>
      <button 
        aria-label="Menu Toggle"
        className={`flex flex-col items-center justify-center ${styles['menu-toggle']} ${isMenuOpen ? `${styles['open']}` : ""}`} 
        onClick={toggleMenu}
      >
        <div className={styles['menu-box']}>
          <div className={styles['menu-inner']}></div>
        </div>
      </button>
      <div className={`${styles['menu-grid']} ${isMenuOpen ? `${styles['open']}` : ""} p-8 lg:p-0`}>
        <div className="menu-row flex flex-col lg:flex-row lg:justify-end lg:items-center mb-2">
          <div className={`flex flex-row ${styles['social-links']}`}>
            <a href="https://donlivingston.me/social/" target="_blank" rel="noopener noreferrer">
              <Image src="/Instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://donaldlivingston.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/Facebook.svg" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://github.com/dlivingston" target="_blank" rel="noopener noreferrer">
              <Image src="/Twitter.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
          <div className={styles['login-menu']}>
            <button className="px-4 py-2 rounded-full">Log In</button>
          </div>
        </div>
        <nav className="flex flex-col items-center lg:flex-row">
          {navItems.map((item) => (
            <div key={item.name} className={`${styles['nav-link']} ${pathname === item.href ? `${styles['current']}` : ""} my-4 lg:mr-8 lg:my-0`}>
              <Link href={item.href} className="">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}