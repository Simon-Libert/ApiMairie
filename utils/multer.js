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
	filename: function (req, file, cb) {
		const ext = file.originalname.split('.')[1]; // récupérer l'extension du fichier
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '.' + ext;
		cb(null, file.fieldname + '-' + uniqueSuffix);
	},
});

const fileFilter = (req, file, cb) => {
	console.log(file);
	const filetypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
	if (filetypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(new Error('Seul le format image est supporté.'), false);
	}
};

const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter });

export default upload.single('image');
