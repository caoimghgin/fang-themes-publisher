/**
 * @name ctiPlusSchemaParser
 * @type parser
 * @description inserts CTI+ schema into every node for processing/filtering
 */

const _ = require('lodash');
const consts = require('../../../constants')
const utils = require('../../../utilities')
const { ENV } = require('../../../../package.json')

function ctiPlusSchemaParser(dictionary, keys) {
    schemaRouteParser(dictionary, keys)
    colorClassParser(dictionary, keys)
    // optimisticParser(dictionary, keys)
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

module.exports = { ctiPlusSchemaParser }