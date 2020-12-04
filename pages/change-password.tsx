import React from 'react';
import { NextPageContext } from 'next';
import { Field, Formik } from 'formik';
import Router from 'next/router';
import { InputField } from '../components/fields//InputFields';
import Page from '../components/Page';
import { ChangePasswordMutationComponent } from '../generated/apolloComponents';

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Page>
      <ChangePasswordMutationComponent>
        {(changePassword) => (
          <Formik
            onSubmit={async (data) => {
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
                  name="password"
                  placeholder="password"
                  component={InputField}
                  type="password"
                />
                <button type="submit">change password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordMutationComponent>
    </Page>
  );
};

ChangePassword.getInitialProps = ({ query: { token } }: NextPageContext) => {
  return {
    token,
  };
};

export default ChangePassword;
