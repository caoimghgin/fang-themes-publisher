const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const { hasSchema, transformFallback } = require('../../../utilities')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/camel/[cti+]',   
    type: 'name',
    transformer: function (token, options) {
        if (hasSchema(token)) {
            let result = []
            let dynamics = ["category", "type", "item", "variant", "subitem", "state", "context"]
            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return _.camelCase(result.join(' '))
        }
        return transformFallback(transforms['name/cti/camel'], token, options)
    }
})
