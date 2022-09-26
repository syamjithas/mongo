var fs = require('fs');
var path = require('path');

var dumpArr = []
var count = 0;

var updateArr = (res) => {
	count++;
	dumpArr = dumpArr.concat(res)
	if (count == 4) {
		console.log(dumpArr.length)
		fs.writeFile("test.json", JSON.stringify(dumpArr), function (err) {
			if (err) {
				return console.log(err);
			}
		});
	}
}
var readFile = async function () {
	for (let index = 1; index < 5; index++) {
		var filePath = path.join(__dirname, `MOCK/${index}.json`);
		fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
			if (!err) {
				let res = JSON.parse(data)
				updateArr(res);
			} else {
				console.log(err);
			}
		});
	}
}

readFile();



