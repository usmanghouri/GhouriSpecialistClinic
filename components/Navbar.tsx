'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      background: '#333',
      color: '#fff',
      display: 'flex',
      gap: '1rem'
    }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}
