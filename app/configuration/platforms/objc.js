const name = "objc"

const transforms = [ 
    'attribute/cti',
    // 'name/cti/pascal',
    'cti+/name/dCTI/pascal',
    'color/UIColor',
    'content/objC/literal',
    'asset/objC/literal',
    'size/remToPt',
    'font/objC/literal'
]

module.exports = (build, brand, platform) => {
    let result = {}
    result[name] = {
        transforms: transforms,
        buildPath: `${build}/${brand}/${platform}/`,
        options: {
            showFileHeader: false,
            outputReferences: true,
        },
        files: [
            colors_h(),
            colors_m(),
            size_h(),
            size_m(),
        ]
    }
    return result
}

const colors_h = () => {
    return {
        destination: `StyleDictionaryColor.h`,
        format: "ios/colors.h",
        className: "StyleDictionaryColor",
        type: "StyleDictionaryColorName",
        filter: { attributes: { category: "color" } }
    }
}

const colors_m = () => {
    return {
        destination: `StyleDictionaryColor.m`,
        format: "ios/colors.m",
        className: "StyleDictionaryColor",
        type: "StyleDictionaryColorName",
        filter: { attributes: { category: "color" } }
    }
}

const size_h = () => {
    return {
        destination: `StyleDictionarySize.h`,
        format: "ios/static.h",
        className: "StyleDictionarySize",
        type: "float",
        filter: { attributes: { category: "size" } }
    }
}

const size_m = () => {
    return {
        destination: `StyleDictionarySize.m`,
        format: "ios/static.m",
        className: "StyleDictionarySize",
        type: "float",
        filter: { attributes: { category: "size" } }
    }
}

