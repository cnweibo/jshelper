/**
 * retrive the parameter object's type via obj.constructor
 * with small hack with obj && obj.constructor prefixed
 * @param  {Object or undefined or null} obj object to be type checked
 * @return {string} lowercase constructor function name or null/undefined
 */
function getType(obj) {
    return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1].toLowerCase();
}
/**
 * retrieve the own property names for given object
 * @param  {Object} obj the object to be inspected
 * @return {Array}     Array with string of own property names for the obj
 */
function getOwnPropertyNames(obj) {
    return Object.getOwnPropertyNames(obj); 
}
/**
 * retrieve the given object's own function names
 * @param  {Object} obj object which is to be inspected
 * @return {Array}     array filled with obj's own function names;
 *                     the arguments/caller are skipped due to strict mode exception
 */
function getOwnFunctionNames(obj) {
    var properties = Object.getOwnPropertyNames(obj);
    var length = properties.length;
    var functions = [];

    for (var i = 0; i < length; i++) {
        var property = properties[i];
        if (property == "arguments" || property == "caller" ){continue;}
        if (typeof obj[property] === "function"){
            functions.push(property); 
        }
    }
    return functions;
}