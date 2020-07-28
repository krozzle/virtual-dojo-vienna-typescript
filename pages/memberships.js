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
        <Text variant='pageText' as='p'>
          <h2>Free Visit</h2>
          Not sure if this is the place for you? Try out the Virtual Dojo Vienna
          on your first visit at no extra costs.
          <h3>0€</h3>
        </Text>
        <Text variant='pageText' as='p'>
          <h2>Day Membership</h2>
          Are you visiting rarely or just taking part in tournaments? Become a
          member for one day and come back soon.
          <h3>7€</h3>
        </Text>
        <Text variant='pageText' as='p'>
          <h2>Full Membership</h2>
          There is no place like the Dojo? Become a full member and enjoy
          everything the Virtual Dojo Vienna has to offer.
          <h3>25€</h3>
        </Text>
      </Flex>
    </Page>
  );
};
export default Memberships;
