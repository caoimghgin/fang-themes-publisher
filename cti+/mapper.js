

const consts = require("./constants")
const utils = require("./utilities")

const FANG_PALETTE = require("./schemas/fang/palette")

module.exports = {

    fang_palette: () => (getSchema(FANG_PALETTE)),


    schemaForToken: (schema, token) => {
        // DOES the key 'COLORNKWSJPALETTESPRIMARY400' (the token route)
        // END WITH 'PALETTESPRIMARY400' of the meta.key in the schema?

        const route = utils.keyCleaner(token.$schema.route)
        const result = schema.filter(schema => route.endsWith(utils.keyCleaner(schema.map)))

        if (result.length === 0) return undefined
        if (result.length > 1) throw new Error(`"${result}" has more than one value for tokenAttributesForKey. 
        All taxonomy definitions need to be unique.`);

        let item = result[0]

        if (item) {
            // token.$schema.class = token.$schema.class
            token.$schema.subclass = item.subclass
            // token.$schema.mode = token.$schema.mode
            // token.$schema.route = token.$schema.route
            token.$schema.map = item.map
            token.$schema.taxonomy = item.taxonomy
            return token
        }
    }
}

const getSchema = (taxonomy) => {
    result = []
    taxonomy.forEach((item) => {
        let schema = consts.CTI_SCHEMA()
        schema.class = null
        schema.subclass = item.value.subclass
        schema.mode = null
        schema.route = null
        schema.map = item.map
        schema.taxonomy.domain = item.value.domain
        schema.taxonomy.category = item.value.category
        schema.taxonomy.item = item.value.item
        schema.taxonomy.variant = item.value.variant
        schema.taxonomy.subitem = item.value.subitem
        schema.taxonomy.context = item.value.context
        result.push(schema)
    });
    return result
}