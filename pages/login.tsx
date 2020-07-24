import { Formik, Field } from 'formik';
import React from 'react';
import { Flex } from 'theme-ui';
import { InputField } from '../components/fields/InputFields';
import { LoginComponent, MeQuery } from '../generated/apolloComponents';
import Router from 'next/router';
import Page from '../components/Page';
import { meQuery } from '../graphql/user/queries/me';

export default () => {
  return (
    <Page>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          m: '50px',
        }}
      >
        <LoginComponent>
          {login => (
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={async (data, { setErrors }) => {
                // const errors: { [key: string]: string } = {};
                const response = await login({
                  variables: data,
                  // clearing cache
                  update: (cache, { data }) => {
                    if (!data || !data.login) {
                      return;
                    }
                    cache.writeQuery<MeQuery>({
                      query: meQuery,
                      data: {
                        __typename: 'Query',
                        me: data.login,
                      },
                    });
                  },
                });
                console.log(response);
                if (response && response.data && !response.data.login) {
                  setErrors({
                    email: 'invalid login',
                  });
                  return;
                }
                // const router = useRouter();
                Router.push('/');

                // setErrors(errors);

                // ! app crashes before getting to the console.log below
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
      </Flex>
    </Page>
  );
};
