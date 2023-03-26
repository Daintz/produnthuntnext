import React, { useState } from 'react';
import {css} from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import {Form, Field, InputSubmit, Error} from '../components/UI/Form';
import firebase from '../firebase';

import useValidation from '../hooks/useValidator';
import validateCreateAccount from '../validation/validateCreateAccount';

const stateInitial = {
  name: '',
  email: '',
  password: ''
};

export default function CreateAccount() {
  const [error, setError] = useState(false);

  const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(stateInitial, validateCreateAccount, createAccount);

  const {name, email, password} = values;

  async function createAccount() {
    try {
      await firebase.register(name, email, password);
      Router.push('/');
    } catch (error) {
      console.error(`There was an error to create user ${error.message}`);
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
          >Create Account</h1>
          <Form
            onSubmit={handleSubmit}
          >
            <Field>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Your Name'
                name='name'
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.name && <Error>{errors.name}</Error>}
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
              value="Create account"
            />
          </Form>
        </>
      </Layout>
    </div>
  );
};
