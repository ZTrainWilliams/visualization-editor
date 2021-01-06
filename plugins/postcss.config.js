module.exports = ({ file }) => {
  return {
    parser: 'postcss-scss',
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
      },
    }
  }
};
