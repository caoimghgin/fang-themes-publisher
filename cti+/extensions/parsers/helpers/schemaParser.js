/**
 * @name schemaParser
 * @type parser
 * @param {Object} dictionary All tokens parsed to a Javascript Object
 * @param {Array} keys List of all nodes in the dictionary
 * @author Kevin Muldoon
 * @description inserts CTI+ schema into every node for processing/filtering
 */

const { CTI_SCHEMA, ENV, CLASS, SUBCLASS } = require('../../../constants')
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
        Object.assign(token, { $schema: CTI_SCHEMA() });
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
        if (utils.isColor(value)) token.$schema.class = CLASS.COLOR
        if (utils.isNumber(value)) token.$schema.class = CLASS.DIMENSION
        if (utils.isFont(value)) token.$schema.class = CLASS.FONT
    }
}

const mappingParser = (dictionary, keys) => {
    schemaMappingParser(dictionary, keys, CLASS.COLOR, mapper.fang_palette())
    schemaMappingParser(dictionary, keys, CLASS.COLOR, mapper.fang_contextual())
    schemaMappingParser(dictionary, keys, CLASS.DIMENSION, mapper.fang_size())
    schemaMappingParser(dictionary, keys, null, null)
}

const schemaMappingParser = (dictionary, keys, tokenClass, map) => {

    if (map === null) {undefinedSchemaParser(dictionary, keys); return}

    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (mapper.shouldMapToken(token, tokenClass)) {
            mapper.schemaForToken(map, token)
        }
    }

    function undefinedSchemaParser(dictionary, keys) {
        for (const key of keys) {
            const token = _.get(dictionary, key)
            if (mapper.shouldMapToken(token, null)) {
                token.$schema.taxonomy.domain = ENV.DOMAIN.UNDEFINED
                token.$schema.taxonomy.state = key
                if (token.$schema.class == CLASS.COLOR) {
                    token.$schema.subclass = SUBCLASS.DEFINITIVE
                }
            }
        }
    }
}

const classParserColor = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        const value = (utils.isReferenceValue(token) ? utils.getReferenceValue(dictionary, token) : token.value)
        if (utils.isColor(value)) token.$schema.class = CLASS.COLOR
    }
}

const classParserSize = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        const value = (utils.isReferenceValue(token) ? utils.getReferenceValue(dictionary, token) : token.value)
        if (utils.isNumber(value)) token.$schema.class = CLASS.DIMENSION
    }
}

const classParserFont = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (utils.isFont(token.value)) {
            token.$schema.class = CLASS.FONT
        }
    }
}

module.exports = { schemaParser }