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
const mapper = require('../../../mapper')
const _ = require('lodash');

function schemaParser(dictionary, keys) {
    routeParser(dictionary, keys)
    classParser(dictionary, keys)
    mappingParser(dictionary, keys)
}

const routeParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        Object.assign(token, { $schema: SCHEMA() });
        token.$schema.route = key
    }
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

const mappingParser = (dictionary, keys) => {
    const map = mapper.FANG_SCHEMAS
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (!token.$schema.mapped) {
            mapper.assignSchema(token, null)
        }
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