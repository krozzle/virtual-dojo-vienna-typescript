import { Formik, Field } from 'formik';
import React from 'react';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/InputFields';
import { LoginComponent } from '../generated/apolloComponents';
import { useRouter, Router } from 'next/router';

export default () => {
  return (
    <Layout title='Login Page'>
      <LoginComponent>
        {login => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              // const errors: { [key: string]: string } = {};
              const response = await login({
                variables: data,
              });
              console.log(response);
              if (response && response.data && !response.data.login) {
                setErrors({
                  email: 'invalid login',
                });
                return;
              }
              const router = useRouter();
              router.push('/');

              // setErrors(errors);

              // ! app would crash before getting to the console.log below
              // console.log(response);
              // if (response.errors) {
              //   console.log(response.errors);
              // }
            }}
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name='email'
                  placeholder='email'
                  component={InputField}
                />
                <Field
                  name='password'
                  placeholder='password'
                  type='password'
                  component={InputField}
                />
                <button type='submit'>submit</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};
