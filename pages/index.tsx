import AboutUs from '../components/About';
import HeadlineMember from '../components/HeadlineMember';
import Hero from '../components/Hero';
import Memberships from '../components/Memberships';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <Hero />
    <AboutUs />
    <HeadlineMember />
    <Memberships />
  </Page>
);

export default IndexPage;
