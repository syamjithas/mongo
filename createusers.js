

const axios = require('axios').default;
const fs = require('fs');

const BASEPATH = "https://dev.minematrimony.app/"


const test = fs.readFileSync(__dirname + '/test.json',
	{ encoding: 'utf8', flag: 'r' });

const dump = JSON.parse(test);


const URLS = {
	"login": {
		method: 'POST',
		path: "/auth/v1/login"
	},
	"validate": {
		method: 'POST',
		path: "/auth/v1/validate/otp"
	},
	"getInfo": {
		method: 'POST',
		path: "/info/v1/get/info"
	},
	"complete_1": {
		method: 'POST',
		path: "user/v1/profile/complete/1"
	},
	"complete_2": {
		method: 'POST',
		path: "user/ v1 / profile / complete / 2"
	},
	"complete_3": {
		method: 'POST',
		path: "user/v1/profile/complete/3"
	},
	"complete_4": {
		method: 'POST',
		path: "user/v1/profile/complete/4"
	},
	"profile": {
		method: 'POST',
		path: "upload/v1/add/profile"
	},
	"preferences": {
		method: 'POST',
		path: "user/v1/profile/add/partner/preferences"
	},

}

const apiCall = (o) => {
	axios({
		method: o.method,
		url: BASEPATH + o.path,
		data: o.request,
		headers: o.headers
	}).then(o.callback);

}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

createUsers = async () => {
	for (let index = 0; index < 1; index++) {
		let user = dump[index];
		let phoneNumber = getRandomIntInclusive(9999999999, 6000000000)
		let request =
		{
			"phone": String(phoneNumber),
			"country_code": "91"
		}
		let o = {
			path: URLS.login.path,
			method: URLS.login.method,
			request,
			callback: validateOTP
		}
		apiCall()
	}

}

