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

const CLASS = Object.freeze({
    COLOR: "color",
    TYPOGRAPHY: "typography",
    SIZE: "size",
    SHADOOW: "shadow",
})

const CATEGORY = Object.freeze({
    PALETTE: "palette",
    COLOR: "color",
    FONT: "font",
    SPACE: "space",
    SIZE: "size",
    SHADOW: "shadow"
})

const ITEM = Object.freeze({
    BKG: "bkg",
    FONT: "text",
    ICN: "icn",
})

const SUBCLASS = Object.freeze({
    PALETTE: "palette",
    CONTEXTUAL: "contextual",
})

const MODE =  Object.freeze({
    LIGHT: "light",
    DARK: "dark",
})

module.exports = { CTI_SCHEMA, CLASS, SUBCLASS, MODE, CATEGORY, ITEM }