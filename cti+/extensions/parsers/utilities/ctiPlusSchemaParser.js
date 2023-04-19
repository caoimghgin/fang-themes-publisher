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
    optimisticParser(dictionary, keys)

}

/**
 * If OPTIMISTIC_PARSING is true, CTI+ will assume best taxonomy and populate.
 */
const optimisticParser = (dictionary, keys) => {
    if (!ENV.OPTIMISTIC_PARSING) return
    for (const key of keys) {
        const token = _.get(dictionary, key)
        token.$schema.taxonomy.domain = ENV.DOMAIN.toLowerCase()
        let path = token.$schema.route.split(".")
        if (token.$schema.class == 'color') {
            if (token.$schema.route.includes(".base.") || token.$schema.route.includes(".palette.") ) {

                let blk = ["base", "color", "palette"]
                let aaa = arr = path.filter(item => !blk.includes(item))
                console.log("aaa", aaa, path)


                token.$schema.taxonomy.category = 'palette' 
                token.$schema.taxonomy.state = aaa.join("-")
                // I can populate the state by removing color, base and palette from the route. What remains is the state.
            } else {
                token.$schema.taxonomy.category = 'color' 
            }
        }
    }
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