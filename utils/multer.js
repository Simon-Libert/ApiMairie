//essai 2.0
/* export default multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/(jpg||jpeg||png||gif)$i/)) {
			cb(new Error('Seul le format image est supporté.'), false);
			return;
		}
		cb(null, true);
	},
}); */

// multer config pour imports img
//Get the file name and extension with multer

import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'photos/');
	},
	filename: function (req, file, cb) {
		const ext = file.originalname.split('.')[1]; // récupérer l'extension du fichier
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '.' + ext;
		cb(null, file.fieldname + '-' + uniqueSuffix);
	},
	filefilter: function (req, file, cb) {
		if (!file.mimetype.match(/(jpg||jpeg||png||gif)$i/)) {
			cb(new Error('Seul le format image est supporté.'), false);
			return;
		}
		cb(null, true);
	},
});

const upload = multer({ storage: storage });

export default upload;
