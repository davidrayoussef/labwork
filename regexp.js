function testReg(str, reg) {
  if (reg.test(str)) {
    console.log(str.match(reg));
  }
}

const nameRegExp = /[a-zA-Z0-9]+/;

const usernameRegExp = /^[a-z0-9_-]{3,6}$/;

const passwordRegExp = /^[a-z0-9_-]{6,18}$/;

const hexRegExp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

const emailRegExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-])\.([a-z\.]{2,6})$/;

const urlRegExp = /^(https?:\/\/)?/;

const ipRegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const htmltagRegExp = /^<([a-z]+)([^>]+)*(?:>(.*)<\/\1>|\s+\/>)$/;



// CAPTURE WHATS IN OPENING TAG TO USE FOR CLOSING TAG REGEXP
const re = /<(\w+)>(.+)<\/\1>/;



// REGEX SEARCH AND REPLACE USING CAPTURE
'<a> <bbb>'.replace(/<(.*?)>/g, '[$1]');



// Regex to test if all characters are unique.
const regex = /^(?!.*(.).*\1)/;

regex.test('1'); //=> true;
regex.test('1232'); //=> false
regex.test('10284'); //=> true
regex.test('79222'); //=> false



// Validate if a string is ONLY alphanumeric
function alphanumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}

alphanumeric("Mazinkaiser"); //=> true
alphanumeric("hello world_"); //=> false
alphanumeric("PassW0rd"); //=> true
alphanumeric("     "); //=> false
