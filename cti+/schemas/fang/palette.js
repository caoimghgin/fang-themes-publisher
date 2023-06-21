const { ENV, COLOR } = require('../../constants')

const props = { 
    class: COLOR.CLASS,
    subclass: COLOR.SUBCLASS.PALETTE,
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(),
    category: COLOR.SUBCLASS.PALETTE
}

const FANG_PALETTE = [
    { map: "base.red",  ...props, type: null, item: null, subitem: null, variant: "red", state: null, context: null} , 
    { map: "base.green",  ...props, type: null, item: null, subitem: null, variant: "green",  state: null, context: null} ,
    { map: "base.gray.light", ...props, type: null, item: null, subitem: null, variant: "gray", state: "light", context: null},
    { map: "base.gray.medium", ...props, type: null, item: null, subitem: null, variant: "gray", state: "medium", context: null },
    { map: "base.gray.dark",  ...props, type: null, item: null, subitem: null, variant: "gray", state: "dark", context: null },
]

module.exports = [...FANG_PALETTE] 