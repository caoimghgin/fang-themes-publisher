const { parseMode } = require('../cti+/utilities');
const { MODE } = require('../cti+/constants')

// To be recognized as dark or light mode in the system the token $schema
// must satisfy these tests...
// 
//   a) Must be a contextual token (not palette, or anything else)
//   b) One item in route (minus name of token) must begin, end or be 'dark'
//   c) If contextual without 'dark', it is assumed 'light' mode.
//

test('Palette token $schema.node is MODE.NULL', () => {
  const token = token_palette
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.NULL);
});

test('Contextual token with "dark" in route returns MODE.DARK', () => {
  const token = token_paper_dark
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.DARK);
});

test('Contextual token with "dark-mode" in route returns MODE.DARK', () => {
  const token = token_paper_darkMode
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.DARK);
});

test('Contextual token with "mode-dark" in route returns MODE.DARK', () => {
  const token = token_paper_darkMode_rev
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.DARK);
});

test('Contextual token with "this-dark-mode" in route returns MODE.LIGHT', () => {
  const token = token_paper_should_be_light
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.LIGHT);
});

test('Contextual token with "light" in route returns MODE.LIGHT', () => {
  const token = token_paper_lightMode
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.LIGHT);
});

test('Contextual token without "dark" in route returns MODE.LIGHT', () => {
  const token = token_paper_noMode
  parseMode(token)
  expect(token.$schema.mode).toBe(MODE.LIGHT);
});

// Stub tokens

const token_palette = {
  '$schema': {
    key: 'PAPER',
    name: 'fang-paper',
    route: 'color.contextual.dark-mode.paper.~',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PALETTE',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}

const token_paper_darkMode = {
    '$schema': {
      key: 'PAPER',
      name: 'fang-paper',
      route: 'color.contextual.dark-mode.paper.~',
      mapped: true,
      domain: 'fang',
      brand: null,
      subbrand: null,
      class: 'COLOR',
      subclass: 'PAPER',
      mode: null,
      taxonomy: {
        domain: 'fang',
        category: 'paper',
        type: null,
        item: null,
        subitem: null,
        variant: null,
        state: null,
        context: null
      },
    }
}

const token_paper_lightMode = {
  '$schema': {
    key: 'PAPER',
    name: 'fang-paper',
    route: 'color.contextual.light-mode.paper.~',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}

const token_paper_darkMode_rev = {
  '$schema': {
    key: 'PAPERPP',
    name: 'fang-paper',
    route: 'color.contextual.mode-dark.paper.pp',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}

const token_paper_noMode = {
  '$schema': {
    key: 'PAPER',
    name: 'fang-paper',
    route: 'color.contextual.foo.bar.paper.~',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}

const token_paper_dark = {
  '$schema': {
    key: 'PAPER',
    name: 'fang-paper',
    route: 'color.contextual.dark.paper.~',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}

const token_paper_should_be_light = {
  '$schema': {
    key: 'PAPER',
    name: 'fang-paper',
    route: 'color.contextual.this-dark-mode.paper.~',
    mapped: true,
    domain: 'fang',
    brand: null,
    subbrand: null,
    class: 'COLOR',
    subclass: 'PAPER',
    mode: null,
    taxonomy: {
      domain: 'fang',
      category: 'paper',
      type: null,
      item: null,
      subitem: null,
      variant: null,
      state: null,
      context: null
    },
  }
}