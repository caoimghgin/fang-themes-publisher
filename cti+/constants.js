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
    SPACING: "spacing",
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
    FONT: "txt",
    ICN: "icn",
})

const SUBCLASS = Object.freeze({
    PALETTE: "palette",
    CONTEXTUAL: "contextual",
})

module.exports = { CTI_SCHEMA, CLASS, SUBCLASS, CATEGORY, ITEM }