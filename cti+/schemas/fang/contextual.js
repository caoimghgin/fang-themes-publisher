const { ENV } = require('../../../package.json')
const { SUBCLASS, CATEGORY, ITEM } = require('../../constants')

const props = { subclass: SUBCLASS.CONTEXTUAL, domain: ENV.DOMAIN.SYSTEM.toLowerCase(), category: CATEGORY.COLOR }

const FANG_CONTEXTUAL = [

    { map: "bkgd.primary", value: { ...props, type: "bkgd", item: null, variant: "primary", subitem: null, state: null, context: null } }, 
    { map: "bkgd.heavy", value: { ...props, type: "bkgd", item: null, variant: "heavy", subitem: null, state: null, context: null } }, 
    { map: "bkgd.default", value: { ...props, type: "bkgd", item: null, variant: "default", subitem: null, state: null, context: null } }, 
    { map: "bkgd.info", value: { ...props, type: "bkgd", item: null, variant: "info", subitem: null, state: null, context: null } }, 

    { map: "ink.primary", value: { ...props, type: "ink", item: null, variant: "primary", subitem: null, state: null, context: null } }, 
    { map: "ink.heavy", value: { ...props, type: "ink", item: null, variant: "heavy", subitem: null, state: null, context: null } }, 
    { map: "ink.default-onprimary", value: { ...props, type: "ink", item: null, variant: "default", subitem: null, state: null, context: "onprimary" } }, 
    { map: "ink.light", value: { ...props, type: "ink", item: null, variant: "light", subitem: null, state: null, context: null } }, 
    { map: "ink.lighter", value: { ...props, type: "ink", item: null, variant: "lighter", subitem: null, state: null, context: null } }, 
    { map: "ink.link", value: { ...props, type: "ink", item: null, variant: "link", subitem: null, state: null, context: null } }, 
    { map: "ink.line.defaul", value: { ...props, type: "ink", item: "line", variant: "default", subitem: null, state: null, context: null } }, 
    { map: "ink.line.heavy", value: { ...props, type: "ink", item: "line", variant: "heavy", subitem: null, state: null, context: null } }, 

    { map: "ink.default", value: { ...props, type: "ink", item: null, variant: "default", subitem: null, state: null, context: null } }, 


    // { map: "font.base", value: { ...props, type: null, item: ITEM.FONT, variant: "base", subitem: null, state: null, context: null } }, 
    // { map: "font.secondary", value: { ...props, type: null, item: ITEM.FONT, variant: "secondary", subitem: null, state: null, context: null } },
    // { map: "font.tertiary", value: { ...props, type: null, item: ITEM.FONT, variant: "tertiary", subitem: null, state: null, context: null } },
]

module.exports = [...FANG_CONTEXTUAL] 