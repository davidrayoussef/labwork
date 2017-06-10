// chunkify a string into n-sized chunks and return as array
function chunkify(str, n) {
  return str.match(RegExp('.{1,' + n + '}', 'g')) || [];
}

chunkify('hello world', 2); //=> ["he", "ll", "o ", "wo", "rl", "d"]



// Use a positive lookahead and lastMatch ($&) to insert a dash between two odd numbers
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

insertDash(283746590873); //=> "283-7465-9087-3";



// Use a lookahead and non-capturing group to group numbers in threes from the end
function groupByCommas(n) {
  return n.toString().split(/(?=(?:\d{3})+$)/).join(',');
}

groupByCommas(35235235); //=> "35,235,235"



// Test if all characters are unique.
const regex = /^(?!.*(.).*\1)/;

regex.test('1'); //=> true;
regex.test('1232'); //=> false
regex.test('10284'); //=> true
regex.test('79222'); //=> false



// search and replace using capture
'<a> <bbb>'.replace(/<(.*?)>/g, '[$1]');



// Capture what's in opening tag to use for closing tag
const re = /<(\w+)>(.+)<\/\1>/;



const hexRegExp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

const emailRegExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-])\.([a-z\.]{2,6})$/;

const urlRegExp = /^(https?:\/\/)?/;

const ipRegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const htmltagRegExp = /^<([a-z]+)([^>]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
