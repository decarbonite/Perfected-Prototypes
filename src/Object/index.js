const safeD = require('lodash/get');
const { mergeExtension } = require('./../merger');

const newObject = {};

newObject.try = function safe(dereference) {
	return safeD(this, dereference, false);
};

mergeExtension(Object.prototype, newObject);
