const Commerce = require('@chec/commerce.js')

module.exports = api => {

  const commerce = new Commerce(process.env.GRIDSOME_COMMERCEJS_PUBLICKEY)

  api.loadSource(async actions => {
    console.log('🛒 Fetching products')

    const {
      data: products
    } = await commerce.products.list({
      limit: 200
    })
    const {
      data: categories
    } = await commerce.categories.list()

    const productCollection = actions.addCollection({
      typeName: 'CommercejsProducts',
    })
    const categoriesCollection = actions.addCollection({
      typeName: 'CommercejsCategories',
    })

    for (const item of products) {
      productCollection.addNode(item)
    }

    for (const item of categories) {
      categoriesCollection.addNode(item)
    }

    console.log('✔️ Done fetching products')
  })

  api.onCreateNode((node, collection) => {
    
    if (node.internal.typeName === 'ProductMeta') {
      const vendor = collection._store.createReference('Vendor', node.vendorId)
      return {
        ...node,
        vendor
      }
    }

    if (node.internal.typeName === 'CommercejsProducts') {
      const meta = collection._store.createReference('ProductMeta', node.id)
      return {
        ...node,
        meta
      }
    }

  })

  api.createSchema(({ addSchemaTypes, addSchemaResolvers }) => {
    addSchemaTypes(`
      type CommercejsCategories implements Node @infer {
        products: [CommercejsProducts]
      }
    `)
    addSchemaResolvers({
      CommercejsCategories: {
        products: (parent, args, { store }) => {
          const productsCollection = store.getCollection('CommercejsProducts')
          return productsCollection.data().filter(product => product.categories.some(category => category.id === parent.id))
        }
      }
    })
  })
}