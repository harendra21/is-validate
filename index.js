/*
 * This method accepts the string as its argument and returns true or false whether given string is email or not
*/
const isEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
    return re;
}

/*
 * This method accepts the string as its argument and returns true or false whether given string is phone or not
*/
const isPhone = (phone) => {
    let is_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
    return is_phone;
}

/*
 * This method accepts the string as its argument and returns true or false whether given string is url or not
*/
const isUrl = (string) => {
    let url;
    try { url = new URL(string); } catch (_) { return false; }
    return url.protocol === "http:" || url.protocol === "https:";
}
/*
 * This method accepts the string as its argument and returns true or false whether given string is date or not
*/
const isDate = (date) => {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}
/*
 * This method accepts the string as its argument and returns true or false whether given string is time or not HH:MM
*/
const isTime = (time) => {
    var isValid = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(time);
    return isValid;
}

/*
 * This method given argument is number or not
*/
const isNumber = (number) => {
    if(typeof number == 'number'){ return true;}
    return false;
}

/*
 * This method given argument is string or not
*/

const isString = (string) => {
    if(typeof string == 'string'){ return true;}
    return false;
}

/*
 * This method given argument is boolean or not
*/
const isBoolean = (boolean) => {
    if(typeof boolean == 'boolean'){ return true;}
    return false;
}

/*
 * This method given argument is object or not
*/
const isObject = (object) => {
    if(typeof object == 'object'){ return true;}
    return false;
}

/*
 * This method will return trpe of argument passed
*/

const isType = (data) => {
    return typeof data;
}
/*
 * This method will return true of false based on string contains substring.
*/

const isContains = (string, substring) => {
    return string.includes(substring)
}
 
module.exports = {
    isEmail, isPhone, isUrl, isDate, isTime, isNumber, isString, isObject, isBoolean, isType, isContains
};