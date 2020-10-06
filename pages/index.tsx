import AboutUs from '../components/About';
import Headline from '../components/Headline';
import HeadlineMember from '../components/HeadlineMember';
import Memberships from '../components/Memberships';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <Headline />
    <AboutUs />
    <HeadlineMember />
    <Memberships />
  </Page>
);

export default IndexPage;
