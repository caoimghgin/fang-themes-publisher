/**
 * @name keyRouteParser
 * @type utility
 * @param {Object} dictionary All tokens
 * @return {Array} All keys within the dictionary
 * @author Kevin Muldoon
 * @description returns a list of keys for every node of the dictionary to
 * populate the value of token.$schema.route and map tokens to defined schemas.
 */

function keyRouteParser(dictionary) {
    const result = []
    const set = new Set()

    // Get all keys and add them to a set. The 
    // set remove duplicates the recursive keyify 
    // function creates.
    for (const root in dictionary) {
        keyify(dictionary[root]).forEach((el) => {
            set.add(root + "." + el)
        });
    }

    // Filter the set to object keys which end with 'value'.
    const routeFilteredByValue = Array.from(set).filter(function (route) {
        return route.endsWith("value");
    });

    // Remove 'value' from each entry and push to result. 
    // The result is an array of keys we can use to find 
    // values and modify objects.
    routeFilteredByValue.forEach(function (item, index) {
        result.push(item.split('.').slice(0, -1).join('.'))
    });

    return result
}

const keyify = (obj, prefix = '') =>
    Object.keys(obj).reduce((res, el) => {
        if (Array.isArray(obj[el])) {
            return res;
        } else if (typeof obj[el] === 'object' && obj[el] !== null) {
            return [...res, ...keyify(obj[el], prefix + el + ".")];
        }
        return [...res, prefix + el];
    }, []
    )

module.exports = { keyRouteParser }