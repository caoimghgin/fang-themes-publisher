const { routeCleaner, parseMode } = require('./utilities')

const FANG_PALETTE = require("./schemas/fang/palette")
const FANG_CONTEXTUAL = require("./schemas/fang/contextual")
const FANG_SIZE = require("./schemas/fang/size")

const assignSchema = (token, schemas) => {

    if (!schemas) schemas = systemSchemas()

    const route = routeCleaner(token.$schema.route)
    const schema = schemas.filter(schema => !token.$schema.mapped && route.endsWith(schema.key))

    if (schema.length === 0) return

    if (schema.length > 1) throw new Error(`"${schema}" has more than one value for tokenAttributesForKey. 
    All taxonomy definitions need to be unique.`);

    let result = schema[0]
    if (result) {
        result.mapped = true // Set mapped to true, so it is not remapped later.
        result.route = token.$schema.route // Add route from parser
        result.mode = parseMode({$schema: result})
        Object.assign(token.$schema, result)
    }
}

const systemSchemas = () => {
    const result = [
        ...FANG_PALETTE, 
        ...FANG_CONTEXTUAL 
    ]
    return result
}

module.exports = {
    assignSchema
}