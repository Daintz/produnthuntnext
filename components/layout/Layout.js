import React from 'react';
import Header from './Header';
import {Global, css} from '@emotion/core';

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gray: #3d3d3d;
            --gray2: #6F6F6F;
            --orange: #DA552F;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
        `}
      />
      <Header />

      <main>
        {props.children}
      </main>
    </>
  );
};

export default Layout;