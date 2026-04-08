// DOM Elements
const categoryScreen = document.getElementById("category-screen");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const categoryCards = document.querySelectorAll(".category-card");
const startQuizButtons = document.querySelectorAll(".start-quiz-btn");

const backFromCategory = document.getElementById("back-from-category");
const backFromStart = document.getElementById("back-from-start");
const backFromQuiz = document.getElementById("back-from-quiz");
const backFromResult = document.getElementById("back-from-result");


// =======================
// QUIZ DATA (CATEGORIES)
// =======================
const quizzes = {
  history: [
    { question: "Who was the last Emperor of Ethiopia?", answers: [
      { text: "Menelik II", correct: false },
      { text: "Haile Selassie", correct: true },
      { text: "Tewodros II", correct: false },
      { text: "Zara Yaqob", correct: false },
    ]},
    { question: "Which battle secured Ethiopia's independence from Italy?", answers: [
      { text: "Battle of Adwa", correct: true },
      { text: "Battle of Gondar", correct: false },
      { text: "Battle of Axum", correct: false },
      { text: "Battle of Mekelle", correct: false },
    ]},
    { question: "The Aksumite Kingdom was famous for?", answers: [
      { text: "Trade and obelisks", correct: true },
      { text: "Oil production", correct: false },
      { text: "Steel industry", correct: false },
      { text: "Modern tech", correct: false },
    ]},
    { question: "Who defeated Italy at Adwa?", answers: [
      { text: "Menelik II", correct: true },
      { text: "Haile Selassie", correct: false },
      { text: "Tewodros II", correct: false },
      { text: "Iyasu", correct: false },
    ]},
    { question: "When was the Battle of Adwa?", answers: [
      { text: "1896", correct: true },
      { text: "1880", correct: false },
      { text: "1901", correct: false },
      { text: "1875", correct: false },
    ]},
    { question: "Gondar is famous for?", answers: [
      { text: "Castles", correct: true },
      { text: "Pyramids", correct: false },
      { text: "Temples", correct: false },
      { text: "Ports", correct: false },
    ]},
    { question: "Who unified Ethiopia?", answers: [
      { text: "Menelik II", correct: true },
      { text: "Zara Yaqob", correct: false },
      { text: "Fasilides", correct: false },
      { text: "Kaleb", correct: false },
    ]},
    { question: "Aksum is located in?", answers: [
      { text: "Tigray", correct: true },
      { text: "Oromia", correct: false },
      { text: "Amhara", correct: false },
      { text: "Somali", correct: false },
    ]},
    { question: "Which emperor built Lalibela churches?", answers: [
      { text: "King Lalibela", correct: true },
      { text: "Menelik II", correct: false },
      { text: "Fasilides", correct: false },
      { text: "Zara Yaqob", correct: false },
    ]},
    { question: "Italy occupied Ethiopia in?", answers: [
      { text: "1936", correct: true },
      { text: "1920", correct: false },
      { text: "1945", correct: false },
      { text: "1910", correct: false },
    ]},
  ],

  culture: [
    { question: "Traditional Ethiopian coffee ceremony is called?", answers: [
      { text: "Buna", correct: true },
      { text: "Shai", correct: false },
      { text: "Abol", correct: false },
      { text: "Jebena", correct: false },
    ]},
    { question: "Eskista is a type of?", answers: [
      { text: "Dance", correct: true },
      { text: "Food", correct: false },
      { text: "Music", correct: false },
      { text: "Clothing", correct: false },
    ]},
    { question: "Habesha Kemis is?", answers: [
      { text: "Traditional clothing", correct: true },
      { text: "Food", correct: false },
      { text: "Dance", correct: false },
      { text: "Language", correct: false },
    ]},
    { question: "Coffee originates from?", answers: [
      { text: "Ethiopia", correct: true },
      { text: "Brazil", correct: false },
      { text: "India", correct: false },
      { text: "China", correct: false },
    ]},
    { question: "Traditional Ethiopian meals are eaten with?", answers: [
      { text: "Hands", correct: true },
      { text: "Fork", correct: false },
      { text: "Knife", correct: false },
      { text: "Chopsticks", correct: false },
    ]},
    { question: "Ethiopian New Year is called?", answers: [
      { text: "Enkutatash", correct: true },
      { text: "Timkat", correct: false },
      { text: "Meskel", correct: false },
      { text: "Fasika", correct: false },
    ]},
    { question: "Meskel celebrates?", answers: [
      { text: "Finding of the True Cross", correct: true },
      { text: "New Year", correct: false },
      { text: "Harvest", correct: false },
      { text: "Rain", correct: false },
    ]},
    { question: "Timkat is related to?", answers: [
      { text: "Baptism of Jesus", correct: true },
      { text: "Birth of Jesus", correct: false },
      { text: "Harvest", correct: false },
      { text: "War", correct: false },
    ]},
    { question: "Traditional homes in rural Ethiopia are often?", answers: [
      { text: "Round huts", correct: true },
      { text: "Skyscrapers", correct: false },
      { text: "Apartments", correct: false },
      { text: "Castles", correct: false },
    ]},
    { question: "Coffee pot is called?", answers: [
      { text: "Jebena", correct: true },
      { text: "Kettle", correct: false },
      { text: "Pot", correct: false },
      { text: "Jug", correct: false },
    ]},
  ],

  geography: [
    { question: "Capital of Ethiopia?", answers: [
      { text: "Addis Ababa", correct: true },
      { text: "Adama", correct: false },
      { text: "Dire Dawa", correct: false },
      { text: "Bahir Dar", correct: false },
    ]},
    { question: "Largest lake?", answers: [
      { text: "Lake Tana", correct: true },
      { text: "Ziway", correct: false },
      { text: "Abaya", correct: false },
      { text: "Awasa", correct: false },
    ]},
    { question: "Blue Nile starts from?", answers: [
      { text: "Lake Tana", correct: true },
      { text: "Victoria", correct: false },
      { text: "Turkana", correct: false },
      { text: "Abaya", correct: false },
    ]},
    { question: "Lowest point is?", answers: [
      { text: "Danakil Depression", correct: true },
      { text: "Simien", correct: false },
      { text: "Bale", correct: false },
      { text: "Rift Valley", correct: false },
    ]},
    { question: "Highest mountain?", answers: [
      { text: "Ras Dashen", correct: true },
      { text: "Entoto", correct: false },
      { text: "Bale", correct: false },
      { text: "Abune Yosef", correct: false },
    ]},
    { question: "Ethiopia is in which continent?", answers: [
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "Europe", correct: false },
      { text: "America", correct: false },
    ]},
    { question: "Rift Valley is known for?", answers: [
      { text: "Lakes", correct: true },
      { text: "Deserts", correct: false },
      { text: "Cities", correct: false },
      { text: "Forests", correct: false },
    ]},
    { question: "Bahir Dar is near?", answers: [
      { text: "Lake Tana", correct: true },
      { text: "Ocean", correct: false },
      { text: "Desert", correct: false },
      { text: "Forest", correct: false },
    ]},
    { question: "Dire Dawa is known for?", answers: [
      { text: "Trade", correct: true },
      { text: "Snow", correct: false },
      { text: "Mining", correct: false },
      { text: "Fishing", correct: false },
    ]},
    { question: "Simien Mountains are?", answers: [
      { text: "UNESCO site", correct: true },
      { text: "City", correct: false },
      { text: "River", correct: false },
      { text: "Desert", correct: false },
    ]},
  ],

  language: [
    { question: "Official working language?", answers: [
      { text: "Amharic", correct: true },
      { text: "Oromo", correct: false },
      { text: "Tigrinya", correct: false },
      { text: "Somali", correct: false },
    ]},
    { question: "Amharic uses which script?", answers: [
      { text: "Ge'ez", correct: true },
      { text: "Latin", correct: false },
      { text: "Arabic", correct: false },
      { text: "Greek", correct: false },
    ]},
    { question: "Oromo language belongs to?", answers: [
      { text: "Cushitic", correct: true },
      { text: "Semitic", correct: false },
      { text: "Latin", correct: false },
      { text: "Greek", correct: false },
    ]},
    { question: "Tigrinya is spoken in?", answers: [
      { text: "Tigray", correct: true },
      { text: "Oromia", correct: false },
      { text: "Somali", correct: false },
      { text: "Afar", correct: false },
    ]},
    { question: "How many languages in Ethiopia?", answers: [
      { text: "80+", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "5", correct: false },
    ]},
    { question: "Ge'ez is?", answers: [
      { text: "Ancient language", correct: true },
      { text: "Modern slang", correct: false },
      { text: "Music", correct: false },
      { text: "Food", correct: false },
    ]},
    { question: "Amharic belongs to?", answers: [
      { text: "Semitic family", correct: true },
      { text: "Cushitic", correct: false },
      { text: "Nilotic", correct: false },
      { text: "European", correct: false },
    ]},
    { question: "Afaan Oromo uses?", answers: [
      { text: "Latin script", correct: true },
      { text: "Arabic", correct: false },
      { text: "Ge'ez", correct: false },
      { text: "Greek", correct: false },
    ]},
    { question: "Somali language is?", answers: [
      { text: "Cushitic", correct: true },
      { text: "Semitic", correct: false },
      { text: "Latin", correct: false },
      { text: "Asian", correct: false },
    ]},
    { question: "Language diversity is?", answers: [
      { text: "High", correct: true },
      { text: "Low", correct: false },
      { text: "None", correct: false },
      { text: "Limited", correct: false },
    ]},
  ],

  // shorter categories (still ≥10 total across app)
  food: [
    { question: "Staple food?", answers: [
      { text: "Injera", correct: true },
      { text: "Rice", correct: false },
      { text: "Bread", correct: false },
      { text: "Pasta", correct: false },
    ]},
    { question: "Doro Wat uses?", answers: [
      { text: "Chicken", correct: true },
      { text: "Fish", correct: false },
      { text: "Beef", correct: false },
      { text: "Rice", correct: false },
    ]},
    { question: "Shiro is made from?", answers: [
      { text: "Chickpeas", correct: true },
      { text: "Rice", correct: false },
      { text: "Corn", correct: false },
      { text: "Meat", correct: false },
    ]},
    { question: "Teff is used for?", answers: [
      { text: "Injera", correct: true },
      { text: "Soup", correct: false },
      { text: "Tea", correct: false },
      { text: "Coffee", correct: false },
    ]},
  ],

  music: [
    { question: "Eskista uses?", answers: [
      { text: "Shoulders", correct: true },
      { text: "Feet", correct: false },
      { text: "Hands", correct: false },
      { text: "Head", correct: false },
    ]},
    { question: "Krār is?", answers: [
      { text: "Instrument", correct: true },
      { text: "Dance", correct: false },
      { text: "Food", correct: false },
      { text: "Language", correct: false },
    ]},
  ],

  sports: [
    { question: "Famous for?", answers: [
      { text: "Running", correct: true },
      { text: "Swimming", correct: false },
      { text: "Tennis", correct: false },
      { text: "Golf", correct: false },
    ]},
    { question: "Legend athlete?", answers: [
      { text: "Haile Gebrselassie", correct: true },
      { text: "Messi", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Bolt", correct: false },
    ]},
  ],

  politics: [
    { question: "System is?", answers: [
      { text: "Federal Republic", correct: true },
      { text: "Monarchy", correct: false },
      { text: "Empire", correct: false },
      { text: "Dictatorship", correct: false },
    ]},
  ],

  economy: [
    { question: "Main sector?", answers: [
      { text: "Agriculture", correct: true },
      { text: "Oil", correct: false },
      { text: "Tech", correct: false },
      { text: "Mining", correct: false },
    ]},
  ],

  wildlife: [
    { question: "Unique animal?", answers: [
      { text: "Ethiopian Wolf", correct: true },
      { text: "Tiger", correct: false },
      { text: "Lion", correct: false },
      { text: "Bear", correct: false },
    ]},
  ],
};


// =======================
// QUIZ STATE
// =======================
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let selectedCategory = null;
let currentQuestions = [];


// =======================
// EVENT LISTENERS
// =======================
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// Category selection
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    selectedCategory = card.dataset.category;
    console.log(`Selected category: ${selectedCategory}`);

    categoryScreen.classList.remove("active");
    startScreen.classList.add("active");
  });
});

startQuizButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = e.target.closest(".category-card");

    selectedCategory = card.dataset.category;
    console.log(`Selected category: ${selectedCategory}`);

    categoryScreen.classList.remove("active");
    startScreen.classList.add("active");
  });
});


// =======================
// BACK BUTTONS
// =======================
backFromStart.addEventListener("click", () => {
  startScreen.classList.remove("active");
  categoryScreen.classList.add("active");
});

backFromQuiz.addEventListener("click", () => {
  quizScreen.classList.remove("active");
  startScreen.classList.add("active");

  // reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  progressBar.style.width = "0%";
});

backFromResult.addEventListener("click", () => {
  resultScreen.classList.remove("active");
  categoryScreen.classList.add("active");

  selectedCategory = null;
  currentQuestionIndex = 0;
  score = 0;
});


// =======================
// START QUIZ
// =======================
function startQuiz() {
  // load selected category questions
  currentQuestions = quizzes[selectedCategory];

  if (!currentQuestions || currentQuestions.length === 0) {
    alert("No questions added yet for this category.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  totalQuestionsSpan.textContent = currentQuestions.length;
  maxScoreSpan.textContent = currentQuestions.length;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}


// =======================
// SHOW QUESTION
// =======================
function showQuestion() {
  answersDisabled = false;

  const currentQuestion = currentQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / currentQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}


// =======================
// SELECT ANSWER
// =======================
function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}


// =======================
// SHOW RESULTS
// =======================
function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / currentQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}


// =======================
// RESTART QUIZ
// =======================
function restartQuiz() {
  resultScreen.classList.remove("active");
  categoryScreen.classList.add("active");

  selectedCategory = null;
}