const StyleDictionary = require('style-dictionary');
const { ENV } = require('../package.json')
const { getDirectories } = require('./utilities')
const { getConfiguration } = require('./configuration')

require('../cti+/extensions')

const brands = getDirectories(ENV.TOKENS_DIR)
const platforms = ENV.PLATFORMS

brands.map(brand => {
  platforms.map(platform => {
    StyleDictionary.extend(getConfiguration(brand, platform))
      .buildPlatform(platform);
  })
})
