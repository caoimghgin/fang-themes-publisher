const { ENV, COLOR } = require('../../constants')
const { createSchema } = require('../helpers')

const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.PALETTE, mode: null, route: null, taxonomy: {} }

const XXX = [
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "015", context: null, key: "My Custom ID" }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "025", context: null })
]

const schemaC = { domain: ENV.DOMAIN.SYSTEM.toLowerCase(), class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUALX.INK, mode: null, taxonomy: {} }

const YYY = [
    createSchema(schemaC, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
    createSchema(schemaC, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
    createSchema(schemaC, { type: null, item: null, variant: null, subitem: null, state: "ff", context: null }),
    createSchema(schemaC, { type: null, item: null, variant: "positive", subitem: null, state: "ff", context: null })
]

// console.log("XXX ->", XXX)
// console.log("YYY ->", YYY)

const PRIMARY = [
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "015", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "025", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "050", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "075", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "085", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "100", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "200", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "300", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "400", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "500", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "600", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "700", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "800", context: null }),
    createSchema(meta, { type: null, item: null, variant: "primary", subitem: null, state: "900", context: null }),
]


module.exports = [
    ...PRIMARY,
    // ...SECONDARY,
    // ...TERTIARY,
    // ...POSITIVE,
    // ...NEGATIVE,
    // ...HIGHLIGHT,
    // ...ATTENTION,
    // ...INFO,
    // ...SYSTEM,
    // ...NEUTRAL,
    // ...LIGHTEN,
    // ...DARKEN
] 