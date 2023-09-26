const { SCHEMA, COLOR } = require('./constants')
const { isContextualColor, routeCleaner, schemaMapContructor } = require('./utilities')

const FANG_PALETTE = require("./schemas/fang/palette")
const FANG_CONTEXTUAL = require("./schemas/fang/contextual")
const FANG_SIZE = require("./schemas/fang/size")

let x = {
    key: 'PALETTEPRIMARY025',
    name: 'fang-palette-primary-025',
    domain: 'FANG',
    class: 'COLOR',
    subclass: 'PALETTE',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'palette',
      type: null,
      item: null,
      variant: 'primary',
      subitem: null,
      state: '025',
      context: null
    }
  }

const setSchemaForToken = (schemas, token) => {

    // console.log(schemas.map(schema => schema.key))

    const route = routeCleaner(token.$schema.route)
    const schema = schemas.filter(schema => !token.$schema.mapped && route.endsWith(schema.key))

    if (schema.length === 0) {
        // console.log("COULD NOT FIND ", route)
        return undefined
    } 
    if (schema.length > 1) throw new Error(`"${schema}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    let result = schema[0]
    if (result) {
        result.route = token.$schema.route // Add route back in
        result.mapped = true // Set mapped to true, so it is not remapped later.
        token.$schema = result
        console.log("FOUND ->", token.$schema)
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
    fang_palette: () => FANG_PALETTE,
    fang_contextual: () => FANG_CONTEXTUAL,
    fang_size: () => (getSchema(FANG_SIZE)),
}