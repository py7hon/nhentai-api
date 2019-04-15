const nhentaiError = require('./Error.js');

class nhentaiAPIError extends nhentaiError {
	constructor(property, expected) {
		super(`"${property}" must be ${expected}`);
		this.name = "nhentaiAPIError";
		this.property = property;
	}
}

module.exports = nhentaiAPIError;