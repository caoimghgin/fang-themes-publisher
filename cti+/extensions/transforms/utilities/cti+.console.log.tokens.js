const StyleDictionary = require('style-dictionary')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'cti+/console/tokens',
    type: 'attribute',
    transformer: function (token) {
        // console.log("cti+/console/tokens ->", util.inspect(token, false, null, true /* enable colors */))
    }
})

