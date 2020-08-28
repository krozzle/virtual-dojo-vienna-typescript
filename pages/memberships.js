import Page from '../components/Page';

const Memberships = () => {
  return (
    <Page>
      <div className="container mx-auto">
        <div class="font-bold my-2 text-left text-5xl text-red-700">
          Memberships
        </div>
        <div class="border-t w-1/5" />
        {/* <div className='text-white text-xl px-2 py-1 text-left  w-2/3'>
          Becoming a member is simple. Contact our staff through e-mail and
          phone, or just stop by. They will guide you through the process and
          answer any questions you might have. We offer different types of
          memberships so you can pick the one that suits your needs the best.
          Find out more in the section below.
        </div> */}
        <div class="flex justify-around py-5 -mx-2">
          <div class="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
            <img
              class="w-full min-h-0"
              src="/danSFIV.jpg"
              alt="dan from street fighter 4"
            />
            <div class="text-white font-bold text-center p-2 text-3xl">
              Free Visit
            </div>
            <div class="text-white py-3 text-left p-2">
              {' '}
              Not sure if this is the place for you? Try out the Virtual Dojo
              Vienna on your first visit at no extra costs.
            </div>
            <div class="text-white text-center p-2">0€</div>
          </div>

          <div class="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
            <img
              class="w-full min-h-0"
              src="/danSFIV.jpg"
              alt="dan from street fighter 4"
            />
            <div class="text-white font-bold text-center p-2 text-3xl">Day</div>
            <div class="text-white py-3 text-left p-2">
              {' '}
              Are you visiting rarely or just taking part in tournaments? Become
              a member for one day and come back soon.
            </div>
            <div class="text-white text-center p-2">7€</div>
          </div>

          <div class="flex-1 max-w-sm mx-2 rounded bg-white bg-opacity-25 overflow-hidden shadow-lg">
            <img
              class="w-full min-h-0"
              src="/danSFIV.jpg"
              alt="dan from street fighter 4"
            />
            <div class="text-white font-bold text-center p-2 text-3xl">
              Full
            </div>
            <div class="text-white py-3 text-left p-2">
              {' '}
              There is no place like the Dojo? Become a full member and enjoy
              everything the Virtual Dojo Vienna has to offer.
            </div>
            <div class="text-white text-center p-2">25€/month</div>
          </div>
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
    </Page>
  );
};
export default Memberships;
