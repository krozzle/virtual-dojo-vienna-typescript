import { Box, Flex, Image, Link, Text } from 'theme-ui';

const Footer = () => (
  <Box
    sx={{
      // position: 'absolute',
      background: 'black',

      color: 'white',
      opacity: 0.9,
      px: 3,

      // bottom: '0',
      py: 2,

      width: '100vw',
    }}
    as="footer"
  >
    <Flex
      sx={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: '50vw',
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-around',
          // flexDirection: 'column',
        }}
      >
        <Text>Follow us</Text>
        <a href="https://www.twitch.tv/virtualdojovienna">
          <Image variant="socials" src="/twitch.svg" />
        </a>
        <a href="https://youtube.com/virtualdojovienna">
          <Image variant="socials" src="/youtube.svg" />
        </a>
        <a href="https://twitter.com/virtualdojo">
          <Image variant="socials" src="/twitter.svg" />
        </a>
        <a href="https://www.instagram.com/virtualdojovienna">
          <Image variant="socials" src="/instagram.svg" />
        </a>
        <a href="https://www.facebook.com/VirtualDojoVienna/">
          <Image variant="socials" src="/facebook.svg" />
        </a>
      </Flex>
      <Text sx={{ justifySelf: 'center' }}>
        © 2010 - {new Date().getFullYear()} Virtual Dojo Vienna
      </Text>
      <Flex
        sx={{
          justifyContent: 'space-around',
        }}
      >
        <Link
          href="/statuten"
          sx={{
            mx: 1,
          }}
        >
          <Text>Vereinsstatuten</Text>
        </Link>
        <Link
          href="/impressum"
          sx={{
            mx: 1,
          }}
        >
          <Text>Impressum</Text>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
