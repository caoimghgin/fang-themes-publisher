const { ENV, COLOR } = require('../../constants')
const { schema } = require('../helpers')

const PAPER = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.PAPER }
    const result = [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp" , context: null }),
    ]
    return result
}

const INK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.INK }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp", context: null }),

        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "pp", context: null }),

        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "pp", context: null }),
    ]
}

module.exports = [
    ...PAPER(), 
] 