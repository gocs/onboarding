migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.createRule = "@request.auth.id = poster.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.createRule = null

  return dao.saveCollection(collection)
})
