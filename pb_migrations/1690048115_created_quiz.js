migrate((db) => {
  const collection = new Collection({
    "id": "w75x26qhuk2nkth",
    "created": "2023-07-22 17:48:35.901Z",
    "updated": "2023-07-22 17:48:35.901Z",
    "name": "quiz",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dkxsc0b8",
        "name": "question",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "makyvpdr",
        "name": "answer",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("w75x26qhuk2nkth");

  return dao.deleteCollection(collection);
})
