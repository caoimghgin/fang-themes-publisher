const { ENV, CLASS, SUBCLASS, CATEGORY, TYPE } = require('../../constants')

const props = { 
    class: CLASS.COLOR,
    subclass: SUBCLASS.CONTEXTUAL, 
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(),
    category: CATEGORY.COLOR
}

const FANG_CONTEXTUAL = [
    { map: "color.font.base",  ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "base",state: null, context: null } , 
    { map: "color.font.secondary", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "secondary",  state: null, context: null },
    { map: "color.font.tertiary", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "tertiary", state: null, context: null  },
]

module.exports = [...FANG_CONTEXTUAL] 