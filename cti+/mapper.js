const { SCHEMA, COLOR, MODE } = require('./constants')
const { isContextualColor, routeCleaner, schemaMapContructor, parseMode, doParseMode } = require('./utilities')

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

    let result = null

    const route = routeCleaner(token.$schema.route)
    const schema = schemas.filter(schema => !token.$schema.mapped && route.endsWith(schema.key))

    // This filter will only find the first item.

    if (schema.length === 0) return undefined

    if (schema.length > 1) throw new Error(`"${schema}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    result = schema[0]
    if (result) {

        result.route = token.$schema.route // Add route back in
        result.mapped = true // Set mapped to true, so it is not remapped later.
        result.mode = getModeForToken(token)
        // token.$schema = result
        // console.log(`ADD ROUTE: ${token.$schema.route}`)

    }

    return result

}

const myParseMode = (token) => {
    if (!isContextualColor(token)) return MODE.NULL

    // return ((getRandomInt(2) % 2 === 0) ? "DARK" : "LIGHT")
    // return MODE.DARK

    const path = token.$schema.route.split(".");
    // But honestly, I should path.pop() off the key, right? Not just the end of the route
    path.pop();
    console.log("THE PATH", path)
    //
    // Something is wrong here. I wonder what th epath is???
    //
    const isDark = path.find(item => {
        const pathItem = item.toUpperCase()
        return (pathItem.startsWith(MODE.DARK) || pathItem.endsWith(MODE.DARK));
    })

    return (isDark ? "DARK" : "LIGHT")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
}

const getModeForToken = (token) => {
    // return "LIGHT"
    // console.log("MY TOKEN: ", token)

    if (!isContextualColor(token)) return null
    const route = token.$schema.route.split("."); route.pop()

    return (isDarkMode(route) ? COLOR.MODE.DARK : COLOR.MODE.LIGHT)

    // Set the $schema.mode to dark or light mode
    // console.log(`I have determined that the mode is "${token.$schema.mode}" given the route path ${route}`)

    // Get path to the token without the end leaf node. If a color is
    // named 'ink.dark', it is not considered dark mode. We only look at 
    // the container directories above.
    function getPath(token) {
        let result = token.$schema.route.split("."); result.pop()
        return result
    }

    // If a container of a token begins or ends with the word 'dark', 
    // then it is dark mode.
    function isDarkMode(route) {
        const startsWithDark = route.find(item => {
            return item.toUpperCase().startsWith(COLOR.MODE.DARK.toUpperCase());
        })
        const endsWithDark = route.find(item => {
            return item.toUpperCase().endsWith(COLOR.MODE.DARK.toUpperCase());
        })
        return ((startsWithDark !== undefined) || (endsWithDark !== undefined))
    }
}

const setModeForToken = (token) => {

    // Only contextual colors have dark/light modes. If token is not 
    // a contextual color return null

    if (!isContextualColor(token)) return null
    // console.log(`${token.$schema.name} is a CONTEXTUAL token...`)

    // Get path to the token without the end leaf node
    const route = token.$schema.route.split("."); route.pop()

    // Set the $schema.mode to dark or light mode
    token.$schema.mode = (isDarkMode(route) ? COLOR.MODE.DARK : COLOR.MODE.LIGHT)
    // console.log(`I have determined that the mode is "${token.$schema.mode}" given the route path ${route}`)

    // Get path to the token without the end leaf node. If a color is
    // named 'ink.dark', it is not considered dark mode. We only look at 
    // the container directories above.
    function getPath(token) {
        let result = token.$schema.route.split("."); result.pop()
        return result
    }

    // If a container of a token begins or ends with the word 'dark', 
    // then it is dark mode.
    function isDarkMode(route) {
        const startsWithDark = route.find(item => {
            return item.toUpperCase().startsWith(COLOR.MODE.DARK.toUpperCase());
        })
        const endsWithDark = route.find(item => {
            return item.toUpperCase().endsWith(COLOR.MODE.DARK.toUpperCase());
        })
        return ((startsWithDark !== undefined) || (endsWithDark !== undefined))
    }
}

const assembleFangSchemas = () => {
    const result = [
        ...FANG_PALETTE, 
        ...FANG_CONTEXTUAL 
    ]
    return result
}

const assignSchema = (schemas, token) => {

    let result = null

    const route = routeCleaner(token.$schema.route)
    const schema = schemas.filter(schema => !token.$schema.mapped && route.endsWith(schema.key))

    if (schema.length === 0) return undefined

    if (schema.length > 1) throw new Error(`"${schema}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    result = schema[0]
    if (result) {
        result.route = token.$schema.route // Add route back in
        result.mapped = true // Set mapped to true, so it is not remapped later.
        result.mode = getModeForToken({$schema: result})
        Object.assign(token.$schema, result)
    }

}

module.exports = {
    setSchemaForToken,
    assignSchema,
    setModeForToken,
    FANG_SCHEMAS: [
        ...FANG_PALETTE, 
        ...FANG_CONTEXTUAL 
    ],
    fang_size: FANG_SIZE,
}