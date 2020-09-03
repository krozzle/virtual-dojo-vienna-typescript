import Page from '../components/Page';

const IndexPage = () => (
  <Page>
    <div className="flex min-h-full justify-around p-2 my-2">
      <div className="text-white text-3xl w-1/3 h-full bg-white bg-opacity-25 font-bold p-2 uppercase">
        Home of the Austrian Fighting Game Community{' '}
      </div>
      <div className="flex text-white text-5xl h-full bg-black bg-opacity-75 font-bold p-2 uppercase">
        Virtual Dojo <span className="text-red-600">| </span>{' '}
        <p className="font-light">Vienna</p>
      </div>
    </div>
    <div className="flex flex-col justify-around text-white bg-black bg-opacity-75 p-2 text-center text-2xl ">
      <div className="">
        Enabling people of all backgrounds to get together and enjoy Fighting
        Games the way they are meant to be played
      </div>
      <div className="text-white bg-black bg-opacity-75 p-2 text-center text-2xl uppercase">
        Competitively
      </div>
    </div>
  </Page>
);

export default IndexPage;
