const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	}, filename: (req, file, cb) => {
		const filename = Math.random().toString() + path.extname(file.originalname);
		req.filename = filename;
		cb(null, req.filename);
	}
})

const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		if (!file) {
			cb(new Error(), false);
		}
		const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
		if (allowedTypes.includes(file.mimetype))
			cb(null, true);
		else {
			req.errmsg = "image upload err";
			cb(new Error(), false);
		}
	},
	limits: {
		fileSize: 12 * 1024 * 1024
	}
});

// const UploadMiddleware = (req, res, next) => {
// 	upload
// }

// /---------------

// const UploadMiddleware = (req, res, next) => {
// 	upload.single("file");
// 	next();
// }

module.exports = upload.single("image");

// app.post('/', upload.single('file'), (req, res) => {
// 	console.log(req.file);
// 	res.json({ QueryDone: true });

// })
