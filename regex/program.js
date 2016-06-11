var fs = require('fs');

// find the word(s) with two zs that are as far apart as possible.
// fs.readFile('words.txt', function(err, data) {
//   if (err) throw err;
//   var data = data.toString().split('\n');
//   var words = data.filter(function(v) {
//     return v.match(/z.......z/);
//   });
//   console.log(words);
// });


//  use regular expressions to find a sentence ending in a preposition.
// fs.readFile('story.txt', function(err, data) {
//   if (err) throw err;
//   var data = data.toString().split('\n');
//   var lines = data.filter(function(line) {
//     return line.match(/up\./);
//   });
//   console.log(lines);
// });


// find the word(s) with the most consecutive vowels and the word(s) with the most consecutive consonants.
// fs.readFile('words.txt', function(err, data) {
//   if (err) throw err;
//   var data = data.toString().split('\n');
//   var wordsWithManyVowels = data.filter(function(word) {
//     return word.match(/[aeiou][aeiou][aeiou][aeiou][aeiou]/);
//   });
//   var wordsWithManyConsonants = data.filter(function(word) {
//     return word.match(/[bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz][bcdfghlmnpqrstvwxyz]/);
//   });
//   console.log(wordsWithManyVowels, wordsWithManyConsonants);
// });


// find counterexamples to the rule "i before e except after c".
fs.readFile('words.txt', function(err, data) {
  if (err) throw err;
  var data = data.toString().split('\n');
  var words = data.filter(function(word) {
    return word.match(/[cie]/);
  });
    console.log(words);
});