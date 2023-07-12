migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.indexes = [
    "CREATE INDEX `idx_y9MizKg` ON `post` (\n  `content`,\n  `attachments`\n) WHERE `content` != \"\" OR `attachments` != \"\""
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kcb34i5n",
    "name": "attachments",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

  collection.indexes = [
    "CREATE INDEX `idx_y9MizKg` ON `post` (\n  `content`,\n  `attachment`\n) WHERE `content` != \"\" OR `attachment` != \"\""
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kcb34i5n",
    "name": "attachment",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
