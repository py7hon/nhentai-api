/*
	Small "test" project. It will find "yuri" tag id and show name of most popular book tagged with "yuri".
*/

const nhentaiAPI = require('../nhentai/API.js');
const nhentai = new nhentaiAPI(true);
const https = require('https');


function httpsGET(uri) {
	return new Promise(function(resolve, reject) {
		var data = '';
		var reqest = https.get(uri, function(responce) {
			responce.setEncoding('utf8');
			responce.on('data', function(chunk) {
				data += chunk;
			});
			responce.on('end', function() {
				resolve(data);
			});
		});

		reqest.on('error', reject);

		reqest.end();
	});
}

function echo(title) {
	console.log(`The most popular "yuri" book is:\nPretty: ${title.pretty}\nEnglish: ${title.english}\nJapanese: ${title.japanese}`);
	process.exit(0);
}

httpsGET(nhentai.search('yuri'))
	.then(function(data) {
		var search = nhentai.parseSearch(data);
		var tag_id = 0;
		search.results[0].tags.some(function(tag) {
			if (tag.name == 'yuri') {
				tag_id = tag.id;
				return true;
			}
		});
		httpsGET(nhentai.searchTagged(tag_id, 1, 'popular'))
			.then(function(data) {
				var search = nhentai.parseSearch(data);
				echo(search.results[0].title);
			});
	});
