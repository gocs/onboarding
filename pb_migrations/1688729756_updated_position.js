migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5slnzptl",
    "name": "branch",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "au",
        "ph"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5slnzptl",
    "name": "branch",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "au",
        "ph"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
