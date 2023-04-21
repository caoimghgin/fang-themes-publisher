const StyleDictionary = require('style-dictionary')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'cti+/name/CTI/camel',    
    type: 'name',
    transformer: function (token, options) {
        let result = []
        let dynamics = ["category", "type", "item", "variant", "subitem", "state", "context"]
        for (const dynamic of dynamics) {
            if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
        }
        return  _.camelCase(result.join(' '))
    }
})