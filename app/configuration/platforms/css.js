const { DOMAIN, COLOR, FONT } = require('../../../cti+/constants')
const { isContextualColor } = require('../../../cti+/utilities')

const name = "css"
const ext = "css"
const format = "css/variables/[cti+]"

const transforms = [
    'attribute/cti',
    'name/cti/kebab',
    'name/color/ti/kebab/[cti+]',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
    // 'console/schemas/[cti+]'
    // 'console/routes/[cti+]'
]

module.exports = (build, brand, platform) => {
    let result = {}
    result[name] = {
        transforms: transforms,
        buildPath: `${build}/${brand}/${platform}/`,
        options: {
            showFileHeader: false,
            outputReferences: true,
        },
        files: [
            paletteColorsFile(DOMAIN.SYSTEM),
            contextualColorsFile(DOMAIN.SYSTEM, COLOR.MODE.LIGHT),
            contextualColorsFile(DOMAIN.SYSTEM, COLOR.MODE.DARK),
            definitiveColorsFile(DOMAIN.UNDEFINED),
            unknownFontsFile(DOMAIN.UNDEFINED),
            // all(),
        ]
    }
    return result
}

const unknownFontsFile = (domain) => {
    return {
        destination: `${domain.toLowerCase()}-fonts.${ext}`,
        format: 'fonts/css/[cti+]',
        filter: (token) => {
            return (
                (token.$schema.class === FONT.CLASS) &&
                (token.$schema.taxonomy.domain.toLowerCase() === domain.toLowerCase())
            )
        }
    }
}

const paletteColorsFile = (domain) => {
    const destination = `colors/palette/${domain.toLowerCase()}-palette.${ext}`
    return {
        destination: destination,
        format: format,
        options: {outputReferences: false, mode: null},
        filter: (token) => {
            return (
                (token.$schema.domain === domain.toLowerCase()) &&
                (token.$schema.subclass === COLOR.SUBCLASS.PALETTE)
            )
        }
    }
}

const contextualColorsFile = (domain, mode) => {
    const destination = `colors/contextual/${mode.toLowerCase()}/${domain.toLowerCase()}-contextual.${ext}`
    return {
        destination: destination,
        format: format,
        options: {outputReferences: false, mode: mode},
        filter: (token) => {
            return (
                (isContextualColor(token)) && 
                (token.$schema.mode === mode)
            )
        }
    }
}

const definitiveColorsFile = (domain) => {
    const destination = `colors/definitive/${domain.toLowerCase()}-definitive.${ext}`
    return {
        destination: destination,
        format: format,
        filter: (token) => {
            return (
                (token.$schema.domain === domain.toLowerCase()) && 
                (token.$schema.class === COLOR.CLASS)
            )
        }
    }
}

const all = () => {
    return {
        destination: `variables.${ext}`,
        format: format,
    }
}