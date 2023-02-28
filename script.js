const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answers = document.querySelectorAll('.answer')
const quantity = document.querySelector('.number')
const scoreElement = document.querySelector('.score')
const ScoreCard = document.querySelector('.scoreCard')
const Correct = document.querySelector('.correct')
const Wrong = document.querySelector('.wrong')
const content = document.querySelector('.contentContainer')

let shuffledQuestions, currentQuestionIndex, score, correctCounter, wrongCounter, counter;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  score = 0;
  counter = 0;
  correctCounter = 0;
  wrongCounter = 0;
  quantity.innerHTML = `${counter}/10`
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function endGame() {
  const endCard = document.createElement('div');
  endCard.innerHTML =
    ` 
  <h1 class="headline">Your Performance</h1>
  <p class="scoreLine">You attempted <span class="scoreCard">${correctCounter}</span> Question out of <b>10</b></p>
  div class="scoreContainer">
    <div class="correctContainer">
      <p class="headliner">Correct</p>
      <span class="correct">${correctCounter}</span>
    </div>
    <div class="wrongContainer">
      <p class="headliner">Wrong</p>
      <span class="wrong">${wrongCounter}</span>
    </div>
  </div>
`
  document.body.appendChild(endCard);
  content.classList.add('hide');
  // questionContainerElement.classList.add('hide')
  startButton.innerText = 'Restart';
  questionContainerElement.classList.add('hide');
  startButton.classList.remove('hide');
  return;
}

function setNextQuestion() {
  // console.log(currentQuestionIndex);
  // console.log(shuffledQuestions.length);
  counter++;
  // console.log(counter);

  quantity.innerHTML = `${counter}/10`;
<<<<<<< HEAD
  if (counter-1===10) {
=======
  if (counter - 1 === 4) {
>>>>>>> b71bc20512f48c63cb4e0ef8c61f55375fce56fb
    endGame();
  }
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const option = document.createElement('div')
    option.innerHTML = `
    <img src="${answer.img}">
    <p>${answer.text}</p>
    `
    option.classList.add('btn')
    if (answer.correct) {
      option.dataset.correct = answer.correct
    }
    console.log(option)
    option.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(option)
    // answerButtonsElement.classList.add('color')
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const id = e.target.id;
  console.log(e.target)
  const selectedButton = e.target
  const answerSelect = e;
  const correct = selectedButton.dataset.correct
  // console.log(e)
  if (correct) {
    score++;
    correctCounter++;
    selectedButton.style.backgroundColor = "rgba(68, 181, 147, 1)";
    // selectedButton.classList.add('color');


  } else {
    if (score == 0) {
      score = 0
      selectedButton.style.backgroundColor = "rgba(255, 95, 109, 1)";


    }
    else {
      selectedButton.style.backgroundColor = "rgba(255, 95, 109, 1)";

      score--;
      wrongCounter++;
    }
  }
  scoreElement.textContent = score; // update score
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the recommended percentage of your income that you should save for retirement, according to financial experts?',
    answers: [
      { text: '5-10%', img: "./img/option.png", correct: true },
      { text: '4', img: "./img/option.png", correct: false },
      { text: '6', img: "./img/option.png", correct: false },
      { text: '22', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the term used to describe the process of spreading your investments across different types of assets and sectors to minimize risk?',
    answers: [
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the name of the government scheme that provides tax benefits for investments made in specified mutual funds and other financial instruments?',
    answers: [
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the name of the index that tracks the performance of the top 50 companies listed on the National Stock Exchange of India?',
    answers: [
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'true', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'What is the recommended debt-to-income ratio for individuals, according to financial experts?',
    answers: [
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'false', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the term used to describe the process of borrowing money to invest in the stock market?',
    answers: [
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'true', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'What is the name of the popular online platform that allows individuals to invest in stocks, mutual funds, and other financial instruments?',
    answers: [
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the term used to describe the practice of buying and holding stocks for the long term, regardless of short-term market fluctuations?',
    answers: [
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'fasle', img: "./img/option.png", correct: false },
      { text: 'fasle', img: "./img/option.png", correct: false },
      { text: 'fasle', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the name of the tax levied on the gains made from the sale of stocks or mutual funds?',
    answers: [
      { text: 'true', img: "./img/option.png", correct: true },
      { text: 'fasle', img: "./img/option.png", correct: false },
      { text: 'fasle', img: "./img/option.png", correct: false },
      { text: 'fasle', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the name of the index that tracks the performance of the top 30 companies listed on the Bombay Stock Exchange?',
    answers: [
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'true', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'Which of the following is a type of mutual fund that invests primarily in stocks of companies that are expected to grow rapidly in the near future?',
    answers: [
      { text: 'Debt funds', img: "./img/option.png", correct: false },
      { text: 'Equity funds', img: "./img/option.png", correct: true },
      { text: 'Hybrid funds', img: "./img/option.png", correct: false },
      { text: 'Index funds', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the maximum amount of tax deduction that can be claimed under Section 80C of the Income Tax Act?',
    answers: [
      { text: 'Rs 50,000', img: "./img/option.png", correct: false },
      { text: 'Rs 1,00,000', img: "./img/option.png", correct: false },
      { text: 'Rs 1,50,000', img: "./img/option.png", correct: true },
      { text: 'Rs 2,00,000', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: "Which of the following is a measure of a company's ability to pay off its short-term liabilities using its current assets?",
    answers: [
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'false', img: "./img/option.png", correct: false },
      { text: 'true', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'Which of the following stock market indices represents the performance of the top 30 companies listed on the Bombay Stock Exchange (BSE)?',
    answers: [
      { text: 'current ratio', img: "./img/option.png", correct: true },
      { text: 'Debt-to-equity ratio', img: "./img/option.png", correct: false },
      { text: 'Price-to-earning ratio', img: "./img/option.png", correct: false },
      { text: 'Return on ratio', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'What is the tax rate for long-term capital gains on equity shares and equity mutual funds in India?',
    answers: [
      { text: 'Nifty 50', img: "./img/option.png", correct: false },
      { text: 'Sensex 30', img: "./img/option.png", correct: true },
      { text: 'BSE 100', img: "./img/option.png", correct: false },
      { text: 'Nifty Bank', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'Which of the following is a type of life insurance policy that provides coverage for a specific period of time?',
    answers: [
      { text: '5%', img: "./img/option.png", correct: false },
      { text: '10%', img: "./img/option.png", correct: false },
      { text: '15%', img: "./img/option.png", correct: false },
      { text: '20%', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'Which of the following is a type of investment that is made in a company before it goes public?',
    answers: [
      { text: 'Endowment policy', img: "./img/option.png", correct: false },
      { text: 'Money-Back policy', img: "./img/option.png", correct: false },
      { text: 'Whole life policy', img: "./img/option.png", correct: false },
      { text: 'Term life policy', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'Which of the following is a type of mutual fund that invests in fixed-income securities such as bonds, debentures, and government securities?',
    answers: [
      { text: 'IPO', img: "./img/option.png", correct: false },
      { text: 'FPO', img: "./img/option.png", correct: false },
      { text: 'Angel Investment', img: "./img/option.png", correct: false },
      { text: 'Venture capital Investment', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'Which of the following is a measure of the risk associated with a stock or a mutual fund?',
    answers: [
      { text: 'Equity funds', img: "./img/option.png", correct: false },
      { text: 'Debt funds', img: "./img/option.png", correct: true },
      { text: 'Hybrid funds', img: "./img/option.png", correct: false },
      { text: 'Index funds', img: "./img/option.png", correct: false },
    ]
  },
  {
    question: 'Which of the following is a type of stock that pays a fixed dividend to its shareholders?',
    answers: [
      { text: 'Alpha', img: "./img/option.png", correct: false },
      { text: 'Beta', img: "./img/option.png", correct: false },
      { text: 'Standard deviation', img: "./img/option.png", correct: false },
      { text: 'Sharpe Ratio', img: "./img/option.png", correct: true },
    ]
  },
  {
    question: 'What is the name of the index that tracks the performance of the top 30 companies listed on the Bombay Stock Exchange?',
    answers: [
      { text: 'Growth stock', img: "./img/option.png", correct: false },
      { text: 'Value stock', img: "./img/option.png", correct: false },
      { text: 'Income stock', img: "./img/option.png", correct: true },
      { text: 'Blue-chip stock', img: "./img/option.png", correct: false },
    ]
  },
]