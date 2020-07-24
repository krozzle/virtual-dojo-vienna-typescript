import { Formik, Field } from 'formik';
import React from 'react';
import Router from 'next/router';
import { InputField } from '../components/fields/InputFields';
import { ChangePasswordMutationComponent } from '../generated/apolloComponents';
import Page from '../components/Page';
import { NextPageContext } from 'next';

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Page>
      <ChangePasswordMutationComponent>
        {changePassword => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token: '',
                  },
                },
              });
              console.log(response, token);
              // const router = useRouter();
              Router.push('/');

              // ! app would crash before getting to the console.log below
              // console.log(response);
              // if (response.errors) {
              //   console.log(response.errors);
              // }
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
    </Page>
  );
};

ChangePassword.getInitialProps = ({
  query: { token },
}: NextPageContext<{ token: string }>) => {
  return {
    token,
  };
};

export default ChangePassword;
