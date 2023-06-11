const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@svg': path.resolve(__dirname, 'src/styles/images/icons'),
    },
  },
};
