const { ENV, COLOR } = require('../../constants')
const domain = ENV.DOMAIN.SYSTEM.toLowerCase()

const CANVAS = () => {
    const props = { domain: domain, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.CANVAS, category:COLOR.CLASS }
    return [
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: null, context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: "p", context: null },
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: "pp", context: null },
    ]
}

const INK = () => {
    const props = { domain: domain, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.INK, category:COLOR.CLASS }
    return [
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: "f", context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: null, context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: "p", context: null },
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: null, state: "pp", context: null },

        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "positive", state: "f", context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "positive", state: null, context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "positive", state: "p", context: null },
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "positive", state: "pp", context: null },

        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "negative", state: "f", context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "negative", state: null, context: null }, 
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "negative", state: "p", context: null },
        { map: null, ...props, type: props.subclass, item: null, subitem: null, variant: "negative", state: "pp", context: null },
    ]
}

module.exports = [...CANVAS(), ...INK()] 