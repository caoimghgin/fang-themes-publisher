const StyleDictionary = require('style-dictionary')
const _ = require("lodash");

StyleDictionary.registerTransform({
    name: 'cti+/name/dCTI/pascal',    
    type: 'name',
    // matcher: (token) => (
    //     (token.$schema.class == consts.CLASS.SOCIAL) && (token.$schema.taxonomy.domain == "nk")
    // ),
    transformer: function (token, options) {
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
})