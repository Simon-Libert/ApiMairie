import multer from 'multer';

//essai 2.0
export default multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/(jpg||jpeg||png||gif)$i/)) {
			cb(new Error('Seul le format image est supporté.'), false);
			return;
		}
		cb(null, true);
	},
});

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
