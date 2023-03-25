import React from 'react';
import {css} from '@emotion/react';
import Layout from '../components/layout/Layout';
import {Form, Field, InputSubmit} from '../components/UI/Form';

export default function CreateAccount() {
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >CreateAccount</h1>
          <Form>
            <Field>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Your Name'
                name='name'
              />
            </Field>
            <Field>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Your email'
                email='email'
              />
            </Field>
            <Field>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Your password'
                password='password'
              />
            </Field>

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
