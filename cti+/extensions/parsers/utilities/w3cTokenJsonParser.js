/**
 * @name w3cTokenJsonParser
 * @type parser
 * @description parses json and replace `$value` with `value` and `$description`
 * with `comment` to make it work with style dictionary
 */

function w3cTokenJsonParser (contents) {
    const preparedContent = (contents || '{}').replace(/"\$?value"/g, '"value"')
        .replace(/"\$?description"/g, '"comment"');
    return JSON.parse(preparedContent);
}

module.exports = { w3cTokenJsonParser }