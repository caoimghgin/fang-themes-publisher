/**
 * @name tokenJsonParser
 * @type parser
 * @param  {JSON} contents The contents of the tokens.json file
 * @param  {Bool} stripW3C replace `$value` with `value` and `$description` with `comment`
 * @return {Object} JSON parsed into Javascript object
 * @author Lukas Oppermann
 * @link https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/parser/w3c-token-json-parser.ts
 * @description if w3c is true, parses json and replace `$value` with `value` and `$description`
 * with `comment` to make it work with style dictionary. Else, returns parsed contents
 */

function tokensJsonParser(contents, stripW3C) {
    if (stripW3C) {
        const preparedContent = (contents || '{}').replace(/"\$?value"/g, '"value"')
            .replace(/"\$?description"/g, '"comment"');
        return JSON.parse(preparedContent);
    }
    return JSON.parse(contents);
}

module.exports = { tokensJsonParser }