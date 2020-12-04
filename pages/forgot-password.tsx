import { Formik, Field } from 'formik';
import React from 'react';
import { InputField } from '../components/fields/InputFields';
import Page from '../components/Page';
import { ForgotPasswordMutationComponent } from '../generated/apolloComponents';
import Router from 'next/router';

export default () => {
  return (
    <Page>
      <ForgotPasswordMutationComponent>
        {(forgotPassword) => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data) => {
              const response = await forgotPassword({
                variables: data,
              });
              console.log(response);
              // const router = useRouter();
              Router.push('/check-email');

              // ! app would crash before getting to the console.log below
              // console.log(response);
              // if (response.errors) {
              //   console.log(response.errors);
              // }
            }}
            initialValues={{
              email: '',
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />

                <button type="submit">forgot password</button>
              </form>
            )}
          </Formik>
        )}
      </ForgotPasswordMutationComponent>
    </Page>
  );
};
