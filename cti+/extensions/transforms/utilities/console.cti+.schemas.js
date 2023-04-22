const StyleDictionary = require('style-dictionary')
const { hasSchema } = require('../../../utilities')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'console/cti+/schemas',
    type: 'attribute',
    transformer: function (token) {
        if (hasSchema(token)) {
            console.log("console/cti+/schemas ->", util.inspect(token.$schema, false, null, true))
        } else {
            console.log("console/cti+/schemas (fallback) ->", util.inspect(token, false, null, true))
        }
    }
})

