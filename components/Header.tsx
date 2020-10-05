import { Flex, Image, NavLink } from 'theme-ui';
import Contact from './Contact';

const Header = () => (
  <div className="flex justify-around px-1 py-2">
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <a href="/">
        <Image variant="headerLogo" src="/vdvlogo.png" />
      </a>
      {/* <Text
            sx={{
              fontFamily: 'body',
              fontSize: 4,
            }}
          >
            <Link
              sx={{
                color: 'white',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              href='/'
            >
              <Text
                as='span'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Virtual Dojo
              </Text>{' '}
              <Text
                as='span'
                sx={{
                  color: 'primary',
                }}
              >
                |
              </Text>{' '}
              Vienna
            </Link>
          </Text> */}
      <Flex as="nav">
        <NavLink href="/">Home</NavLink>

        <NavLink href="/AboutUs">About</NavLink>

        <NavLink href="/memberships">Memberships</NavLink>

        {/* <NavLink href='/hello/'>hello</NavLink> */}

        {/* <NavLink href='/forgot-password/'>forgot password</NavLink> */}

        {/* <NavLink href='/login/'>Login</NavLink> */}

        {/* hide 'logout' when not logged in */}
        {/* MeComponent */}
        {/* <NavLink href='/logout/'>logout</NavLink> */}
        <Contact
        // sx={{
        //   justifySelf: 'flex-end',
        // }}
        />
        {/* <NavLink href='/prices'>Prices</NavLink> */}
        {/* fused with Memberships!! */}

        {/* <NavLink href='/contact'>Contact Us</NavLink> */}
      </Flex>
    </Flex>
  </div>
);
export default Header;