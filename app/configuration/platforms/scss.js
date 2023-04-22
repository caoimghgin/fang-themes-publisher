const name = "scss"
const ext = "scss"
const format = "scss/variables"

const transforms = [
    'attribute/cti',
    // 'name/cti/kebab',
    'name/cti+/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css'
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
            all()
        ]
    }
    return result
}

let all = () => {
    return {
        destination: `_variables.${ext}`,
        format: format,
    }
}