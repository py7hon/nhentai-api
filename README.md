# Update nhentai api wrapper.
original `https://www.npmjs.com/package/nhentai-api`
add bypass CORS and many proxy server for blocked country.
## APIs

**Warning**: this module returns *only URL*s for requests.

### `search(query, page, sort)`
Returns `Search` URL by query.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`query` | + | | Search query, see more at https://nhentai.net/info
`page` | - | `1` | Page of search
`sort` | - | `null`| Sort type: `popular` (`1`) or `date` (`2`)

### `searchLike(book_id, page, sort)`
Returns `Search` URL for related to book's ID.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`book_id` | + | | `book_id` for search related
`page` | - | `1` | Page of search
`sort` | - | `null`| Sort type: `popular` (`1`) or `date` (`2`)

### `searchTagged(tag_id, page, sort)`
Returns `Search` URL for tag's ID.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`tag_id` | + | | Tag's ID
`page` | - | `1` | Page of search
`sort` | - | `null`| Sort type: `popular` (`1`) or `date` (`2`)

### `bookDetails(book_id)`
Returns URL for getting `Book`.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`book_id` | + | | Book's ID

### `getPage(media_id, page)`
Returns page's image URL for `Book`'s `media_id`.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`media_id` | + | | Book's `media_id`
`page` | - | `1` | Book's page

### `getThumb(media_id, page)`
Returns page's thumbnail image URL for `Book`'s `media_id`.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`media_id` | + | | Book's `media_id`
`page` | - | `1` | Book's page


### `getCover(media_id)`
Returns `Book`'s cover image URL.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`media_id` | + | | Book's `media_id`

### `parseBook(data)`
Returns `Book`.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`data` | + | | Data for parse.

### `parseSearch(data)`
Returns `Search`.

Parameter | Required | Default value | Description
--------- | -------- | ------------- | -----------
`data` | + | | Data for parse.

## Types

### Book

#### Example:
```
nhentaiBook {
	book: {…}
	cover:(...)
	id:(...)
	media_id:(...)
	num_favorites:(...)
	num_pages:(...)
	pages:(...)
	scanlator:(...)
	tags:(...)
	thumbnail:(...)
	title:(...)
	upload_date:(...)
}
```
#### `book`
Stores parsed `JSON` for the book.

#### `cover`
Stores details for book's cover.

#### `id`
Stores book's `id`.

#### `media_id`
Stores book's *gallery id*. Used for gallery's methods.

#### `num_favorites`
Stores amount of book's "likes".

#### `num_pages`
Stores amount of pages in the book.

#### `pages`
Stores `Array` of book's pages details.

#### `scanlator`
Stores name of scanlator.

#### `tags`
Stores `Array` of tags. Each of tag is `JSON` like:
```
{
	id: …,
	type: …,
	name: …,
	url: …,
	count: …
}
```

#### `thumbnail`
Stores details for book's cover thumbnail.

#### `title`
Stores `object` with titles (`english`, `japanese`, `pretty`).

#### `upload_date`
Stores book's upload `Date`.

### Search
#### Example:
```
nhentaiSearch {
	search: {…}
	num_pages:(...)
	per_page:(...)
	results:(...)
}
```

#### `search`
Stores parsed `JSON` for the search.

#### `num_pages`
Stores amount of pages found.

#### `per_page`
Stores amount of books per page.

#### *`results`*
Stores `Array` of `Book`s.

## Files Structure:
```
./nheintai/
	API.js
	
	Book.js
	Search.js
	
	Errror.js
	APIError.js
	TypeError.js
```
