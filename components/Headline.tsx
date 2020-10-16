const Headline = () => (
  <div className="flex flex-col min-h-screen items-center justify-center">
    {/* <div className="flex flex-col flex-none text-right bg-black bg-opacity-50 text-white text-2xl w-1/3 h-24 bg-opacity-25 p-2 uppercase">
      <p>home of austria's</p>
      <p>fighting game community</p>
    </div> */}
    <div className="flex text-center justify-center text-center text-white text-6xl font-extrabold w-2/3 p-4 uppercase">
      {' '}
      Virtual Dojo <div className="text-center text-red-700"> | </div>{' '}
      <div className="text-center font-light">Vienna</div>
    </div>
    <div className="w-full justify-center text-white bg-opacity-0 p-4 text-center text-4xl pt-8 uppercase">
      <div className="p-4">
        ENJOY FIGHTING GAMES THE WAY THEY ARE MEANT TO BE PLAYED
      </div>
      <div className="text-white font-extrabold p-2 text-center text-4xl pt-8 uppercase">
        Competitively
      </div>
    </div>
  </div>
);

export default Headline;
