

const consts = require("./constants")
const utils = require("./utilities")

const FANG_PALETTE = require("./schemas/fang/palette")
const FANG_CONTEXTUAL = require("./schemas/fang/contextual")
const FANG_SIZE = require("./schemas/fang/size")

const shouldMapToken = (token, schemaClass) => {
    return (token.$schema.map == null)
    return ((schemaClass != null) ?
        ((token.$schema.class == schemaClass) && (token.$schema.map == null)) :
        (token.$schema.map == null))
}

const schemaForToken = (schema, token) => {
    // DOES the key 'COLORNKWSJPALETTESPRIMARY400' (the token route)
    // END WITH 'PALETTESPRIMARY400' of the meta.key in the schema?

    const route = utils.keyCleaner(token.$schema.route)
    const result = schema.filter(schema => route.endsWith(utils.keyCleaner(schema.map)))

    if (result.length === 0) return undefined
    if (result.length > 1) throw new Error(`"${result}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    let item = result[0]

    if (item) {
        token.$schema.class = token.$schema.class
        token.$schema.subclass = item.subclass
        // token.$schema.mode = token.$schema.mode
        // token.$schema.route = token.$schema.route
        token.$schema.map = item.map
        token.$schema.taxonomy = item.taxonomy
        // mapMode(token)
    }
}

const mapMode = (token) => {
    if (token.$schema.subclass == consts.SUBCLASS.CONTEXTUAL) {
        let modeKey = "dark"
        let path = token.$schema.route.split(".")
        path.pop()
        const endsWithDark = path.find(item => {
            return item.toUpperCase().endsWith(modeKey.toUpperCase());
        })
        const startsWitDark = path.find(item => {
            return item.toUpperCase().startsWith(modeKey.toUpperCase());
        })
        const isDarkMode = ((endsWithDark !== undefined) || (startsWitDark !== undefined))
        token.$schema.mode = (isDarkMode ? consts.MODE.DARK : consts.MODE.LIGHT)
    }
}

const getSchema = (taxonomy) => {
    result = []
    taxonomy.forEach((item) => {
        let schema = consts.CTI_SCHEMA()
        schema.class = item.class
        schema.subclass = item.subclass
        schema.mode = null
        schema.route = null
        schema.map = item.map
        schema.taxonomy.domain = item.domain
        schema.taxonomy.category = item.category
        schema.taxonomy.type = item.type
        schema.taxonomy.item = item.item
        schema.taxonomy.variant = item.variant
        schema.taxonomy.subitem = item.subitem
        schema.taxonomy.state = item.state
        schema.taxonomy.context = item.context
        result.push(schema)
    });
    return result
}

module.exports = {
    shouldMapToken,
    schemaForToken,
    fang_palette: () => (getSchema(FANG_PALETTE)),
    fang_contextual: () => (getSchema(FANG_CONTEXTUAL)),
    fang_size: () => (getSchema(FANG_SIZE)),
}