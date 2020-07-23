import Link from 'next/link';
import { Text, Flex } from 'theme-ui';
import Page from '../components/Page';

const AboutPage = () => (
  <Page>
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
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
      <p>
        <Link href='/'>
          <a>See us at home</a>
        </Link>
      </p>
    </Flex>
  </Page>
);

export default AboutPage;
