const name = "android"
const ext = "xml"

const transforms = [ 
    'attribute/cti',
    // 'name/cti/snake',
    'cti+/name/dCTI/snake',
    'color/hex8android',
    'size/remToSp',
    'size/remToDp'
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
            colors(),
            fontDimensions(),
        ]
    }
    return result
}

const colors = () => {
    return {
        destination: `colors.${ext}`,
        format: "android/colors"
    }
}

const fontDimensions = () => {
    return {
        destination: `font_dimens.${ext}`,
        format: "android/fontDimens"
    }
}