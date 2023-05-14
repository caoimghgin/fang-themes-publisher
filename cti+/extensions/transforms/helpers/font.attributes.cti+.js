const StyleDictionary = require('style-dictionary')
const { CLASS } = require('../../../constants')

StyleDictionary.registerTransform({
    name: 'font/attributes/[cti+]',  
    type: 'attribute',
    matcher: (token) => {
        return (token.$schema.class === CLASS.FONT)
    },
    transformer: function (token) {
        lineHeightTransform(token)
        fontSizeTransform(token)
    }
})

const lineHeightTransform = (token) => {
    const fontSize = parseFloat(token.value.fontSize)
    const lineHeight = parseFloat(token.value.lineHeight)
    if (isNaN(fontSize)) throwSizeError(token.name, token.value, 'lineHeightTransform')
    if (isNaN(lineHeight)) throwSizeError(token.name, token.value, 'lineHeightTransform')
    let result = lineHeight/fontSize + '%'
    token.value.lineHeight = result
}

const fontSizeTransform = (token) => {
    const fontSize = parseFloat(token.value.fontSize)
    if (isNaN(fontSize)) throwSizeError(token.name, token.value, 'fontSizeTransform')
    let result = fontSize/16 + 'rem'
    token.value.fontSize = result
}