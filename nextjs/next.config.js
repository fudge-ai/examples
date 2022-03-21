const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Source map support coming soon!
// const {withFudgeConfig} = require('@fudge-ai/nextjs')

const config = {
  future: {
    webpack5: true,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Shoelace Express',
    siteDescription: 'The best deals on shoes',
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

module.exports = withBundleAnalyzer(
  // withFudgeConfig(
  //
  withPWA(config),
  {
    silent: true,
  },
  // ),
)
