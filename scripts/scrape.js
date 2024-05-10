import { parse } from 'node-html-parser';

/**
 * @param {string} url
 */
export const getBadges = async (url) => {
	let reg = new RegExp('^(https://|http://){1}');
	if (!reg.test(url)) {
		url = 'https://' + url;
	}

	let data = [];
	let htmlData = parse(await (await fetch(url)).text());

	let badgeClass = htmlData.querySelectorAll('.profile-badge');
	if (!badgeClass) {
		console.log('No badges found');
		return [];
	}
	let links = badgeClass.map((elem) => elem.querySelector('a').getAttribute('href'));
	if (!links) {
		console.log('No links found');
		return [];
	}
	let badgeName = badgeClass.map((elem) => elem.querySelector('span'));
	if (!badgeName) {
		console.log('No links found');
		return [];
	} else {
		badgeName = badgeName.map((elem) => elem.innerText.split('\n').join(''));
	}

	let badgeDate = badgeClass.map((elem) => elem.querySelector('span.ql-body-medium'));
	if (!badgeDate) {
		console.log('No links found');
		return [];
	} else {
		badgeDate = badgeDate.map((elem) => elem.innerText.split('\n').join(''));
		badgeDate = badgeDate.map((elem) => elem.replace(',', '').split(' '));
		for (let i = 0; i < badgeDate.length; i++) {
			for (let j = 0; j < badgeDate[i].length; j++) {
				if (badgeDate[i][j] == '') {
					badgeDate[i].splice(j, 1);
				}
			}
		}
	}
	badgeDate = badgeDate.map((elem) => {
		let month = Number(monToNum(elem[1]));
		let day = Number(elem[2]);
		let year = Number(elem[3]);
		let time = Date.UTC(year, month, day);
		return time;
	});

	for (let i = 0; i < links.length; i++) {
		let len = links[i].length;
		let badge = {
			badgeName: badgeName[i],
			badgeID: links[i].substring(len - 7, len),
			badgeDate: badgeDate[i],
		};

		data.push(badge);
	}
	return data;
};

const monToNum = (/** @type {string} */ inp) => {
	return new Date(Date.parse(inp + ' 1, 2012')).getMonth();
};
