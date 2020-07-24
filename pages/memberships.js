import { Text, Flex } from 'theme-ui';
import Page from '../components/Page';

const Memberships = () => {
  return (
    <Page>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Text>
          <h1>Free Visit</h1>
          <br />
          <p>
            Not sure if this is the place for you? Try out the Virtual Dojo
            Vienna on your first visit at no extra costs.
          </p>
          <h3>0€</h3>
          <br />
          <h1>Day Membership</h1>
          <p>
            Are you visiting rarely or just taking part in tournaments? Become a
            member for one day and come back soon.
          </p>
          <h3>7€</h3>
          <br />
          <h1>Full Membership</h1>
          <p>
            There is no place like the Dojo? Become a full member and enjoy
            everything the Virtual Dojo Vienna has to offer.
          </p>
          <h3>25€</h3>
        </Text>
      </Flex>
    </Page>
  );
};
export default Memberships;
