const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function splitCapRejoin(sentence) {
//   const words = sentence.split(" ");
//   const result = words.map(e => e[0].toUpperCase() + e.slice(1));
//   const newSentence = result.join(" ");
//   return newSentence
// }

function splitAndCapitalize(element) {
  const split = element.split(" ");
  const cap = split.map(e => e[0].toUpperCase() + e.slice(1));
  const rejoin = cap.join(" ");
  return rejoin;
}

function titleCased() {
  return tutorials.map(splitAndCapitalize);
}