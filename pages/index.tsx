import AboutUs from '../components/about';
import Header from '../components/Header';
import Headline from '../components/Headline';
import Memberships from '../components/Memberships';
import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <Header />
    <Headline />
    <AboutUs />
    <Memberships />
  </Page>
);

export default IndexPage;
