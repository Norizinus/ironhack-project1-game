// This will be used to contain all of the questions that could be asked in a quiz.
function pickRandomQuestions(amount){
    
    let questions = [];

//TODO!!!!! This needs to be redone so that it returns an array of no repeating questions
    for (let i = 0; i<amount;i++){
        let random = Math.floor(Math.random() * allQuestions.length);
        questions.push(allQuestions[random]);
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
    answer: true,
    information: ""
  },
  {
    statement: "The US doesn’t have an official language.",
    answer: true,
    information: ""
  },
  {
    statement:
      "If a penny is dropped from the Empire State Building, through gravity and velocity, it will have enough speed to kill a person when it reaches the ground.",
    accuracy: false,
    information: ""
  }
];
