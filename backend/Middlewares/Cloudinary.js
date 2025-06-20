const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log(file);
		cb(null, "uploads/");
	}, filename: (req, file, cb) => {
		math to string
		cb(null, "rachidfile" + path.extname(file.originalname));
	}
})

const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
		if (allowedTypes.includes(file.mimetype))
			cb(null, true);
		else {
			req.errmsg = "file uppload err";
			cb(new Error(), false);
		}
	},
	limits: {
		fileSize: 12 * 1024 * 1024
	}
});
// /---------------

module.exports = { upload };

app.post('/', upload.single('file'), (req, res) => {
	console.log(req.file);
	res.json({ QueryDone: true });

})
