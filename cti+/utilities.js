const tinycolor = require("tinycolor2")
const _ = require('lodash');

const isColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
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


const colorClassParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (typeof token.value === 'object') return // is the value an object?, NOT A COLOR!
        if (typeof token.value === 'string' || myVar instanceof String) {
            if (token.value.startsWith('{') && token.value.endsWith('}')) {
                let pointerValue = _.get(dictionary, token.value.replace(/[{()}]/g, ''))
                if (utils.isColor(pointerValue)) {
                    token.$schema.class = consts.CLASS.COLOR
                } 
            } else {
                if (utils.isColor(token.value)) {
                    token.$schema.class = consts.CLASS.COLOR
                } 
            }
        }
    }
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

const transformFallback = (transform, token, options) => {
    return transform.transformer(token, options)
}

module.exports = { isColor, isNumber, isFont, parseKey, keyCleaner, hasSchema, transformFallback, isReferenceValue, getReferenceValue }