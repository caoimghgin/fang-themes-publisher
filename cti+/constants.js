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

module.exports = { CTI_SCHEMA, CLASS }