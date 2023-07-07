migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tczctsrt4ph2vnv")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tczctsrt4ph2vnv")

  collection.listRule = null

  return dao.saveCollection(collection)
})
