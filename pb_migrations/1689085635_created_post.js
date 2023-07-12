migrate((db) => {
  const collection = new Collection({
    "id": "27vkheyfmc1ff3u",
    "created": "2023-07-11 14:27:15.136Z",
    "updated": "2023-07-11 14:27:15.136Z",
    "name": "post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rrm3svy7",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
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
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_y9MizKg` ON `post` (\n  `content`,\n  `attachment`\n) WHERE `content` != \"\" OR `attachment` != \"\""
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("27vkheyfmc1ff3u");

  return dao.deleteCollection(collection);
})
