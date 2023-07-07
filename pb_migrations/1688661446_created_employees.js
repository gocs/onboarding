migrate((db) => {
  const collection = new Collection({
    "id": "vfsg90xgwj2wbd6",
    "created": "2023-07-06 16:37:26.217Z",
    "updated": "2023-07-06 16:37:26.217Z",
    "name": "employees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vvbox3ku",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "otd2xofp",
        "name": "firstname",
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
        "id": "qtzym6tk",
        "name": "lastname",
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
        "id": "8nxukuu3",
        "name": "position",
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
        "id": "vse7jf3o",
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
      },
      {
        "system": false,
        "id": "8kap0xr5",
        "name": "role",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "admin",
            "head",
            "employee"
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
  const collection = dao.findCollectionByNameOrId("vfsg90xgwj2wbd6");

  return dao.deleteCollection(collection);
})
