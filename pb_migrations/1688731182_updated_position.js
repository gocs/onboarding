migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwxxfdvm",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwxxfdvm",
    "name": "field",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
