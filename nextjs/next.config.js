const withPWA = require('next-pwa')
const {withSentryConfig} = require('@sentry/nextjs')

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

module.exports = withSentryConfig(withPWA(config), {
  silent: true,
})
