/**
 * retrive the parameter object's type via obj.constructor
 * with small hack with obj && obj.constructor prefixed
 * @param  {Object or undefined or null} obj object to be type checked
 * @return {string} lowercase constructor function name or null/undefined
 */
function getType(obj) {
    var _type = typeof obj;
    switch (_type) {
        case "string":
        case "boolean":
        case "number":
        case "function":
        return _type;
        default:
            // statements_def
            break;
    }
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
/**
 * escape the HTML strings &<>" are changed
 * @param  {String} htmlStr html string to be escaped
 * @return {String}         escaped html string
 */
function escapeHTML(htmlStr) {
    return htmlStr.replace(/[&<>"']/g,function(matched) {
        switch (matched) {
            case '&':
                return '&amp';
                break;
            case '<':
                return '&lt;';
                break;
            case '>':
                return '&gt;';
                break;
            case '"':
                return '&quot;';
                break;                                
            default:
                return matched;
                break;
        }
    });
}
/**
 * convert Array-like arguments to Array
 * @param  {arguments} arguments the arguments for function
 * @return {Array}           the array representing arguments
 */
function args2Array(arguments) {
    return Array.prototype.slice.apply(arguments);
}