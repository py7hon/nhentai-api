const nhentaiTypeError = require('./TypeError.js');

class nhentaiBook {
	constructor(data) {
		if (data != null) {
			if (data.constructor.name == 'String')
				this.book = JSON.parse(data);
			else if (data.constructor.name == 'Object')
				this.book = data;
			else
				throw new nhentaiTypeError('data', 'string or object');
		}
		else
			throw new nhentaiTypeError('data', 'string or object');
	}
	get id() {
		return +this.book.id;
	}
	get media_id() {
		return +this.book.media_id;
	}
	get title() {
		return this.book.title;
	}
	get pages() {
		return this.book.images.pages;
	}
	get cover() {
		return this.book.images.cover;
	}
	get thumbnail() {
		return this.book.images.thumbnail;
	}
	get scanlator() {
		return this.book.scanlator;
	}
	get upload_date() {
		return new Date((+this.book.upload_date) * 1000);
	}
	get tags() {
		return this.book.tags;
	}
	get num_pages() {
		return +this.book.num_pages;
	}
	get num_favorites() {
		return +this.book.num_favorites;
	}
}

module.exports = nhentaiBook;