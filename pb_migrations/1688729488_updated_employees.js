migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // remove
  collection.schema.removeField("iprc8vjo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jd2vjmhc",
    "name": "phone",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iprc8vjo",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("jd2vjmhc")

  return dao.saveCollection(collection)
})
