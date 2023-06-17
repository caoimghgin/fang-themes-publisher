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
            variant: null,
            subitem: null,
            state: null,
            context: null,
        }
    }
}

// These are modeled on the Styles that Figma
// Publishes. I think they should be CLASS definitions

const FOO = Object.freeze({
    // EFFECT: -> SHADOOW: "shadow",
    // PAINT: -> COLOR: "color",
    // GRID:
    // TEXT: -> TYPOGRAPHY: "typography",
    // SIZE: -> SIZE: "size",
})

const CLASS = Object.freeze({
    COLOR: "color",
    FONT: "font",
    TYPOGRAPHY: "typography",
    SIZE: "size",
    SHADOOW: "shadow",
})

const SUBCLASS = Object.freeze({
    PALETTE: "palette",
    CONTEXTUAL: "contextual",
    DEFINITIVE: "definitive",
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
    TXT: "text",
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

const MODE =  Object.freeze({
    LIGHT: "light",
    DARK: "dark",
})

module.exports = { CTI_SCHEMA, CLASS, SUBCLASS, MODE, CATEGORY, ITEM }