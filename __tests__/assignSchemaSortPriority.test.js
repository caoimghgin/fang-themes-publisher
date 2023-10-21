const { assignSchema, getSchemas } = require('../cti+/mapper');
const { schema } = require('../cti+/schemas/helpers')
const { ENV, COLOR } = require('../cti+/constants')

describe("Token ending with same characters such as 'ink', 'link', 'shrink' should be assigned a schema sorted by length priority", () => {

    let schemas = []

    beforeAll(() => {
        // Insert schemas with identical ending characters for testing
        schemas = [...getSchemas(), ...INK(), ...LINK(), ...HOODWINK(), ...SHRINK()]
    });

    test('Expect token ending with INK to map to correct $schema', () => {
        assignSchema(inkToken, schemas)
        expect(inkToken).toStrictEqual(inkExpected)
    })

    test('Expect token ending with INK.P to map to correct $schema', () => {
        assignSchema(inkPToken, schemas)
        expect(inkPToken).toStrictEqual(inkPExpected)
    })

    test('Expect token ending with LINK.P to map to correct $schema', () => {
        assignSchema(linkPToken, schemas)
        expect(linkPToken).toStrictEqual(linkPExpected)
    })

    test('Expect token ending with LINK to map to correct $schema', () => {
        assignSchema(linkToken, schemas)
        expect(linkToken).toStrictEqual(linkExpected)
    })

    test('Expect token ending with HOODWINK to map to correct $schema', () => {
        assignSchema(hoodwinkToken, schemas)
        expect(hoodwinkToken).toStrictEqual(hoodwinkExpected)
    });

    test('Expect token ending with SHRINK to map to correct $schema', () => {
        assignSchema(shrinkToken, schemas)
        expect(shrinkToken).toStrictEqual(shrinkExpected)
    })

})

const INK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.INK }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "ff", context: null }),

    ]
}

const LINK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: "LINK" }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "pp", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "p", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "f", context: null }),
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: "ff", context: null }),    ]
}

const HOODWINK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: "HOODWINK" }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
    ]
}

const SHRINK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: "SHRINK" }
    return [
        schema(meta, { type: null, item: null, variant: null, subitem: null, state: null, context: null }),
    ]
}

const inkToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.ink',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const inkPToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.ink.p',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const linkToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.something.something.link',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const linkPToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.something.something.linkp',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const shrinkToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.my.awesomeshrink',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const hoodwinkToken = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.hoodwink',
        mapped: false,
        domain: null,
        brand: 'appl',
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
            context: null
        }
    }
}

const hoodwinkExpected = {
    '$schema': {
        key: 'HOODWINK',
        name: 'fang-hoodwink',
        route: 'color.palette.primary.hoodwink',
        mapped: true,
        domain: 'fang',
        brand: 'appl',
        subbrand: null,
        class: 'COLOR',
        subclass: 'HOODWINK',
        mode: null,
        taxonomy: {
            domain: 'fang',
            category: 'hoodwink',
            type: null,
            item: null,
            subitem: null,
            variant: null,
            state: null,
            context: null
        }
    }
}

const inkExpected = {
    '$schema': {
        key: 'INK',
        name: 'fang-ink',
        route: 'color.palette.primary.ink',
        mapped: true,
        domain: 'fang',
        brand: 'appl',
        subbrand: null,
        class: 'COLOR',
        subclass: 'INK',
        mode: 'LIGHT',
        taxonomy: {
            domain: 'fang',
            category: 'ink',
            type: null,
            item: null,
            subitem: null,
            variant: null,
            state: null,
            context: null
        }
    }
}

const inkPExpected =       {
    '$schema': {
      key: 'INKP',
      name: 'fang-ink-p',
      route: 'color.palette.primary.ink.p',
      mapped: true,
      domain: 'fang',
      brand: 'appl',
      subbrand: null,
      class: 'COLOR',
      subclass: 'INK',
      mode: 'LIGHT',
      taxonomy: {
        domain: 'fang',
        category: 'ink',
        type: null,
        item: null,
        subitem: null,
        variant: null,
        state: 'p',
        context: null
      }
    }
  }

const linkExpected = {
    '$schema': {
        key: 'LINK',
        name: 'fang-link',
        route: 'color.palette.primary.something.something.link',
        mapped: true,
        domain: 'fang',
        brand: 'appl',
        subbrand: null,
        class: 'COLOR',
        subclass: 'LINK',
        mode: null,
        taxonomy: {
            domain: 'fang',
            category: 'link',
            type: null,
            item: null,
            subitem: null,
            variant: null,
            state: null,
            context: null
        }
    }
}

const shrinkExpected = {
    '$schema': {
        key: 'SHRINK',
        name: 'fang-shrink',
        route: 'color.palette.primary.my.awesomeshrink',
        mapped: true,
        domain: 'fang',
        brand: 'appl',
        subbrand: null,
        class: 'COLOR',
        subclass: 'SHRINK',
        mode: null,
        taxonomy: {
            domain: 'fang',
            category: 'shrink',
            type: null,
            item: null,
            subitem: null,
            variant: null,
            state: null,
            context: null
        }
    }
}

const linkPExpected = {
    '$schema': {
      key: 'LINKP',
      name: 'fang-link-p',
      route: 'color.palette.primary.something.something.linkp',
      mapped: true,
      domain: 'fang',
      brand: 'appl',
      subbrand: null,
      class: 'COLOR',
      subclass: 'LINK',
      mode: null,
      taxonomy: {
        domain: 'fang',
        category: 'link',
        type: null,
        item: null,
        subitem: null,
        variant: null,
        state: 'p',
        context: null
      }
    }
  }