const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      if (process.env.ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }))
      }
      return config
    },
    cssModules: true,
    serverRuntimeConfig: { // Will only be available on the server side
    },
    publicRuntimeConfig: { // Will be available on both server and client
      SITE_NAME: 'Feeding the People',
      SITE_TITLE: 'Feeding the People - 시라큐스 한국 음식, 반찬 배달',
      SITE_DESCRIPTION: '미국 시라큐스 한국 음식, 반찬을 매주 배달해드리는 서비스입니다. 시라큐스 한국 음식, 시라큐스 한인 식당, 시라큐스 한국 반찬, Syracuse Korean Food, Syracuse Korean Food Delivery Service',
      SITE_IMAGE: '/static/main-logo.png',
    }
  })
)
