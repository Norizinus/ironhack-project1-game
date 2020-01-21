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
  },
  {
    statement:
      "Month, orange, silver, and purple do not rhyme with any other word.",
    accuracy: true,
    information: "https://www.flocabulary.com/rhymeswithorange/"
  },
  {
    statement:
      "The hottest chili pepper in the world is so hot it could kill you.",
    accuracy: true,
    information:
      "https://www.livescience.com/59184-how-dragons-breath-chili-peppers-can-kill.html"
  },
  {
    statement:
      "The world's quietest room is located at Microsoft's headquarters in Washington state.",
    accuracy: true,
    information:
      "https://edition.cnn.com/style/article/anechoic-chamber-worlds-quietest-room/index.html"
  },
  {
    statement:
      "There are over 10 countrie  in the world that don't use the metric system.",
    accuracy: false,
    information:
      "https://www.worldatlas.com/articles/which-countries-don-t-use-the-metric-system.html"
  },
  {
    statement: "Purple is not used in any national flag worldwide. ",
    accuracy: false,
    information:
      "https://www.worldatlas.com/articles/country-flags-with-purple.html"
  },
  {
    statement: "English is the most spoken language in the world. ",
    accuracy: false,
    information:
      "https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers"
  },
  {
    statement: "Sweden is the country with the most islands",
    accuracy: true,
    information:
      "https://www.statista.com/chart/15364/the-estimated-number-of-islands-by-country/"
  },
  {
    statement: "Unicorns are the official national animal of Scotland",
    accuracy: true,
    information:
      "https://www.visitscotland.com/about/uniquely-scottish/national-animal-unicorn/"
  },
  {
    statement: "It takes approx. 700 grapes to make a bottle of wine",
    accuracy: true,
    information:
      "https://grapesandwine.cals.cornell.edu/newsletters/appellation-cornell/2011-newsletters/issue-8/conversion-factors-vineyard-bottle/"
  },
  {
    statement: "Sea Otters can swim as soon as they are born. ",
    accuracy: false,
    information: "https://www.youtube.com/watch?v=o0OyhHeelyo"
  },
  {
    statement: "Napoleon was a very short man",
    accuracy: false,
    information: "https://www.history.com/news/napoleon-complex-short"
  },
  {
    statement: "It is very dangerous to wake somebody while sleepwalking",
    accuracy: false,
    information: "https://www.sleepfoundation.org/articles/sleepwalking"
  },
  {
    statement: "Bulls hate the color red. ",
    accuracy: false,
    information: "https://www.livescience.com/33700-bulls-charge-red.html"
  },
  {
    statement: "The wall of china can easily be seen from space. ",
    accuracy: false,
    information:
      "https://www.universetoday.com/25364/can-you-see-the-great-wall-of-china-from-space/"
  },
  {
    statement: "Banana plants are large herbs, not trees. ",
    accuracy: true,
    information: "https://www.lexico.com/explore/is-a-banana-a-fruit-or-a-herb"
  },
  {
    statement: "Bats are blind and have to rely on their echolocate to see. ",
    accuracy: false,
    information:
      "https://www.nationalgeographic.com/news/2014/11/141031-bats-myths-vampires-animals-science-halloween/"
  },
  {
    statement:
      "Jesus was visited by three wise men after he was born. Their names are Bithisarea, Melichior, and Gathaspa.",
    accuracy: false,
    information: "https://www.snopes.com/fact-check/three-wise-men/"
  },
  {
    statement: "When shaving hair, it will grow back thicker and stronger. ",
    accuracy: false,
    information:
      "https://www.mayoclinic.org/healthy-lifestyle/adult-health/expert-answers/hair-removal/faq-20058427"
  },
  {
    statement: "Alcohole has a warming effect on the body. ",
    accuracy: false,
    information:
      "https://www.drinkaware.co.uk/advice/staying-safe-while-drinking/alcohol-and-cold-weather/"
  },
  {
    statement: "Berlin hasn't always been the capital of Germany.",
    accuracy: true,
    information: "https://en.wikipedia.org/wiki/Bonn"
  },
  {
    statement:
      "Berlin has more canals than Amsterdam and more bridges than Venice",
    accuracy: true,
    information:
      "https://www.huffpost.com/entry/9-things-you-didnt-know-a_b_7536902?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAFrdv95uGVFIrxA2Vvn2Jb7PrQLtXeb5VwvH2_OoGqpP4eyJf8EihfhnMGAJekby64rJcc6epYb4sP_S4IDk02MAvQzGUgLStknHA6-h8dYvI5iM7FgDsJksb7GPB44rYfuBRjd_WAhIBZJqUJmLQRJUMyvHBySTldXw7aG_PEJV"
  },
  {
    statement:
      "Berlin has the world’s largest Turkish population outside of Turkey",
    accuracy: true,
    information:
      "https://theculturetrip.com/europe/germany/articles/how-berlin-became-the-worlds-second-turkish-capital/"
  },
  {
    statement: "Berlin has more museum than (average) rainy days per year. ",
    accuracy: true,
    information:
      "https://about.visitberlin.de/en/press/press-releases/facts-about-berlin"
  },
  {
    statement:
      "All of Berliner Verkehrsbetriebe’s vehicles put together would circumnavigate the globe 316 times a day",
    accuracy: true,
    information:
      "https://about.visitberlin.de/en/press/press-releases/facts-about-berlin"
  },
  {
    statement: "Berlin is nine times the size of Paris",
    accuracy: true,
    information:
      "https://www.thrillist.com/entertainment/berlin/facts-about-berlin-that-are-actually-lies"
  },
  {
    statement: "There was one Berlin wall. ",
    accuracy: false,
    information:
      "https://theculturetrip.com/europe/germany/articles/11-of-the-berlin-walls-best-kept-secrets/"
  },
  {
    statement:
      "Teufelsberg, known as the highest spot of Berlin, is made of World War II debris",
    accuracy: true,
    information: "https://www.visitberlin.de/en/teufelsberg"
  }
];
