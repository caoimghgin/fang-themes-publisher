const tinycolor = require("tinycolor2")

const isColor = (value) => {
    const color = tinycolor(value);
    return color.isValid()
}

module.exports = { isColor }