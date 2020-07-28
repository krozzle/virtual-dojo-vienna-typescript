import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Image, Text, Flex, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import Link from './Link';
import NavLink from './NavLink';
import Contact from './Contact';
// import pdf from '../../public/statuten_2016.pdf';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Virtual Dojo Vienna</title>
      <link rel='icon' href='/vdv-logo.jpg' />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Box
      sx={{
        background: 'black',
        opacity: 0.9,
        py: 4,
        px: 3,
      }}
      as='header'
    >
      <Container>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <a href='/'>
            <Image variant='headerLogo' src='/vdvlogo.png' />
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
          <Flex as='nav'>
            <NavLink href='/'>Home</NavLink>

            <NavLink href='/about'>About</NavLink>

            <NavLink href='/memberships'>Memberships</NavLink>

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
      </Container>
    </Box>
    <Box
      // todo add background image..sizing is off
      sx={{
        background: 'no-repeat url(/header.png)',
        backgroundColor: 'black',
        opacity: 0.9,

        backgroundSize: '100% 90%',
        height: '90vh',
      }}
      // as='main'
    >
      <Box variant='main'>{children}</Box>
    </Box>
    <Box
      sx={{
        width: '100vw',
        position: 'fixed',
        background: 'white',
        color: 'black',
        opacity: 0.15,
        bottom: '0',
        py: 4,
        px: 3,
      }}
      as='footer'
    >
      <Flex
        sx={{
          justifyContent: 'space-around',
          alignItems: 'center',
          alignContent: 'center',
          // width: '50vw',
        }}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            // flexDirection: 'column',
          }}
        >
          <Text>Follow us</Text>
          <a href='https://www.twitch.tv/virtualdojovienna'>
            <Image variant='socials' src='/twitch.svg' />
          </a>
          <a href='https://youtube.com/virtualdojovienna'>
            <Image variant='socials' src='/youtube.svg' />
          </a>
          <a href='https://twitter.com/virtualdojo'>
            <Image variant='socials' src='/twitter.svg' />
          </a>
          <a href='https://www.instagram.com/virtualdojovienna'>
            <Image variant='socials' src='/instagram.svg' />
          </a>
          <a href='https://www.facebook.com/VirtualDojoVienna/'>
            <Image variant='socials' src='/facebook.svg' />
          </a>
        </Flex>
        <Text sx={{ justifySelf: 'center' }}>
          © 2010 - {new Date().getFullYear()} Virtual Dojo Vienna
        </Text>
        <Flex
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Link
            href='/statuten'
            sx={{
              mx: 1,
            }}
          >
            <Text>Vereinsstatuten</Text>
          </Link>
          <Link
            href='/impressum'
            sx={{
              mx: 1,
            }}
          >
            <Text>Impressum</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  </ThemeProvider>
);

export default Page;
