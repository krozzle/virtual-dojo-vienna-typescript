import { gql } from 'apollo-boost';

export const changePasswordMutation = gql`
  mutation ChangePasswordMutation($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
