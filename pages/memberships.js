import { Text, Flex } from 'theme-ui';
import Page from '../components/Page';

const Memberships = () => {
  return (
    <Page>
      <div class='flex justify-around p-5'>
        <div class='max-w-sm m-4 rounded bg-black bg-opacity-50 overflow-hidden shadow-lg'>
          <img
            class='w-full'
            src='/danSFIV.jpg'
            alt='dan from street fighter 4'
          />
          <div class='text-white font-bold text-4xl'>Free Visit</div>
          <div class='text-white py-3'>
            {' '}
            Not sure if this is the place for you? Try out the Virtual Dojo
            Vienna on your first visit at no extra costs.
          </div>
          <div class='text-white'>0€</div>
        </div>

        <div class='max-w-sm m-4 rounded bg-black bg-opacity-50 overflow-hidden shadow-lg'>
          <img
            class='w-full'
            src='/danSFIV.jpg'
            alt='dan from street fighter 4'
          />
          <div class='text-white font-bold text-center p-2 text-3xl'>
            Day Membership
          </div>
          <div class='text-white py-3 text-center p-2'>
            {' '}
            Are you visiting rarely or just taking part in tournaments? Become a
            member for one day and come back soon.
          </div>
          <div class='text-white text-center p-2'>7€</div>
        </div>

        <div class='flex flex-col'>
          <h2 class='text-white'>Day Membership</h2>
          Are you visiting rarely or just taking part in tournaments? Become a
          member for one day and come back soon.
          <h3>7€</h3>
        </div>
        <div class='flex flex-col'>
          <h2>Full Membership</h2>
          There is no place like the Dojo? Become a full member and enjoy
          everything the Virtual Dojo Vienna has to offer.
          <h3>25€</h3>
        </div>
      </div>
    </Page>
  );
};
export default Memberships;
