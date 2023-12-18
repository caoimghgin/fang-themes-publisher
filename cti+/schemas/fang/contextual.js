const { ENV, COLOR } = require('../../constants')
const { schema } = require('../helpers')

const PAPER = () => {
    const subclass = COLOR.SUBCLASS.CONTEXTUAL.PAPER
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: subclass }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp" , context: null }),
    ]
}

const INK = () => {
    const subclass = COLOR.SUBCLASS.CONTEXTUAL.INK
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: subclass }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "ff", context: null }),

        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "pp", context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "positive", subitem: null, state: "f", context: null }),

        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "pp", context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "negative", subitem: null, state: "f", context: null }),

        schema(meta, { type: null, item: null, variant: "brand", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "system", subitem: null, state: null, context: null }),
    ]
}

const THREAD = () => {
    const subclass = COLOR.SUBCLASS.CONTEXTUAL.THREAD
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: subclass }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "ff", context: null }),
    ]
}

const PAINT = () => {
    const subclass = COLOR.SUBCLASS.CONTEXTUAL.PAINT
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: subclass }
    return [
        schema(meta, { type: null, item: null, variant: "primary", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "secondary", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "info", subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: "highlight", subitem: null, state: null, context: null }),
    ]
}

// --contextual-light-paint-primary: #8352c6ff;
// --contextual-light-paint-secondary: #6a6a6aff;
// --contextual-light-paint-info: #035ef9ff;
// --contextual-light-paint-highlight: #ffcf3dff;
// --contextual-dark-paint-primary: #8b60caff;
// --contextual-dark-paint-secondary: #767676ff;
// --contextual-dark-paint-info: #216dfaff;
// --contextual-dark-paint-highlight: #ffcf3dff;

module.exports = [
    ...PAPER(),
    ...INK(),
    ...THREAD(),
    ...PAINT()
] 