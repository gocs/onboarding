migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  collection.listRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  collection.listRule = null

  return dao.saveCollection(collection)
})
