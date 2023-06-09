const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const { hasSchema, transformFallback } = require('../../../utilities')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/pascal/[cti+]',  
    type: 'name',
    transformer: function (token, options) {
        if (hasSchema(token)) {
            let result = []
            let prefix = token.$schema.taxonomy.domain
            let dynamics = ["category", "type", "item", "variant", "subitem", "state", "context"]
            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return (prefix != null ?
                prefix.toUpperCase() + _.upperFirst(_.camelCase(result.join(' '))) :
                _.upperFirst(_.camelCase(result.join(' '))))
        }
        return transformFallback(transforms['name/cti/pascal'], token, options)
    }
})
