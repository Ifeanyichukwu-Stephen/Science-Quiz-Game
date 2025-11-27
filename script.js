// DoM Elements
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

// Quiz Data
const quizQuestions = [
    {
        question: "What is the unit of force?",
        answers: [

            { Text: "Joule", correct: false },
            { Text: "Pascal", correct: false },
            { Text: "Newton", correct: true },
            { Text: "Watt", correct: false }
        ]
    },
    {
        question: "Which gas is essential for human respiration?",
        answers: [

            { Text: "Nitrogen", correct: false },
            { Text: "Carbon dioxide", correct: false },
            { Text: "Helium", correct: false },
            { Text: "Oxygen", correct: true }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [

            { Text: "HO2", correct: false },
            { Text: "H2O", correct: true },
            { Text: "O2H", correct: false },
            { Text: "H2", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [

            { Text: "Nucleus", correct: false },
            { Text: "Ribosome", correct: false },
            { Text: "Mitochondria", correct: true },
            { Text: "Chloroplast", correct: false }
        ]
    },
    {
        question: "Which of these is an input device?",
        answers: [

            { Text: "Speaker", correct: false },
            { Text: "Monitor", correct: false },
            { Text: "Projector", correct: false },
            { Text: "Keyboard", correct: true },
        ]
    },
    {
        question: "Which organ pumps blood in the human body?",
        answers: [
            { Text: "Heart", correct: true },
            { Text: "Lungs", correct: false },
            { Text: "Liver", correct: false },
            { Text: "Brain", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [

            { Text: "Venus", correct: false },
            { Text: "Mars", correct: true },
            { Text: "Jupiter", correct: false },
            { Text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [

            { Text: "Ag", correct: false },
            { Text: "Go", correct: false },
            { Text: "Au", correct: true },
            { Text: "Gd", correct: false }
        ]
    },
    {
        question: "Which blood cells fight diseases?",
        answers: [
            { Text: "White blood cells", correct: true },
            { Text: "Red blood cells", correct: false },
            { Text: "Platelets", correct: false },
            { Text: "Plasma", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [

            { Text: "Lion", correct: false },
            { Text: "Horse", correct: false },
            { Text: "Cheetah", correct: true },
            { Text: "Tiger", correct: false }
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [

            { Text: "Computer Personal Unit", correct: false },
            { Text: "Central Processing Unit", correct: true },
            { Text: "Control Process Utility", correct: false },
            { Text: "Central Program Unit", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { Text: "Carbon dioxide", correct: true },
            { Text: "Oxygen", correct: false },
            { Text: "Nitrogen", correct: false },
            { Text: "Helium", correct: false }
        ]
    },
    {
        question: "What do bees collect from flowers?",
        answers: [

            { Text: "Water", correct: false },
            { Text: "Soil", correct: false },
            { Text: "Sand", correct: false },
            { Text: "Nectar", correct: true },
        ]
    },
    {
        question: "Which organ is responsible for filtering blood?",
        answers: [

            { Text: "Lungs", correct: false },
            { Text: "Heart", correct: false },
            { Text: "Stomach", correct: false },
            { Text: "Kidney", correct: true },
        ]
    },
    {
        question: "What is HCl commonly known as?",
        answers: [

            { Text: "Hydrochloiric", correct: false },
            { Text: "Nitric acid", correct: false },
            { Text: "Hydrochloric acid", correct: true },
            { Text: "Hygdrochloric acid", correct: false }
        ]
    },
    {
        question: "Which part of the computer displays outputs?",
        answers: [
            { Text: "Keyboard", correct: false },
            { Text: "Mouse", correct: false },
            { Text: "Monitor", correct: true },
            { Text: "Scanner", correct: false }
        ]
    },
    {
        question: "What gas do humans exhale?",
        answers: [
            { Text: "Carbon dioxide", correct: true },
            { Text: "Oxygen", correct: false },
            { Text: "Nitrogen", correct: false },
            { Text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What force pulls objects toward the Earth?",
        answers: [

            { Text: "Friction", correct: false },
            { Text: "Magnetism", correct: false },
            { Text: "Tension", correct: false },
            { Text: "Gravity", correct: true }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [

            { Text: "Venus", correct: false },
            { Text: "Earth", correct: false },
            { Text: "Mercury", correct: true },
            { Text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [

            { Text: "50°C", correct: false },
            { Text: "100°C", correct: true },
            { Text: "150°C", correct: false },
            { Text: "200°C", correct: false }
        ]
    }
];


// Quiz State Variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//events
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

//functions
function startQuiz() {
    // reset state
    currentQuestionIndex = 0;
    scoreSpan.textContent = score = 0;

    // show quiz screen
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    // load first question
    showQuestion();
}

function showQuestion() {
    // reset answers container
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // update question text
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // update progress bar
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // 50%
    questionText.textContent = currentQuestion.question;


    // clear previous answers  
    answersContainer.innerHTML = "";
    // create answer buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer.Text;

        // what is data set? it is a property of HTMLElement that allows you to store custom data attributes on HTML elements.
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    });

}

function selectAnswer(event) {
    // prevent multiple answers
    if (answersDisabled) return

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // todo : show correct/wrong answers
    Array.from(answersContainer.children).forEach(button => {
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

    // move to next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            // check if there are more questions or if quiz is over
            showQuestion()
        } else {
            showResults()
        }

    }, 1000); // Adjust the delay time as needed
}
function showResults() {
    // hide quiz screen
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    // update final score
    finalScoreSpan.textContent = score;
    // update result message
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) {
        resultMessage.textContent = "Perfect score! You're a science genius!";
    }
    else if (percentage >= 80) {
        resultMessage.textContent = "Excellent work! you aced the quiz!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good job!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad, but better start reading science books.";
    } else {
        resultMessage.textContent = "Sorry, I don't think you're a science person.";
    }
}

function restartQuiz() {
    // hide result screen
    resultScreen.classList.remove("active");

    // reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    answersDisabled = false;



    // show start screen
    startScreen.classList.add("active");
}

