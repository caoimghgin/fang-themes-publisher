const { ENV, COLOR } = require('../../constants')
const { schema } = require('../helpers')

const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.PALETTE }

const PRIMARY = () => {
    const variant = "primary"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const SECONDARY = () => {
    const variant = "secondary"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const TERTIARY = () => {
    const variant = "tertiary"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const POSITIVE = () => {
    const variant = "positive"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const NEGATIVE = () => {
    const variant = "negative"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const HIGHLIGHT = () => {
    const variant = "highlight"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const ATTENTION = () => {
    const variant = "attention"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const INFO = () => {
    const variant = "info"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const SYSTEM = () => {
    const variant = "system"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
    ]
}

const NEUTRAL = () => {
    const variant = "neutral"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "000", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "015", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "025", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "050", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "075", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "085", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "100", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "200", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "300", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "400", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "500", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "600", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "700", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "800", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "900", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "925", context: null }),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "950", context: null }),
    ]
}

const LIGHTEN = () => {
    const variant = "lighten"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "05a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "10a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "20a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "30a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "40a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "50a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "60a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "70a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "80a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "90a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "95a", context: null}),
    ]
}

const DARKEN = () => {
    const variant = "darken"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "05a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "10a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "20a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "30a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "40a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "50a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "60a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "70a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "80a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "90a", context: null}),
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: "95a", context: null}),
    ]
}

const TRANSPARENT = () => {
    const variant = "transparent"
    return [
        schema(meta, { type: null, item: null, variant: variant, subitem: null, state: null, context: null, key:`${variant}`}),
    ]
}

module.exports = [
    ...PRIMARY(),
    ...SECONDARY(),
    ...TERTIARY(),
    ...POSITIVE(),
    ...NEGATIVE(),
    ...HIGHLIGHT(),
    ...ATTENTION(),
    ...INFO(),
    ...SYSTEM(),
    ...NEUTRAL(),
    ...LIGHTEN(),
    ...DARKEN(),
    ...TRANSPARENT(),
] 