const quizData = [
    { question: "Question 1", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correct: "Option 1" },
    { question: "Question 2", options: ["Option 1", "Option 2", "Option 3", "Option 4"], correct: "Option 2" },
    // ... Ajoutez 48 autres questions ici
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.options) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[letter]}">
                    ${currentQuestion.options[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} sur ${quizData.length} correct`;
}

const quiz = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

submitButton.addEventListener('click', showResults);
