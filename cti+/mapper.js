const { SCHEMA, COLOR } = require('./constants')
const { isContextualColor, keyCleaner } = require('./utilities')

const FANG_PALETTE = require("./schemas/fang/palette")
const FANG_CONTEXTUAL = require("./schemas/fang/contextual")
const FANG_SIZE = require("./schemas/fang/size")

const setSchemaForToken = (schemaSet, token) => {

    const route = keyCleaner(token.$schema.route)
    const result = schemaSet.filter(schema => route.endsWith(keyCleaner(schema.map))) // <-

    if (result.length === 0) return undefined
    if (result.length > 1) throw new Error(`"${result}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    let item = result[0]

    if (item) {
        token.$schema.class = item.class
        token.$schema.subclass = item.subclass
        token.$schema.map = item.map
        token.$schema.taxonomy = item.taxonomy
    }
}

const getSchema = (taxonomy) => {
    result = []
    taxonomy.forEach((item) => {
        let schema = SCHEMA()
        schema.class = item.class
        schema.subclass = item.subclass
        schema.mode = null
        schema.route = null
        schema.map = schemaMapContructor(item)
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

    function schemaMapContructor(item) {
        if (item.map) return item.map.toUpperCase()
        let result = [item.type, item.item, item.variant, item.subitem, item.state, item.context]
        return result.filter(n => n).join(".").toUpperCase()
    }

    return result

}

const setModeForToken = (token) => {

    // Only contextual colors have dark/light modes. If token is not 
    // a contextual color return null
    if (!isContextualColor(token)) return null
    
    // Get path to the token without the end leaf node
    const path = getPath(token)

    // Set the $schema.mode to dark or light mode
    token.$schema.mode = (isDarkMode(path) ? COLOR.MODE.DARK : COLOR.MODE.LIGHT)
    
    // Get path to the token without the end leaf node. If a color is
    // named 'ink.dark', it is not considered dark mode. We only look at 
    // the container directories above.
    function getPath(token) {
        let result = token.$schema.route.split("."); result.pop()
        return result
    }

    // If a container of a token begins or ends with the word 'dark', 
    // then it is dark mode.
    function isDarkMode(path) {
        const startsWithDark = path.find(item => {
            return item.toUpperCase().startsWith(COLOR.MODE.DARK.toUpperCase());
        })
        const endsWithDark = path.find(item => {
            return item.toUpperCase().endsWith(COLOR.MODE.DARK.toUpperCase());
        })
        return ((startsWithDark !== undefined) || (endsWithDark !== undefined))
    }
}

module.exports = {
    setSchemaForToken,
    setModeForToken,
    fang_palette: () => (getSchema(FANG_PALETTE)),
    fang_contextual: () => (getSchema(FANG_CONTEXTUAL)),
    fang_size: () => (getSchema(FANG_SIZE)),
}