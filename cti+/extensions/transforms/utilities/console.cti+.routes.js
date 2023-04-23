const StyleDictionary = require('style-dictionary')
const { hasSchema } = require('../../../utilities')
const util = require('util')

StyleDictionary.registerTransform({
    name: 'console/cti+/routes',
    type: 'attribute',
    transformer: function (token) {
        if (hasSchema(token)) {
            console.log("console/cti+/routes ->", util.inspect(token.$schema.route, false, null, true))
        } else {
            console.log("console/cti+/routes (fallback) ->", util.inspect(token, false, null, true))
        }
    }
})

