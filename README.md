# Api Mairie

Api Mairie est une API qui gère les alertes, voiries, travaux, etc..., des citoyens d'une ville.

Dedans, le citoyen peut :

    - se créer un compte
    - se connecter à son compte
    - modifier ses informations de compte
    - supprimer son compte
    - envoyer un formulaire d'alerte avec une photo
    - voir la liste de ses alertes
    - supprimer ses alertes.

Le responsable de service a les mêmes possibilités que le citoyen, mais peut en plus : - accèder à la base des données utilisateurs selon son service - accèder aux reports d'alerte qui correspondent à son service - noter l'avancement du traitement des alertes.

L'administrateur a également tous les droits cités ci-dessus mais a en plus : - l'accès à toutes les données utilisateurs - le droit de déterminer des rôles aux responsables des différents services.

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

# Secret JWT Key & Lifetime
JWT_SECRET = "SECRET_KEY"
# JWT LIFETIME of <time> hours in milliseconds
JWT_LIFETIME = 0

# SALT for password hashing
SALT = 10

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

Téléchargez l'application Insomnia, copiez le texte JSON ci-dessous et collez-le dans la barre URL d'Insomnia :

```json
{
	"_type": "export",
	"__export_format": 4,
	"__export_date": "2021-12-21T15:34:18.691Z",
	"__export_source": "insomnia.desktop.app:v2021.7.2",
	"resources": [
		{
			"_id": "req_dd087a5af91545fabbc2cec0705ab8d6",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640100634400,
			"created": 1639736032931,
			"url": "http://localhost:3500/api/v1/users/register",
			"name": "UserSignUp",
			"description": "",
			"method": "POST",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"lastName\": \"Simon\",\n\t\"firstName\": \"Cussonnait\",\n\t\"userAddress\": \"12 rue de l'horloge sale\",\n\t\"postCode\": \"62100\",\n\t\"city\": \"lheureestgrave\",\n\t\"email\": \"simon@ducon.fr\",\n\t\"phone\": \"0612343445\",\n\t\"password\": \"123!\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_78e3c072b5094bce91ae17c41f8f2c93"
				}
			],
			"authentication": {},
			"metaSortKey": -1639729736675,
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
			"_id": "req_ca62205564484df1b33066e138380e6e",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640100414023,
			"created": 1639729569780,
			"url": "http://localhost:3500/api/v1/users/login",
			"name": "userLogin",
			"description": "",
			"method": "POST",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"email\": \"simon@joie.fr\",\n\t\"password\": \"1234!\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_78e3c072b5094bce91ae17c41f8f2c93"
				}
			],
			"authentication": { "type": "bearer", "token": "", "disabled": false },
			"metaSortKey": -1639729736662.5,
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
			"_id": "req_5fcd3e2ae7624b60af28f215347caa07",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640100553083,
			"created": 1639729690784,
			"url": "http://localhost:3500/api/v1/users/update",
			"name": "updateUser",
			"description": "",
			"method": "PUT",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\n\t\"lastName\": \"simone\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_750dd71dcf184541b5805b342438f78c"
				}
			],
			"authentication": {
				"type": "bearer",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMxZGEzOWJhNWNkYjE1MjBhZGI3ZGIiLCJpYXQiOjE2NDAwOTQzMTF9.5fMnWKiQ8xnpLdplj-Z5k9A69b-HjFUDdlHhE97HYJA",
				"prefix": ""
			},
			"metaSortKey": -1639729736650,
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
			"_id": "req_6db448de5b4b41a39a54f1acd2021ea9",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640099763964,
			"created": 1639729636060,
			"url": "http://localhost:3500/api/v1/users/delete",
			"name": "delete user",
			"description": "",
			"method": "DELETE",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"_id\": \"61c0610c78cb84023ef95a96\",\n\t\"email\": \"bob@plop.fr\",\n\t\"password\": \"bobquifaitdespizza12!\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_2f1c1608a40e482ba28d94970c3809f8"
				}
			],
			"authentication": {
				"type": "bearer",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMwNjEwYzc4Y2I4NDAyM2VmOTVhOTYiLCJpYXQiOjE2NDAwMDIzODh9.pcL__S2t3vd-He7VoN_MfaWma5g7DkIpYdDt_7RGd_Y"
			},
			"metaSortKey": -1639729736637.5,
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
			"_id": "req_6922292fb7de465db00534b150640f25",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640100354549,
			"created": 1640005428188,
			"url": "http://localhost:3500/api/v1/users/logout",
			"name": "user logout",
			"description": "",
			"method": "GET",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"email\": \"simon@ducon.fr\",\n\t\"password\": \"123!\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_35d53569ac5a4bc38551a55f0fad737e"
				}
			],
			"authentication": {
				"type": "bearer",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMwNjEwYzc4Y2I4NDAyM2VmOTVhOTYiLCJpYXQiOjE2NDAwMDIzODh9.pcL__S2t3vd-He7VoN_MfaWma5g7DkIpYdDt_7RGd_Y"
			},
			"metaSortKey": -1639729736631.25,
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
			"_id": "req_8909a76a443a439680f2d4af94dc4300",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640099768398,
			"created": 1639729736625,
			"url": "http://localhost:3500/api/v1/users/me",
			"name": "get one user",
			"description": "",
			"method": "GET",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"_id\": \"61bb151cb9289d8449a8d4d1\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_590805a40db34c82805c662da87778d2"
				}
			],
			"authentication": {
				"type": "bearer",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMwYjA2MDc0MDkyZjQ4YTZjNWI5ZDMiLCJpYXQiOjE2NDAwODc3NDJ9.1E2LuSbfPz5Llra_R-1vhDxzJhhUlLV2nnUqiSkX4Nk"
			},
			"metaSortKey": -1639729736625,
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
			"_id": "req_730a75a1169043b1bc35644128d40eb7",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640092045493,
			"created": 1639729593639,
			"url": "http://localhost:3500/api/v1/reports",
			"name": "get allUsers",
			"description": "",
			"method": "GET",
			"body": {},
			"parameters": [],
			"headers": [],
			"authentication": {
				"type": "bearer",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMwYjA2MDc0MDkyZjQ4YTZjNWI5ZDMiLCJpYXQiOjE2NDAwODc3NDJ9.1E2LuSbfPz5Llra_R-1vhDxzJhhUlLV2nnUqiSkX4Nk"
			},
			"metaSortKey": -1639729725164.75,
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
			"_id": "req_1540524b1e9f4b1ba914633162bd199b",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640079254996,
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
			"metaSortKey": -1639729719434.625,
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
			"_id": "req_ac9c5d6fe10145c39d6e870783078ef0",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1640099778329,
			"created": 1640092198001,
			"url": "http://localhost:3500/api/v1/reports/:firstName",
			"name": "get one report",
			"description": "",
			"method": "GET",
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"firstName\": \"Jean de la Rosette de Robespierre\"\n}"
			},
			"parameters": [],
			"headers": [
				{
					"name": "Content-Type",
					"value": "application/json",
					"id": "pair_630500077c4b43ec91299964bc758355"
				}
			],
			"authentication": {},
			"metaSortKey": -1639409252087.0625,
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
			"_id": "req_3f09c610cfc64415bf06f6f681a1b1df",
			"parentId": "fld_59dd3e6524234ce397b020f603830a9b",
			"modified": 1639738683742,
			"created": 1639738599206,
			"url": "http://localhost:3500/api/v1/reports",
			"name": "getAllReports",
			"description": "",
			"method": "GET",
			"body": {},
			"parameters": [],
			"headers": [],
			"authentication": {},
			"metaSortKey": -1639088784739.5,
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
			"modified": 1640099724803,
			"created": 1636472575738,
			"name": "Default Jar",
			"cookies": [
				{
					"key": "connect.sid",
					"value": "s%3A5bNYd9sMlIZYza_7dVkNLp59-iMAf9fx.95XpbPutZEdWywlctmBzlLuGN%2Fz75bHRd1Ofljbnnbk",
					"domain": "localhost",
					"path": "/",
					"httpOnly": true,
					"hostOnly": true,
					"creation": "2021-12-17T10:54:01.397Z",
					"lastAccessed": "2021-12-21T15:15:24.803Z",
					"id": "35152175823207954"
				}
			],
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
