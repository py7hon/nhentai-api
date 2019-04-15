const nhentaiError = require('./Error.js');

class nhentaiTypeError extends nhentaiError {
	constructor(property, expectedType) {
		super(`"${property}" must be a ${expectedType}`);
		this.name = "nhentaiTypeError";
		this.property = property;
	}
}

module.exports = nhentaiTypeError;