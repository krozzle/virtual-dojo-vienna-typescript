import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <div>
      <input {...field} {...props} />
      {/* this below is basically an if-statement */}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};
