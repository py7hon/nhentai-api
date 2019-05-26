const nhentaiAPIError = require('./APIError.js');
const nhentaiTypeError = require('./TypeError.js');
const nhentaiSearch = require('./Search.js');
const nhentaiBook = require('./Book.js');

function pageSort(page, sort) {
	return ((page >= 1) ? '&page=' + page : '') + ((sort != null) ? ((sort == 1 || sort == 'popular') ? '&sort=popular' : ((sort == 2 || sort == 'date') ? '&sort=date' : '')) : '');
}

class nhentaiAPI {
	constructor(ssl = true) {
		let protocol = 'http' + (ssl ? 's' : '') + '://';
		this.domains = {
			main: protocol + 'nhent.ai',
		//	main: protocol + 'nhentai.net', // original api website
		//	main: protocol + 'id.nhent.ai', // indonesia server proxy
		//	main: protocol + 'eu.nhent.ai', europe server proxy
		//	main: protocol + 'us.nhent.ai', us server proxy
		//	main: protocol + 'jp.nhent.ai', japan server proxy
		//	main: protocol + 'br.nhent.ai', brasil server proxy
		//	main: protocol + 'ch.nhent.ai', china server proxy
		//	main: protocol + 'sg.nhent.ai', singapore server proxy
		//	main: protocol + 'nl.nhent.ai', netherland server proxy
		//	main: protocol + 'uk.nhent.ai', uk server proxy
		//	main: protocol + 'kr.nhent.ai', korea server proxy
		//	main: protocol + 'ca.nhent.ai', canada server proxy
			images: protocol + 'cdn.nhent.ai',
			thumbs: protocol + 't.nhent.ai'
		};
		this.apis = {
			search: this.domains.main + '/api/galleries/search?query={QUERY}',
			searchLike: this.domains.main + '/api/gallery/{BOOK_ID}/related',
			searchTagged: this.domains.main + '/api/galleries/tagged?tag_id={TAG_ID}',
			bookDetails: this.domains.main + '/api/gallery/{BOOK_ID}',
			getPage: this.domains.images + '/galleries/{MEDIA_ID}/{PAGE}.jpg',
			getThumb: this.domains.thumbs + '/galleries/{MEDIA_ID}/{PAGE}t.jpg',
			getCover: this.domains.thumbs + '/galleries/{MEDIA_ID}/cover.jpg'
		};
	}
	search(query, page = 1, sort = null) {
		if (query != null && query.constructor.name == 'String')
			if (page != null && page.constructor.name == 'Number')
				return (this.apis.search).replace('{QUERY}', query.replace(/ /g, '+')) + pageSort(page, sort);
			else
				throw new nhentaiTypeError('page', 'number');
		else
			throw new nhentaiTypeError('query', 'string');
	}
	searchLike(book_id, page = 1, sort = null) {
		if (book_id != null && book_id.constructor.name == 'Number')
			return (this.apis.searchLike).replace('{BOOK_ID}', book_id) + pageSort(page, sort);
		else
			throw new nhentaiTypeError('book_id', 'number');
	}
	searchTagged(tag_id, page = 1, sort = null) {
		if (tag_id != null && tag_id.constructor.name == 'Number')
			return (this.apis.searchTagged).replace('{TAG_ID}', tag_id) + pageSort(page, sort);
		else
			throw new nhentaiTypeError('tag_id', 'number');
	}
	bookDetails(book_id) {
		if (book_id != null && book_id.constructor.name == 'Number')
			return (this.apis.bookDetails).replace('{BOOK_ID}', book_id);
		else
			throw new nhentaiTypeError('book_id', 'number');
	}
	getPage(media_id, page = 1) {
		if (media_id != null && media_id.constructor.name == 'Number') {
			if (page != null && page.constructor.name == 'Number')
				if (page >= 1)
					return (this.apis.getPage).replace('{MEDIA_ID}', media_id).replace('{PAGE}', page);
				else
					throw new nhentaiAPIError('page', 'greater than or equal to 1');
			else
				throw new nhentaiTypeError('page', 'number');
		}
		else
			throw new nhentaiTypeError('media_id', 'number');
	}
	getThumb(media_id, page = 1) {
		if (media_id != null && media_id.constructor.name == 'Number') {
			if (page != null && page.constructor.name == 'Number')
				if (page >= 1)
					return (this.apis.getThumb).replace('{MEDIA_ID}', media_id).replace('{PAGE}', page);
				else
					throw new nhentaiAPIError('page', 'greater than or equal to 1');
			else
				throw new nhentaiTypeError('page', 'number');
		}
		else
			throw new nhentaiTypeError('media_id', 'number');
	}
	getCover(media_id) {
		if (media_id != null && media_id.constructor.name == 'Number')
			return (this.apis.getCover).replace('{MEDIA_ID}', media_id);
		else
			throw new nhentaiTypeError('media_id', 'number');
	}
	parseBook(data) {
		return new nhentaiBook(data);
	}
	parseSearch(data) {
		return new nhentaiSearch(data);
	}
}

module.exports = nhentaiAPI;
