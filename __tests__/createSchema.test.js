const { assignSchema, getSchemas } = require('../cti+/mapper');
const { schema } = require('../cti+/schemas/helpers')
const { ENV, COLOR } = require('../cti+/constants')

test('Create Schema', () => {
    const result = INK()
    expect(result).toStrictEqual(expected);
});

const INK = () => {
    const meta = { domain: ENV.DOMAIN.SYSTEM, class: COLOR.CLASS, subclass: COLOR.SUBCLASS.CONTEXTUAL.INK }
    return [
        schema(meta, { type: null, item: null, variant: "PRIMARY", subitem: null, state: null, context: null }),
    ]
}

const expected = [
    {
      key: 'INKPRIMARY',
      name: 'fang-ink-primary',
      route: undefined,
      mapped: false,
      domain: 'fang',
      brand: null,
      subbrand: null,
      class: 'COLOR',
      subclass: 'INK',
      mode: undefined,
      taxonomy: {
        domain: 'fang',
        category: 'ink',
        type: null,
        item: null,
        subitem: null,
        variant: "PRIMARY",
        state: null,
        context: null
      }
    }
  ]