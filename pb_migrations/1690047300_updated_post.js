migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

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
      "mimeTypes": [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.ms-excel",
        "application/vnd.ms-powerpoint",
        "application/pdf",
        "image/jpeg",
        "image/vnd.mozilla.apng",
        "image/png",
        "application/ogg",
        "image/vnd.adobe.photoshop",
        "application/msword",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/x-icon",
        "audio/mpeg",
        "video/mpeg",
        "video/quicktime",
        "video/mp4",
        "video/webm",
        "video/x-matroska",
        "audio/mp4",
        "font/ttf",
        "font/otf",
        "font/woff2",
        "font/woff",
        "text/plain",
        "text/csv"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u")

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
})
