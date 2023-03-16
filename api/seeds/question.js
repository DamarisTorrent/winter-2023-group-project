/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const data = [
  {
      "question_id": "622a1c3b7cc59eab6f95177a",
      "question": "Which novel, published in 1932, was a vision of the future as a sanitised society?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Brave New World",
      "incorrectAnswer1": "Big Old Planet",
      "incorrectAnswer2": "Strange New Land",
      "incorrectAnswer3": "Cruel Old Country"
  },
  {
      "question_id": "627164961ba117625baac967",
      "question": "Which of these drinks would you associate with Equador?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Canelazo",
      "incorrectAnswer1": "Kumis",
      "incorrectAnswer2": "Rakı",
      "incorrectAnswer3": "Tuba"
  },
  {
      "question_id": "6250064c0d86c8f685d80ee0",
      "question": "Which pasta's name means 'Bibs'?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Bavette",
      "incorrectAnswer1": "Farfalle",
      "incorrectAnswer2": "Tortellini",
      "incorrectAnswer3": "Conchiglie"
  },
  {
      "question_id": "639c9dae929b90846f2fc98f",
      "question": "What is the name of the Hindu god of destruction?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Shiva",
      "incorrectAnswer1": "Vishnu",
      "incorrectAnswer2": "Brihaspati",
      "incorrectAnswer3": "Krishna"
  },
  {
      "question_id": "622a1c3c7cc59eab6f951b1c",
      "question": "In which city were the Hanging Gardens?",
      "difficulty": "easy",
      "category": "History",
      "correctAnswer": "Babylon",
      "incorrectAnswer1": "Atlantis",
      "incorrectAnswer2": "Jerusalem",
      "incorrectAnswer3": "Jericho"
  },
  {
      "question_id": "622a1c397cc59eab6f950ca8",
      "question": "Which English rock band released the song 'Us and Them'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Pink Floyd",
      "incorrectAnswer1": "Wings",
      "incorrectAnswer2": "Rudimental",
      "incorrectAnswer3": "The Alan Parsons Project"
  },
  {
      "question_id": "6266e68eff2394bd44dee053",
      "question": "In Spanish, what is the meaning of the word 'siete'?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Seven",
      "incorrectAnswer1": "Yellow",
      "incorrectAnswer2": "White",
      "incorrectAnswer3": "Black"
  },
  {
      "question_id": "622a1c357cc59eab6f94fceb",
      "question": "The language 'Portuguese' belongs to which language family?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Indo-European",
      "incorrectAnswer1": "Sino-Tibetan",
      "incorrectAnswer2": "Dravidian",
      "incorrectAnswer3": "Koreanic"
  },
  {
      "question_id": "622a1c397cc59eab6f950d66",
      "question": "Which band includes 'Mike Rutherford'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Genesis",
      "incorrectAnswer1": "Orchestral Manoeuvres in the Dark",
      "incorrectAnswer2": "Soft Machine",
      "incorrectAnswer3": "The Human League"
  },
  {
      "question_id": "62417dd70f96c4efe8d773ef",
      "question": "Which of these is a basketball team based in Washington?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Washington Wizards",
      "incorrectAnswer1": "Washington Knicks",
      "incorrectAnswer2": "Washington Raiders",
      "incorrectAnswer3": "Washington Red Sox"
  },
  {
      "question_id": "622a1c367cc59eab6f950404",
      "question": "The Character Of Mike Myers Features Heavily In Which Series Of Horror Movies?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Halloween",
      "incorrectAnswer1": "A Nightmare on Elm Street",
      "incorrectAnswer2": "Scream",
      "incorrectAnswer3": "Child's Play"
  },
  {
      "question_id": "625fd6dbdc0dd3b72da64d10",
      "question": "In which year was Amélie first released in the cinema?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "2001",
      "incorrectAnswer1": "1998",
      "incorrectAnswer2": "2004",
      "incorrectAnswer3": "2007"
  },
  {
      "question_id": "62433561cfaae40c129614a2",
      "question": "A young squirrel is known as what?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "A Kit",
      "incorrectAnswer1": "A Hatchling",
      "incorrectAnswer2": "A Larva",
      "incorrectAnswer3": "An Owlet"
  },
  {
      "question_id": "622a1c357cc59eab6f94ff30",
      "question": "Which American singer released the song 'You Rock My World'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Michael Jackson",
      "incorrectAnswer1": "Nicki Minaj",
      "incorrectAnswer2": "Neil Young",
      "incorrectAnswer3": "Eric Clapton"
  },
  {
      "question_id": "622a1c3c7cc59eab6f951a2d",
      "question": "Which of these is a building in the acropolis of Athens?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Parthenon",
      "incorrectAnswer1": "Colosseum",
      "incorrectAnswer2": "Vivarium",
      "incorrectAnswer3": "Academy"
  },
  {
      "question_id": "622a1c377cc59eab6f950530",
      "question": "What is Gemmology or Gemology the study of?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "gemstones and ornamental materials",
      "incorrectAnswer1": "wood",
      "incorrectAnswer2": "one of two main branches of soil science",
      "incorrectAnswer3": "the nose and its diseases"
  },
  {
      "question_id": "622a1c387cc59eab6f950813",
      "question": "The country of Laos is on which continent?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Asia",
      "incorrectAnswer1": "South America",
      "incorrectAnswer2": "Oceania",
      "incorrectAnswer3": "Europe"
  },
  {
      "question_id": "622a1c347cc59eab6f94fa2c",
      "question": "The painting \"The Arnolfini Marriage\" by Jan van Eyck is a part of which art movement?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Northern Renaissance",
      "incorrectAnswer1": "Art Nouveau",
      "incorrectAnswer2": "Dutch and Flemish Renaissance",
      "incorrectAnswer3": "Primitivism"
  },
  {
      "question_id": "622a1c3e7cc59eab6f952322",
      "question": "What are the 2 parts of complex numbers known as?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Real & Imaginary",
      "incorrectAnswer1": "True & False",
      "incorrectAnswer2": "Big & Small",
      "incorrectAnswer3": "Logical & Intuitive"
  },
  {
      "question_id": "622a1c3d7cc59eab6f951c3a",
      "question": "'Christmas Crackers' is cockney rhyming slang for which body part?",
      "difficulty": "hard",
      "category": "General Knowledge",
      "correctAnswer": "Testicles",
      "incorrectAnswer1": "Eyes",
      "incorrectAnswer2": "Fists",
      "incorrectAnswer3": "Arms"
  },
  {
      "question_id": "625ea001796f721e95543fc7",
      "question": "Which country's flag can be described as 'Two equal horizontal bands of blue and yellow.'?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Ukraine",
      "incorrectAnswer1": "Ghana",
      "incorrectAnswer2": "Denmark",
      "incorrectAnswer3": "Puerto Rico"
  },
  {
      "question_id": "639ae361929b90846f2fc8cb",
      "question": "What is the name of the Aztec feathered serpent god?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Quetzalcoatl",
      "incorrectAnswer1": "Huitzilopochtli",
      "incorrectAnswer2": "Tlaloc",
      "incorrectAnswer3": "Tezcatlipoca"
  },
  {
      "question_id": "622a1c3a7cc59eab6f95101e",
      "question": "What Is Toxicology The Study Of?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Poisons",
      "incorrectAnswer1": "Radiation",
      "incorrectAnswer2": "Abstract Categorisation",
      "incorrectAnswer3": "Venomous Animals"
  },
  {
      "question_id": "63b058814799123c67712f47",
      "question": "Which of these words describes the Indian state?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Secular",
      "incorrectAnswer1": "Communist",
      "incorrectAnswer2": "Feudal",
      "incorrectAnswer3": "Monarchial"
  },
  {
      "question_id": "622a1c377cc59eab6f95050f",
      "question": "What is Ichthyology the study of?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "fish",
      "incorrectAnswer1": "a variant of physiognomy",
      "incorrectAnswer2": "oceans",
      "incorrectAnswer3": "the Islam"
  },
  {
      "question_id": "622a1c347cc59eab6f94fba6",
      "question": "Which song begins with the lyrics: \"Oh, Mama, I’m in fear for my life from the long arm of the law...\"?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "\"Renegade\" by Styx",
      "incorrectAnswer1": "\"Circle of Life\" by Elton John",
      "incorrectAnswer2": "\"I'll Make a Man Out of You\" by Donny Osmond",
      "incorrectAnswer3": "\"Welcome to the Black Parade\" by My Chemical Romance"
  },
  {
      "question_id": "625063e8e12f6dec240bdf8b",
      "question": "K-Ci & JoJo had a one hit wonder in 1997 with which song?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "All My Life",
      "incorrectAnswer1": "We Don't Have to Take Our Clothes Off",
      "incorrectAnswer2": "Rock Me Amedeus",
      "incorrectAnswer3": "Relax"
  },
  {
      "question_id": "622a1c357cc59eab6f94fe49",
      "question": "Over 75% of the Earth's surface is covered by some form of _____.",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Water",
      "incorrectAnswer1": "Salt",
      "incorrectAnswer2": "Foliage",
      "incorrectAnswer3": "Human Settlement"
  },
  {
      "question_id": "63a03979c7d86251f9b65c64",
      "question": "What is the name of the witch in Snow White and the Seven Dwarfs?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "The Evil Queen",
      "incorrectAnswer1": "The Wicked Witch",
      "incorrectAnswer2": "Maleficent",
      "incorrectAnswer3": "The Lady of the Lake"
  },
  {
      "question_id": "622a1c347cc59eab6f94f86b",
      "question": "With which sport is George Best associated?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Football",
      "incorrectAnswer1": "Athletics",
      "incorrectAnswer2": "Rugby Union",
      "incorrectAnswer3": "Surfing"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951025",
      "question": "What is the troposphere immediately lower than?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "Stratosphere",
      "incorrectAnswer1": "Exosphere",
      "incorrectAnswer2": "Thermosphere",
      "incorrectAnswer3": "Mesosphere"
  },
  {
      "question_id": "639898405c9a75021f31046c",
      "question": "What is the process used to convert grape juice into wine called?",
      "difficulty": "medium",
      "category": "Food & Drink",
      "correctAnswer": "Fermentation",
      "incorrectAnswer1": "Distillation",
      "incorrectAnswer2": "Oxidation",
      "incorrectAnswer3": "Clarification"
  },
  {
      "question_id": "63f394fd989356ef48370bd7",
      "question": "Which of these fruits is not a melon?",
      "category": "Food & Drink",
      "correctAnswer": "Kiwi",
      "incorrectAnswer1": "Cantaloupe",
      "incorrectAnswer2": "Honeydew",
      "incorrectAnswer3": "Watermelon"
  },
  {
      "question_id": "622a1c357cc59eab6f94fce6",
      "question": "The language 'Vietnamese' belongs to which language family?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Austroasiatic",
      "incorrectAnswer1": "Uralic",
      "incorrectAnswer2": "Sino-Tibetan",
      "incorrectAnswer3": "Kra–Dai"
  },
  {
      "question_id": "622a1c367cc59eab6f9501bd",
      "question": "Which piece of written work starts with the line 'Harry Potter was a highly unusual boy in many ways.'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Harry Potter and the Prisoner of Azkaban",
      "incorrectAnswer1": "Harry Potter and the Half-Blood Prince",
      "incorrectAnswer2": "New Moon",
      "incorrectAnswer3": "The Alchemist"
  },
  {
      "question_id": "6260302a4b176d54800e3d11",
      "question": "Which of these cities is in Moldova?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Chisinau",
      "incorrectAnswer1": "Vienna",
      "incorrectAnswer2": "Cologne",
      "incorrectAnswer3": "Geneva"
  },
  {
      "question_id": "6233856f62eaad73716a8c6e",
      "question": "What two US states are rectangular?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Colorado and Wyoming",
      "incorrectAnswer1": "Texas and Illinois",
      "incorrectAnswer2": "Florida and Georgia",
      "incorrectAnswer3": "Maine and Nevada"
  },
  {
      "question_id": "622a1c367cc59eab6f9502f5",
      "question": "What was bought to France by Duke Richelieu after visiting Mahon, Minorca? ",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Mayonnaise",
      "incorrectAnswer1": "Mustard",
      "incorrectAnswer2": "Onion Soup",
      "incorrectAnswer3": "Quiche"
  },
  {
      "question_id": "622a1c347cc59eab6f94f8d1",
      "question": "Which actor played the role of Ratso Rizzo in Midnight Cowboy?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Dustin Hoffman",
      "incorrectAnswer1": "Dennis Hopper",
      "incorrectAnswer2": "Malcolm McDowell",
      "incorrectAnswer3": "Al Pacino"
  },
  {
      "question_id": "63d952fc168979b94b2e4f6b",
      "question": "Which leader was known as 'The Great Liberator'?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Simon Bolivar",
      "incorrectAnswer1": "Juan Peron",
      "incorrectAnswer2": "Augusto Pinochet",
      "incorrectAnswer3": "Ho Chi Minh"
  },
  {
      "question_id": "622a1c3a7cc59eab6f9510c2",
      "question": "Linen is obtained from the fibers of what plant?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Flax",
      "incorrectAnswer1": "Sunflower",
      "incorrectAnswer2": "Hemp",
      "incorrectAnswer3": "Wheat"
  },
  {
      "question_id": "622a1c357cc59eab6f94fcbe",
      "question": "The language 'Khmer' belongs to which language family?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Austroasiatic",
      "incorrectAnswer1": "Afroasiatic",
      "incorrectAnswer2": "Koreanic",
      "incorrectAnswer3": "Niger–Congo"
  },
  {
      "question_id": "622a1c3c7cc59eab6f9517e3",
      "question": "Which country was previously known as the Dutch East Indies?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Indonesia",
      "incorrectAnswer1": "Malaysia",
      "incorrectAnswer2": "Thailand",
      "incorrectAnswer3": "The Philippines"
  },
  {
      "question_id": "622a1c357cc59eab6f94ff61",
      "question": "Which American musician released the song 'Mr. Tambourine Man'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Bob Dylan",
      "incorrectAnswer1": "Neil Young",
      "incorrectAnswer2": "Eric Clapton",
      "incorrectAnswer3": "Alanis Morissette"
  },
  {
      "question_id": "622a1c347cc59eab6f94f86e",
      "question": "With which sport is Cristiano Ronaldo associated?",
      "difficulty": "easy",
      "category": "Sport & Leisure",
      "correctAnswer": "Football",
      "incorrectAnswer1": "Snooker",
      "incorrectAnswer2": "Cricket",
      "incorrectAnswer3": "Motor racing"
  },
  {
      "question_id": "622a1c387cc59eab6f950ba8",
      "question": "Which American industrial rock band released the song 'Hurt'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Nine Inch Nails",
      "incorrectAnswer1": "In This Moment",
      "incorrectAnswer2": "Nitty Gritty Dirt Band",
      "incorrectAnswer3": "Animal Collective"
  },
  {
      "question_id": "622a1c387cc59eab6f950ac5",
      "question": "Which of these countries borders Italy?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Austria",
      "incorrectAnswer1": "Croatia",
      "incorrectAnswer2": "Monaco",
      "incorrectAnswer3": "Liechtenstein"
  },
  {
      "question_id": "622a1c357cc59eab6f94fe35",
      "question": "What is the only borough of New York City that is not on an island? ",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "The Bronx",
      "incorrectAnswer1": "Manhattan",
      "incorrectAnswer2": "Harlem",
      "incorrectAnswer3": "Brooklyn"
  },
  {
      "question_id": "622a1c377cc59eab6f950570",
      "question": "What is Craniology the study of?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "The characteristics of the skull",
      "incorrectAnswer1": "Mythological beings",
      "incorrectAnswer2": "Large machinery",
      "incorrectAnswer3": "Angels and Demons"
  },
  {
      "question_id": "622a1c3b7cc59eab6f951635",
      "question": " What type of food is pitta?",
      "difficulty": "easy",
      "category": "Food & Drink",
      "correctAnswer": "Bread",
      "incorrectAnswer1": "Cheese",
      "incorrectAnswer2": "Fruit",
      "incorrectAnswer3": "Nut"
  },
  {
      "question_id": "623742d1cb85f7ce9e949df4",
      "question": "What is the capital city of The United Kingdom?",
      "difficulty": "easy",
      "category": "Geography",
      "correctAnswer": "London",
      "incorrectAnswer1": "Manchester",
      "incorrectAnswer2": "Birmingham",
      "incorrectAnswer3": "Winchester"
  },
  {
      "question_id": "62374186cb85f7ce9e949d6f",
      "question": "Maputo is the capital city of which country?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Mozambique",
      "incorrectAnswer1": "Burkina Faso",
      "incorrectAnswer2": "Sao Tome and Principe",
      "incorrectAnswer3": "Micronesia"
  },
  {
      "question_id": "639c9da1929b90846f2fc974",
      "question": "In which year did the Cold War between the U.S. and Soviet Union begin?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "1947",
      "incorrectAnswer1": "1945",
      "incorrectAnswer2": "1938",
      "incorrectAnswer3": "1955"
  },
  {
      "question_id": "639c9d95929b90846f2fc95b",
      "question": "What is the tallest building in the world?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Burj Khalifa",
      "incorrectAnswer1": "Shanghai Tower",
      "incorrectAnswer2": "Taipei 101",
      "incorrectAnswer3": "Empire State Building"
  },
  {
      "question_id": "622a1c357cc59eab6f94fe6d",
      "question": "Which American singer, songwriter, and actress released the song 'G.U.Y.'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Lady Gaga",
      "incorrectAnswer1": "Hikaru Utada",
      "incorrectAnswer2": "Drake",
      "incorrectAnswer3": "Madonna"
  },
  {
      "question_id": "622a1c357cc59eab6f94ffe4",
      "question": "What is the capital of Hungary? ",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Budapest",
      "incorrectAnswer1": "Pécs",
      "incorrectAnswer2": "Prague",
      "incorrectAnswer3": "Salzburg"
  },
  {
      "question_id": "622a1c387cc59eab6f950a5c",
      "question": "Which of these countries borders Ukraine?",
      "difficulty": "easy",
      "category": "Geography",
      "correctAnswer": "Russia",
      "incorrectAnswer1": "Bulgaria",
      "incorrectAnswer2": "Lithuania",
      "incorrectAnswer3": "Latvia"
  },
  {
      "question_id": "622a1c367cc59eab6f9501a2",
      "question": "In which book does 'Sancho Panza' appear?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Don Quixote",
      "incorrectAnswer1": "The Diary of a Chambermaid",
      "incorrectAnswer2": "The Neverending Story",
      "incorrectAnswer3": "Orlando Furioso"
  },
  {
      "question_id": "622a1c367cc59eab6f950094",
      "question": "What 3 Letter Word It The Name Given To A Replayed Point In Tennis?",
      "difficulty": "medium",
      "category": "Sport & Leisure",
      "correctAnswer": "Let",
      "incorrectAnswer1": "Dus",
      "incorrectAnswer2": "Par",
      "incorrectAnswer3": "See"
  },
  {
      "question_id": "622a1c3b7cc59eab6f951779",
      "question": "Which novel opens and closes with the letters of Robert Walton?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Frankenstein",
      "incorrectAnswer1": "Great Expectation",
      "incorrectAnswer2": "Ullyses",
      "incorrectAnswer3": "Of Mice and Men"
  },
  {
      "question_id": "6371623c1bf863c45ca6c361",
      "question": "Which of these Latin phrases means 'Wisdom is power'?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Sapientia potentia est",
      "incorrectAnswer1": "Hodie mihi, cras tibi",
      "incorrectAnswer2": "Ego te provoco",
      "incorrectAnswer3": "Melita, domi adsum"
  },
  {
      "question_id": "622a1c397cc59eab6f950e55",
      "question": "Which author wrote 'Le Livre d’esquisses'?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Washington Irving",
      "incorrectAnswer1": "Suzanne Collins",
      "incorrectAnswer2": "James Fenimore Cooper",
      "incorrectAnswer3": "Donna Leon"
  },
  {
      "question_id": "622a1c367cc59eab6f95019f",
      "question": "Name the art style, usually paintings, characterized by a simplified style, nonscientific perspective, and bold colors. The artists are generally not professionally trained.",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Naive art",
      "incorrectAnswer1": "Beginner's art",
      "incorrectAnswer2": "Natural art",
      "incorrectAnswer3": "Pop art"
  },
  {
      "question_id": "624c6144badf21197f98f770",
      "question": "Shawarma is a dish that is most associated with which part of the world?",
      "difficulty": "medium",
      "category": "Food & Drink",
      "correctAnswer": "The Middle East",
      "incorrectAnswer1": "China",
      "incorrectAnswer2": "Cameroon",
      "incorrectAnswer3": "Guyana"
  },
  {
      "question_id": "622a1c397cc59eab6f950dc1",
      "question": "Which band includes 'Paul McCartney'?",
      "difficulty": "easy",
      "category": "Music",
      "correctAnswer": "The Beatles",
      "incorrectAnswer1": "Deep Purple",
      "incorrectAnswer2": "Feeder",
      "incorrectAnswer3": "Uriah Heep"
  },
  {
      "question_id": "625063d0e12f6dec240bdf84",
      "question": "What song did Sugarhill Gang have a hit with in 1980?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Rapper's Delight",
      "incorrectAnswer1": "Epic",
      "incorrectAnswer2": "Groove Is in the Heart",
      "incorrectAnswer3": "Take on Me"
  },
  {
      "question_id": "622a1c357cc59eab6f94ffa3",
      "question": "What country is Santo Domingo the capital of?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Dominican Republic",
      "incorrectAnswer1": "Haiti",
      "incorrectAnswer2": "Jamaica",
      "incorrectAnswer3": "Saint Kitts and Nevis"
  },
  {
      "question_id": "62602e584b176d54800e3cd4",
      "question": "Which of these cities is in Belgium?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Gent",
      "incorrectAnswer1": "Prague",
      "incorrectAnswer2": "Vienna",
      "incorrectAnswer3": "Stockholm"
  },
  {
      "question_id": "627164321ba117625baac94e",
      "question": "In which country is maotai a popular drink?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "China",
      "incorrectAnswer1": "Brazil",
      "incorrectAnswer2": "England",
      "incorrectAnswer3": "Ukraine"
  },
  {
      "question_id": "62417d1c0f96c4efe8d773a5",
      "question": "Which of these is a hockey team based in Edmonton?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Edmonton Oilers",
      "incorrectAnswer1": "Edmonton Steelers",
      "incorrectAnswer2": "Edmonton Eathquakes",
      "incorrectAnswer3": "Edmonton Padres"
  },
  {
      "question_id": "622a1c397cc59eab6f950e28",
      "question": "Which author wrote 'His Dark Materials trilogy'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Philip Pullman",
      "incorrectAnswer1": "J. R. R. Tolkien",
      "incorrectAnswer2": "Christopher Tolkien",
      "incorrectAnswer3": "Neil Gaiman"
  },
  {
      "question_id": "622a1c357cc59eab6f94ff7c",
      "question": "Where city has the statue, 'Manneken Pis, depicting a naked boy urinating into a fountain?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Brussels",
      "incorrectAnswer1": "Antwerp",
      "incorrectAnswer2": "Liège",
      "incorrectAnswer3": "Amsterdam"
  },
  {
      "question_id": "623b579ffd6c701a9211836c",
      "question": "In which country would you find the Rila Monastery?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Bulgaria",
      "incorrectAnswer1": "Guatemala",
      "incorrectAnswer2": "Cuba",
      "incorrectAnswer3": "Belgium"
  },
  {
      "question_id": "62373f70cb85f7ce9e949c99",
      "question": "What is the capital city of Argentina?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Buenos Aires",
      "incorrectAnswer1": "Porto-Novo",
      "incorrectAnswer2": "São Paulo",
      "incorrectAnswer3": "Córdoba"
  },
  {
      "question_id": "6357fd4368bd5000211e718e",
      "question": "Xhosa is a language spoken in which of these countries?",
      "category": "Society & Culture",
      "correctAnswer": "Zimbabwe",
      "incorrectAnswer1": "Malawi",
      "incorrectAnswer2": "Taiwan",
      "incorrectAnswer3": "Mozambique"
  },
  {
      "question_id": "6293ec3c7f41d6338b96eee1",
      "question": "Which of the following describes John Locke?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Political philosopher who promoted a theory of liberal democracy and a social contract.",
      "incorrectAnswer1": "Renaissance sculptor, painter and architect",
      "incorrectAnswer2": "Explorer who landed in America.",
      "incorrectAnswer3": "Biologist who discovered penicillin."
  },
  {
      "question_id": "622a1c347cc59eab6f94fc1a",
      "question": "Which of these quotes is from the film 'Wall Street'?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "\"Greed, for lack of a better word, is good.\"",
      "incorrectAnswer1": "\"Hello, gorgeous.\"",
      "incorrectAnswer2": "\"That’s a bingo!\"",
      "incorrectAnswer3": "\"Tell 'em to go out there with all they got and win just one for the Gipper.\""
  },
  {
      "question_id": "625740ef9da29df7b05f7403",
      "question": "Name the movie that matches the following plot summary: 'A maverick teacher emboldens his students to new heights of self-expression.'",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Dead Poets Society",
      "incorrectAnswer1": "Raging Bull",
      "incorrectAnswer2": "Modern Times",
      "incorrectAnswer3": "The Wizard of Oz"
  },
  {
      "question_id": "62611f2c4b176d54800e3d46",
      "question": "In which year did the communists come into to power in Beijing following the Chinese Civil War?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "1949",
      "incorrectAnswer1": "1941",
      "incorrectAnswer2": "1970",
      "incorrectAnswer3": "1923"
  },
  {
      "question_id": "622a1c357cc59eab6f94fd97",
      "question": "Which Singing Diva Flopped At The Box Office With Her Debut Movie “Glitter”?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Mariah Carey",
      "incorrectAnswer1": "Rihanna",
      "incorrectAnswer2": "Beyonce",
      "incorrectAnswer3": "Christina Aguilera"
  },
  {
      "question_id": "62433454cfaae40c12961438",
      "question": "What is a baby hawk known as?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "An Eyas",
      "incorrectAnswer1": "A Nymph",
      "incorrectAnswer2": "A Calf",
      "incorrectAnswer3": "A Poult"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951364",
      "question": "A large painting or decoration done on a wall is known as what?",
      "difficulty": "easy",
      "category": "Arts & Literature",
      "correctAnswer": "Mural",
      "incorrectAnswer1": "Sculpture",
      "incorrectAnswer2": "Graffiti",
      "incorrectAnswer3": "Mozaic"
  },
  {
      "question_id": "622a1c357cc59eab6f94fcca",
      "question": "The language 'Eastern Punjabi' belongs to which language family?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Indo-European",
      "incorrectAnswer1": "Sino-Tibetan",
      "incorrectAnswer2": "Koreanic",
      "incorrectAnswer3": "Afroasiatic"
  },
  {
      "question_id": "625e9e52796f721e95543f4f",
      "question": "Which country's flag fits the description of 'Red with a white cross that extends to the edges.'?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Denmark",
      "incorrectAnswer1": "Netherlands",
      "incorrectAnswer2": "Poland",
      "incorrectAnswer3": "Qatar"
  },
  {
      "question_id": "622a1c3d7cc59eab6f951c1a",
      "question": "From what country did the U.S. buy the Virgin Islands?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Denmark",
      "incorrectAnswer1": "Norway",
      "incorrectAnswer2": "Sweden",
      "incorrectAnswer3": "Finland"
  },
  {
      "question_id": "622a1c397cc59eab6f950de9",
      "question": "Which author wrote 'Little Women'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Louisa May Alcott",
      "incorrectAnswer1": "Edgar Allan Poe",
      "incorrectAnswer2": "Nathaniel Hawthorne",
      "incorrectAnswer3": "Stephen King"
  },
  {
      "question_id": "622a1c367cc59eab6f95024e",
      "question": "Blanche Ames, Lord Lambourne and Willis Williams are all varieties of _________",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Apple ",
      "incorrectAnswer1": "Grape",
      "incorrectAnswer2": "Banana",
      "incorrectAnswer3": "Cherry"
  },
  {
      "question_id": "63dd25c4742e43ed64f1f010",
      "question": "In economics, what is the term for the use of government funds to influence the economy?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Fiscal Policy",
      "incorrectAnswer1": "Honesty Policy",
      "incorrectAnswer2": "Tax Policy",
      "incorrectAnswer3": "Free Market"
  },
  {
      "question_id": "622a1c347cc59eab6f94f8e4",
      "question": "Which actress played the role of Phyllis Dietrichson in Double Indemnity?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Barbara Stanwyck",
      "incorrectAnswer1": "Vivien Leigh",
      "incorrectAnswer2": "Anne Bancroft",
      "incorrectAnswer3": "Olivia Newton-John"
  },
  {
      "question_id": "62417d960f96c4efe8d773d6",
      "question": "Which of these is a soccer team based in Portland?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Portland Timbers",
      "incorrectAnswer1": "Portland Sporting",
      "incorrectAnswer2": "Portland Indians",
      "incorrectAnswer3": "Portland Dolphins"
  },
  {
      "question_id": "622a1c397cc59eab6f950e7b",
      "question": "Which author wrote 'Slaughterhouse-Five'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Kurt Vonnegut",
      "incorrectAnswer1": "Vladimir Nabokov",
      "incorrectAnswer2": "Edgar Allan Poe",
      "incorrectAnswer3": "Stanisław Lem"
  },
  {
      "question_id": "622a1c367cc59eab6f9503b4",
      "question": "Which King Wore Two Shirts At His Execution So As Not To Shiver And Appear Frightened?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Charles I",
      "incorrectAnswer1": "Louis XIV",
      "incorrectAnswer2": "Louis XVI",
      "incorrectAnswer3": "Charles III"
  },
  {
      "question_id": "6243331bcfaae40c129613bf",
      "question": "What is the word for a male badger?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "A Boar",
      "incorrectAnswer1": "A Dog",
      "incorrectAnswer2": "A Tom",
      "incorrectAnswer3": "A Jack"
  },
  {
      "question_id": "622a1c397cc59eab6f950ee1",
      "question": "Which author wrote 'A Song of Ice and Fire'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "George R. R. Martin",
      "incorrectAnswer1": "Stephen King",
      "incorrectAnswer2": "Jack Vance",
      "incorrectAnswer3": "Edgar Rice Burroughs"
  },
  {
      "question_id": "622a1c3c7cc59eab6f9518d1",
      "question": "What was the instrument of execution during the \"Reign of Terror\"?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Guillotine",
      "incorrectAnswer1": "Firing Squad",
      "incorrectAnswer2": "Fire",
      "incorrectAnswer3": "Dogs"
  },
  {
      "question_id": "622a1c367cc59eab6f95014f",
      "question": "Who wrote the novel \"Emma\"?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Jane Austen",
      "incorrectAnswer1": "Emily Bronte",
      "incorrectAnswer2": "Oscar Wilde",
      "incorrectAnswer3": "John Updike"
  },
  {
      "question_id": "622a1c347cc59eab6f94faf9",
      "question": "Who won the 2015 Academy Award for Best Leading Actress for playing the role of Ma in Room?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Brie Larson",
      "incorrectAnswer1": "Cate Blanchett",
      "incorrectAnswer2": "Jennifer Lawrence",
      "incorrectAnswer3": "Charlotte Rampling"
  },
  {
      "question_id": "625698cc9da29df7b05f729e",
      "question": "In the Marvel Cinematic Unvierse, which character is played by Florence Kasumba?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Ayo",
      "incorrectAnswer1": "Agent Peggy Carter",
      "incorrectAnswer2": "Agent Maria Hill",
      "incorrectAnswer3": "Jane Foster"
  },
  {
      "question_id": "622a1c377cc59eab6f9504a5",
      "question": "What is Psychopathology the study of?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "the mental processes within mental illness or disorders",
      "incorrectAnswer1": "life in outer space",
      "incorrectAnswer2": "a synonym for taxonomy",
      "incorrectAnswer3": "prehistoric climates"
  },
  {
      "question_id": "6266bc8cb0e62e469cf43e9b",
      "question": "Which of these is a brass instrument?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Cornett",
      "incorrectAnswer1": "Drum",
      "incorrectAnswer2": "Bongo",
      "incorrectAnswer3": "Ukelele"
  },
  {
      "question_id": "62433434cfaae40c1296142b",
      "question": "What would you call a female guinea pig?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "A Sow",
      "incorrectAnswer1": "A Queen",
      "incorrectAnswer2": "A Ewe",
      "incorrectAnswer3": "A Gander"
  },
  {
      "question_id": "63b069514799123c67712f7b",
      "question": "What is the traditional dance of the Zulu people of South Africa?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Indlamu",
      "incorrectAnswer1": "Hula",
      "incorrectAnswer2": "Tango",
      "incorrectAnswer3": "Flamenco"
  },
  {
      "question_id": "625063bce12f6dec240bdf7e",
      "question": "What song did Nena have a hit with in 1984?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "99 Luftballoons",
      "incorrectAnswer1": "Bust a Move",
      "incorrectAnswer2": "Nothing Compares 2 U",
      "incorrectAnswer3": "I'Ve Never Been to Me"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951354",
      "question": "What word describes a painting executed in a single color?",
      "difficulty": "easy",
      "category": "Arts & Literature",
      "correctAnswer": "Monochrome",
      "incorrectAnswer1": "Magenta",
      "incorrectAnswer2": "Unicolor",
      "incorrectAnswer3": "Solohue"
  },
  {
      "question_id": "6257402b9da29df7b05f73c9",
      "question": "Name the movie that matches the following plot summary: 'A mafia enforcer and a casino executive compete against each other over a gambling empire.'",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Casino",
      "incorrectAnswer1": "Parasite",
      "incorrectAnswer2": "Eternal Sunshine of the Spotless Mind",
      "incorrectAnswer3": "The Godfather"
  },
  {
      "question_id": "625740909da29df7b05f73e7",
      "question": "What is the plot of the movie Ben-Hur?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "After a prince is betrayed and enslaved, he regains his freedom and comes back for revenge.",
      "incorrectAnswer1": "A group of thieves feel the pressure from the police when they leave a clue at their latest heist.",
      "incorrectAnswer2": "A car salesman's inept crime falls apart due to his and his henchmen's bungling.",
      "incorrectAnswer3": "After his father goes missing, a professor finds himself in a search for the Holy Grail."
  },
  {
      "question_id": "622a1c367cc59eab6f950056",
      "question": "Who Was Beaten By Muhammad Ali In The Bout Entitled 'The Thriller In Manilla'?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Joe Frazier",
      "incorrectAnswer1": "Sugar Ray Robinson",
      "incorrectAnswer2": "George Foreman",
      "incorrectAnswer3": "Mike Tyson"
  },
  {
      "question_id": "62417db40f96c4efe8d773e1",
      "question": "Which of these is an American Football team based in Seattle?",
      "difficulty": "medium",
      "category": "Sport & Leisure",
      "correctAnswer": "Seattle Seahawks",
      "incorrectAnswer1": "Seattle Raptors",
      "incorrectAnswer2": "Seattle Bengals",
      "incorrectAnswer3": "Seattle Brewers"
  },
  {
      "question_id": "624c607b50d1a5e051325a5e",
      "question": "Fish & Chips is a dish that is most associated with which part of the world?",
      "difficulty": "easy",
      "category": "Food & Drink",
      "correctAnswer": "England",
      "incorrectAnswer1": "Mexico",
      "incorrectAnswer2": "Philippines",
      "incorrectAnswer3": "Spain"
  },
  {
      "question_id": "622a1c367cc59eab6f9500c7",
      "question": "How Many Cards Are You Dealt In A Game Of Gin Rummy? ",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "10",
      "incorrectAnswer1": "7",
      "incorrectAnswer2": "5",
      "incorrectAnswer3": "13"
  },
  {
      "question_id": "6242cba0d543524f1b19c941",
      "question": "What is the word for a group of swifts?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "A flock",
      "incorrectAnswer1": "A skulk",
      "incorrectAnswer2": "A down",
      "incorrectAnswer3": "A brood"
  },
  {
      "question_id": "622a1c3c7cc59eab6f951a39",
      "question": "The last line of which document is 'Working men of all countries, unite.'?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Communist Manifesto",
      "incorrectAnswer1": "The American Declaration of Independence",
      "incorrectAnswer2": "The Gettysberg Address",
      "incorrectAnswer3": "Magna Carta"
  },
  {
      "question_id": "622a1c3d7cc59eab6f951c45",
      "question": "Which female singer dueted with Eminem on the 2000 hit 'Stan'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Dido",
      "incorrectAnswer1": "Nelly Furtado",
      "incorrectAnswer2": "Mariah Carey",
      "incorrectAnswer3": "Norah Jones"
  },
  {
      "question_id": "62611f444b176d54800e3d4d",
      "question": "When did the Cuban Missile Crisis bring the world to the brink of nuclear war?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "1962",
      "incorrectAnswer1": "1950",
      "incorrectAnswer2": "1970",
      "incorrectAnswer3": "1973"
  },
  {
      "question_id": "622a1c3c7cc59eab6f951803",
      "question": "Which dynasty ruled China from 1368- to 1644?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Ming",
      "incorrectAnswer1": "Tang",
      "incorrectAnswer2": "Qing",
      "incorrectAnswer3": "Wu"
  },
  {
      "question_id": "6237422bcb85f7ce9e949db1",
      "question": "Riyadh is the capital city of which country?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Saudi Arabia",
      "incorrectAnswer1": "Burundi",
      "incorrectAnswer2": "Cuba",
      "incorrectAnswer3": "North Macedonia"
  },
  {
      "question_id": "63b0694e4799123c67712f79",
      "question": "What type of coat originates from the Inuit people of the Arctic?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "Parka",
      "incorrectAnswer1": "Peacoat",
      "incorrectAnswer2": "Trenchcoat",
      "incorrectAnswer3": "Puffer Jacket"
  },
  {
      "question_id": "622a1c347cc59eab6f94fc32",
      "question": "Which of these quotes is from the film 'Gone with the Wind'?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "\"After all, tomorrow is another day!\"",
      "incorrectAnswer1": "\"Here's Johnny!\"",
      "incorrectAnswer2": "\"Take your stinking paws off me, you damned dirty ape.\"",
      "incorrectAnswer3": "\"You shall not pass!\""
  },
  {
      "question_id": "622a1c347cc59eab6f94facb",
      "question": "Who won the 2005 Academy Award for Best Leading Actor for playing the role of Truman Capote in Capote?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Philip Seymour Hoffman",
      "incorrectAnswer1": "Terrence Howard",
      "incorrectAnswer2": "Heath Ledger",
      "incorrectAnswer3": "Joaquin Phoenix"
  },
  {
      "question_id": "622a1c397cc59eab6f950d4c",
      "question": "Which band includes 'Stevie Nicks'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Fleetwood Mac",
      "incorrectAnswer1": "W.A.S.P.",
      "incorrectAnswer2": "Paramore",
      "incorrectAnswer3": "Alice in Chains"
  },
  {
      "question_id": "622a1c387cc59eab6f950aef",
      "question": "Which of these countries borders Germany?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Luxembourg",
      "incorrectAnswer1": "Liechtenstein",
      "incorrectAnswer2": "Slovenia",
      "incorrectAnswer3": "San Marino"
  },
  {
      "question_id": "626030654b176d54800e3d21",
      "question": "Which of these cities is in Portugal?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Guimaraes",
      "incorrectAnswer1": "The Hague",
      "incorrectAnswer2": "Budapest",
      "incorrectAnswer3": "Milan"
  },
  {
      "question_id": "622a1c357cc59eab6f94ff0a",
      "question": "Who sung 'Material Girl'?",
      "difficulty": "easy",
      "category": "Music",
      "correctAnswer": "Madonna",
      "incorrectAnswer1": "Eric Clapton",
      "incorrectAnswer2": "Nicki Minaj",
      "incorrectAnswer3": "Alanis Morissette"
  },
  {
      "question_id": "63e13a21106de6ffa7d4a79d",
      "question": "What is the medical term for the kneecap?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Patella",
      "incorrectAnswer1": "Humerus",
      "incorrectAnswer2": "Femur",
      "incorrectAnswer3": "Clavicle"
  },
  {
      "question_id": "622a1c387cc59eab6f950ae9",
      "question": "Which of these countries borders France?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Andorra",
      "incorrectAnswer1": "Liechtenstein",
      "incorrectAnswer2": "United Kingdom",
      "incorrectAnswer3": "San Marino"
  },
  {
      "question_id": "622a1c3a7cc59eab6f9511cd",
      "question": "In Greek mythology, who was the son of Peleus and Thetis?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Achilles",
      "incorrectAnswer1": "Narcissus",
      "incorrectAnswer2": "Hercules",
      "incorrectAnswer3": "Jason"
  },
  {
      "question_id": "622a1c377cc59eab6f95078b",
      "question": "Which actor has starred in both Harry Potter and Batman Begins?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Gary Oldman",
      "incorrectAnswer1": "James Franco",
      "incorrectAnswer2": "George Clooney",
      "incorrectAnswer3": "Laurence Fishburne"
  },
  {
      "question_id": "62602e3a4b176d54800e3ccb",
      "question": "Which of these cities is in Israel?",
      "difficulty": "easy",
      "category": "Geography",
      "correctAnswer": "Jerusalem",
      "incorrectAnswer1": "Al-Ain",
      "incorrectAnswer2": "Antalya",
      "incorrectAnswer3": "Adana"
  },
  {
      "question_id": "62374031cb85f7ce9e949ce5",
      "question": "Copenhagen is the capital city of which country?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Denmark",
      "incorrectAnswer1": "Portugal",
      "incorrectAnswer2": "San Marino",
      "incorrectAnswer3": "Poland"
  },
  {
      "question_id": "622a1c397cc59eab6f950cf3",
      "question": "Which English rock band released the album 'Magical Mystery Tour'?",
      "difficulty": "easy",
      "category": "Music",
      "correctAnswer": "The Beatles",
      "incorrectAnswer1": "Deep Purple",
      "incorrectAnswer2": "Feeder",
      "incorrectAnswer3": "Uriah Heep"
  },
  {
      "question_id": "622a1c397cc59eab6f950c18",
      "question": "Which American rock band released the album 'Bleach'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Nirvana",
      "incorrectAnswer1": "Counting Crows",
      "incorrectAnswer2": "Three 6 Mafia",
      "incorrectAnswer3": "The Velvet Underground"
  },
  {
      "question_id": "623b577afd6c701a9211835e",
      "question": "In which country would you find the Taj Mahal?",
      "difficulty": "easy",
      "category": "Geography",
      "correctAnswer": "India",
      "incorrectAnswer1": "Egypt",
      "incorrectAnswer2": "Italy",
      "incorrectAnswer3": "China"
  },
  {
      "question_id": "622a1c347cc59eab6f94f8a3",
      "question": "With which sport is Emil Zatopek associated?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Athletics",
      "incorrectAnswer1": "Badminton",
      "incorrectAnswer2": "Motor racing",
      "incorrectAnswer3": "Basketball"
  },
  {
      "question_id": "622a1c367cc59eab6f95020c",
      "question": "Which director directed Solo: A Star Wars Story?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Ron Howard",
      "incorrectAnswer1": "Steven Spielberg",
      "incorrectAnswer2": "Woody Allen",
      "incorrectAnswer3": "Martin Scorsese"
  },
  {
      "question_id": "622a1c347cc59eab6f94fb2c",
      "question": "Which film won the Academy Award for Best Picture in 2012?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Argo",
      "incorrectAnswer1": "Amour",
      "incorrectAnswer2": "Beasts of the Southern Wild",
      "incorrectAnswer3": "Django Unchained"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951019",
      "question": "What large herbivore sleeps only one hour a night?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "Antelope",
      "incorrectAnswer1": "Bison",
      "incorrectAnswer2": "Elk",
      "incorrectAnswer3": "Deer"
  },
  {
      "question_id": "622a1c397cc59eab6f950c90",
      "question": "Which English rock band released the song 'Brown Sugar'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "The Rolling Stones",
      "incorrectAnswer1": "McFly",
      "incorrectAnswer2": "Delirious?",
      "incorrectAnswer3": "Depeche Mode"
  },
  {
      "question_id": "622a1c397cc59eab6f950d44",
      "question": "Which band released the classic punk rock album 'American Idiot'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Green Day",
      "incorrectAnswer1": "Animal Collective",
      "incorrectAnswer2": "Fall Out Boy",
      "incorrectAnswer3": "Blink-182"
  },
  {
      "question_id": "622a1c397cc59eab6f950dd8",
      "question": "Which author wrote 'Wuthering Heights'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Emily Brontë",
      "incorrectAnswer1": "Oscar Wilde",
      "incorrectAnswer2": "H. Rider Haggard",
      "incorrectAnswer3": "Percy Bysshe Shelley"
  },
  {
      "question_id": "622a1c377cc59eab6f950738",
      "question": "Which actor has starred in films including Avengers: Endgame and No Country for Old Men?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Josh Brolin",
      "incorrectAnswer1": "Michael Douglas",
      "incorrectAnswer2": "Ben Kingsley",
      "incorrectAnswer3": "Kiefer Sutherland"
  },
  {
      "question_id": "622a1c3e7cc59eab6f952231",
      "question": "In which country is the company Daewoo based?",
      "difficulty": "medium",
      "category": "Society & Culture",
      "correctAnswer": "South Korea",
      "incorrectAnswer1": "Taiwan",
      "incorrectAnswer2": "China",
      "incorrectAnswer3": "Japan"
  },
  {
      "question_id": "6357fd4a68bd5000211e7191",
      "question": "Chewa is a language spoken in which of these countries?",
      "category": "Society & Culture",
      "correctAnswer": "Malawi",
      "incorrectAnswer1": "India",
      "incorrectAnswer2": "Algeria",
      "incorrectAnswer3": "Nigeria"
  },
  {
      "question_id": "622a1c367cc59eab6f950075",
      "question": "Which Country Hosted The 2004 Summer Olympics?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Greece",
      "incorrectAnswer1": "Argentina",
      "incorrectAnswer2": "Japan",
      "incorrectAnswer3": "Australia"
  },
  {
      "question_id": "62602d774b176d54800e3c9a",
      "question": "Where would you find the city of Helsinki?",
      "difficulty": "easy",
      "category": "Geography",
      "correctAnswer": "Finland",
      "incorrectAnswer1": "Italy",
      "incorrectAnswer2": "Spain",
      "incorrectAnswer3": "Portugal"
  },
  {
      "question_id": "622a1c347cc59eab6f94fa79",
      "question": "Who won the 1988 Academy Award for Best Supporting Actor for playing the role of Otto in A Fish Called Wanda?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Kevin Kline",
      "incorrectAnswer1": "Alec Guinness",
      "incorrectAnswer2": "Martin Landau",
      "incorrectAnswer3": "River Phoenix"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951002",
      "question": "Which archaic imperial unit of measure is equivalent to 54 gallons?",
      "difficulty": "hard",
      "category": "General Knowledge",
      "correctAnswer": "A Hogshead",
      "incorrectAnswer1": "An Alekeg",
      "incorrectAnswer2": "A Bogteen",
      "incorrectAnswer3": "A Grond"
  },
  {
      "question_id": "63dd25cb742e43ed64f1f01c",
      "question": "What is the term for a tax on a good or service imported from another country?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Tariff",
      "incorrectAnswer1": "Sales Tax",
      "incorrectAnswer2": "Trade Tax",
      "incorrectAnswer3": "Bordereux"
  },
  {
      "question_id": "622a1c367cc59eab6f9503d9",
      "question": "What ocean was amelia earhart flying over when she disappeared",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "Pacific",
      "incorrectAnswer1": "Atlantic",
      "incorrectAnswer2": "Indian",
      "incorrectAnswer3": "Arctic"
  },
  {
      "question_id": "622a1c377cc59eab6f95061a",
      "question": "Which actor has featued in films including Band of Brothers and Mission: Impossible – Fallout?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Simon Pegg",
      "incorrectAnswer1": "Terry O'Quinn",
      "incorrectAnswer2": "Michael Keaton",
      "incorrectAnswer3": "Toshirō Mifune"
  },
  {
      "question_id": "622a1c367cc59eab6f95025b",
      "question": "Which drink do you associate with a holy island in Northumberland?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Lindisfarne Mead ",
      "incorrectAnswer1": "Long Island Iced Tea",
      "incorrectAnswer2": "Camomile Tea",
      "incorrectAnswer3": "Dandelion & Burdock"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951367",
      "question": "What is the word given to a flat board used by a painter to mix and hold colors?",
      "difficulty": "easy",
      "category": "Arts & Literature",
      "correctAnswer": "A Palette",
      "incorrectAnswer1": "An eisel",
      "incorrectAnswer2": "A square",
      "incorrectAnswer3": "A pitcher"
  },
  {
      "question_id": "622a1c397cc59eab6f950e4a",
      "question": "Which author wrote 'The Hitchhiker's Guide to the Galaxy'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Douglas Adams",
      "incorrectAnswer1": "Neil Gaiman",
      "incorrectAnswer2": "H. G. Wells",
      "incorrectAnswer3": "Arthur C. Clarke"
  },
  {
      "question_id": "622a1c3a7cc59eab6f95139b",
      "question": "In which book series does 'Ginny Weasley' appear?",
      "difficulty": "easy",
      "category": "Arts & Literature",
      "correctAnswer": "Harry Potter",
      "incorrectAnswer1": "Voyages Extraordinaires",
      "incorrectAnswer2": "Percy Jackson & the Olympians",
      "incorrectAnswer3": "Twilight"
  },
  {
      "question_id": "622a1c387cc59eab6f950b11",
      "question": "Which band includes 'Dolores O'Riordan'?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "The Cranberries",
      "incorrectAnswer1": "The Corrs",
      "incorrectAnswer2": "Boyzone",
      "incorrectAnswer3": "Thin Lizzy"
  },
  {
      "question_id": "622a1c347cc59eab6f94f8cb",
      "question": "Which actress played the role of Dorothy Gale in The Wizard of Oz?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Judy Garland",
      "incorrectAnswer1": "Anne Bancroft",
      "incorrectAnswer2": "Olivia Newton-John",
      "incorrectAnswer3": "Vivien Leigh"
  },
  {
      "question_id": "622a1c357cc59eab6f950000",
      "question": "Ouagadougou is the capital of ______?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Burkina Faso",
      "incorrectAnswer1": "Ghana",
      "incorrectAnswer2": "Mali",
      "incorrectAnswer3": "Togo"
  },
  {
      "question_id": "622a1c377cc59eab6f950674",
      "question": "Which actor has featued in films including Some Like It Hot and JFK?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Jack Lemmon",
      "incorrectAnswer1": "Timothy Spall",
      "incorrectAnswer2": "Hugo Weaving",
      "incorrectAnswer3": "Tim Roth"
  },
  {
      "question_id": "622a1c377cc59eab6f950618",
      "question": "Which actor has featued in films including Avengers: Endgame and Avatar?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Zoe Saldana",
      "incorrectAnswer1": "Catherine Deneuve",
      "incorrectAnswer2": "Audrey Hepburn",
      "incorrectAnswer3": "Rachel Weisz"
  },
  {
      "question_id": "62417ccd8c3137686862d73c",
      "question": "Which of these is a basketball team based in Boston?",
      "difficulty": "medium",
      "category": "Sport & Leisure",
      "correctAnswer": "Boston Celtics",
      "incorrectAnswer1": "Boston Braves",
      "incorrectAnswer2": "Boston Capitals",
      "incorrectAnswer3": "Boston Browns"
  },
  {
      "question_id": "62602d9d4b176d54800e3ca5",
      "question": "In which country is the city of Budapest?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Hungary",
      "incorrectAnswer1": "Luxembourg",
      "incorrectAnswer2": "Moldova",
      "incorrectAnswer3": "Greece"
  },
  {
      "question_id": "622a1c387cc59eab6f95080a",
      "question": "The country of The Bahamas is on which continent?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "North America",
      "incorrectAnswer1": "South America",
      "incorrectAnswer2": "Oceania",
      "incorrectAnswer3": "Europe"
  },
  {
      "question_id": "624dba6dde6018633d31f6c6",
      "question": "Who played the role of James Bond in Dr. No?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Sean Connery",
      "incorrectAnswer1": "George Lazenby",
      "incorrectAnswer2": "Roger Moore",
      "incorrectAnswer3": "Timothy Dalton"
  },
  {
      "question_id": "62573f899da29df7b05f73a1",
      "question": "What is the plot of the movie Star Wars?",
      "difficulty": "easy",
      "category": "Film & TV",
      "correctAnswer": "A young man joins forces with an old man, a cocky pilot, a beast and two robots to save the galaxy.",
      "incorrectAnswer1": "The son of a city's mastermind falls in love with a working-class prophet.",
      "incorrectAnswer2": "After two male musicians witness a murder, they flee in an all-female band disguised as women.",
      "incorrectAnswer3": "Violence and mayhem ensue after a man stumbles upon more than two million dollars."
  },
  {
      "question_id": "622a1c357cc59eab6f94ff3b",
      "question": "Who released the song 'Off the Wall'?",
      "difficulty": "easy",
      "category": "Music",
      "correctAnswer": "Michael Jackson",
      "incorrectAnswer1": "Nicki Minaj",
      "incorrectAnswer2": "Neil Young",
      "incorrectAnswer3": "Eric Clapton"
  },
  {
      "question_id": "622a1c347cc59eab6f94f867",
      "question": "With which sport is Eusebio associated?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Football",
      "incorrectAnswer1": "Swimming",
      "incorrectAnswer2": "Hockey",
      "incorrectAnswer3": "Motor racing"
  },
  {
      "question_id": "622a1c347cc59eab6f94fb01",
      "question": "Who won the 2007 Academy Award for Best Leading Actress for playing the role of Edith Piaf in La Vie en Rose?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Marion Cotillard",
      "incorrectAnswer1": "Cate Blanchett",
      "incorrectAnswer2": "Julie Christie",
      "incorrectAnswer3": "Laura Linney"
  },
  {
      "question_id": "62417d200f96c4efe8d773a7",
      "question": "Which of these is a baseball team based in Houston?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Houston Astros",
      "incorrectAnswer1": "Houston Predators",
      "incorrectAnswer2": "Houston City",
      "incorrectAnswer3": "Houston Football"
  },
  {
      "question_id": "622a1c367cc59eab6f950347",
      "question": "Who was President of the USA from 1953 till 1961?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Dwight Eisenhower",
      "incorrectAnswer1": "Franklin Roosevelt",
      "incorrectAnswer2": "Lyndon Johnson",
      "incorrectAnswer3": "Jimmy Carter"
  },
  {
      "question_id": "63a0395dc7d86251f9b65c4d",
      "question": "What type of cheese is used in a classic Greek salad?",
      "difficulty": "medium",
      "category": "Food & Drink",
      "correctAnswer": "Feta",
      "incorrectAnswer1": "Gouda",
      "incorrectAnswer2": "Mozzarella",
      "incorrectAnswer3": "Parmesan"
  },
  {
      "question_id": "625fd665dc0dd3b72da64ced",
      "question": "In which year was Fight Club released?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "1999",
      "incorrectAnswer1": "1993",
      "incorrectAnswer2": "1996",
      "incorrectAnswer3": "2002"
  },
  {
      "question_id": "622a1c357cc59eab6f94fd96",
      "question": "Which Singer Started As A Session Guitarist Working With The Likes Of Bobby Darin , Frank Sinatra, Dean Martin & The Beach Boys?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Glen Campbell",
      "incorrectAnswer1": "Bob Dylan",
      "incorrectAnswer2": "Bruce Springsteen",
      "incorrectAnswer3": "Neil Young"
  },
  {
      "question_id": "622a1c3a7cc59eab6f95135f",
      "question": "What is the word given to a unique image printed from a polished plate which has been painted with a design in ink?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Monotype",
      "incorrectAnswer1": "Watercolor",
      "incorrectAnswer2": "Mache",
      "incorrectAnswer3": "Stenography"
  },
  {
      "question_id": "622a1c3e7cc59eab6f9522f3",
      "question": "Featured In The Film Jurassic Park, Which Creature's Name Means 'Quick Plunderer'?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Velociraptor",
      "incorrectAnswer1": "Tyrannosaurus Rex",
      "incorrectAnswer2": "Diplodocus",
      "incorrectAnswer3": "Stegosaurus"
  },
  {
      "question_id": "6293ec9f7f41d6338b96eefe",
      "question": "Which influential historical person was a key figure of the European Enlightenment whose satirical writings played a role in the French Revolution?",
      "difficulty": "hard",
      "category": "Society & Culture",
      "correctAnswer": "Voltaire",
      "incorrectAnswer1": "Euclid",
      "incorrectAnswer2": "Wilhelm Conrad Roentgen",
      "incorrectAnswer3": "Mencius"
  },
  {
      "question_id": "622a1c3a7cc59eab6f9510ca",
      "question": "From What Metals Is Brass Made?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "Copper & Tin",
      "incorrectAnswer1": "Iron & Copper",
      "incorrectAnswer2": "Iron & Zinc",
      "incorrectAnswer3": "Aluminium & Zinc"
  },
  {
      "question_id": "62500664ea7a97fd2e356d2a",
      "question": "Which pasta's name means 'Little bells'?",
      "difficulty": "medium",
      "category": "Food & Drink",
      "correctAnswer": "Campanelle",
      "incorrectAnswer1": "Macaroni",
      "incorrectAnswer2": "Rigatoni",
      "incorrectAnswer3": "Orecchiette"
  },
  {
      "question_id": "622a1c357cc59eab6f94ffe9",
      "question": "Which city used to be called Takase?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Yamagata",
      "incorrectAnswer1": "Ōsaka",
      "incorrectAnswer2": "Kyoto",
      "incorrectAnswer3": "Yokohama"
  },
  {
      "question_id": "622a1c377cc59eab6f9507e4",
      "question": "The country of Nauru is on which continent?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Oceania",
      "incorrectAnswer1": "South America",
      "incorrectAnswer2": "Europe",
      "incorrectAnswer3": "Asia"
  },
  {
      "question_id": "622a1c357cc59eab6f94fc83",
      "question": "Which word is defined as 'the mouthpiece of a recorder or similar wind instrument'?",
      "difficulty": "hard",
      "category": "General Knowledge",
      "correctAnswer": "Fipple",
      "incorrectAnswer1": "Smicker",
      "incorrectAnswer2": "Bibble",
      "incorrectAnswer3": "Firman"
  },
  {
      "question_id": "622a1c377cc59eab6f95069a",
      "question": "Which actor has featued in films including Arrested Development and Up in the Air?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Jason Bateman",
      "incorrectAnswer1": "Javier Bardem",
      "incorrectAnswer2": "Colin Firth",
      "incorrectAnswer3": "Tim Roth"
  },
  {
      "question_id": "622a1c397cc59eab6f950ee5",
      "question": "Which author wrote 'The Old Curiosity Shop'?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Charles Dickens",
      "incorrectAnswer1": "Oscar Wilde",
      "incorrectAnswer2": "Joseph Conrad",
      "incorrectAnswer3": "Henryk Sienkiewicz"
  },
  {
      "question_id": "622a1c367cc59eab6f950218",
      "question": "Who released the album 'Strange brew '",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Cream ",
      "incorrectAnswer1": "Deep Purple",
      "incorrectAnswer2": "Led Zeppelin",
      "incorrectAnswer3": "Prince"
  },
  {
      "question_id": "622a1c347cc59eab6f94fafc",
      "question": "Who won the 2010 Academy Award for Best Leading Actress for playing the role of Nina Sayers/The Swan Queen in Black Swan?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Natalie Portman",
      "incorrectAnswer1": "Annette Bening",
      "incorrectAnswer2": "Nicole Kidman",
      "incorrectAnswer3": "Jennifer Lawrence"
  },
  {
      "question_id": "623385f162eaad73716a8ca2",
      "question": "Where are the Nazca Lines?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Peru",
      "incorrectAnswer1": "Algeria",
      "incorrectAnswer2": "Papua New Guinea",
      "incorrectAnswer3": "Finland"
  },
  {
      "question_id": "622a1c3d7cc59eab6f951c4c",
      "question": "At which battle was the Charge Of The Light Brigade?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Battle of Balaclava",
      "incorrectAnswer1": "Battle of Waterloo",
      "incorrectAnswer2": "Battle of Leipzig",
      "incorrectAnswer3": "Battle of Smolensk"
  },
  {
      "question_id": "625006f10d86c8f685d80f08",
      "question": "What type of pasta is ravioli?",
      "difficulty": "medium",
      "category": "Food & Drink",
      "correctAnswer": "Stuffed pasta",
      "incorrectAnswer1": "Soup pasta",
      "incorrectAnswer2": "Strand pasta",
      "incorrectAnswer3": "Ribbon pasta"
  },
  {
      "question_id": "62374303cb85f7ce9e949e08",
      "question": "What is the capital city of Zimbabwe?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Harare",
      "incorrectAnswer1": "Monrovia",
      "incorrectAnswer2": "Baku",
      "incorrectAnswer3": "Bulawayo"
  },
  {
      "question_id": "622a1c377cc59eab6f950757",
      "question": "Which actor has featured in films including Batman and One Flew Over the Cuckoo's Nest?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Jack Nicholson",
      "incorrectAnswer1": "Dwayne Johnson",
      "incorrectAnswer2": "Shah Rukh Khan",
      "incorrectAnswer3": "Gérard Depardieu"
  },
  {
      "question_id": "623389510161109f922aacdf",
      "question": "Which US state capital is known as the mile high city?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Denver ",
      "incorrectAnswer1": "Columbus",
      "incorrectAnswer2": "Austin",
      "incorrectAnswer3": "Sacramento"
  },
  {
      "question_id": "639ae36f929b90846f2fc8d1",
      "question": "What was the name of the Aztec god of the wind?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Ehecatl",
      "incorrectAnswer1": "Tlaloc",
      "incorrectAnswer2": "Huitzilopochtli",
      "incorrectAnswer3": "Quetzalcoatl"
  },
  {
      "question_id": "622a1c397cc59eab6f950eb4",
      "question": "Which author wrote 'On the Tendency of Species to form Varieties; and on the Perpetuation of Varieties and Species by Natural Means of Selection'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "Charles Darwin",
      "incorrectAnswer1": "Percy Bysshe Shelley",
      "incorrectAnswer2": "H. Rider Haggard",
      "incorrectAnswer3": "Robert Louis Stevenson"
  },
  {
      "question_id": "625e9e25796f721e95543f42",
      "question": "Which of these countries has red on its flag?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Chile",
      "incorrectAnswer1": "Guatemala",
      "incorrectAnswer2": "Estonia",
      "incorrectAnswer3": "India"
  },
  {
      "question_id": "622a1c347cc59eab6f94fb41",
      "question": "Which film won the Academy Award for Best Picture in 2015?",
      "difficulty": "hard",
      "category": "Film & TV",
      "correctAnswer": "Spotlight",
      "incorrectAnswer1": "The Big Short",
      "incorrectAnswer2": "Bridge of Spies",
      "incorrectAnswer3": "Brooklyn"
  },
  {
      "question_id": "62506441e12f6dec240bdfa5",
      "question": "Who had a hit in 1976 with Turn the Beat Around?",
      "difficulty": "hard",
      "category": "Music",
      "correctAnswer": "Vicki Sue Robinson",
      "incorrectAnswer1": "Jermaine Stewart",
      "incorrectAnswer2": "Aqua",
      "incorrectAnswer3": "The Verve"
  },
  {
      "question_id": "62611fb94b176d54800e3d6c",
      "question": "When was the first black US President elected?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "2008",
      "incorrectAnswer1": "2000",
      "incorrectAnswer2": "2004",
      "incorrectAnswer3": "2012"
  },
  {
      "question_id": "622a1c357cc59eab6f94fc80",
      "question": "Which word is defined as 'Pretending to work when you’re not actually doing anything at all'?",
      "difficulty": "hard",
      "category": "General Knowledge",
      "correctAnswer": "Fudgel",
      "incorrectAnswer1": "Bumfuzzle",
      "incorrectAnswer2": "Groke",
      "incorrectAnswer3": "Whippersnapper"
  },
  {
      "question_id": "622a1c357cc59eab6f94fe05",
      "question": "Which is the largest lake in South America?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Lake Maracaibo",
      "incorrectAnswer1": "Lagoa dos Patos",
      "incorrectAnswer2": "Lake Nicaragua",
      "incorrectAnswer3": "Lake Titicaca"
  },
  {
      "question_id": "62611f6a4b176d54800e3d57",
      "question": "When was COVID-19 declared a Global Pandemic?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "2020",
      "incorrectAnswer1": "2019",
      "incorrectAnswer2": "2021",
      "incorrectAnswer3": "2018"
  },
  {
      "question_id": "622a1c367cc59eab6f950393",
      "question": "Who banned Christmas in Britain in 1647?",
      "difficulty": "hard",
      "category": "History",
      "correctAnswer": "Oliver Cromwell",
      "incorrectAnswer1": "Henry VIII",
      "incorrectAnswer2": "Francis Drake",
      "incorrectAnswer3": "Elizabeth I"
  },
  {
      "question_id": "62611f634b176d54800e3d56",
      "question": "In which year were the 9/11 attacks?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "2001",
      "incorrectAnswer1": "1993",
      "incorrectAnswer2": "1997",
      "incorrectAnswer3": "2005"
  },
  {
      "question_id": "624c60c095b12387e142c79b",
      "question": "Which of these dishes would you most expect to find in Japan?",
      "difficulty": "easy",
      "category": "Food & Drink",
      "correctAnswer": "Ramen",
      "incorrectAnswer1": "Ceviche",
      "incorrectAnswer2": "Plov",
      "incorrectAnswer3": "Chilli Crab"
  },
  {
      "question_id": "622a1c397cc59eab6f950f9d",
      "question": "Which author wrote 'Othello'?",
      "difficulty": "medium",
      "category": "Arts & Literature",
      "correctAnswer": "William Shakespeare",
      "incorrectAnswer1": "Arthur C. Clarke",
      "incorrectAnswer2": "Isaac Newton",
      "incorrectAnswer3": "Enid Blyton"
  },
  {
      "question_id": "622a1c367cc59eab6f950236",
      "question": "Which Scottish river supplies over 90% of the water used in whiskey manufacturing?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Spey ",
      "incorrectAnswer1": "Tay",
      "incorrectAnswer2": "Tweed",
      "incorrectAnswer3": "Clyde"
  },
  {
      "question_id": "6242cb91d543524f1b19c93b",
      "question": "What is the word for a group of seals?",
      "difficulty": "hard",
      "category": "Science",
      "correctAnswer": "A herd",
      "incorrectAnswer1": "A yoke",
      "incorrectAnswer2": "A murder",
      "incorrectAnswer3": "A clowder"
  },
  {
      "question_id": "62417d460f96c4efe8d773b6",
      "question": "Which of these is a baseball team based in Milwaukee?",
      "difficulty": "hard",
      "category": "Sport & Leisure",
      "correctAnswer": "Milwaukee Brewers",
      "incorrectAnswer1": "Milwaukee Jets",
      "incorrectAnswer2": "Milwaukee Orioles",
      "incorrectAnswer3": "Milwaukee Tigers"
  },
  {
      "question_id": "62ab32e35202de619af2812e",
      "question": "Which of these models of car is made by Toyota?",
      "difficulty": "easy",
      "category": "Society & Culture",
      "correctAnswer": "Corolla",
      "incorrectAnswer1": "Beetle",
      "incorrectAnswer2": "911",
      "incorrectAnswer3": "E-Type"
  },
  {
      "question_id": "622a1c3a7cc59eab6f951062",
      "question": "What dog is named after a Mexican state?",
      "difficulty": "medium",
      "category": "General Knowledge",
      "correctAnswer": "Chihuahua",
      "incorrectAnswer1": "Maltese",
      "incorrectAnswer2": "Pomeranian",
      "incorrectAnswer3": "Havanese"
  },
  {
      "question_id": "622a1c367cc59eab6f9503be",
      "question": "Where did the bayonet originate?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "France",
      "incorrectAnswer1": "Italy",
      "incorrectAnswer2": "Russia",
      "incorrectAnswer3": "Spain"
  },
  {
      "question_id": "62573fbc9da29df7b05f73a9",
      "question": "Name the movie that matches the following plot summary: 'A former gangster returns home, where he must confront the regrets of his old life.'",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Once Upon a Time in America",
      "incorrectAnswer1": "Goodfellas",
      "incorrectAnswer2": "Gone with the Wind",
      "incorrectAnswer3": "There Will Be Blood"
  },
  {
      "question_id": "63e13a2c106de6ffa7d4a7aa",
      "question": "What is the name of a shape with nine sides?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Nonagon",
      "incorrectAnswer1": "Octagon",
      "incorrectAnswer2": "Hexagon",
      "incorrectAnswer3": "Septagon"
  },
  {
      "question_id": "623740e2cb85f7ce9e949d2c",
      "question": "What is the capital city of Jamaica?",
      "difficulty": "medium",
      "category": "Geography",
      "correctAnswer": "Kingston",
      "incorrectAnswer1": "Bridgetown",
      "incorrectAnswer2": "Gaborone",
      "incorrectAnswer3": "Mogadishu"
  },
  {
      "question_id": "622a1c357cc59eab6f94fea0",
      "question": "Which singer released the song 'Only Girl (In the World)'?",
      "difficulty": "easy",
      "category": "Music",
      "correctAnswer": "Rihanna",
      "incorrectAnswer1": "Drake",
      "incorrectAnswer2": "Nicki Minaj",
      "incorrectAnswer3": "Ricky Martin"
  },
  {
      "question_id": "622a1c367cc59eab6f95014b",
      "question": "Who wrote the \"Threepenny\" opera?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Bertolt Brecht",
      "incorrectAnswer1": "Giuseppe Verdi",
      "incorrectAnswer2": "Robert Wilson",
      "incorrectAnswer3": "Maurice Maeterlinck"
  },
  {
      "question_id": "623b57ebfd6c701a92118388",
      "question": "In which country would you find the UNESCO World Heritage site of The Bam Citadel?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Iran",
      "incorrectAnswer1": "Turkey",
      "incorrectAnswer2": "Thailand",
      "incorrectAnswer3": "Northern Ireland"
  },
  {
      "question_id": "63f394f9989356ef48370bce",
      "question": "What is the currency of Japan?",
      "difficulty": "easy",
      "category": "Society & Culture",
      "correctAnswer": "Yen",
      "incorrectAnswer1": "Dollar",
      "incorrectAnswer2": "Dong",
      "incorrectAnswer3": "Yuan"
  },
  {
      "question_id": "6371621b1bf863c45ca6c352",
      "question": "Which of these Latin phrases means 'Deeds, not words'?",
      "category": "Society & Culture",
      "correctAnswer": "Acta non verba",
      "incorrectAnswer1": "Tempora mutantur et nos mutamur in illis",
      "incorrectAnswer2": "Calamus gladio fortior",
      "incorrectAnswer3": "Quam bene non quantum"
  },
  {
      "question_id": "622a1c347cc59eab6f94fb72",
      "question": "Which film won the Academy Award for Best Picture in 1943?",
      "difficulty": "medium",
      "category": "Film & TV",
      "correctAnswer": "Casablanca",
      "incorrectAnswer1": "For Whom the Bell Tolls",
      "incorrectAnswer2": "Heaven Can Wait",
      "incorrectAnswer3": "The Human Comedy"
  },
  {
      "question_id": "622a1c357cc59eab6f94fc82",
      "question": "Which word is defined as 'to perplex someone greatly'?",
      "difficulty": "medium",
      "category": "General Knowledge",
      "correctAnswer": "Flummox",
      "incorrectAnswer1": "Argle-bargle",
      "incorrectAnswer2": "Kakorrhaphiophobia",
      "incorrectAnswer3": "Pauciloquent"
  },
  {
      "question_id": "622a1c387cc59eab6f950ae1",
      "question": "Which of these countries borders People's Republic of China?",
      "difficulty": "hard",
      "category": "Geography",
      "correctAnswer": "Pakistan",
      "incorrectAnswer1": "Bangladesh",
      "incorrectAnswer2": "Thailand",
      "incorrectAnswer3": "Cambodia"
  },
  {
      "question_id": "622a1c3f7cc59eab6f95237d",
      "question": "An animal is a fish if it has what?",
      "difficulty": "medium",
      "category": "Science",
      "correctAnswer": "Gills",
      "incorrectAnswer1": "Fins",
      "incorrectAnswer2": "A vertebrate",
      "incorrectAnswer3": "A tail"
  },
  {
      "question_id": "622a1c347cc59eab6f94fa3f",
      "question": "The painting \"Napoleon crossing the Alps\" by Jacques-Louis David is a part of which art movement?",
      "difficulty": "hard",
      "category": "Arts & Literature",
      "correctAnswer": "Neoclassicism",
      "incorrectAnswer1": "Dutch Golden Age",
      "incorrectAnswer2": "Crystal Cubism",
      "incorrectAnswer3": "Primitivism"
  },
  {
      "question_id": "63989c175c9a75021f31047f",
      "question": "What was the name of the prominent religious conflict that arose in Europe in the 17th century?",
      "difficulty": "medium",
      "category": "History",
      "correctAnswer": "The Thirty Years' War",
      "incorrectAnswer1": "The Hundred Years' War",
      "incorrectAnswer2": "The War of the Roses",
      "incorrectAnswer3": "The War of Spanish Succession"
  },
  {
      "question_id": "624ab0a5348a461bfc67068b",
      "question": "Where in the world are yams originally from?",
      "difficulty": "hard",
      "category": "Food & Drink",
      "correctAnswer": "Africa",
      "incorrectAnswer1": "The Middle East",
      "incorrectAnswer2": "Central America",
      "incorrectAnswer3": "North America"
  },
  {
      "question_id": "622a1c387cc59eab6f950b53",
      "question": "Which band includes 'Hayley Williams'?",
      "difficulty": "medium",
      "category": "Music",
      "correctAnswer": "Paramore",
      "incorrectAnswer1": "Alice Cooper",
      "incorrectAnswer2": "Three 6 Mafia",
      "incorrectAnswer3": "The Velvet Underground"
  }
]
  

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question').del()
  console.log(data)
  await knex('question').insert(data);
};

