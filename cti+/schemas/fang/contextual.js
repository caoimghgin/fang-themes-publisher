const { ENV } = require('../../../package.json')
const { CLASS, SUBCLASS, CATEGORY, TYPE } = require('../../constants')

const props = { 
    class: CLASS.COLOR,
    subclass: SUBCLASS.CONTEXTUAL, 
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(),
    category: CATEGORY.COLOR
}

const FANG_CONTEXTUAL = [
    { map: "font.base", value: { ...props, type: TYPE.TEXT, item: null, variant: "base", subitem: null, state: null, context: null } }, 
    { map: "font.secondary", value: { ...props, type: TYPE.TEXT, item: null, variant: "secondary", subitem: null, state: null, context: null } },
    { map: "font.tertiary", value: { ...props, type: TYPE.TEXT, item: null, variant: "tertiary", subitem: null, state: null, context: null } },
]

module.exports = [...FANG_CONTEXTUAL] 