const hero = document.querySelector('.hero');
const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const questionTitle = document.querySelector('.question'); 
const answerButtons = document.querySelector('#answer-buttons');
const questionImage = document.querySelector('picture > img');
let currentQuestionIndex;
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
    },
    {
        question:'What is the capital of Australia?',
        image:'images/saudi.png',
        answers: [
            { text: 'Sydney', correct:false },
            { text: 'Perth', correct:false },
            { text: 'Canberra', correct:false },
            { text: 'Melbourne', correct:true },
        ]
    },
    {
        question:'In which continent can you find The Maldives?',
        image:'images/saudi.png',
        answers: [
            { text: 'Europe', correct:false },
            { text: 'Asia', correct:false },
            { text: 'Oceania', correct:false },
            { text: 'North America', correct:true },
        ]
    },
    {
        question:'What continent has the most countries?',
        image:'images/saudi.png',
        answers: [
            { text: 'Europe', correct:false },
            { text: 'Asia', correct:false },
            { text: 'South America', correct:false },
            { text: 'Africa', correct:true },
        ]
    }
];

function setNextQuestion() {
    const randomQuestion = questions[currentQuestionIndex];
    randomQuestion.answers.reverse();
    showQuestion(randomQuestion);
    
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

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setClass(hero, correct);
    Array.from(answerButtons.children).forEach(button => {
        setClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide');
}

function setClass(element, correct) {
    clearClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong')
    }
}

function clearClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    clearClass(hero);
    Array.from(answerButtons.children).forEach(button => {
        clearClass(button);
        button.classList.add('hide');
    })
    setNextQuestion();

} )
