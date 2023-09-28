const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const { hasSchema, transformFallback } = require('../../../utilities')
const { SCHEMA, COLOR } = require('../../../constants')

const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/color/ti/kebab/[cti+]',  
    type: 'name',
    matcher: (token) => {
        return (token.$schema.class === COLOR.CLASS)
    },
    transformer: function (token, options) {
        if (hasSchema(token)) {
            // const dynamics = Object.keys(SCHEMA().taxonomy).filter(dynamic => dynamic !== 'category')
            return createName(token.$schema.taxonomy, Object.keys(SCHEMA().taxonomy))
        }
        return transformFallback(transforms['name/cti/kebab'], token, options)
    }
})

// const dynamics = Object.keys(SCHEMA().taxonomy).filter(e => e !== 'category')
// createName(token.$schema.taxonomy, dynamics)
const createName = (taxonomy, dynamics) => {
    let result = []
    for (const dynamic of dynamics) {
        if (taxonomy[dynamic]) result.push(taxonomy[dynamic])
    }
    let name = _.kebabCase(result.join(' '))
    if (name.endsWith("-a")) name = name.slice(0, -2) + "a"
    return name
}
