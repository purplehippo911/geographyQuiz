const startButton = document.querySelector('#start-btn');
const questionContainer = document.querySelector('#question-container');
const questionTitle = document.querySelector('.question'); 
const answerButtons = document.querySelector('#answer-buttons');
const questionImage = document.querySelector('picture > img');
const questions = [
    {
        question: 'How many states are there in the US?',
        image:'images/us.png',
        answers: [
            { text: '52', correct:false },
            { text: '30', correct:false },
            { text: '50', correct:true },
            { text: '53', correct:false },
        ]   
    },
    
    {
        question:'What is the capital of Saudi Arabia?',
        image:'images/saudi.png',
        answers: [
            { text: 'Riyadh', correct:false },
            { text: 'Sana', correct:false },
            { text: 'Mekkah', correct:false },
            { text: 'Jeddah', correct:true },
        ]
    }
];
const randNum = Math.round(Math.random() * questions.length);
const randomQuestion = questions[randNum];

function setNextQuestion() {
    showQuestion(randomQuestion);
    randomQuestion.answers.reverse();
}

function showQuestion(question) {
    questionTitle.textContent = question.question;
    questionImage.src = question.image;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer() {

}


startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
});
