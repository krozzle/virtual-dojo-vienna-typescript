const palette = {
  black: '#000',
  white: '#fff',
  red: '#fa0041',
  border: '#293133',
};

const body =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

export default {
  fonts: {
    body,
    heading: body,
    monospace: 'Menlo, monospace',
    fontSizes: [12, 16, 20, 24, 32, 48],
  },
  styles: {
    h1: {
      fontSize: 5,
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
  },
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    primary: palette.red,
    borders: palette.borders,
    modes: {
      dark: {
        text: palette.white,
        background: palette.black,
        primary: palette.red,
      },
    },
  },
  forms: {
    modal: {
      borderColor: 'primary',
      minWidth: '45vw',
      maxWidth: '60vw',
      maxHeight: '55vh',
      minHeight: '35vh',
    },
  },
  span: {
    firstLetterBox: {
      color: 'primary',
      fontSize: '1.15em',
      letterSpacing: '0.005em',
    },
  },
  box: {
    main: {
      width: '50vw',
    },
    firstLetterBox: {
      color: 'primary',
      fontSize: '1.15em',
      letterSpacing: '0.005em',
    },
    pageContent: {
      width: '30vw',
    },
  },
  images: {
    socials: {
      width: '1.2em',
      height: '1.2em',
      mx: '0.2em',
    },
    headerLogo: {
      width: '50%',
    },
  },
  link: {
    bottomRightLeft: {},
  },
  sizes: {
    container: 960,
  },
  text: {
    default: {
      fontFamily: 'body',
    },
    defaultHeading: {
      fontFamily: 'body',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '56px',
      py: '0.5em',
      my: 'auto',
      fontWeight: '900',
      textAlign: 'center',
      letterSpacing: '6px',
    },
    pageText: {
      fontFamily: 'body',
      textAlign: 'center',
      color: 'white',
      fontSize: '5',
      alignContent: 'center',
      my: '0.82em',
      mx: '0.82em',
      // py: '0.82em',
      px: '10em',
    },
    footer: {
      mx: '0.2em',
      fontSize: '0.85em',
      color: 'black',
      '&:hover': {
        color: 'primary',
      },
    },
  },
  breakpoints: ['null', '768', '1024', '1200'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  links: {
    nav: {
      px: 3,
      py: 2,
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      fontSize: 2,
      mx: '0.5em',
    },
  },
};

// breakpoints: ['30em', '48em', '62em', '80em'],
// fonts: {
//   heading: '"Avenir Next", sans-serif',
//   body: 'system-ui, sans-serif',
//   mono: 'Menlo, monospace',
// },
// fontSizes: [12, 16, 20, 24, 32, 48],
// sizes: {
//   container: 960,
// },
// colors: {
//   ...palette,
//   text: palette.black,
//   background: palette.white,
//   primary: palette.red,
// },
