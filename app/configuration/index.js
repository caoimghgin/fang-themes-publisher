const { ENV } = require('../../package.json')
const css = require('./platforms/css')
const scss = require('./platforms/scss')
const android = require('./platforms/android')
const objc = require('./platforms/objc')
const swift = require('./platforms/swift')

/**
 * Style Dictionary configuration
 *
 * @param {String} brand - Prefix of brand
 * @param {String} platform - Platform to output
 * @param {String} source - Path to source directory (Optional)
 * @returns {Object} - Style Dictionary configuration
 */
function getConfiguration(brand, platform, source) {
    const sourceDir = (source ? `${source}/**/*.json` : `${ENV.TOKENS_DIR}/${brand}/**/*.json`)
    return {
        source: [sourceDir],
        platforms: Object.assign(
            css(ENV.BUILD_DIR, brand, platform),
            scss(ENV.BUILD_DIR, brand, platform),
            android(ENV.BUILD_DIR, brand, platform),
            objc(ENV.BUILD_DIR, brand, platform),
            swift(ENV.BUILD_DIR, brand, platform),
        )
    }
}

module.exports = { getConfiguration }