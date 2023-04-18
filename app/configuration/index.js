const { ENV } = require('../../package.json')
const { getPlatforms } = require('./platforms')

const getConfiguration = (brand, platform, source) => {
    const sourceDir = (source ? `${source}/**/*.json` : `${ENV.TOKENS_DIR}/${brand}/**/*.json`)
    return {
        source: [sourceDir],
        platforms: getPlatforms(brand, platform)
    }
}

module.exports = { getConfiguration }