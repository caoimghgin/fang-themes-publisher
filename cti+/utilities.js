const tinycolor = require("tinycolor2")

const isColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
}

const isNumber = (value) => {
    return (isNaN(value) ? false : true)
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

const keyCleaner = (item) => {
    return item.split('.').join('').replace(/[^A-Z0-9]/ig, "").toUpperCase()
}

const hasSchema = (token) => {
    return (token.hasOwnProperty('$schema'))
}

const fallbackTransform = (transform, token, options) => {
    return transform.transformer(token, options)
}

module.exports = { isColor, isNumber, parseKey, keyCleaner, hasSchema, fallbackTransform }