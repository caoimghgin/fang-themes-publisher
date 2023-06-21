const { ENV, COLOR, FONT } = require('../../../cti+/constants')

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
            paletteColorsFile(),
            contextualColorsFile(),
            unknownColorsFile(),
            
            unknownFontsFile(),
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

const unknownFontsFile = () => {
    return {
        destination: `${ENV.DOMAIN.UNDEFINED.toLowerCase()}-fonts.${ext}`,
        format: 'fonts/css/[cti+]',
        filter: (token) => {
            return ( 
                (token.$schema.class === FONT.CLASS) && 
                (token.$schema.taxonomy.domain === ENV.DOMAIN.UNDEFINED) 
                )
        }
    }
}

const paletteColorsFile = () => {
    return {
        destination: `${ENV.DOMAIN.SYSTEM.toLowerCase()}-palette.${ext}`,
        format: format,
        filter: (token) => {
            return (token.$schema.subclass === COLOR.SUBCLASS.PALETTE)
        }
    }
}

const contextualColorsFile = () => {
    return {
        destination: `${ENV.DOMAIN.SYSTEM.toLowerCase()}-contextual.${ext}`,
        format: format,
        filter: (token) => {
            return (
                (token.$schema.subclass === COLOR.SUBCLASS.CONTEXTUAL.CANVAS) || 
                (token.$schema.subclass === COLOR.SUBCLASS.CONTEXTUAL.INK) || 
                (token.$schema.subclass === COLOR.SUBCLASS.CONTEXTUAL.DYE) || 
                (token.$schema.subclass === COLOR.SUBCLASS.CONTEXTUAL.PAINT) || 
                (token.$schema.subclass === COLOR.SUBCLASS.CONTEXTUAL.CHROMA)
            )
        }
    }
}

const unknownColorsFile = () => {
    return {
        destination: `${ENV.DOMAIN.UNDEFINED.toLowerCase()}-colors.${ext}`,
        format: format,
        filter: (token) => {
            return ( 
                (token.$schema.class === COLOR.CLASS) && 
                (token.$schema.taxonomy.domain === ENV.DOMAIN.UNDEFINED) 
                )
        }
    }
}
