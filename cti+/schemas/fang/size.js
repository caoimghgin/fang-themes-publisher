const { ENV, TYPE, DIMENSION } = require('../../constants')

const props = { 
    class: DIMENSION.CLASS, 
    subclass: DIMENSION.SUBCLASS.SIZE, 
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(), 
    category: DIMENSION.SUBCLASS.SIZE
}

const FANG_SIZE = [
    { map: "size.font.base", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "base", state: null, context: null }, 
    { map: "size.font.small", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "small",  state: null, context: null  }, 
    { map: "size.font.medium", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "medium", state: null, context: null  }, 
    { map: "size.font.large", ...props, type: TYPE.TEXT, item: null, subitem: null, variant: "large", state: null, context: null }, 
]

module.exports = [...FANG_SIZE] 