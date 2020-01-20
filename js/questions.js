// This will be used to contain all of the questions that could be asked in a quiz.
function pickRandomQuestions(amount) {
  let questions = [];

  let randomNumbers = [];
  //TODO!!!!! This needs to be redone so that it returns an array of no repeating questions
  for (let i = 0; i < allQuestions.length; i++) {
    randomNumbers.push(i);
  }

  randomNumbers.sort(function(number) {
    return Math.random() - 0.5;
  });
  // let random = Math.floor(Math.random() * allQuestions.length);

  for (let i = 0; i < amount; i++) {
    questions.push(allQuestions[randomNumbers[i]]);
  }

  return questions;
}

const allQuestions = [
  {
    statement: "There are many gay penguins.",
    accuracy: true,
    information: ""
  },
  {
    statement: "Strawberries belong to the category of nuts, not fruits.",
    accuracy: true,
    information: ""
  },
  {
    statement: "The US doesn’t have an official language.",
    accuracy: true,
    information: ""
  },
  {
    statement:
      "If a penny is dropped from the Empire State Building, through gravity and velocity, it will have enough speed to kill a person when it reaches the ground.",
    accuracy: false,
    information:
      "https://www.businessinsider.de/drop-penny-off-empire-state-building-2015-12?r=UK"
  }
];
