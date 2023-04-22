const { ENV } = require('../../../package.json')
const { CATEGORY, ITEM } = require('../../constants')

const props = { subclass: null, domain: ENV.DOMAIN.SYSTEM.toLowerCase(), category: CATEGORY.SIZE }

const FANG_SIZE = [
    { map: "size.font.base", value: { ...props, type: null, item: ITEM.FONT, variant: "base", subitem: null, state: null, context: null } }, 
    { map: "size.font.small", value: { ...props, type: null, item: ITEM.FONT, variant: "small", subitem: null, state: null, context: null } }, 
    { map: "size.font.medium", value: { ...props, type: null, item: ITEM.FONT, variant: "medium", subitem: null, state: null, context: null } }, 
    { map: "size.font.large", value: { ...props, type: null, item: ITEM.FONT, variant: "large", subitem: null, state: null, context: null } }, 
]

module.exports = [...FANG_SIZE] 