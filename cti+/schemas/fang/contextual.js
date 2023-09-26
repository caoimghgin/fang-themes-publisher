const { ENV, COLOR } = require('../../constants')
const { schema } = require('../helpers')


const CANVASX = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.CANVAS }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: "p" }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: "pp" }),
    ]
}

const CANVAS = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.CANVAS }
    return [
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: null, context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "p", context: null },
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "pp", context: null },
    ]
}

const INK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.INK }
    return [
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "f", context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: null, context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "p", context: null },
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "pp", context: null },

        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "positive", state: "f", context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "positive", state: null, context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "positive", state: "p", context: null },
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "positive", state: "pp", context: null },

        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "negative", state: "f", context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "negative", state: null, context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "negative", state: "p", context: null },
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: "negative", state: "pp", context: null },
    ]
}

module.exports = [...CANVASX(), ...INK()] 