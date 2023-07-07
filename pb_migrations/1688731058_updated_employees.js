migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // remove
  collection.schema.removeField("8nxukuu3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "89mjn1id",
    "name": "position",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "c7by9fvaanjxuye",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8nxukuu3",
    "name": "position",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("89mjn1id")

  return dao.saveCollection(collection)
})
