const { schemaParser } = require('../cti+/extensions/parsers/helpers/schemaParser');
const { keyParser } = require('../cti+/extensions/parsers/helpers/keyParser');
const contents = require('./mock/design-tokens.tokens.json')
const filePath = "/Users/kmuldoon/GitHub/fang-themes-publisher/tokens/appl/design-tokens.tokens.json"

test('SchemaParser', () => {
    const dictionary = contents
    const keys = keyParser(dictionary)
    schemaParser(dictionary, keys, filePath)
    const result = dictionary.palette.primary[400]
    console.info( result )

    // I'd like to retrieve an object by schema
    // const foo = dictionary.filter(token => token.$schema.taxonomy.variant === 'primary' )
    // console.log(foo)

    // const entries = Object.entries(dictionary)[0];
    // const foo = entries.filter(token => token.$schema.taxonomy.variant === 'primary' )
    // console.log(foo)

});