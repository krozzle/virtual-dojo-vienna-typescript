import { Formik, Field } from 'formik';
import React from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import { InputField } from '../components/fields/InputFields';
import { RegisterComponent } from '../generated/apolloComponents';

export default () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {(register) => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await register({
                  variables: {
                    data,
                  },
                });
                console.log(response);
                // const router = useRouter();
                Router.push('/check-email');
              } catch (err) {
                // to get better error messaging, use Object.keys(err) and go from there (ie: looking for validationErrors)
                // console.log('err: ', err.graphQLErrors);
                const errors: { [key: string]: string } = {};
                err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
                  (validationErr: any) => {
                    Object.values(validationErr.constraints).forEach(
                      (message: any) => {
                        errors[validationErr.property] = message;
                      },
                    );
                  },
                );
                setErrors(errors);
              }

              // ! app would crash before getting to the console.log below
              // console.log(response);
              // if (response.errors) {
              //   console.log(response.errors);
              // }
            }}
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  placeholder="firstName"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="lastName"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
