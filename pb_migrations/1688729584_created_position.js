migrate((db) => {
  const collection = new Collection({
    "id": "c7by9fvaanjxuye",
    "created": "2023-07-07 11:33:04.962Z",
    "updated": "2023-07-07 11:33:04.962Z",
    "name": "position",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rwxxfdvm",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5slnzptl",
        "name": "branch",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "au",
            "ph"
          ]
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
  const collection = dao.findCollectionByNameOrId("c7by9fvaanjxuye");

  return dao.deleteCollection(collection);
})
