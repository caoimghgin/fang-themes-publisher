/**
 * @name schemaParser
 * @type parser
 * @param {Object} dictionary All tokens parsed to a Javascript Object
 * @param {Array} keys List of all nodes in the dictionary
 * @author Kevin Muldoon
 * @description inserts CTI+ schema into every node for processing/filtering
 */

const { SCHEMA, COLOR, DIMENSION } = require('../../../constants')
const utils = require('../../../utilities')
const { parseBrand } = require('../../../utilities')
const { assignSchema } = require('../../../mapper')
const _ = require('lodash');

function schemaParser(dictionary, keys, filePath) {
    parseSystemSchemas(dictionary, keys, filePath)
    parseBrandSchemas(dictionary, keys)
}

const parseSystemSchemas = (dictionary, keys, filePath) => {
    keys.map(key => {
        const token = _.get(dictionary, key)
        Object.assign(token, { $schema: SCHEMA() });
        token.$schema.brand = parseBrand(filePath)
        token.$schema.route = key
        assignSchema(token)

    })
}

const parseBrandSchemas = (dictionary, keys) => {
    keys.map(key => {
        const token = _.get(dictionary, key)
        if (token.$schema.mapped === false) {
            console.log("HERE IS AN UNMAPPED TOKEN...", token.$schema)
            console.log("I should try the best I can to make a schema, and the 'domain' becomes the 'brand', to be written seperately from SYSTEM defined")
        }
    })
}

const classParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        const value = (utils.isReferenceValue(token) ? utils.getReferenceValue(dictionary, token) : token.value)
        classForValue(token, value)
    }
    function classForValue(token, value) {
        if (utils.isColor(value)) token.$schema.class = COLOR.CLASS
        if (utils.isNumber(value)) token.$schema.class = DIMENSION.CLASS
        if (utils.isFont(value)) token.$schema.class = FONT.CLASS
    }
}

const classParserColor = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        const value = (utils.isReferenceValue(token) ? utils.getReferenceValue(dictionary, token) : token.value)
        if (utils.isColor(value)) token.$schema.class = COLOR.CLASS
    }
}

const classParserSize = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        const value = (utils.isReferenceValue(token) ? utils.getReferenceValue(dictionary, token) : token.value)
        if (utils.isNumber(value)) token.$schema.class = DIMENSION.CLASS
    }
}

const classParserFont = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (utils.isFont(token.value)) {
            token.$schema.class = FONT.CLASS
        }
    }
}

module.exports = { schemaParser }