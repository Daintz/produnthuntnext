import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding-left: 2rem;

  a{
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gray2);
    font-family: 'PT Sans', sans-serif;

    &:last-of-type{
      margin-right: 0;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href='/'>Homepage</Link>
      <Link href='/popular'>Popular</Link>
      <Link href='/new-product'>New product</Link>
    </Nav>
  );
};

export default Navigation;