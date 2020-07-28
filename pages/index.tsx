import { Box, Text, Heading } from 'theme-ui';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <Heading variant='defaultHeading'>
      {/* add wrapper!! */}
      <Box
        as='span'
        sx={{
          color: 'primary',
          fontSize: '1.15em',
          letterSpacing: '0.005em',
        }}
      >
        V
      </Box>
      irtual{' '}
      <Box
        as='span'
        sx={{
          color: 'primary',
          fontSize: '1.15em',
          letterSpacing: '0.005em',
        }}
      >
        D
      </Box>
      ojo{' '}
      <Box
        as='span'
        sx={{
          color: 'primary',
          fontSize: '1.15em',
          letterSpacing: '0.005em',
        }}
      >
        V
      </Box>
      ienna
    </Heading>
    <Box />
    {/* add wrapper!! */}
    <Box variant='pageContent'>
      <Text variant='pageText' as='p'>
        Providing A Home For The Fighting Game Community
      </Text>
    </Box>
    <Box variant='pageContent'>
      <Text variant='pageText' as='p'>
        Since 2010
      </Text>
    </Box>
    <Box variant='pageContent'>
      <Text variant='pageText' as='p'>
        Enabling People Of All Backgrounds To Get Together And Enjoy Fighting
        Games The Way They Are Meant To Be Played.
      </Text>
    </Box>
    <Box variant='pageContent'>
      <Text variant='pageText' as='p'>
        Competitively.
      </Text>
    </Box>
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
