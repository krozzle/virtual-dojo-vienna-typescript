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
      <Text>
        <h1>Who We Be</h1>
        As the home of Austria's fighting game community, we provide a place to
        meet and get together with fighting game enthusiasts.
      </Text>
      <p>
        Engage with people that share the same passion casually or participate
        in our local ranking tournaments.
      </p>
    </Flex>
  </Page>
);

export default AboutPage;
