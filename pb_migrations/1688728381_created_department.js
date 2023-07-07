migrate((db) => {
  const collection = new Collection({
    "id": "tczctsrt4ph2vnv",
    "created": "2023-07-07 11:13:01.197Z",
    "updated": "2023-07-07 11:13:01.197Z",
    "name": "department",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nb9w0df3",
        "name": "name",
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
        "id": "igcy8zfg",
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
  const collection = dao.findCollectionByNameOrId("tczctsrt4ph2vnv");

  return dao.deleteCollection(collection);
})
