import path from "path";

export default (image) => {
	fs.unlink(path.join(process.cwd(), image), (err) => {
		if (err)
			console.log(err);
	})
};