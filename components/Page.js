import * as React from 'react';
import Head from 'next/head';
import theme from './styles/theme';
import Link from './Link';
import Footer from './Footer';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Head>
      <title>Virtual Dojo Vienna</title>
      <link rel="icon" href="/vdv-logo.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div class="bg-hero-pattern bg-black bg-fixed bg-contain bg-no-repeat">
      <div>{children}</div>
      <Footer />
    </div>
  </div>
);

export default Page;
