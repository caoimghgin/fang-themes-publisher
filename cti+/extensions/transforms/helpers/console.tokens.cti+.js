const StyleDictionary = require('style-dictionary')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'console/tokens/[cti+]',
    type: 'attribute',
    transformer: function (token) {
        console.log("console/cti+/token ->", util.inspect(token, false, null, true))
    }
})

