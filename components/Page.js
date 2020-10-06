import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import theme from './styles/theme';
import Link from './Link';
import NavLink from './NavLink';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
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
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Page;
