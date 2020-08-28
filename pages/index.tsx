import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <div class='flex min-h-full justify-around p-2 my-2'>
      <div>
        <div class='text-white text-3xl bg-white bg-opacity-25 font-bold p-2 text-center uppercase'>
          Home of the Austrian Fighting Game Community{' '}
        </div>
      </div>
      <div class='flex flex-col  justify-around text-white bg-black bg-opacity-75 p-2 text-center text-2xl '>
        <div class=''>
          Enabling people of all backgrounds to get together and enjoy Fighting
          Games the way they are meant to be played
        </div>
        <div class='text-white bg-black bg-opacity-75 p-2 text-center text-2xl uppercase'>
          Competitively
        </div>
      </div>
    </div>
  </Page>
);

export default IndexPage;
