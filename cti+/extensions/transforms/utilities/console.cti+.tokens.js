const StyleDictionary = require('style-dictionary')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'console/cti+/tokens',   
    type: 'attribute',
    transformer: function (token) {
        console.log("console/cti+/tokens ->", util.inspect(token, false, null, true))
    }
})
