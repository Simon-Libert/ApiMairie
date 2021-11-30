import multer from 'multer';
import path from 'path';

// multer config pour imports img
export default multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== '.jgp' && ext !== '.png' && ext !== '.jpg' && ext !== '.gif') {
			cb(new Error('File type not supported'), false);
			return;
		}
		cb(null, false);
	},
});
