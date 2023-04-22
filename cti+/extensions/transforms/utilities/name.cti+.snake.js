const StyleDictionary = require('style-dictionary')
const transforms = require('style-dictionary/lib/common/transforms')
const {hasSchema, fallbackTransform} = require('../../../utilities')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'name/cti+/snake',  
    type: 'name',
    transformer: function (token, options) {
        if (hasSchema(token)) {
            let result = []
            let dynamics = ["domain", "category", "type", "item", "variant", "subitem", "state", "context"]
            for (const dynamic of dynamics) {
                if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
            }
            return _.snakeCase(result.join('-'))
        }
        return fallbackTransform(transforms['name/cti/snake'], token, options)
    }
})


    // 'name/cti/snake',
    // 'name/cti+/snake'
    // 'cti+/name/dCTI/snake',