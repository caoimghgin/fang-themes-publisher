/*
// Parsers

https://amzn.github.io/style-dictionary/#/parsers

Starting in version 3.0, you can define custom parsers to parse design token files. 
This allows you to define your design token files in any language you like as long 
as you can write a parser for it.

A custom parser matches design token files based on a file path regular expression. 
It will get the contents of a file as a string and should return an object of the data.

Custom parsers can be used to keep design token files in other languages like YAML, but 
they can also be used to add extra metadata or modify the design tokens themselves before 
they get to Style Dictionary. For example, you could modify the token object based on its 
file path or programmatically generate tokens based on the data in certain files.
*/

const StyleDictionary = require('style-dictionary');
const _ = require('lodash');
const { w3cTokenJsonParser } = require('./utilities/w3cTokenJsonParser')
const { ctiPlusSchemaParser } = require('./utilities/ctiPlusSchemaParser')
const { keyRouteParser } = require('./utilities/keyRouteParser')

const mapper = require('../../mapper')


StyleDictionary.registerParser({
    pattern: /\.json$/,
    parse: ({ contents, filePath }) => {

        let dictionary = w3cTokenJsonParser(contents)
        let keys = keyRouteParser(dictionary)

        ctiPlusSchemaParser(dictionary, keys)
        
        for (const key of keys) {
            const token = _.get(dictionary, key)
            const data = mapper.schemaForToken(mapper.fang_palette(), token)
        }

        // for (const key of keys) {
        //     const token = _.get(dictionary, key)
        //     if (utils.shouldParse(token, consts.CLASS.COLOR)) {
        //         const data = cti.schemaForToken(cti.djds_palette(), token, key)
        //         if (data) {
        //             token.$schema = data.$schema
        //             token.$schema.$type = consts.TYPE.COLOR
        //             token.$schema.class = consts.CLASS.PALETTE
        //             token.$schema.mode = consts.MODE.NONE
        //             token.$schema.route = key
        //             token.$schema.version = 2.0
        //             token.$schema.className = utils.parseClassName(token.$schema)
        //         }
        //     }
        // }






        // parseTypography(dictionary, keys, filePath)
        // parseColors(dictionary, keys, filePath) 
        // parseSpacers(dictionary, keys, filePath) 
        // parseShadows(dictionary, keys, filePath) 
        // mapToPaletteColorRef(dictionary, keys)

        return dictionary
    }
})