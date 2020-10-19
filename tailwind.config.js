module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/public/header.png')",
        'arcade-stick': "url('/public/arcadestick-closeup-resized.jpeg')",
      }),
      colors: (theme) => ({
        primary: '#fc0035',
      }),
    },
  },
  variants: {},
  plugins: [],
};
