// 11 DIFFERENT EXAMPLES OF HOW TO READ FILE CONTAINING TEXT, BREAK INTO WORDS, COUNT AND DISPLAY TOP 10

/**
//
// IMPERATIVE
//
**/
'use strict';
const fs = require('fs');

let content = fs.readFileSync('words.txt').toString();

let words = content.split('/[\s.,\/:\n]+/');

let tally = {};

for (let i = 0; i < words.length; i++) {
	let word = words[i].toLowerCase();
  // add one to the tally for this word
  // we want to add 1 to 0 in case the tally for that word has not been initialized and is undefined
	tally[word] = (tally[word] || 0) + 1;
}

// to find the top 10, we have to convert the tally object
// to an array, sort it, and then take only the top 10
let tallyAsArray = [];

for (let word in tally) {
	tallyAsArray.push({ word: word, count: tally[word]});
}

tallyAsArray.sort(function(one, other) {
	return other.count - one.count;
});

let top10 = tallyAsArray.slice(0, 10);

console.log('The top 10 most frequently used:');
console.log('--------------------------------');
for (let i = 0; i < top10.length; i++) {
  let rank = i + 1;
  let entry = top10[i];
  console.log(rank + '. ' + entry.word + ': ' + entry.count); 
}


/**
//
// IMPERATIVE WITH FUNCTIONS
//
**/

const fs = require('fs');

// the below 5 lines is the main body of the program
let content = fs.readFileSync('words.txt').toString();
let words = splitIntoWords(content);
let tally = tallyUp(words);
let top10 = getTop10(tally);
printTop10(top10);

// rest of the program defines the supporting functions

function splitIntoWords(text) {
	return text.split(/[\s.,\/:\n]+/);
}

// each key of the object is a word, and the corresponding
// value is the number of times that word appeared in the array
function tallyUp(words) {
	let tally = {};
	for (let i = 0; i < words.length; i++) {
		let word = words[i].toLowerCase();
		tally[word] = (tally[word] || 0) + 1;
	}
	return tally;
}

// return the top 10 words in the tally as an array of objects containing
// the properties "word" and "count"
function getTop10(tally) {
	let tallyAsArray = [];
	for (let word in tally) {
		tallyAsArray.push({ word: word, count: tally[word] });
	}
	tallyAsArray.sort(function(one, other) {
		return other.count - one.count;
	});
	return tallyAsArray.slice(0, 10);
}

function printTop10(top10) {
  // print the top 10
  console.log('The top 10 most frequently used:');
  console.log('--------------------------------');
  for (let i = 0; i < top10.length; i++) {
    let rank = i + 1;
    let entry = top10[i];
    console.log(rank + '. ' + entry.word + ': ' + entry.count); 
  }
}


/**
//
// OBJECT ORIENTED - ONE CLASS
//
**/

// refactoring of program 2 into a class 
// converts the functions in program 2 into methods, and uses
// static method "main()" to kick-off the program.
'use strict';

const fs = require('fs');

class WordCount {
	// constructor takes in location of the file to facilitate use later in other files
	constructor(filepath) {
		this.filepath = filepath;
	}

	content() {
		return fs.readFileSync(this.filepath).toString();
	}

	words() {
		return this.content().split(/[\s.,\/:\n]+/);
	}

	tally() {
		let words = this.words();
		let tally = {};

		for (let i = 0; i < words.length; i++) {
			let word = words[i].toLowerCase();
			tally[word] = (tally[word] || 0) + 1;
		}
		return tally;
	}

	top10() {
		let tally = this.tally();
		let tallyAsArray = [];
		for (let word in tally) {
			tallyAsArray.push({ word: word, count: tally[word] });
		}
		tallyAsArray.sort(function(one, other) {
			return other.count - one.count;
		});
		return tallyAsArray.slice(0, 10);
	}

	printTop10() {
    let top10 = this.top10();
    console.log('The top 10 most frequently used:');
    console.log('--------------------------------');
    for (let i = 0; i < top10.length; i++) {
      let rank = i + 1;
      let entry = top10[i];
      console.log(rank + '. ' + entry.word + ': ' + entry.count); 
    }
  }

  // static means the variable or method is available at the class level, not the instance level
  // so you can just call the method directly with the class, like WordCount.main()
  static main() {
  	let tally = new WordCount('words.txt');
  	tally.printTop10();
  }
}

WordCount.main();



/**
//
// OBJECT ORIENTED - SMALL CLASSES
//
**/

'use strict';

const fs = require('fs');

class Tokenizer {
	tokenize(text) {
    return text.split(/[\s.,\/:\n]+/);
	}
}

class FileReader {
	constructor(filepath) {
		this.filepath = filepath;
	}

	read() {
    return fs.readFileSync(this.filepath).toString();
	}

	readWords() {
		return (new Tokenizer).tokenize(this.read());
	}
}

class Tally {
	constructor(words) {
		this.words = words;
		this.tallyUp();
	}

	tallyUp() {
		this.tally = {};

		for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i].toLowerCase();
      this.tally[word] = (this.tally[word] || 0) + 1;
    }

    this.tallyAsArray = [];
    for (let word in this.tally) {
      this.tallyAsArray.push({ word: word, count: this.tally[word] });
    }
    this.tallyAsArray.sort(function(one, other) {
      return other.count - one.count;
    });

    this.tallyAsArray.slice(0, 10);
  }

  getTop10() {
    return this.tallyAsArray.slice(0, 10);
  }
}

class Top10Printer {
	static print(top10) {
    console.log('The top 10 most frequently used:');
    console.log('--------------------------------');
    for (let i = 0; i < top10.length; i++) {
      let rank = i + 1;
      let entry = top10[i];
      console.log(rank + '. ' + entry.word + ': ' + entry.count); 
    }
  }
}

class WordCount {
	static main() {
		let words = new FileReader('words.txt').readWords();
		let tally = new Tally(words);
		Top10Printer.print(tally.getTop10());
	}
}

WordCount.main();



/**
//
// FUNCTIONAL PROGRAMMING - SOFTCORE
//
**/

'use strict';

const fs = require('fs');

const content = fs.readFileSync('words.txt').toString();
const words = content.split(/[\s.,\/:\n]+/);
const tally = words.map(function(str) {
	return str.toLowerCase();
}).reduce(function(tally, word) {
	tally[word] = (tally[word] || 0) + 1;
	return tally;
}, {});

const tallyAsArray = Object.keys(tally).map(function(word) {
	return { word: word, count: tally[word] };
}).sort(function(one, other) {
	return other.count - one.count;
});

top10.forEach(function(entry, i) {
  const rank = i + 1;
  console.log(rank + '. ' + entry.word + ': ' + entry.count);
});



/**
//
// FUNCTIONAL PROGRAMMING - PURE FUNCTIONS
//
**/

'use strict';

const fs = require('fs');

const content = fs.readFileSync('words.txt').toString();
const words = splitWords(content);
const tally = tallyUp(words);
const top10 = getTop10(tally);
printTop10(top10);

function splitWords(text) {
  return text.split(/[\s.,\/:\n]+/);
}

function tallyUp(words) {
  return words
    .map(function(str) {
      return str.toLowerCase();
    })
    .reduce(function(tally, word) {
      tally[word] = (tally[word] || 0) + 1;
      return tally;
    }, {});
}

function getTop10(tally) {
  return Object.keys(tally)
    .map(function(word) {
      return { word: word, count: tally[word] };
    }).sort(function(one, other) {
      return other.count - one.count;
    }).slice(0, 10);
}

function printTop10(top10) {
  console.log('The top 10 most frequently used:');
  console.log('--------------------------------');

  top10.forEach(function(entry, i) {
    let rank = i + 1;
    console.log(rank + '. ' + entry.word + ': ' + entry.count);
  });
}


RoD5982ErO