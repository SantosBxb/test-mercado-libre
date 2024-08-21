const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    allowImpureSelectors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'http2.mlstatic.com',
      },
    ],
  },
};
