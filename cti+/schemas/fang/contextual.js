const { ENV, COLOR } = require('../../constants')

const props = { 
    class: COLOR.CLASS,
    subclass: COLOR.SUBCLASS.CONTEXTUAL.INK,
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(),
    category: COLOR.SUBCLASS.CONTEXTUAL.INK
}

const FANG_CONTEXTUAL = [
    { map: "color.font.base",  ...props, type: null, item: null, subitem: null, variant: "base",state: null, context: null } , 
    { map: "color.font.secondary", ...props, type: null, item: null, subitem: null, variant: "secondary",  state: null, context: null },
    { map: "color.font.tertiary", ...props, type: null, item: null, subitem: null, variant: "tertiary", state: null, context: null  },
]

module.exports = [...FANG_CONTEXTUAL] 