import Page from '../components/Page';

const AboutPage = () => (
  <Page>
    <div class='flex flex-col w-full bg-red-700 min-h-full justify-around my-2 p-5'>
      <div class='text-white text-left px-2 py-1'>about us</div>
      <div class='text-black text-left text-4xl font-bold px-2 py-1 uppercase border-b  border-white'>
        who we be
      </div>
      <div class='text-white w-2/3 text-xl p-2 text-left  '>
        As the home of Austria's fighting game community, we provide a place to
        meet and get together with fighting game enthusiasts. Engage with people
        that share the same passion casually or participate in our local ranking
        tournaments.
      </div>
    </div>
  </Page>
);

export default AboutPage;
