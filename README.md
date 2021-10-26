# An NPM package to validate form fields

![Img](https://miro.medium.com/max/2000/0*8LbW1eBqoOf8U30I)

I have published a post some days ago on [How to Create and Publish Your First NPM Package](https://medium.com/p/2765c851de2a). I realize that publishing an npm package is super easy. I have decided to create a form field validator in a very easy manner and ask developers to contribute to that.

[Read on medium.com](https://harendra.tech/an-npm-package-to-validate-form-fields-4503420b6c18)

I have created an npm library and published it to NPM and [Github](https://github.com/harendra21/is-validate) to validate form fields very easily. Let’s see what it can do?

## Installation

    npm install is-validate

## Import

### Method 1 to import

    const { isEmail } =  require("is-validate")

### Method 2 to import

    const isValidate = require('is-validate');

## All methods

### - isEmail

Example:

    //method 1
    const { isEmail } =  require("is-validate")
    console.log(isEmail('harendraverma21@gmail.com'))
    // true

    // method 2
    const isValidate = require('is-validate');
    console.log(isValidate.isEmail('harendraverma21@gmail.com'))
    // true

*All other functions will work, So I am not going to provide examples for each method*

### - isPhone

### - isUrl

### - isDate

### - isTime

### - isNumber

### - isString

### - isObject

### - isBoolean

### - isType

### - isContain

Example:

    console.log(isContains('Hello world', 'Hello'))

## Package code

    /*
     * This method accepts a string as its argument and returns true or false whether given string is email or not
    */
    const isEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());
        return re;
    }

    /*
     * This method accepts a string as its argument and returns true or false whether a given string is phone or not
    */
    const isPhone = (phone) => {
        let is_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
        return is_phone;
    }

    /*
     * This method accepts a string as its argument and returns true or false whether given string is URL or not
    */
    const isUrl = (string) => {
        let url;
        try { url = new URL(string); } catch (_) { return false; }
        return url.protocol === "http:" || url.protocol === "https:";
    }
    /*
     * This method accepts a string as its argument and returns true or false whether given string is date or not
    */
    const isDate = (date) => {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }
    /*
     * This method accepts a string as its argument and returns true or false whether given string is time or not HH: MM
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
     * This method given argument is a string or not
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
     * This method will return the type of argument passed
    */

    const isType = (data) => {
        return typeof data;
    }
    /*
     * This method will return true or false based on a string containing a substring.
    */

    const isContains = (string, substring) => {
        return string.includes(substring)
    }

    module.exports = {
        isEmail, isPhone, isUrl, isDate, isTime, isNumber, isString, isObject, isBoolean, isType, isContains
    };

In the index.js file I have written code for validation and defined functions to perform validation.

## Why contribute?

This is the first question that comes to mind whenever we think to start contributing to an open-source project. Refer to [this](https://opensource.com/article/20/6/why-contribute-open-source) URL to read why you should need to contribute to an open-source.

## How to contribute?

This is a super easy package for form fields validation and I think it is very useful while developing any application. To contribute with me you need to do the following steps.

* **Clone repo from [Github](https://github.com/harendra21/is-validate)**

git clone [https://github.com/harendra21/is-validate](https://github.com/harendra21/is-validate)

* **Create a future branch**

You have to create a new branch with the name feature-validate-email

* **Add a new function to index.js and export it**

* **Test newly created function**

To test your package locally (very important) you have to set the environment. Please refer to [this](https://javascript.plainenglish.io/how-to-create-and-publish-your-first-npm-package-2765c851de2a#1da6) article’s testing part.

* **Push code**

* **Done**

After that, I will manually review the code and merge it with master and publish changes to NPM.

Thank you for reading this article, Don’t forget to [follow me](https://harendraverma21.medium.com/).
