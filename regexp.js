function testReg(str, reg) {
  if(reg.test(str)) {
    console.log(str.match(reg));
  }
}

var nameRegExp = /[a-zA-Z0-9]+/;

var usernameRegExp = /^[a-z0-9_-]{3,6}$/;

var passwordRegExp = /^[a-z0-9_-]{6,18}$/;

var hexRegExp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

var emailRegExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-])\.([a-z\.]{2,6})$/;

var urlRegExp = /^(https?:\/\/)?/;

var ipRegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

var htmltagRegExp = /^<([a-z]+)([^>]+)*(?:>(.*)<\/\1>|\s+\/>)$/;



// CAPTURE WHATS IN OPENING TAG TO USE FOR CLOSING TAG REGEXP
var re = /<(\w+)>(.+)<\/\1>/;


// REGEX SEARCH AND REPLACE USING CAPTURE
'<a> <bbb>'.replace(/<(.*?)>/g, '[$1]');
