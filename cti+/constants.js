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
            DEFINITIVE: "DEFINITIVE",   // Brand specific color (non-white-label), not mode specific
            SOCIAL: "SOCIAL",           // Apple, Google, etc...
            CONTEXTUAL: {
                PAPER: "PAPER",         // Background of app
                INK: "INK",             // Typography and icons
                DYE: "DYE",             // Lines, rules
                PAINT: "PAINT",         // Non-interactive backgrounds on canvas
                CHROMA: "CHROMA",       // Interactive backgrounds on components
            }
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