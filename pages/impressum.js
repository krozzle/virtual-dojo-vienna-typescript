import { Flex } from 'theme-ui';
import Page from '../components/Page';

// todo add logo as h1 or something

const Impressum = () => {
  return (
    <Page>
      <div className="flex flex-col min-h-full justify-around p-5 my-2">
        <div className="text-white text-5xl font-bold p-4 text-center">
          Legal Notice
        </div>
        <div className="text-white text-4xl font-bold py-2 text-left">
          Virtual Dojo Vienna - Verein zur Förderung der Videospielkultur
        </div>
        <div className="text-white text-4xl font-bold  text-left" />
        <div className="text-white font-bold text-left py-2 text-3xl">
          Address
        </div>
        <div className="text-white py-1 text-left">
          <a
            href="https://goo.gl/maps/tHa1X6nNoYVDq3Ky5"
            className="hover:underline"
          >
            Praterstrasse 58/1/L1 1020 Vienna
          </a>
        </div>
        <div className="text-white font-bold text-left py-2 text-3xl">
          Email
        </div>{' '}
        <div className="text-white py-1 text-left  ">
          <a
            href="mailto:office@virtualdojovienna.com"
            className="hover:underline"
          >
            office@virtualdojovienna.com
          </a>
        </div>
        <div className="text-white font-bold text-left py-2 text-3xl">
          Phone
        </div>{' '}
        <div className="text-white py-3 text-left py-2">+43 1 27 67 824</div>
        <div className="text-white font-bold text-left py-2 text-3xl">Bank</div>
        <div className="text-white py-1 text-left ">
          IBAN: AT94 2011 1842 6118 4800
        </div>
        <div className="text-white py-3 text-left py-2">BIC: GIBAATWWXXX</div>
      </div>
    </Page>
  );
};
export default Impressum;
