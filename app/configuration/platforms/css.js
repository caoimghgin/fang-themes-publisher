const name = "css"
const ext = "css"
const format = "css/variables"

const transforms = [
    'attribute/cti',
    // 'name/cti/kebab',
    'name/cti+/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
    'console/cti+/routes'
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

let all = () => {
    return {
        destination: `variables.${ext}`,
        format: format,
    }
}
