import AboutUs from '../components/About';
import Hero from '../components/Hero';
import Map from '../components/Map';
import Membership from '../components/Membership';
import Page from '../components/Page';
import PriceList from '../components/PriceList';

const IndexPage = () => (
  <Page>
    <Hero />
    <AboutUs />
    <Membership />
    <PriceList />
    <Map />
  </Page>
);

export default IndexPage;
