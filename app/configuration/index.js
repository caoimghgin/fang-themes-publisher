const { ENV } = require('../../package.json')
const css = require('./platforms/css')
const scss = require('./platforms/scss')
const android = require('./platforms/android')
const objc = require('./platforms/objc')
const swift = require('./platforms/swift')

const getConfiguration = (brand, platform, source) => {
    const sourceDir = (source ? `${source}/**/*.json` : `${ENV.TOKENS_DIR}/${brand}/**/*.json`)
    return {
        source: [sourceDir],
        platforms: getPlatforms(brand, platform)
    }
}

const getPlatforms = (brand, platform) => {
    return Object.assign(
        css(ENV.BUILD_DIR, brand, platform),
        scss(ENV.BUILD_DIR, brand, platform),
        android(ENV.BUILD_DIR, brand, platform),
        objc(ENV.BUILD_DIR, brand, platform),
        swift(ENV.BUILD_DIR, brand, platform),
    )
}

module.exports = { getConfiguration }