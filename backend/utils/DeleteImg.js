const path = require('path');

const del = (image) => {
	fs.unlink(path.join(process.cwd(), image), (err) => {
		if (err)
			console.log(err);
	})
};

module.exports = del;