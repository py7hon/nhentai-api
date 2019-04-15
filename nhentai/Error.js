class nhentaiError extends Error {
	constructor(message) {
		super(message);
		this.name = "nhentaiError";
	}
}

module.exports = nhentaiError;