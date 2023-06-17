const { ENV } = require('../../../package.json')
const { CLASS, SUBCLASS, CATEGORY, ITEM } = require('../../../cti+/constants')

const name = "css"
const ext = "css"
const format = "css/variables"

const transforms = [
    'attribute/cti',
    'name/cti/kebab',
    'name/kebab/[cti+]',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
    'console/schemas/[cti+]'
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
            // all(),
            paletteColors(),
            contextualColors(),
            unknownColors(),
            unknownFonts(),
        ]
    }
    return result
}

let all = () => {
    return {
        destination: `variables.${ext}`,
        format: format,
    }
}

const unknownFonts = () => {
    return {
        destination: `${ENV.DOMAIN.UNDEFINED.toLowerCase()}-fonts.${ext}`,
        format: 'fonts/css/[cti+]',
        filter: (token) => {
            return ( (token.$schema.class === CLASS.FONT) && (token.$schema.taxonomy.domain === ENV.DOMAIN.UNDEFINED) )
        }
    }

}

const paletteColors = () => {
    return {
        destination: `${ENV.DOMAIN.SYSTEM.toLowerCase()}-palette.${ext}`,
        format: format,
        filter: { $schema: { subclass: SUBCLASS.PALETTE } }
    }
}

const contextualColors = () => {
    return {
        destination: `${ENV.DOMAIN.SYSTEM.toLowerCase()}-contextual.${ext}`,
        format: format,
        filter: { $schema: { subclass: SUBCLASS.CONTEXTUAL } }
    }
}

const unknownColors = () => {
    return {
        destination: `${ENV.DOMAIN.UNDEFINED.toLowerCase()}-colors.${ext}`,
        format: format,
        filter: (token) => {
            return ( (token.$schema.class === CLASS.COLOR) && (token.$schema.taxonomy.domain === ENV.DOMAIN.UNDEFINED) )
        }
    }
}
