const { COLOR } = require ("./constants")
const tinycolor = require("tinycolor2")
const _ = require('lodash');

const isColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
}

// Contextual colors are a subclass of color that responds to mode support
const isContextualColor = (token) => {
    let contextualColors = Object.values(COLOR.SUBCLASS.CONTEXTUAL)
    return contextualColors.includes(token.$schema.subclass)
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

function keyCleaner(item) {
    return item.split('.').join('').replace(/[^A-Z0-9]/ig, "").toUpperCase()
}

const hasSchema = (token) => {
    return (token.hasOwnProperty('$schema'))
}

const transformFallback = (transform, token, options) => {
    return transform.transformer(token, options)
}

function schemaMapContructor(item) {
    if (item.map) return item.map.toUpperCase()
    let result = [item.type, item.item, item.variant, item.subitem, item.state, item.context]
    return result.filter(n => n).join(".").toUpperCase()
}

module.exports = { 
    isColor, 
    isContextualColor, 
    isNumber, 
    isFont, 
    parseKey, 
    keyCleaner, 
    hasSchema, 
    transformFallback, 
    isReferenceValue, 
    getReferenceValue, 
    schemaMapContructor 
}