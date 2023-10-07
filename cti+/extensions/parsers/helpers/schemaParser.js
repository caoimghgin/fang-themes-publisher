/**
 * @name schemaParser
 * @type parser
 * @param {Object} dictionary All tokens parsed to a Javascript Object
 * @param {Array} keys List of all nodes in the dictionary
 * @author Kevin Muldoon
 * @description inserts CTI+ schema into every node for processing/filtering
 */

const { SCHEMA, ENV, COLOR, DIMENSION } = require('../../../constants')
const utils = require('../../../utilities')
const mapper = require('../../../mapper')
const _ = require('lodash');

function schemaParser(dictionary, keys) {
    routeParser(dictionary, keys)
    classParser(dictionary, keys)
    mappingParser(dictionary, keys)
    modeParser(dictionary, keys)
}

const modeParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        mapper.setModeForToken(token)
    }
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
    schemaMappingParser(dictionary, keys, COLOR.CLASS, mapper.FANG_PALETTE)
}

const schemaMappingParser = (dictionary, keys, tokenClass, map) => {

    if (map === null) {undefinedSchemaParser(dictionary, keys); return}

    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (!token.$schema.mapped) {
            mapper.setSchemaForToken(map, token)
        }
    }

    function undefinedSchemaParser(dictionary, keys) {
        for (const key of keys) {
            const token = _.get(dictionary, key)
            if (token.$schema.map == null) {
                token.$schema.taxonomy.domain = ENV.DOMAIN.UNDEFINED
                token.$schema.taxonomy.context = key
                if (token.$schema.class == COLOR.CLASS) {
                    token.$schema.subclass = COLOR.SUBCLASS.DEFINITIVE
                }
            }
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