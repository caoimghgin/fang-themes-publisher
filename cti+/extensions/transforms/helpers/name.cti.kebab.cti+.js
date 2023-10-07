const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const { hasSchema, transformFallback } = require('../../../utilities')
const { SCHEMA } = require('../../../constants')

const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/cti/kebab/[cti+]',  
    type: 'name',
    transformer: function (token, options) {
        if (hasSchema(token)) {
            let result = []
            let dynamics = Object.keys(SCHEMA().taxonomy)

            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return _.kebabCase(result.join(' '));
        }
        return transformFallback(transforms['name/cti/kebab'], token, options)
    }
})
