const { ENV, COLOR } = require('../../constants')

const props = {
    class: COLOR.CLASS,
    subclass: COLOR.SUBCLASS.PALETTE,
    domain: ENV.DOMAIN.SYSTEM.toLowerCase(),
    category: COLOR.SUBCLASS.PALETTE
}

const PRIMARY = [
    { map: "primary.015", ...props, type: null, item: null, variant: "primary", subitem: null, state: "015", context: null },
    { map: "primary.025", ...props, type: null, item: null, variant: "primary", subitem: null, state: "025", context: null },
    { map: "primary.050", ...props, type: null, item: null, variant: "primary", subitem: null, state: "050", context: null },
    { map: "primary.075", ...props, type: null, item: null, variant: "primary", subitem: null, state: "075", context: null },
    { map: "primary.085", ...props, type: null, item: null, variant: "primary", subitem: null, state: "085", context: null },
    { map: "primary.100", ...props, type: null, item: null, variant: "primary", subitem: null, state: "100", context: null },
    { map: "primary.200", ...props, type: null, item: null, variant: "primary", subitem: null, state: "200", context: null },
    { map: "primary.300", ...props, type: null, item: null, variant: "primary", subitem: null, state: "300", context: null },
    { map: "primary.400", ...props, type: null, item: null, variant: "primary", subitem: null, state: "400", context: null },
    { map: "primary.500", ...props, type: null, item: null, variant: "primary", subitem: null, state: "500", context: null },
    { map: "primary.600", ...props, type: null, item: null, variant: "primary", subitem: null, state: "600", context: null },
    { map: "primary.700", ...props, type: null, item: null, variant: "primary", subitem: null, state: "700", context: null },
    { map: "primary.800", ...props, type: null, item: null, variant: "primary", subitem: null, state: "800", context: null },
    { map: "primary.900", ...props, type: null, item: null, variant: "primary", subitem: null, state: "900", context: null },
]

const SECONDARY = [
    { map: "secondary.015", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "015", context: null },
    { map: "secondary.025", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "025", context: null },
    { map: "secondary.050", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "050", context: null },
    { map: "secondary.075", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "075", context: null },
    { map: "secondary.085", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "085", context: null },
    { map: "secondary.100", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "100", context: null },
    { map: "secondary.200", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "200", context: null },
    { map: "secondary.300", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "300", context: null },
    { map: "secondary.400", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "400", context: null },
    { map: "secondary.500", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "500", context: null },
    { map: "secondary.600", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "600", context: null },
    { map: "secondary.700", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "700", context: null },
    { map: "secondary.800", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "800", context: null },
    { map: "secondary.900", ...props, type: null, item: null, variant: "secondary", subitem: null, state: "900", context: null },
]

const TERTIARY = [
    { map: "tertiary.015", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "015", context: null },
    { map: "tertiary.025", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "025", context: null },
    { map: "tertiary.050", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "050", context: null },
    { map: "tertiary.075", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "075", context: null },
    { map: "tertiary.085", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "085", context: null },
    { map: "tertiary.100", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "100", context: null },
    { map: "tertiary.200", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "200", context: null },
    { map: "tertiary.300", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "300", context: null },
    { map: "tertiary.400", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "400", context: null },
    { map: "tertiary.500", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "500", context: null },
    { map: "tertiary.600", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "600", context: null },
    { map: "tertiary.700", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "700", context: null },
    { map: "tertiary.800", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "800", context: null },
    { map: "tertiary.900", ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "900", context: null },
]

const POSITIVE = [
    { map: "positive.015", ...props, type: null, item: null, variant: "positive", subitem: null, state: "015", context: null },
    { map: "positive.025", ...props, type: null, item: null, variant: "positive", subitem: null, state: "025", context: null },
    { map: "positive.050", ...props, type: null, item: null, variant: "positive", subitem: null, state: "050", context: null },
    { map: "positive.075", ...props, type: null, item: null, variant: "positive", subitem: null, state: "075", context: null },
    { map: "positive.085", ...props, type: null, item: null, variant: "positive", subitem: null, state: "085", context: null },
    { map: "positive.100", ...props, type: null, item: null, variant: "positive", subitem: null, state: "100", context: null },
    { map: "positive.200", ...props, type: null, item: null, variant: "positive", subitem: null, state: "200", context: null },
    { map: "positive.300", ...props, type: null, item: null, variant: "positive", subitem: null, state: "300", context: null },
    { map: "positive.400", ...props, type: null, item: null, variant: "positive", subitem: null, state: "400", context: null },
    { map: "positive.500", ...props, type: null, item: null, variant: "positive", subitem: null, state: "500", context: null },
    { map: "positive.600", ...props, type: null, item: null, variant: "positive", subitem: null, state: "600", context: null },
    { map: "positive.700", ...props, type: null, item: null, variant: "positive", subitem: null, state: "700", context: null },
    { map: "positive.800", ...props, type: null, item: null, variant: "positive", subitem: null, state: "800", context: null },
    { map: "positive.900", ...props, type: null, item: null, variant: "positive", subitem: null, state: "900", context: null },
]

const NEGATIVE = [
    { map: "negative.015", ...props, type: null, item: null, variant: "negative", subitem: null, state: "015", context: null },
    { map: "negative.025", ...props, type: null, item: null, variant: "negative", subitem: null, state: "025", context: null },
    { map: "negative.050", ...props, type: null, item: null, variant: "negative", subitem: null, state: "050", context: null },
    { map: "negative.075", ...props, type: null, item: null, variant: "negative", subitem: null, state: "075", context: null },
    { map: "negative.085", ...props, type: null, item: null, variant: "negative", subitem: null, state: "085", context: null },
    { map: "negative.100", ...props, type: null, item: null, variant: "negative", subitem: null, state: "100", context: null },
    { map: "negative.200", ...props, type: null, item: null, variant: "negative", subitem: null, state: "200", context: null },
    { map: "negative.300", ...props, type: null, item: null, variant: "negative", subitem: null, state: "300", context: null },
    { map: "negative.400", ...props, type: null, item: null, variant: "negative", subitem: null, state: "400", context: null },
    { map: "negative.500", ...props, type: null, item: null, variant: "negative", subitem: null, state: "500", context: null },
    { map: "negative.600", ...props, type: null, item: null, variant: "negative", subitem: null, state: "600", context: null },
    { map: "negative.700", ...props, type: null, item: null, variant: "negative", subitem: null, state: "700", context: null },
    { map: "negative.800", ...props, type: null, item: null, variant: "negative", subitem: null, state: "800", context: null },
    { map: "negative.900", ...props, type: null, item: null, variant: "negative", subitem: null, state: "900", context: null },
]

const HIGHLIGHT = [
    { map: "highlight.015", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "015", context: null },
    { map: "highlight.025", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "025", context: null },
    { map: "highlight.050", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "050", context: null },
    { map: "highlight.075", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "075", context: null },
    { map: "highlight.085", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "085", context: null },
    { map: "highlight.100", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "100", context: null },
    { map: "highlight.200", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "200", context: null },
    { map: "highlight.300", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "300", context: null },
    { map: "highlight.400", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "400", context: null },
    { map: "highlight.500", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "500", context: null },
    { map: "highlight.600", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "600", context: null },
    { map: "highlight.700", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "700", context: null },
    { map: "highlight.800", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "800", context: null },
    { map: "highlight.900", ...props, type: null, item: null, variant: "highlight", subitem: null, state: "900", context: null },
]

const ATTENTION = [
    { map: "attention.015", ...props, type: null, item: null, variant: "attention", subitem: null, state: "015", context: null },
    { map: "attention.025", ...props, type: null, item: null, variant: "attention", subitem: null, state: "025", context: null },
    { map: "attention.050", ...props, type: null, item: null, variant: "attention", subitem: null, state: "050", context: null },
    { map: "attention.075", ...props, type: null, item: null, variant: "attention", subitem: null, state: "075", context: null },
    { map: "attention.085", ...props, type: null, item: null, variant: "attention", subitem: null, state: "085", context: null },
    { map: "attention.100", ...props, type: null, item: null, variant: "attention", subitem: null, state: "100", context: null },
    { map: "attention.200", ...props, type: null, item: null, variant: "attention", subitem: null, state: "200", context: null },
    { map: "attention.300", ...props, type: null, item: null, variant: "attention", subitem: null, state: "300", context: null },
    { map: "attention.400", ...props, type: null, item: null, variant: "attention", subitem: null, state: "400", context: null },
    { map: "attention.500", ...props, type: null, item: null, variant: "attention", subitem: null, state: "500", context: null },
    { map: "attention.600", ...props, type: null, item: null, variant: "attention", subitem: null, state: "600", context: null },
    { map: "attention.700", ...props, type: null, item: null, variant: "attention", subitem: null, state: "700", context: null },
    { map: "attention.800", ...props, type: null, item: null, variant: "attention", subitem: null, state: "800", context: null },
    { map: "attention.900", ...props, type: null, item: null, variant: "attention", subitem: null, state: "900", context: null },
]

const INFO = [
    { map: "info.015", ...props, type: null, item: null, variant: "info", subitem: null, state: "015", context: null },
    { map: "info.025", ...props, type: null, item: null, variant: "info", subitem: null, state: "025", context: null },
    { map: "info.050", ...props, type: null, item: null, variant: "info", subitem: null, state: "050", context: null },
    { map: "info.075", ...props, type: null, item: null, variant: "info", subitem: null, state: "075", context: null },
    { map: "info.085", ...props, type: null, item: null, variant: "info", subitem: null, state: "085", context: null },
    { map: "info.100", ...props, type: null, item: null, variant: "info", subitem: null, state: "100", context: null },
    { map: "info.200", ...props, type: null, item: null, variant: "info", subitem: null, state: "200", context: null },
    { map: "info.300", ...props, type: null, item: null, variant: "info", subitem: null, state: "300", context: null },
    { map: "info.400", ...props, type: null, item: null, variant: "info", subitem: null, state: "400", context: null },
    { map: "info.500", ...props, type: null, item: null, variant: "info", subitem: null, state: "500", context: null },
    { map: "info.600", ...props, type: null, item: null, variant: "info", subitem: null, state: "600", context: null },
    { map: "info.700", ...props, type: null, item: null, variant: "info", subitem: null, state: "700", context: null },
    { map: "info.800", ...props, type: null, item: null, variant: "info", subitem: null, state: "800", context: null },
    { map: "info.900", ...props, type: null, item: null, variant: "info", subitem: null, state: "900", context: null },
]

const SYSTEM = [
    { map: "system.015", ...props, type: null, item: null, variant: "system", subitem: null, state: "015", context: null },
    { map: "system.025", ...props, type: null, item: null, variant: "system", subitem: null, state: "025", context: null },
    { map: "system.050", ...props, type: null, item: null, variant: "system", subitem: null, state: "050", context: null },
    { map: "system.075", ...props, type: null, item: null, variant: "system", subitem: null, state: "075", context: null },
    { map: "system.085", ...props, type: null, item: null, variant: "system", subitem: null, state: "085", context: null },
    { map: "system.100", ...props, type: null, item: null, variant: "system", subitem: null, state: "100", context: null },
    { map: "system.200", ...props, type: null, item: null, variant: "system", subitem: null, state: "200", context: null },
    { map: "system.300", ...props, type: null, item: null, variant: "system", subitem: null, state: "300", context: null },
    { map: "system.400", ...props, type: null, item: null, variant: "system", subitem: null, state: "400", context: null },
    { map: "system.500", ...props, type: null, item: null, variant: "system", subitem: null, state: "500", context: null },
    { map: "system.600", ...props, type: null, item: null, variant: "system", subitem: null, state: "600", context: null },
    { map: "system.700", ...props, type: null, item: null, variant: "system", subitem: null, state: "700", context: null },
    { map: "system.800", ...props, type: null, item: null, variant: "system", subitem: null, state: "800", context: null },
    { map: "system.900", ...props, type: null, item: null, variant: "system", subitem: null, state: "900", context: null },
]

const NEUTRAL = [
    { map: "neutral.000", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "000", context: null },
    { map: "neutral.015", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "015", context: null },
    { map: "neutral.025", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "025", context: null },
    { map: "neutral.050", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "050", context: null },
    { map: "neutral.075", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "075", context: null },
    { map: "neutral.085", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "085", context: null },
    { map: "neutral.100", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "100", context: null },
    { map: "neutral.200", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "200", context: null },
    { map: "neutral.300", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "300", context: null },
    { map: "neutral.400", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "400", context: null },
    { map: "neutral.500", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "500", context: null },
    { map: "neutral.600", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "600", context: null },
    { map: "neutral.700", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "700", context: null },
    { map: "neutral.800", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "800", context: null },
    { map: "neutral.900", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "900", context: null },
    { map: "neutral.950", ...props, type: null, item: null, variant: "neutral", subitem: null, state: "950", context: null },
]

const LIGHTEN = [
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "95a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "90a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "80a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "70a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "60a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "50a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "40a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "30a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "20a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "10a", context: null },
    { map: null, ...props, type: null, item: null, variant: "lighten", subitem: null, state: "05a", context: null },
]

const DARKEN = [
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "95a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "90a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "80a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "70a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "60a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "50a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "40a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "30a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "20a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "10a", context: null },
    { map: null, ...props, type: null, item: null, variant: "darken", subitem: null, state: "05a", context: null },
]

module.exports = [
    ...PRIMARY,
    ...SECONDARY,
    ...TERTIARY,
    ...POSITIVE,
    ...NEGATIVE,
    ...HIGHLIGHT,
    ...ATTENTION,
    ...INFO,
    ...SYSTEM,
    ...NEUTRAL,
    ...LIGHTEN,
    ...DARKEN
] 