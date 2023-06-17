const { ENV } = require('../../../package.json')
const { CLASS, SUBCLASS, CATEGORY, TYPE } = require('../../constants')

const props = { 
    class: CLASS.DIMENSION, 
    subclass: SUBCLASS.SIZE, 
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(), 
    category: CATEGORY.SIZE
}

const FANG_SIZE = [
    { map: "size.font.base", value: { ...props, type: TYPE.TEXT, item: null, variant: "base", subitem: null, state: null, context: null } }, 
    { map: "size.font.small", value: { ...props, type: TYPE.TEXT, item: null, variant: "small", subitem: null, state: null, context: null } }, 
    { map: "size.font.medium", value: { ...props, type: TYPE.TEXT, item: null, variant: "medium", subitem: null, state: null, context: null } }, 
    { map: "size.font.large", value: { ...props, type: TYPE.TEXT, item: null, variant: "large", subitem: null, state: null, context: null } }, 
]

module.exports = [...FANG_SIZE] 