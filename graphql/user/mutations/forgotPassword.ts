import { gql } from 'apollo-boost';

export const forgotPasswordMutation = gql`
  mutation ForgotPasswordMutation($email: String!) {
    forgotPassword(email: $email)
  }
`;
