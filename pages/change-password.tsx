import { Field, Formik } from 'formik';
import { NextContext } from 'next';
import Router from 'next/router';
import React from 'react';
import { InputField } from '../components/fields//InputFields';
import Layout from '../components/Layout';
import { ChangePasswordMutationComponent } from '../generated/apolloComponents';

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Layout title='Change Password page'>
      <ChangePasswordMutationComponent>
        {changePassword => (
          <Formik
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token,
                  },
                },
              });
              console.log(response);
              Router.push('/');
            }}
            initialValues={{
              password: '',
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name='password'
                  placeholder='password'
                  component={InputField}
                  type='password'
                />
                <button type='submit'>change password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordMutationComponent>
    </Layout>
  );
};

ChangePassword.getInitialProps = ({
  query: { token },
}: NextContext<{ token: string }>) => {
  return {
    token,
  };
};

export default ChangePassword;
