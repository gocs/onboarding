migrate((db) => {
  const collection = new Collection({
    "id": "3cnozh9eazxmdsa",
    "created": "2023-07-11 14:19:22.635Z",
    "updated": "2023-07-11 14:19:22.635Z",
    "name": "newsletter",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "phl610va",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
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
  const collection = dao.findCollectionByNameOrId("3cnozh9eazxmdsa");

  return dao.deleteCollection(collection);
})
