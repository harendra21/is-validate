# A NPM package to validate from fields

This npm package will validate form fields in very easy manner.

### Installation

```
npm install is-validate
```

### Import

#### Method 1 to import

```javascript
const { isEmail } =  require("is-validate")
```

#### Method 2 to import

```javascript
const isValidate = require('is-validate');
```

### All methods

#### - isEmail 

##### Example:
```javascript
//method 1
const { isEmail } =  require("is-validate")
console.log(isEmail('harendraverma21@gmail.com'))
// true
```

```javascript
// method 2
const isValidate = require('is-validate');
console.log(isValidate.isEmail('harendraverma21@gmail.com'))
// true
```
<i>All other function will work, So I am not going to provide example for each method</i>
#### - isPhone
#### - isUrl
#### - isDate
#### - isTime
#### - isNumber
#### - isString
#### - isObject
#### - isBoolean
#### - isType

#### - isContain

##### Example:

```javascript
console.log(isContains('Hello world', 'Hello')) 
```

Thank you for reading this article, Don't forget to [follow me](https://harendraverma21.medium.com).

### If you want to contribute for [this package](https://github.com/harendra21/is-validate), feel free to add some awesome functions.