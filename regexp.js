// Get text content of html tag even if multiline
function getTagContent(htmlStr, tag) {
  return (htmlStr
    .match(new RegExp('<' + tag + '.*?' + '>(.|\n)*?</' + tag + '>', 'g')) || [])
    .map(v => v
      .replace(new RegExp('(<\/?' + tag + '.*?>)|\n', 'g'), '')
      .trim()
    );
}

getTagContent(`<div>
  <h1>Heading</h1>
  <p class="description">Paragraph 1</p>
  <section>
    <p class="content">
      Paragraph 2
    </p>
  </section>
</div>`, 'p'); //=> ["Paragraph 1", "Paragraph 2"]



// Use capturing groups to swap every two characters
'badcfehg'.replace(/(.)(.)/g,'$2$1'); //=> "abcdefgh"



// Tests if an integer is a prime number
function isPrime(x) {
  return !/^.?$|^(..+?)\1+$/.test('1'.repeat(x));
}



// Capture first letters to initialize a name
function toInitials(name) {
  return name.replace(/([a-z])[a-z]+/gi, '$1.')
}

toInitials('David Ra'); //=> "D. R."



// Match a str that contains at least one capital letter, one lowercase letter, one number, and has at least 8 chars
function password(str) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}



// Rearrange letters with capture groups
function spoonerize(words) {
  return words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');
}

spoonerize('nit picking'); //=> "pit nicking"



// chunkify a string into n-sized chunks and return as array
function chunk(str, n) {
  return str.match(new RegExp('.{1,' + n + '}', 'g')) || [];
}

chunk('hello world', 2); //=> ["he", "ll", "o ", "wo", "rl", "d"]



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

// Alternate with lookahead and capturing, without conversion to array
function groupByCommas(n) {
  return n.toString().replace(/.(?=(\d{3})+$)/g,'$&,');
}



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
