migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fszdyl1s",
    "name": "middle_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2oamkv4j",
    "name": "birthday",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcoeskwg",
    "name": "is_active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "12cv3bko",
    "name": "department",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "tczctsrt4ph2vnv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crhhduww",
    "name": "personal_email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vraxjhii",
    "name": "street",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3hkkhari",
    "name": "city",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "conxptsn",
    "name": "province_state",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0a5bzjck",
    "name": "postal_code",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q5asckek",
    "name": "country",
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

  // remove
  collection.schema.removeField("fszdyl1s")

  // remove
  collection.schema.removeField("2oamkv4j")

  // remove
  collection.schema.removeField("fcoeskwg")

  // remove
  collection.schema.removeField("12cv3bko")

  // remove
  collection.schema.removeField("iprc8vjo")

  // remove
  collection.schema.removeField("crhhduww")

  // remove
  collection.schema.removeField("vraxjhii")

  // remove
  collection.schema.removeField("3hkkhari")

  // remove
  collection.schema.removeField("conxptsn")

  // remove
  collection.schema.removeField("0a5bzjck")

  // remove
  collection.schema.removeField("q5asckek")

  return dao.saveCollection(collection)
})
