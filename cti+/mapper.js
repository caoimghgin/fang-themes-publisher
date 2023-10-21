const { routeCleaner, parseMode, schemasDuplicates } = require('./utilities')

const FANG_PALETTE = require("./schemas/fang/palette")
const FANG_CONTEXTUAL = require("./schemas/fang/contextual")
const FANG_SIZE = require("./schemas/fang/size")

const assignSchema = (token, schemas) => {

    schemas = schemas ? schemas : getSchemas()
    let schema = mapTokenToSchema(token, schemas)

    if (schema) {
        schema.mapped = true                            // Set mapped to true, so it is not remapped later.
        schema.route = token.$schema.route              // Insert 'route' derived from parser
        schema.brand = token.$schema.brand              // Insert 'brand' derived from parser
        schema.mode = parseMode({ $schema: schema })    // Derive mode from result
        Object.assign(token.$schema, schema)            // Assign token.$schema to result
    }

}

const getSchemas = () => {
    const result = [ ...FANG_PALETTE, ...FANG_CONTEXTUAL ]
    if (!schemasDuplicates(result)) return result
    throw new Error('One or more schema keys are duplicated. Ensure all schema keys are unique to create platform code from tokens.');
}

const mapTokenToSchema = (token, schemas) => {
    const matches = schemas.filter(schema => {
        const route = routeCleaner(token.$schema.route)
        return !token.$schema.mapped && route.endsWith(schema.key)
    })
    return matches.sort((left, right) => right.key.length - left.key.length)[0]
}

module.exports = {
    assignSchema, 
    getSchemas
}