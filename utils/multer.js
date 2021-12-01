import multer from 'multer';

// multer config pour imports img
//Get the file name and extension with multer
export default multer({
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
		if (
			file.mimetype === 'image/png' ||
			file.mimetype === 'image/jpg' ||
			file.mimetype === 'image/jpeg'
		) {
			cb(null, true);
		} else {
			cb(
				{
					message: 'Format non supporté.',
				},
				false
			);
		}
	},
}).single('file');
