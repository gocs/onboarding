migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.viewRule = "poster.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
