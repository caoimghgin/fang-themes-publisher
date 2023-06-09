const name = "swift"
const format = "ios-swift/class.swift"
const ext = "swift"

const transforms = [ 
    'attribute/cti',
    // 'name/cti/camel',
    'name/camel/[cti+]',
    'color/UIColorSwift',
    'content/swift/literal',
    'asset/swift/literal',
    'size/swift/remToCGFloat',
    'font/swift/literal'
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
            all(),
        ]
    }
    return result
}

const all = () => {
    return {
        destination: `StyleDictionary+Class.${ext}`,
        format: format,
        className: "StyleDictionaryClass",
        filter: {}
    }
}