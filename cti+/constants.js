const { ENV } = require("../package.json")

const SCHEMA = () => {
    return {
        key: null,
        name: null,
        route: null,
        mapped: false,
        domain: null,
        brand: null,
        subbrand: null,
        class: null,
        subclass: null,
        mode: null,
        taxonomy: {
            domain: null,
            category: null,
            type: null,
            item: null,
            subitem: null,
            variant: null,
            state: null,
            context: null,
        }
    }
}

const MODE = Object.freeze({
        LIGHT: "LIGHT",
        DARK: "DARK",
        NULL: null
})

const CLASSES = Object.freeze({
    COLOR:{
        CLASS: "COLOR",
        SUBCLASS: {
            PALETTE: "PALETTE",         // Base semantic colors, not mode specific
            CONTEXTUAL: {
                CANVAS: "CANVAS",       // Background of app (Highly dynamic to dark mode: Typically highlight tones in light-mode, shadows in dark-mode)
                PAPER: "PAPER",         // Backgrounds on top of the app (Typically midtones and above in light mode)
                PAINT: "PAINT",         // Color on the surface of PAPER
                INK: "INK",             // Typography and icons, placed upon CANVAS and PAPER
                THREAD: "THREAD",       // Lines, rules
                DYE: "DYE",             // Lines, rules, placed upon CANVAS and PAPER
                THERMACHROME: "THERMA", // Interactive backgrounds on components
            },
            DEFINITIVE: "DEFINITIVE",   // Brand specific color (non-white-label), or unrecognized taxonomy name. Not mode specific.
            SOCIAL: "SOCIAL",           // Apple, Google, etc...
        },
        MODE: MODE
    },
    DIMENSION: {
        CLASS: "DIMENSION",
        SUBCLASS: { 
            SIZE: "SIZE",
            SPACE: "SPACE"
        }
    },
    FONT: {
        CLASS: "FONT",
        SUBCLASS: {
            EDITORIAL: "EDITORIAL",
            UTILITY: "UTILITY",
        }
    },
    EFFECT: {
        CLASS: "EFFECT",
        SUBCLASS: {
            SHADOW: "SHADOW",
            GRID: "GRID",
            BLUR: "BLUR"
        }
    }
})

// TYPE describes how the token is used. 
// (Backgrounds, Text, Icons, Borders)
const TYPE = Object.freeze({
    BKG: "bkg",
    TEXT: "text",
    ICN: "icn",
})

// ITEM describes a component it’s used on. 
// (Button, Modal, Banner, Paper)
const ITEM = Object.freeze({
    FONT: "text",
    ICN: "icn",
    BTN: "btn"
})

module.exports = { 
    SCHEMA, 
    ENV, 
    TYPE, 
    ITEM, 
    DOMAIN: ENV.DOMAIN,
    COLOR: CLASSES.COLOR,
    MODE: CLASSES.COLOR.MODE,
    FONT: CLASSES.FONT,
    DIMENSION: CLASSES.DIMENSION
}