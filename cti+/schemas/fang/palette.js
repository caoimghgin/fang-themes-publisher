const { ENV } = require('../../../package.json')
const { CATEGORY, SUBCLASS } = require('../../constants')

const props = { subclass: SUBCLASS.PALETTE, domain: ENV.DOMAIN.SYSTEM.toLowerCase(), category: CATEGORY.PALETTE }

const FANG_PALETTE = [
    { map: "base.red", value: { ...props, type: null, item: null, variant: "red", subitem: null, state: null, context: null } }, 
    { map: "base.green", value: { ...props, type: null, item: null, variant: "green", subitem: null, state: null, context: null } },
    { map: "base.gray.light", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "light", context: null } },
    { map: "base.gray.medium", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "medium", context: null } },
    { map: "base.gray.dark", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "dark", context: null } },
]

module.exports = [...FANG_PALETTE] 