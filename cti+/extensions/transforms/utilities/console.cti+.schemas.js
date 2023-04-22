const StyleDictionary = require('style-dictionary')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'console/cti+/schemas',   
    type: 'attribute',
    transformer: function (token) {
        console.log("console/cti+/schemas ->", util.inspect(token.$schema, false, null, true))
    }
})

