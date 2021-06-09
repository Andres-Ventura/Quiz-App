const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "java",
        b: "c++",
        c: "python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperTop Machine Language",
        c: "HyperTree Markdown Language",
        d: "HowTo Make language",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Correcting Style Sheets",
        b: "Counting Style Sheets",
        c: "Cascasding Style Sheets",
        d: "Color Style Sheets",
        correct: "c",
    },
    {
        question: "What does API stand for?",
        a: "A Portal Intelligence",
        b: "Application Programming Interface",
        c: "Artificial Programming Interaction",
        d: "Asychronous Program Interstellar",
        correct: "b",
    }
]

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const aText = document.getElementById('a_text')
const bText = document.getElementById('b_text')
const cText = document.getElementById('c_text')
const dText = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question

    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
     dText.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false
    })
}
function getSelected() {
    let answer
    answerEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})