
const { SCHEMA } = require('../constants')
const { routeCleaner } = require('../utilities')

function schema(meta, taxonomy) {

    let result = SCHEMA()

    result.taxonomy.domain = meta.domain.toLowerCase()
    result.taxonomy.category = createCategory(meta)
    result.taxonomy.type = taxonomy.type
    result.taxonomy.item = taxonomy.item
    result.taxonomy.variant = taxonomy.variant
    result.taxonomy.subitem = taxonomy.subitem
    result.taxonomy.state = taxonomy.state
    result.taxonomy.context = taxonomy.context

    result.key = taxonomy.key ? createKey(taxonomy) : createKey(result.taxonomy)
    result.name = createName(result.taxonomy)
    result.route = meta.route
    result.domain = meta.domain.toLowerCase()
    result.subdomain = meta.subdomain
    result.class = meta.class
    result.subclass = meta.subclass
    result.mode = meta.mode

    delete result.taxonomy.key
    console.log(result)
    return result
}

const createName = (taxonomy) => {
    const dynamics = [
        taxonomy.domain,
        taxonomy.category,
        taxonomy.type,
        taxonomy.item,
        taxonomy.variant,
        taxonomy.subitem,
        taxonomy.state,
        taxonomy.context
    ]
    const result = dynamics.filter(dynamic => dynamic).join('-').toLowerCase()
    return result
}

const createCategory = (meta) => {
    return !meta.subclass ? meta.class.toLowerCase() : meta.subclass.toLowerCase()
}

const createKey = (taxonomy) => {
    if (taxonomy.key) return routeCleaner(taxonomy.key)
    const dynamics = [taxonomy.category, taxonomy.type, taxonomy.item, taxonomy.variant, taxonomy.subitem, taxonomy.state, taxonomy.context]
    return routeCleaner(dynamics.filter(n => n).join(''))
}

module.exports = { schema }