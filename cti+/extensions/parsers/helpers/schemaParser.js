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
    // modeParser(dictionary, keys)
}

const modeParser = (dictionary, keys) => {
    for (const key of keys) {
        const token = _.get(dictionary, key)
        console.log("SHOULD BE FINE ->", token.$schema.route)
        // utils.parseMode(token)
        // mapper.setModeForToken(token)
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

// The keys we create are a SET, so there are no duplicates.
// Yet, the contextual colors should have duplicates (one for 
// light, another for dark), so we'll need to figure this out.

// If I find an item using a KEY made by this, I should be able to 'filter'
// and find multiple values if needed.

const mything =  {
    key: 'PAPERPP',
    name: 'fang-paper-pp',
    route: 'color.contextual.dark-mode.paper.pp',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: 'pp',
      context: null
    }
  }

const mappingParser = (dictionary, keys) => {
    const map = mapper.FANG_SCHEMAS
    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (!token.$schema.mapped) {
            mapper.assignSchema(token, map)
        }

        console.log(`----------------> key:${key} mode:${token.$schema.mode} route:${token.$schema.route}`)    

    }
}

const schemaMappingParser = (dictionary, keys, tokenClass, map) => {

    if (map === null) {undefinedSchemaParser(dictionary, keys); return}

    for (const key of keys) {
        const token = _.get(dictionary, key)
        if (!token.$schema.mapped) mapper.setSchemaForToken(map, token)
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