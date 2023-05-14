/**
 * @name ctiPlusSchemaParser
 * @type parser
 * @param {Object} dictionary All tokens parsed to a Javascript Object
 * @param {Array} keys List of all nodes in the dictionary
 * @author Kevin Muldoon
 * @description inserts CTI+ schema into every node for processing/filtering
 */

const _ = require('lodash');
const consts = require('../../../constants')
const utils = require('../../../utilities')
const mapper = require('../../../mapper')
const { ENV } = require('../../../../package.json')

function ctiPlusSchemaParser(dictionary, keys) {
    schemaRouteParser(dictionary, keys)
    colorClassParser(dictionary, keys)
    sizeClassParser(dictionary, keys)
    fontClassParser(dictionary, keys)
    schemaMappingParser(dictionary, keys, consts.CLASS.COLOR, mapper.fang_palette())
    schemaMappingParser(dictionary, keys, consts.CLASS.COLOR, mapper.fang_contextual())
    schemaMappingParser(dictionary, keys, consts.CLASS.SIZE, mapper.fang_size())
    undefinedSchemaParser(dictionary, keys)
}

const schemaRouteParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        Object.assign(token, { $schema: consts.CTI_SCHEMA() });
        token.$schema.route = key
    }
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

const sizeClassParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (typeof token.value === 'object') return // is the value an object?, NOT A SIZE!

        if (typeof token.value === 'string' || myVar instanceof String) {
            if (token.value.startsWith('{') && token.value.endsWith('}')) {
                let pointerValue = _.get(dictionary, token.value.replace(/[{()}]/g, ''))
                if (utils.isNumber(pointerValue)) {
                    token.$schema.class = consts.CLASS.SIZE
                } 
            }
        }
        
        if (utils.isNumber(token.value)) {
            token.$schema.class = consts.CLASS.SIZE
        }
    }
}

const fontClassParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (utils.isFont(token.value)) {
            token.$schema.class = consts.CLASS.FONT
        }
    }
}

const schemaMappingParser = (dictionary, keys, tClass, map) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (mapper.shouldMapToken(token, tClass)) {
            mapper.schemaForToken(map, token)
        }
    }
}

const undefinedSchemaParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (mapper.shouldMapToken(token, null)) {
            token.$schema.taxonomy.domain = ENV.DOMAIN.UNDEFINED
            token.$schema.taxonomy.state = key
            if (token.$schema.class == consts.CLASS.COLOR) {
                token.$schema.subclass = consts.SUBCLASS.DEFINITIVE
            }
        }
    }
}

module.exports = { ctiPlusSchemaParser }