const nhentaiTypeError = require('./TypeError.js');
const nhentaiBook = require('./Book.js');

class nhentaiSearch {
	constructor(data) {
		if (data != null) {
			if (data.constructor.name == 'String')
				this.search = JSON.parse(data);
			else if (data.constructor.name == 'Object')
				this.search = data;
			else
				throw new nhentaiTypeError('data', 'string or object');
		}
		else
			throw new nhentaiTypeError('data', 'string or object');
	}
	get results() {
		if (typeof this.result == 'undefined') {
			let result = [];
			this.search.result.forEach(function(book) {
				result.push(new nhentaiBook(book));
			});
			this.result = result;
		}
		return this.result;
	}
	get num_pages() {
		return +this.search.num_pages;
	}
	get per_page() {
		return +this.search.per_page;
	}
}

module.exports = nhentaiSearch;
