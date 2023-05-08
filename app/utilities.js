const fs = require('fs');

/**
 * Returns list of all directory names in a path
 *
 * @param {String} path - Path to a directory
 * @returns {Array} - Names of directories
 */
const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory()
    })
}

module.exports = { getDirectories }