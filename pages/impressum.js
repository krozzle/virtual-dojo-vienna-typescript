import { Flex } from 'theme-ui';
import Page from '../components/Page';

// todo add logo as h1 or something

const Impressum = () => {
  return (
    <Page>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h3>Address</h3>
        <p>Praterstrasse 58/1/L1 1020 Vienna</p>
        <br />
        <h3>Email</h3> <p>office@virtualdojovienna.com</p>
        <br />
        <h3>Phone</h3> <p>+43 1 27 67 824</p>
        <br />
        <h3>Bank</h3>
        <p>IBAN AT94 2011 1842 6118 4800 BIC GIBAATWWXXX</p>
      </Flex>
    </Page>
  );
};
export default Impressum;
