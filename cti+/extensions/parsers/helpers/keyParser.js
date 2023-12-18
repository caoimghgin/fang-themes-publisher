/**
 * @name keyParser
 * @type utility
 * @param {Object} dictionary All tokens
 * @return {Array} All keys within the dictionary
 * @author Kevin Muldoon
 * @description returns a list of keys for every node of the dictionary to
 * populate the value of token.$schema.route and map tokens to defined schemas.
 */

function keyParser(dictionary) {
    const result = []
    const set = new Set()

    // Get all keys and add them to a set. The 
    // set remove duplicates the recursive keyify 
    // function creates.
    for (const root in dictionary) {
        keyify(dictionary[root]).forEach((item) => {
            set.add(root + "." + item)
        });
    }

    // Filter the set to object keys which end with 'value'.
    const routeFilteredByValue = Array.from(set).filter(function (route) {
        // if route endsWith or second to last item has value
        // console.log("find route", route)
        return (route.endsWith("value") || route.includes(".value."))
    });

    // Remove 'value' from each entry and push to result. 
    // The result is an array of keys we can use to find 
    // values and modify objects.
    routeFilteredByValue.forEach(function (route, index) {
        const routeArray = route.split('.')
        routeArray.length = routeArray.indexOf("value") // set length to remove elements
        // result.push(truncateSubFolders(routeArray).join('.'))
        result.push(routeArray.join('.'))
    });

    return result
}

const truncateSubFolders = (arr, n = 2) =>  { 
    if (arr.length <= 3) return arr
    const result = arr.slice(arr.length - n, arr.length)
    result.unshift(arr[0])
    return result
    };

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

module.exports = { keyParser }