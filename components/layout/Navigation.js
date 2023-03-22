import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href='/'>Homepage</Link>
      <Link href='/'>Popular</Link>
      <Link href='/'>New product</Link>
    </nav>
  );
};

export default Navigation;