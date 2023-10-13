const { assignSchema } = require('../cti+/mapper');

test('Token defined in schema is found and assigned the schema', () => {
    assignSchema(token)
    expect(token).toStrictEqual(expected);
});

const token = {
    '$schema': {
        key: null,
        name: null,
        route: 'color.palette.primary.primary400',
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

const expected = {
    '$schema': {
        key: 'PALETTEPRIMARY400',
        name: 'fang-palette-primary-400',
        route: 'color.palette.primary.primary400',
        mapped: true,
        domain: 'fang',
        brand: 'appl',
        subbrand: null,
        class: 'COLOR',
        subclass: 'PALETTE',
        mode: null,
        taxonomy: {
            domain: 'fang',
            category: 'palette',
            type: null,
            item: null,
            subitem: null,
            variant: 'primary',
            state: '400',
            context: null
        }
    }
}