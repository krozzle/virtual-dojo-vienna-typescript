import { Flex, Link, Text } from 'theme-ui';

const Footer = () => (
  <div className="flex bg-gray-100 justify-around min-h-full">
    <div className="flex align-middle">
      {/* <p className="text-lg pr-4 py-1">Follow us</p> */}
      <a href="https://www.twitch.tv/virtualdojovienna" className="px-1">
        <img className="" src="/twitch.svg" />
      </a>
      <a href="https://youtube.com/virtualdojovienna" className="px-1">
        <img className="" src="/youtube.svg" />
      </a>
      <a href="https://twitter.com/virtualdojo" className="px-1">
        <img className="" src="/twitter.svg" />
      </a>
      <a href="https://www.instagram.com/virtualdojovienna" className="px-1">
        <img className="" src="/instagram.svg" />
      </a>
      <a href="https://www.facebook.com/VirtualDojoVienna/" className="px-1">
        <img className="" src="/facebook.svg" />
      </a>
    </div>
    <Text sx={{ justifySelf: 'center' }}>
      © {new Date().getFullYear()} Virtual Dojo Vienna
    </Text>
    <Flex
      sx={{
        justifyContent: 'space-around',
      }}
    >
      <Link
        download="/statuten"
        sx={{
          mx: 1,
        }}
      >
        <a href="/statuten_2016.pdf" download>
          <Text>Vereinsstatuten</Text>
        </a>
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
  </div>
);

export default Footer;
