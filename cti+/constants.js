const { ENV } = require("../package.json")

const CTI_SCHEMA = () => {
    return {
        class: null,
        subclass: null,
        mode: null,
        map: null,
        route: null,
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

// These are modeled on the Styles that Figma
// Publishes. I think they should be CLASS definitions

const CLASSES = Object.freeze({
    COLOR:{
        CLASS: "COLOR",
        SUBCLASS: {
            PALETTE: "PALETTE",         // Base semantic colors, not mode specific
            DEFINITIVE: "DEFINITIVE",   // Additional colors, not mode specific
            SOCIAL: "SOCIAL",           // Apple, Google, etc...
            CONTEXTUAL: {
                CANVAS: "CANVAS",       // Background colors of the app
                INK: "INK",             // Typography and icons
                DYE: "DYE",             // Lines, rules
                PAINT: "PAINT",         // Non-interactive backgrounds on canvas
                CHROMA: "CHROMA",       // Interactive backgrounds on components
            }
        },
        MODE: {
            LIGHT: "LIGHT",
            DARK: "DARK"
        }
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

const DIMENSION = Object.freeze({
    CLASS: "DIMENSION",
    SUBCLASS: { 
        SIZE: "SIZE",
        SPACE: "SPACE"
    }
})

const EFFECT = Object.freeze({
    CLASS: "EFFECT",
    SUBCLASS: {
        SHADOW: "SHADOW",
        GRID: "GRID",
        BLUR: "BLUR"
    }
})

const CLASS = Object.freeze({
    COLOR: "color",
    FONT: "font",
    DIMENSION: "dimension",
    SHADOOW: "shadow",
})

const SUBCLASS = Object.freeze({
    PALETTE: "palette",
    CONTEXTUAL: "contextual",
    DEFINITIVE: "definitive",
    SIZE: "size",
    SPACE: "space"
})


const CATEGORY = Object.freeze({
    PALETTE: "palette",
    COLOR: "color",
    FONT: "font",
    SPACE: "space",
    SIZE: "size",
    SHADOW: "shadow"
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
    BKG: "bkg",
    FONT: "text",
    ICN: "icn",
    BTN: "btn"
})

const MODE = Object.freeze({
    LIGHT: "light",
    DARK: "dark",
})

module.exports = { CTI_SCHEMA, ENV, CLASS, SUBCLASS, MODE, CATEGORY, TYPE, ITEM, CLASSES }