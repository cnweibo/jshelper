/**
 * retrive the parameter object's type via obj.constructor
 * with small hack with obj && obj.constructor prefixed
 * @param  {Object or undefined or null} obj object to be type checked
 * @return {[type]}     constructor function name or null/undefined
 */
function getType(obj) {
    return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1];
}