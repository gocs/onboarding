migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxkqffcz",
    "name": "is_employed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // remove
  collection.schema.removeField("xxkqffcz")

  return dao.saveCollection(collection)
})
