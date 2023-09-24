const { ENV, COLOR } = require('../../constants')
const domain = ENV.DOMAIN.SYSTEM.toLowerCase()

const CANVAS = () => {
    const meta = { domain: domain, class: COLOR.CLASS, subclass: COLOR.CLASS, category:COLOR.CLASS }
    return [
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: null, context: null }, 
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "p", context: null },
        { map: null, ...meta, type: meta.subclass, item: null, subitem: null, variant: null, state: "pp", context: null },
    ]
}

const INK = () => {
    const meta = { domain: domain, class: COLOR.CLASS, subclass: COLOR.CLASS, category:COLOR.CLASS }
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

module.exports = [...CANVAS(), ...INK()] 