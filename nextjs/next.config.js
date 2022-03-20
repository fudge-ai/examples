const withPWA = require('next-pwa')
const {withSentryConfig} = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  // enabled: true,
})

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
  withSentryConfig(withPWA(config), {
    silent: true,
  }),
)
