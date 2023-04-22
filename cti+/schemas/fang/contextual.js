const { ENV } = require('../../../package.json')
const { SUBCLASS, CATEGORY, ITEM } = require('../../constants')

const props = { subclass: SUBCLASS.CONTEXTUAL, domain: ENV.DOMAIN.SYSTEM.toLowerCase(), category: CATEGORY.COLOR }

const FANG_CONTEXTUAL = [
    { map: "font.base", value: { ...props, type: null, item: ITEM.FONT, variant: "base", subitem: null, state: null, context: null } }, 
    { map: "font.secondary", value: { ...props, type: null, item: ITEM.FONT, variant: "secondary", subitem: null, state: null, context: null } },
    { map: "font.tertiary", value: { ...props, type: null, item: ITEM.FONT, variant: "tertiary", subitem: null, state: null, context: null } },
]

module.exports = [...FANG_CONTEXTUAL] 