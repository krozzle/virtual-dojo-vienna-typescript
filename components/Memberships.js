const Memberships = () => (
  <div className="flex flex-col w-full bg-black bg-opacity-75 min-h-full justify-around p-5">
    <div className="flex justify-around py-5">
      <div className="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
        <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        />
        <div className="text-white font-bold text-center p-2 text-3xl">
          Free Visit
        </div>
        <div className="text-white py-3 text-left p-2">
          {' '}
          Not sure if this is the place for you? Try out the Virtual Dojo Vienna
          on your first visit at no extra costs.
        </div>
        <div className="text-white text-center p-2">0€</div>
      </div>

      <div className="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
        <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        />
        <div className="text-white font-bold text-center p-2 text-3xl">Day</div>
        <div className="text-white py-3 text-left p-2">
          {' '}
          Are you visiting rarely or taking part in tournaments? Become a member
          for one day and come back soon!
        </div>
        <div className="text-white text-center p-2">7€</div>
      </div>

      <div className="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
        <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        />
        <div className="text-white font-bold text-center p-2 text-3xl">
          Full
        </div>
        <div className="text-white py-3 text-left p-2">
          {' '}
          There is no place like the Dojo? Become a full member and enjoy
          everything the Virtual Dojo Vienna has to offer.
        </div>
        <div className="text-white text-center p-2">25€/month</div>
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

export default Memberships;
