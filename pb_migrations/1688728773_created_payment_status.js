migrate((db) => {
  const collection = new Collection({
    "id": "30ffv3egouri254",
    "created": "2023-07-07 11:19:33.708Z",
    "updated": "2023-07-07 11:19:33.708Z",
    "name": "payment_status",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmyvymyb",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("30ffv3egouri254");

  return dao.deleteCollection(collection);
})
