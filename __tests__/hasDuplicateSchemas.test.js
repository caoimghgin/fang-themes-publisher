const { getSchemas } = require('../cti+/mapper')
const { schemasDuplicates } = require('../cti+/utilities')
const { schema } = require('../cti+/schemas/helpers')
const { ENV, COLOR } = require('../cti+/constants')

describe("Where user enters in duplicate schema keys, throw error and inform", () => {
    
    test('FANG schemas will not have duplicates', () => {
        const result = schemasDuplicates(getSchemas())
        expect(result).toBe(false)
    })

    test('FANG schemas with addition of PRIMARY will have duplicates', () => {
        const result = schemasDuplicates([...getSchemas(), ...PRIMARY()])
        expect(result).toBe(true)
    })

})

const PRIMARY = () => {
    const variant = "primary"
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.PALETTE }
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
    ]
}