const PriceList = () => (
  <div className="flex flex-col w-full h-full bg-white min-h-full justify-around p-32">
    <div className="flex rounded-lg px-16 gap-16 justify-around">
      <div className="flex-1 flex-col justify-around align-middle border-2 border-gray-700 border-opacity-50 bg-gray-100 bg-opacity-50 py-12 px-4 rounded-lg overflow-hidden shadow-lg">
        {/* <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        /> */}
        <div className="px-12 font-bold text-center text-4xl">Free</div>
        <div className="flex justify-center align-middle">
          <div className="border-t-2 border-primary w-16" />
        </div>
        <div className="py-12 text-lg text-center text-gray-800">
          {' '}
          Not sure if this is the place for you? Try out the Virtual Dojo Vienna
          on your first visit at no extra costs.
        </div>
        <div className="text-lg text-center">0€</div>
      </div>

      <div className="flex-1 flex-col justify-around align-middle border-2 border-gray-700 border-opacity-50 bg-gray-100 bg-opacity-50 py-12 px-4 rounded-lg overflow-hidden shadow-lg">
        {/* <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        /> */}
        <div className="px-12 font-bold text-center text-4xl">Day</div>
        <div className="flex justify-center align-middle">
          <div className="border-t-2 border-primary w-16" />
        </div>
        <div className="py-12 text-lg text-center text-gray-800">
          {' '}
          Are you visiting rarely or taking part in tournaments? Become a member
          for one day and come back soon!
        </div>
        <div className="text-lg text-center">7€</div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex-1 flex-col justify-around align-middle border-2 border-gray-700 border-opacity-50 bg-gray-100 bg-opacity-50 py-12 px-4 rounded-lg overflow-hidden shadow-lg">
        {/* <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        /> */}
        <div className="px-12 font-bold text-center text-4xl">Full</div>
        <div className="flex justify-center align-middle">
          <div className="border-t-2 border-primary w-16" />
        </div>
        <div className="py-12 text-lg text-center text-gray-800">
          {' '}
          There is no place like the Dojo? Become a full member and enjoy
          everything the Virtual Dojo has to offer.
        </div>
        <div className="text-lg text-center">25€/month</div>
      </div>
    </div>

    {/* <div className='flex flex-col'>
          <h2 className='text-white'>Day Membership</h2>
          Are you visiting rarely or just taking part in tournaments? Become a
          member for one day and come back soon.
          <h3>7€</h3>
          </div>
          <div className='flex flex-col'>
          <h2>Full Membership</h2>
          There is no place like the Dojo? Become a full member and enjoy
          everything the Virtual Dojo Vienna has to offer.
          <h3>25€</h3>
        </div> */}
  </div>
);

export default PriceList;
