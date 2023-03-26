import React, { useState } from 'react';
import {css} from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import {Form, Field, InputSubmit, Error} from '../components/UI/Form';
import firebase from '../firebase';

import useValidation from '../hooks/useValidator';
import validateLogIn from '../validation/ValidateLogIn';

const stateInitial = {
  email: '',
  password: ''
};

export default function Login() {
  const [error, setError] = useState(false);

  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(stateInitial, validateLogIn, logIn);

  const {email, password} = values;

  async function logIn() {
    try {
      await firebase.logIn(email, password);
      
      Router.push('/');
    } catch (error) {
      console.error(`There was an error to auth user ${error.message}`);
      setError(error.message);
    }
  };

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Log In</h1>
          <Form
            onSubmit={handleSubmit}
          >
            <Field>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Your email'
                name='email'
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.email && <Error>{errors.email}</Error>}
            <Field>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Your password'
                name='password'
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.password && <Error>{errors.password}</Error>}
            {error && <Error>{error}</Error>}

            <InputSubmit
              type="submit"
              value="Log In"
            />
          </Form>
        </>
      </Layout>
    </div>
  );
};
