function createSchema(meta, taxonomy) {
    let schema = {...meta}

    const domain =  schema.domain.toLowerCase()
    const category = !schema.subclass ? schema.class.toLowerCase() : schema.subclass.toLowerCase()

    if (!taxonomy.key) {
        schema = {key: createKey({category: category, ...taxonomy}), name: null, route: null, ...schema}
    } else {
        schema = {key: taxonomy.key, name: null, route: null, ...schema}
        delete taxonomy.key
    }

    schema.taxonomy = {domain: domain, category: category, ...taxonomy}
    schema.name = createName(schema.taxonomy)

    return schema
}

const createName = (taxonomy) => {
    // Let's make this simpler...
    const dynamics = [taxonomy.domain, taxonomy.category, taxonomy.type, taxonomy.item, taxonomy.variant, taxonomy.subitem, taxonomy.state, taxonomy.context]
    const result = dynamics.filter(dynamic => dynamic).join('-').toLowerCase()
    return result
}

const createKey = (taxonomy) => {
    if (taxonomy.map) {
        const result = taxonomy.map.toUpperCase()
        return result
    } else {
        const dynamics = [taxonomy.category, taxonomy.type, taxonomy.item, taxonomy.variant, taxonomy.subitem, taxonomy.state, taxonomy.context]
        const result = dynamics.filter(n => n).join('').toUpperCase()
        return result
    }
}

module.exports = { createSchema }