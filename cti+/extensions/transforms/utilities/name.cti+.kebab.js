const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const {hasSchema, fallbackTransform} = require('../../../utilities')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/cti+/kebab',
    type: 'name',
    transformer: function (token, options) {
        if (hasSchema(token)) {
            let result = []
            let dynamics = ["domain", "category", "type", "item", "variant", "subitem", "state", "context"]
            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return _.kebabCase(result.join(' '));
        }
        return fallbackTransform(transforms['name/cti/kebab'], token, options)
    }
})
