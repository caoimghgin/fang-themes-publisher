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
            let result = []
            let dynamics = Object.keys(SCHEMA().taxonomy).filter(e => e !== 'category')
            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return _.kebabCase(result.join(' '));
        }
        return transformFallback(transforms['name/cti/kebab'], token, options)
    }
})
