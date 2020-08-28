import Page from '../components/Page';

const AboutPage = () => (
  <Page>
    <div class='flex flex-col w-full bg-red-700 bg-opacity-75 min-h-full justify-around my-2 p-5'>
      <div class='text-white text-left px-2 py-1'>about us</div>
      <div class='text-black text-left text-4xl font-bold px-2 py-1 uppercase '>
        who we be
        <div class='border-t w-1/5' />
      </div>
      <div class='text-white w-2/3 text-xl p-2 text-left'>
        As the home of Austria's Fighting Game community, we provide a place to
        meet and get together with Fighting Game enthusiasts. Engage with people
        that share the same passion casually or participate in our local ranking
        tournaments.
      </div>
    </div>
  </Page>
);

export default AboutPage;
