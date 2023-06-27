const StyleDictionary = require('style-dictionary')
const formattedVariables = require('style-dictionary/lib/common/formatHelpers/formattedVariables')

StyleDictionary.registerFormat({
    name: 'css/variables/[cti+]',      
    formatter: function ({ dictionary, options = {}, file }) {
        const { outputReferences, mode } = options;
        return prefersColorScheme(mode) + `\n` +
        formattedVariables({ format: 'css', dictionary, outputReferences }) +
        `\n}${!mode ? "": "}"}\n`;
    }
});

const prefersColorScheme = (mode) => {
    if (!mode) return `:root {` 
    return `@media (prefers-color-scheme: ${mode.toLowerCase()}) { :root {`
}