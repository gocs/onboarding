migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  collection.listRule = null

  return dao.saveCollection(collection)
})
