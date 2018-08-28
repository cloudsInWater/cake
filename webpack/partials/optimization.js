module.exports = {
  runtimeChunk: {
    name: 'vendor',
  },
  splitChunks: {
    cacheGroups: {
      commons: {
        name: 'vendor',
        chunks: 'initial',
        minChunks: 2,
      },
    },
  },
};
