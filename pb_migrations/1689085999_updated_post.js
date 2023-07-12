migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2xmu7ssk",
    "name": "poster",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  // remove
  collection.schema.removeField("2xmu7ssk")

  return dao.saveCollection(collection)
})
