const StyleDictionary = require('style-dictionary')
const formattedVariables = require('style-dictionary/lib/common/formatHelpers/formattedVariables')

StyleDictionary.registerFormat({
    name: 'css/variables/[cti+]',      
    formatter: function ({ dictionary, options = {}, file }) {
        const { outputReferences, mode } = options;
        let selector = (!mode ? `:root {` : `@media (prefers-color-scheme: ${mode.toLowerCase()}) { :root {`)
        return selector + `\n` +
        formattedVariables({ format: 'css', dictionary, outputReferences }) +
        `\n}${!mode ? "": "}"}\n`;
    }
});