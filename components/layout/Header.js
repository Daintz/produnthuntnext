import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Navigation from './Navigation';
import Search from '../UI/Search';
import Buttom from '../UI/Buttom';

const ContainerHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  margin-right: 2rem;
`;

const Header = () => {
  const user = false;

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gray3);
        padding: 1rem 0;
      `}
    >
      <ContainerHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href='/'>
            <Logo>P</Logo>
          </Link>

          <Search />

          <Navigation />
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >Hello: Daniel</p>

              <Buttom color='true'>Log out</Buttom>
            </>
          ) : (
            <>
              <Link href='/login'>
                <Buttom color='true'>Login</Buttom>
              </Link>
              <Link href='/create-account'>
                <Buttom>Register</Buttom>
              </Link>
            </>
          )}
        </div>
      </ContainerHeader>
    </header>
  );
};

export default Header;
