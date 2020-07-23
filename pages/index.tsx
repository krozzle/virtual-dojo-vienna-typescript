import { Text } from 'theme-ui';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <h1>Virtual Dojo Vienna</h1>

    <Text>
      <p>
        The Virtual Dojo Vienna enables people of all backgrounds to come
        together and enjoy fighting games the way they are meant to be played.
        Competitively.
      </p>
    </Text>
  </Page>
);

export default IndexPage;

{
  /* <LoginComponent>
  {mutate => (
    <button
      onClick={async () => {
        const response = await mutate({
          variables: { email: 'test@test.com ', password: 'password' },
        });
        if (response && response?.data) {
          response.data.login;
        }

        console.log(response);
      }}
    >
      call login mutation
    </button>
  )}
</LoginComponent> */
}
