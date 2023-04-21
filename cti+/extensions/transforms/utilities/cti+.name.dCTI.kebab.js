const StyleDictionary = require('style-dictionary')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'cti+/name/dCTI/kebab',    
    type: 'name',
    transformer: function (token, options) {
        let result = []
        let dynamics = ["domain", "category", "type", "item", "variant", "subitem", "state", "context"]
        for (const dynamic of dynamics) {
            if (token.$schema.taxonomy[dynamic]) result.push(token.$schema.taxonomy[dynamic])
        }
        let x =  _.snakeCase(result.join('-'))
        // console.log(x)
        return x
    }
})