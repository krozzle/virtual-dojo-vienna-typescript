import AboutUs from '../components/About';
import HeadlineMember from '../components/HeadlineMember';
import Hero from '../components/Hero';
import Map from '../components/Map';
import Memberships from '../components/Memberships';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <Hero />
    <AboutUs />
    <HeadlineMember />
    <Memberships />
    <Map />
  </Page>
);

export default IndexPage;
