const { ENV } = require('../../../package.json')

const css = require('./css')
const scss = require('./scss')
const android = require('./android')
const objc = require('./objc')
const swift = require('./swift')

const getPlatforms = (brand, platform) => {
    return Object.assign(
        css(ENV.BUILD_DIR, brand, platform),
        scss(ENV.BUILD_DIR, brand, platform),
        android(ENV.BUILD_DIR, brand, platform),
        objc(ENV.BUILD_DIR, brand, platform),
        swift(ENV.BUILD_DIR, brand, platform),
    )
}

module.exports = { getPlatforms }