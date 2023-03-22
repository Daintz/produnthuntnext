import React from 'react';
import Search from '../UI/Search';
import Navigation from './Navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Search />

          <Navigation />
        </div>

        <div>
          <p>Hello: Daniel</p>

          <button type='button'>Log out</button>

          <Link href="/">Login</Link>
          <Link href="/">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;