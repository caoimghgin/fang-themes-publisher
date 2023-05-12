const { ENV } = require('../../../package.json')
const { CATEGORY, SUBCLASS } = require('../../constants')

const props = { subclass: SUBCLASS.PALETTE, domain: ENV.DOMAIN.SYSTEM.toLowerCase(), category: CATEGORY.PALETTE }

const FANG_PALETTE = [


    { map: "primary.015", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "015", context: null } },
    { map: "primary.025", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "025", context: null } },
    { map: "primary.050", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "050", context: null } },
    { map: "primary.075", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "075", context: null } },
    { map: "primary.085", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "085", context: null } },
    { map: "primary.100", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "100", context: null } },
    { map: "primary.200", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "200", context: null } },
    { map: "primary.300", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "300", context: null } },
    { map: "primary.400", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "400", context: null } },
    { map: "primary.500", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "500", context: null } },
    { map: "primary.600", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "600", context: null } },
    { map: "primary.700", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "700", context: null } },
    { map: "primary.800", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "800", context: null } },
    { map: "primary.900", value: { ...props, type: null, item: null, variant: "primary", subitem: null, state: "900", context: null } },

    { map: "secondary.015", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "015", context: null } },
    { map: "secondary.025", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "025", context: null } },
    { map: "secondary.050", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "050", context: null } },
    { map: "secondary.075", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "075", context: null } },
    { map: "secondary.085", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "085", context: null } },
    { map: "secondary.100", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "100", context: null } },
    { map: "secondary.200", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "200", context: null } },
    { map: "secondary.300", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "300", context: null } },
    { map: "secondary.400", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "400", context: null } },
    { map: "secondary.500", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "500", context: null } },
    { map: "secondary.600", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "600", context: null } },
    { map: "secondary.700", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "700", context: null } },
    { map: "secondary.800", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "800", context: null } },
    { map: "secondary.900", value: { ...props, type: null, item: null, variant: "secondary", subitem: null, state: "900", context: null } },

    { map: "tertiary.015", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "015", context: null } },
    { map: "tertiary.025", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "025", context: null } },
    { map: "tertiary.050", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "050", context: null } },
    { map: "tertiary.075", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "075", context: null } },
    { map: "tertiary.085", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "085", context: null } },
    { map: "tertiary.100", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "100", context: null } },
    { map: "tertiary.200", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "200", context: null } },
    { map: "tertiary.300", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "300", context: null } },
    { map: "tertiary.400", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "400", context: null } },
    { map: "tertiary.500", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "500", context: null } },
    { map: "tertiary.600", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "600", context: null } },
    { map: "tertiary.700", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "700", context: null } },
    { map: "tertiary.800", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "800", context: null } },
    { map: "tertiary.900", value: { ...props, type: null, item: null, variant: "tertiary", subitem: null, state: "900", context: null } },

    { map: "positive.015", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "015", context: null } },
    { map: "positive.025", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "025", context: null } },
    { map: "positive.050", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "050", context: null } },
    { map: "positive.075", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "075", context: null } },
    { map: "positive.085", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "085", context: null } },
    { map: "positive.100", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "100", context: null } },
    { map: "positive.200", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "200", context: null } },
    { map: "positive.300", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "300", context: null } },
    { map: "positive.400", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "400", context: null } },
    { map: "positive.500", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "500", context: null } },
    { map: "positive.600", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "600", context: null } },
    { map: "positive.700", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "700", context: null } },
    { map: "positive.800", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "800", context: null } },
    { map: "positive.900", value: { ...props, type: null, item: null, variant: "positive", subitem: null, state: "900", context: null } },

    { map: "negative.015", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "015", context: null } },
    { map: "negative.025", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "025", context: null } },
    { map: "negative.050", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "050", context: null } },
    { map: "negative.075", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "075", context: null } },
    { map: "negative.085", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "085", context: null } },
    { map: "negative.100", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "100", context: null } },
    { map: "negative.200", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "200", context: null } },
    { map: "negative.300", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "300", context: null } },
    { map: "negative.400", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "400", context: null } },
    { map: "negative.500", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "500", context: null } },
    { map: "negative.600", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "600", context: null } },
    { map: "negative.700", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "700", context: null } },
    { map: "negative.800", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "800", context: null } },
    { map: "negative.900", value: { ...props, type: null, item: null, variant: "negative", subitem: null, state: "900", context: null } },

    { map: "highlight.015", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "015", context: null } },
    { map: "highlight.025", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "025", context: null } },
    { map: "highlight.050", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "050", context: null } },
    { map: "highlight.075", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "075", context: null } },
    { map: "highlight.085", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "085", context: null } },
    { map: "highlight.100", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "100", context: null } },
    { map: "highlight.200", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "200", context: null } },
    { map: "highlight.300", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "300", context: null } },
    { map: "highlight.400", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "400", context: null } },
    { map: "highlight.500", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "500", context: null } },
    { map: "highlight.600", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "600", context: null } },
    { map: "highlight.700", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "700", context: null } },
    { map: "highlight.800", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "800", context: null } },
    { map: "highlight.900", value: { ...props, type: null, item: null, variant: "highlight", subitem: null, state: "900", context: null } },

    { map: "attention.015", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "015", context: null } },
    { map: "attention.025", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "025", context: null } },
    { map: "attention.050", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "050", context: null } },
    { map: "attention.075", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "075", context: null } },
    { map: "attention.085", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "085", context: null } },
    { map: "attention.100", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "100", context: null } },
    { map: "attention.200", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "200", context: null } },
    { map: "attention.300", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "300", context: null } },
    { map: "attention.400", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "400", context: null } },
    { map: "attention.500", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "500", context: null } },
    { map: "attention.600", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "600", context: null } },
    { map: "attention.700", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "700", context: null } },
    { map: "attention.800", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "800", context: null } },
    { map: "attention.900", value: { ...props, type: null, item: null, variant: "attention", subitem: null, state: "900", context: null } },

    { map: "info.015", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "015", context: null } },
    { map: "info.025", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "025", context: null } },
    { map: "info.050", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "050", context: null } },
    { map: "info.075", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "075", context: null } },
    { map: "info.085", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "085", context: null } },
    { map: "info.100", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "100", context: null } },
    { map: "info.200", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "200", context: null } },
    { map: "info.300", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "300", context: null } },
    { map: "info.400", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "400", context: null } },
    { map: "info.500", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "500", context: null } },
    { map: "info.600", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "600", context: null } },
    { map: "info.700", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "700", context: null } },
    { map: "info.800", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "800", context: null } },
    { map: "info.900", value: { ...props, type: null, item: null, variant: "info", subitem: null, state: "900", context: null } },

    { map: "system.015", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "015", context: null } },
    { map: "system.025", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "025", context: null } },
    { map: "system.050", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "050", context: null } },
    { map: "system.075", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "075", context: null } },
    { map: "system.085", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "085", context: null } },
    { map: "system.100", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "100", context: null } },
    { map: "system.200", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "200", context: null } },
    { map: "system.300", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "300", context: null } },
    { map: "system.400", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "400", context: null } },
    { map: "system.500", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "500", context: null } },
    { map: "system.600", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "600", context: null } },
    { map: "system.700", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "700", context: null } },
    { map: "system.800", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "800", context: null } },
    { map: "system.900", value: { ...props, type: null, item: null, variant: "system", subitem: null, state: "900", context: null } },

    { map: "neutral.bw.000", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "000", context: null } },
    { map: "neutral.015", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "015", context: null } },
    { map: "neutral.025", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "025", context: null } },
    { map: "neutral.050", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "050", context: null } },
    { map: "neutral.075", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "075", context: null } },
    { map: "neutral.085", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "085", context: null } },
    { map: "neutral.100", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "100", context: null } },
    { map: "neutral.200", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "200", context: null } },
    { map: "neutral.300", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "300", context: null } },
    { map: "neutral.400", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "400", context: null } },
    { map: "neutral.500", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "500", context: null } },
    { map: "neutral.600", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "600", context: null } },
    { map: "neutral.700", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "700", context: null } },
    { map: "neutral.800", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "800", context: null } },
    { map: "neutral.900", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "900", context: null } },
    { map: "neutral.bw.950", value: { ...props, type: null, item: null, variant: "neutral", subitem: null, state: "950", context: null } },

    { map: "alpha.lighten.95.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "95a", context: null } },
    { map: "alpha.lighten.90.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "90a", context: null } },
    { map: "alpha.lighten.80.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "80a", context: null } },
    { map: "alpha.lighten.70.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "70a", context: null } },
    { map: "alpha.lighten.60.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "60a", context: null } },
    { map: "alpha.lighten.50.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "50a", context: null } },
    { map: "alpha.lighten.40.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "40a", context: null } },
    { map: "alpha.lighten.30.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "30a", context: null } },
    { map: "alpha.lighten.20.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "20a", context: null } },
    { map: "alpha.lighten.10.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "10a", context: null } },
    { map: "alpha.lighten.05.a", value: { ...props, type: null, item: null, variant: "lighten", subitem: null, state: "50a", context: null } },

    { map: "alpha.darken.95.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "95a", context: null } },
    { map: "alpha.darken.90.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "90a", context: null } },
    { map: "alpha.darken.80.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "80a", context: null } },
    { map: "alpha.darken.70.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "70a", context: null } },
    { map: "alpha.darken.60.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "60a", context: null } },
    { map: "alpha.darken.50.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "50a", context: null } },
    { map: "alpha.darken.40.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "40a", context: null } },
    { map: "alpha.darken.30.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "30a", context: null } },
    { map: "alpha.darken.20.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "20a", context: null } },
    { map: "alpha.darken.10.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "10a", context: null } },
    { map: "alpha.darken.05.a", value: { ...props, type: null, item: null, variant: "darken", subitem: null, state: "50a", context: null } },

    // --unkn-color-palette-alpha-lighten-95-a: rgba(255, 255, 255, 0.95);
    // --unkn-color-palette-alpha-lighten-90-a: rgba(255, 255, 255, 0.9);
    // --unkn-color-palette-alpha-lighten-80-a: rgba(255, 255, 255, 0.8);
    // --unkn-color-palette-alpha-lighten-70-a: rgba(255, 255, 255, 0.7);
    // --unkn-color-palette-alpha-lighten-60-a: rgba(255, 255, 255, 0.6);
    // --unkn-color-palette-alpha-lighten-50-a: rgba(255, 255, 255, 0.5);
    // --unkn-color-palette-alpha-lighten-40-a: rgba(255, 255, 255, 0.4);
    // --unkn-color-palette-alpha-lighten-30-a: rgba(255, 255, 255, 0.3);
    // --unkn-color-palette-alpha-lighten-20-a: rgba(255, 255, 255, 0.2);
    // --unkn-color-palette-alpha-lighten-10-a: rgba(255, 255, 255, 0.1);
    // --unkn-color-palette-alpha-lighten-05-a: rgba(255, 255, 255, 0.05);
    // --unkn-color-palette-alpha-darken-95-a: rgba(0, 0, 0, 0.95);
    // --unkn-color-palette-alpha-darken-90-a: rgba(0, 0, 0, 0.9);
    // --unkn-color-palette-alpha-darken-80-a: rgba(0, 0, 0, 0.8);
    // --unkn-color-palette-alpha-darken-70-a: rgba(0, 0, 0, 0.7);
    // --unkn-color-palette-alpha-darken-60-a: rgba(0, 0, 0, 0.6);
    // --unkn-color-palette-alpha-darken-50-a: rgba(0, 0, 0, 0.5);
    // --unkn-color-palette-alpha-darken-40-a: rgba(0, 0, 0, 0.4);
    // --unkn-color-palette-alpha-darken-30-a: rgba(0, 0, 0, 0.3);
    // --unkn-color-palette-alpha-darken-20-a: rgba(0, 0, 0, 0.2);
    // --unkn-color-palette-alpha-darken-10-a: rgba(0, 0, 0, 0.1);
    // --unkn-color-palette-alpha-darken-05-a: rgba(0, 0, 0, 0.05);
    // --unkn-color-palette-neutral-b-w-000: #ffffff;
    // --unkn-color-palette-neutral-b-w-950: #000000;








    // { map: "base.red", value: { ...props, type: null, item: null, variant: "red", subitem: null, state: null, context: null } }, 
    // { map: "base.green", value: { ...props, type: null, item: null, variant: "green", subitem: null, state: null, context: null } },
    // { map: "base.gray.light", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "light", context: null } },
    // { map: "base.gray.medium", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "medium", context: null } },
    // { map: "base.gray.dark", value: { ...props, type: null, item: null, variant: "gray", subitem: null, state: "dark", context: null } },
]

module.exports = [...FANG_PALETTE] 