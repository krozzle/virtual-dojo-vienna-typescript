import Page from '../components/Page';

const AboutPage = () => (
  <Page>
    <div class='flex max-w-full  min-h-full justify-around my-2 p-5'>
      <div class='text-white w-2/3 text-xl p-2 text-left bg-white bg-opacity-25 border border-black'>
        As the home of Austria's fighting game community, we provide a place to
        meet and get together with fighting game enthusiasts. Engage with people
        that share the same passion casually or participate in our local ranking
        tournaments.
      </div>
      <div class='text-white text-5xl w-1/3 font-bold p-4 text-center uppercase p-2  bg-black bg-opacity-50'>
        who we be
      </div>
    </div>
  </Page>
);

export default AboutPage;
