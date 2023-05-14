const StyleDictionary = require('style-dictionary')

StyleDictionary.registerFormat({
    name: 'fonts/css/[cti+]',
    formatter: function ({dictionary, options, file, platform}) {
        let result = []
        dictionary.allProperties.map(token => {
            result.push(`.${token.name} {`)
            result.push(`\tfont-family: "${token.value.fontFamily}";`)
            result.push(`\tfont-size: ${token.value.fontSize};`)
            result.push(`\tfont-weight: ${token.value.fontWeight};`)
            result.push(`\tline-height: ${token.value.lineHeight};`)
            result.push(`\tletter-spacing: ${token.value.letterSpacing};`)
            result.push(`\ttext-indent: ${token.value.paragraphIndent};`)
            result.push(`\ttext-transform: ${token.value.textCase};`)
            result.push(`\tfont-style: ${token.value.fontStyle};`)
            result.push(`\ttext-decoration: ${token.value.textDecoration};`)
            result.push(`\tmargin-bottom: ${token.value.paragraphSpacing};`)
            result.push(`}\r`)
        })
        return result.join("\r")
    }
})