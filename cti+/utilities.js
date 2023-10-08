const { ENV, COLOR, MODE } = require("./constants")
const tinycolor = require("tinycolor2")
const _ = require('lodash');

const brandFromTokensPath = (filePath) => {
    // CTI+ requires all brand tokens are within a directory 
    // labeled with a brand prefix ("fb", "appl", "amz" )
    return filePath.split(`/${ENV.TOKENS_DIR}/`)[1].split("/")[0]
}

const parseBrand = (filePath) => {
    // CTI+ requires all brand tokens are within a directory 
    // labeled with a brand prefix ("fb", "appl", "amz" )
    return filePath.split(`/${ENV.TOKENS_DIR}/`)[1].split("/")[0]
}

const isColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
}

// Contextual colors are a subclass of color that responds to mode support
const isContextualColor = (token) => {
    const contextualColors = Object.values(COLOR.SUBCLASS.CONTEXTUAL)
    const result = contextualColors.includes(token.$schema.subclass)
    return result
}

const isNumber = (value) => {
    return (isNaN(value) ? false : true)
}

const isFont = (value) => {
    return (value.hasOwnProperty('fontFamily') ? true : false)
}

const isReferenceValue = (token) => {
    if ((typeof token.value === 'string' || token.value instanceof String) &&
        (token.value.startsWith('{') && token.value.endsWith('}'))) {
        return true
    }
    return false
}

const getReferenceValue = (dictionary, token) => {
    return _.get(dictionary, token.value.replace(/[{()}]/g, ''))
}

const parseKey = (token) => {
    let result = null
    if (token.$schema.route) {
        result = token.$schema.route.split('.').join('').replace(/[^A-Z0-9]/ig, "").toUpperCase()
    } else {
        result = token.path.join('').replace(/[^A-Z0-9]/ig, "").toUpperCase()
    }
    return result
}

// Where token routes from Figma have duplicates, such as 'neutral'
// in 'color.palette.neutral.neutral015', remove the 'neutral' folder 
// so it reads 'color.palette.neutral015'. Finally return uppercase with
// all delimiters removed. This allows the token to be mapped to schema.
function routeCleaner(item) {
    let result = []
    let elements = item.toUpperCase().split(".")
    for (element of elements) {
        if (result.length && element.startsWith(result.slice(-1))) result.splice(-1)
        result.push(element)
    }

    return result.join('').replace(/[^A-Z0-9]/ig, "").toUpperCase()
}

const hasSchema = (token) => {
    return (token.hasOwnProperty('$schema'))
}

const transformFallback = (transform, token, options) => {
    return transform.transformer(token, options)
}

function schemaMapContructor(taxonomy) {
    if (taxonomy.map) {
        const result = taxonomy.map.toUpperCase()
        return result
    } else {
        const dynamics = [taxonomy.type, taxonomy.item, taxonomy.variant, taxonomy.subitem, taxonomy.state, taxonomy.context]
        const result = dynamics.filter(n => n).join(".").toUpperCase()
        return result
    }

}

const parseMode = (token) => {

    if (!isContextualColor(token)) return null
    const route = token.$schema.route.split("."); route.pop()

    return (isDarkMode(route) ? COLOR.MODE.DARK : COLOR.MODE.LIGHT)

    // If a container of a token begins or ends with the word 'dark', 
    // then it is dark mode.
    function isDarkMode(route) {
        const startsWithDark = route.find(item => {
            return item.toUpperCase().startsWith(COLOR.MODE.DARK.toUpperCase());
        })
        const endsWithDark = route.find(item => {
            return item.toUpperCase().endsWith(COLOR.MODE.DARK.toUpperCase());
        })
        return ((startsWithDark !== undefined) || (endsWithDark !== undefined))
    }
}



module.exports = {
    isColor,
    isContextualColor,
    isNumber,
    isFont,
    parseKey,
    routeCleaner,
    hasSchema,
    transformFallback,
    isReferenceValue,
    getReferenceValue,
    parseMode,
    brandFromTokensPath,
    parseBrand
}