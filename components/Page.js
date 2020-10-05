import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Image, Text, Flex, ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import Link from './Link';
import NavLink from './NavLink';
import Contact from './Contact';
import Footer from './Footer';
// import pdf from '../../public/statuten_2016.pdf';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Virtual Dojo Vienna</title>
      <link rel="icon" href="/vdv-logo.jpg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    {/* <div class="bg-hero-pattern bg-black"> */}
    <div class="bg-gray-700">
      <Box
        // todo add background image..sizing is off
        sx={{
          backgroundSize: '100% 90%',

          // height: '90vh',
          // background: 'no-repeat url(/header.png)',
          // backgroundColor: 'black',
          opacity: 0.9,
        }}
        // as='main'
      >
        <Box variant="main">{children}</Box>
        <Footer />
      </Box>
    </div>
  </ThemeProvider>
);

export default Page;
