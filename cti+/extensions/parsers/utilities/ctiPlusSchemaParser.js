/**
 * @name ctiPlusSchemaParser
 * @type parser
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
    schemaMappingParser(dictionary, keys, consts.CLASS.COLOR, mapper.fang_palette())
    schemaMappingParser(dictionary, keys, consts.CLASS.COLOR, mapper.fang_contextual())
    schemaMappingParser(dictionary, keys, consts.CLASS.SIZE, mapper.fang_size())
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
        if (utils.isColor(token.value) ||
            utils.isColor(_.get(dictionary, token.value.slice(1, -1)))) {
            token.$schema.class = consts.CLASS.COLOR
        }
    }
}

const sizeClassParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (utils.isNumber(token.value) ||
            utils.isNumber(_.get(dictionary, token.value.slice(1, -1)))) {
            token.$schema.class = consts.CLASS.SIZE
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

module.exports = { ctiPlusSchemaParser }