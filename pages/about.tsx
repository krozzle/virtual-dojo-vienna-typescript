import { Text, Flex } from 'theme-ui';
import Page from '../components/Page';

const AboutPage = () => (
  <Page>
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <h1>Who We Be</h1>
      <Text>
        As the home of Austria's fighting game community, we provide a place to
        meet and get together with fighting game enthusiasts.
      </Text>
      <br />
      <Text>
        Engage with people that share the same passion casually or participate
        in our local ranking tournaments.
      </Text>
    </Flex>
  </Page>
);

export default AboutPage;
