import { Flex } from 'theme-ui';
import Page from '../components/Page';

// todo add logo as h1 or something

const Impressum = () => {
  return (
    <Page>
      <div class='flex flex-col min-w-xl justify-around p-5'>
        <h1 class='text-white text-5xl font-bold p-4 text-center'>
          Legal Notice
        </h1>
        <div class='text-white font-bold text-left p-2 text-3xl'>Address</div>
        <div class='text-white py-3 text-left p-2'>
          <a
            href='https://goo.gl/maps/tHa1X6nNoYVDq3Ky5'
            class='hover:underline'
          >
            Praterstrasse 58/1/L1 1020 Vienna
          </a>
        </div>
        <br />
        <div class='text-white font-bold text-left p-2 text-3xl'>
          Email
        </div>{' '}
        <div class='text-white py-3 text-left p-2 '>
          <a href='mailto:office@virtualdojovienna.com' class='hover:underline'>
            office@virtualdojovienna.com
          </a>
        </div>
        <br />
        <div class='text-white font-bold text-left p-2 text-3xl'>
          Phone
        </div>{' '}
        <div class='text-white py-3 text-left p-2'>+43 1 27 67 824</div>
        <br />
        <div class='text-white font-bold text-left p-2 text-3xl'>Bank</div>
        <div class='text-white py-3 text-left p-2'>
          IBAN: AT94 2011 1842 6118 4800
        </div>
        <div class='text-white py-3 text-left p-2'>BIC: GIBAATWWXXX</div>
      </div>
      
    </Page>
  );
};
export default Impressum;
