import * as React from 'react';
import { MyContext } from '../interfaces/MyContext';
import {
  ConfirmUserMutation,
  ConfirmUserMutationVariables,
} from '../generated/apolloComponents';
import redirect from '../lib/redirect';
import { confirmUserMutation } from '../graphql/user/mutations/confirmUser';

export default class Confirm extends React.PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyContext) {
    if (!token) {
      return {};
    }

    await apolloClient.mutate<
      ConfirmUserMutation,
      ConfirmUserMutationVariables
    >({
      mutation: confirmUserMutation,
      variables: {
        token: token as string,
      },
    });

    redirect(ctx, '/login');

    return {};
  }
  render() {
    return 'something went wrong';
  }
}
