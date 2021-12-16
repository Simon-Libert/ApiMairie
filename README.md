# Api Mairie

Api Mairie est une API qui gère les alertes, voiries, travaux, etc..., des citoyens d'une ville.

## Author

Simon Libert <simon_libert@yahoo.fr>

## Demo

http://localhost:3500/api/v1/reports

## Installation locale

Pour faire fonctionner l'api :

```
npm install
npm start
```

## Environment Variables

Pour faire fonctionner l'application, faire un copier/coller du fichier .env.exemple et remplir les variables nécessaires :

```sh
APP_PORT = 3500

MONGO_URI = "mongodb+srv://<username>:<password>@<clusterName>.pqmeh.mongodb.net/<databaseName>?retryWrites=true&w=majority"

EMAIL_HOST = "smtp-mail.exemple.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = "user_email_adress"
EMAIL_HOST_PASSWORD = "password"
EMAIL_USER_ADMIN_TEST = "user_email_admin_adress"

CLOUDINARY_CLOUD_NAME = 'user_name'
CLOUDINARY_API_KEY = 'secret_key'
CLOUDINARY_API_SECRET = 'secret_key'
```

## Test avec Insomnia

Téléchargez l'application Insomnia. Cliquez sur le bouton ci-dessous.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=api_mairie&uri=http%3A%2F%2Flocalhost%3A3500%2Fapi%2Fv1%2Freports)

Ou copiez le texte JSON ci-dessous et collez-le dans la barre URL d'Insomnia :

```json
{
	"_type": "export",
	"__export_format": 4,
	"__export_date": "2021-12-16T15:20:19.486Z",
	"__export_source": "insomnia.desktop.app:v2021.7.2",
	"resources": [
		{
			"_id": "req_1540524b1e9f4b1ba914633162bd199b",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1639666573797,
			"created": 1638875189726,
			"url": "    http://localhost:3500/api/v1/reports",
			"name": "Add reports",
			"description": "",
			"method": "POST",
			"body": {
				"mimeType": "multipart/form-data",
				"params": [
					{
						"name": "image",
						"value": "",
						"id": "pair_5df21024adad4f6d9634c56a901505ea",
						"type": "file",
						"fileName": "C:\\Users\\Simon\\Pictures\\fa12dcc261f21d0658730120382d7e3e.jpg",
						"disabled": false
					},
					{
						"id": "pair_50db65389b03471eadd2aedea3a8b31a",
						"name": "type",
						"value": "voirie",
						"description": "",
						"type": "text",
						"multiline": false
					},
					{
						"id": "pair_3796dcb14eeb483494242bbd05f3a1b9",
						"name": "description",
						"value": "Mon gros lourd de voisin a uriné sur ma pelouse et ma femme.",
						"description": "",
						"type": "text",
						"multiline": false
					},
					{
						"id": "pair_792e9808142c41f1a83205837aee79c6",
						"name": "date",
						"value": "05/12/2021",
						"description": ""
					},
					{
						"id": "pair_70f4aaf89ba1422da1584460c3e60588",
						"name": "time",
						"value": "12H55",
						"description": ""
					},
					{
						"id": "pair_2971493cf5e241c8bf861a561349911b",
						"name": "alertAddress",
						"value": "23 rue du bluff, 00008 Magneto sur bande",
						"description": ""
					},
					{
						"id": "pair_8a666311ee5e4a869323a3279cc5b14d",
						"name": "lastName",
						"value": "JeanJean",
						"description": ""
					},
					{
						"id": "pair_ac79e9ae652649d5aa6529a57e70710f",
						"name": "firstName",
						"value": "LelebèguedelaFonfontaine",
						"description": ""
					},
					{
						"id": "pair_8e0ae9d5dc3843b9a31da842a07e60d4",
						"name": "userAddress",
						"value": "2 bis rue des lopettes",
						"description": ""
					},
					{
						"id": "pair_0b4775e4d6bd4080a9c19beed7b5fa03",
						"name": "postCode",
						"value": "00008 ",
						"description": ""
					},
					{
						"id": "pair_4f6ca9628cb64d01a566de9e5bd09268",
						"name": "city",
						"value": "Magneto sur bande",
						"description": ""
					},
					{
						"id": "pair_02ab3c91a47f482b82dd20522e7e9d0e",
						"name": "phone",
						"value": "06.08.09.66.68",
						"description": ""
					},
					{
						"id": "pair_5875a8571513458883826650018dc79a",
						"name": "email",
						"value": "jeanjean@fallaitpasminviter.fr",
						"description": ""
					},
					{
						"id": "pair_7d39f341cca94ad29101440d01c4e548",
						"name": "video",
						"value": "",
						"description": ""
					}
				]
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "multipart/form-data",
					"id": "pair_3633557d37764d96859ea77734cda021"
				}
			],
			"authentication": {},
			"metaSortKey": -1638875189726,
			"isPrivate": false,
			"settingStoreCookies": true,
			"settingSendCookies": true,
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingFollowRedirects": "global",
			"_type": "request"
		},
		{
			"_id": "fld_59dd3e6524234ce397b020f603830a9b",
			"parentId": "wrk_648ed6de5d8e4e078b848b6ea35acf61",
			"modified": 1638875163003,
			"created": 1638875163003,
			"name": "ApiMairie",
			"description": "",
			"environment": {},
			"environmentPropertyOrder": null,
			"metaSortKey": -1638875163003,
			"_type": "request_group"
		},
		{
			"_id": "wrk_648ed6de5d8e4e078b848b6ea35acf61",
			"parentId": null,
			"modified": 1639651094468,
			"created": 1636472575732,
			"name": "api mairie requête post",
			"description": "",
			"scope": "collection",
			"_type": "workspace"
		},
		{
			"_id": "env_0cb9f0d05c313905e2d9f127d0108d0e055ddcbe",
			"parentId": "wrk_648ed6de5d8e4e078b848b6ea35acf61",
			"modified": 1636472575736,
			"created": 1636472575736,
			"name": "Base Environment",
			"data": {},
			"dataPropertyOrder": null,
			"color": null,
			"isPrivate": false,
			"metaSortKey": 1636472575736,
			"_type": "environment"
		},
		{
			"_id": "jar_0cb9f0d05c313905e2d9f127d0108d0e055ddcbe",
			"parentId": "wrk_648ed6de5d8e4e078b848b6ea35acf61",
			"modified": 1636472575738,
			"created": 1636472575738,
			"name": "Default Jar",
			"cookies": [],
			"_type": "cookie_jar"
		},
		{
			"_id": "spc_c87ac3619d0140408cc2ff02f6014133",
			"parentId": "wrk_648ed6de5d8e4e078b848b6ea35acf61",
			"modified": 1636472575732,
			"created": 1636472575732,
			"fileName": "My Collection",
			"contents": "",
			"contentType": "yaml",
			"_type": "api_spec"
		}
	]
}
```
