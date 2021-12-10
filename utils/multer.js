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
/* export default multer({
	storage: multer.diskStorage({
		filename: (req, file, cb) => {
			const fileExt = file.originalname.split('.').pop();
			const fileName = `${new Date().getTime()}.${fileExt}`;
			cb(null, fileName);
		},
	}),
	limits: {
		fieldNameSize: 100,
		fileSize: 1024 * 1024 * 5,
	},
	//on filtre les extensions à passer
	fileFilter: (req, file, cb) => {
		if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
			cb(new Error('Seul le format image est supporté.'), false);
			return;
		}
		cb(null, true);
	},
}).single('file'); */

import multer from 'multer';

const imageStorage = multer.diskStorage({
	// Destination to store image
	destination: 'images',
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
		// file.fieldname is name of the field (image)
		// path.extname get the uploaded file extension
	},
});

const imageUpload = multer({
	storage: imageStorage,
	limits: {
		fileSize: 1000000, // 1000000 Bytes = 1 MB
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
			// upload only png and jpg format
			return cb(new Error('Please upload a Image'));
		}
		cb(undefined, true);
	},
});

export default { imageUpload, imageStorage };
