// create the consts for all the id and classes
const elQuestion = document.querySelector("#question");
const elChoices = document.querySelectorAll("#choices");
const elResult = document.querySelector("#result");
const elNext = document.querySelector("#next-btn");
const elSubmit = document.querySelector("#submit-btn");
const elStart = document.querySelector("#start-btn");
const elScore = document.querySelector("#score");
const elOptions = document.querySelector("#options");

const buttonA = document.getElementById("a");
const buttonB = document.getElementById("b");
const buttonC = document.getElementById("c");
const buttonD = document.getElementById("d");

//create the variables for scores
let score = 0;
let currentQuestIdx = 0;
let answer = null;

// add an event listener for each buttons when clicked
elNext.addEventListener('click', nextQuestion);
elStart.addEventListener('click', startGame);
// elSubmit.addEventListener('click', gradeAnswer);
buttonA.addEventListener('click', selectedAnswer);
buttonB.addEventListener('click', selectedAnswer);
buttonC.addEventListener('click', selectedAnswer);
buttonD.addEventListener('click', selectedAnswer);



//create a function when starting a quiz
function startGame() {
    // empty the score and current question idx
    currentQuestIdx = 0;
    score = 0;
    answer = null
    elResult.textContent = ""
    // assign the functions for later where the questions and choices will populate
    showQuestion();
    showAnswers();
};


// create a function that will show the question 
function showQuestion() {
    //create a const and store the question[i]
    let currentQuestion = questions[currentQuestIdx];
    //create a const for numbering the questions
    let questionNumber = currentQuestIdx + 1;
    //combine the number and the question in the question display
    elQuestion.textContent = questionNumber + ". " + currentQuestion.question; 
};
//create a function that will show the choices 
function showAnswers() {
    //display all the choices in each choices box
    buttonA.textContent = questions[currentQuestIdx].answers[0].choice;
    buttonB.textContent = questions[currentQuestIdx].answers[1].choice;
    buttonC.textContent = questions[currentQuestIdx].answers[2].choice;
    buttonD.textContent = questions[currentQuestIdx].answers[3].choice;
};

//create a function for selecting an answer with parameter
function selectedAnswer(event) {
    //the user answer is event.target.textContent
    console.log(event.target.textContent);
    //the var for the answers array
    let choices = questions[currentQuestIdx].answers;
    // console.log(choices)
    //loop through the answers
    for (let i = 0; i < choices.length; i++) {
        //finding the correct answer from choices
        if (choices[i].correct == true) {
            //compare user answer to the choices[i].choice
            if (event.target.textContent == choices[i].choice) {
                // add a score
                console.log(score)
                score++;
                console.log(score)
                //display the result for the question
                elResult.textContent = "That is the CORRECT answer!"
                //
            }
            else {
                //display an incorrect answer
                elResult.textContent = "Incorrect answer!"
            }
            console.log(choices[i].choice)
        }
        console.log(choices[i].correct)
    }
}
// console.log(questions[currentQuestIdx].answers)

//create a function that will grade the answer

// function gradeAnswer() {

//    //if player did not select an answer, remind player to select an answer in the result display
//     if (!answer) {
//         //display the msg into the result display
//         elResult.textContent = "Select an answer!";
//         //return the output
//         return;
//     }
//    //if the answer is correct
//     if (answer.correct == true) {
//         //add 1 value to the score
//         score = score + 1;
//         //display the result msg
//         elResult.textContent = "That is the CORRECT answer!"
//     }
//     //if not correct, display the msg in the result display
//     else {
//         elResult.textContent = "Incorrect answer!"
//     }
// }

//create a function for next question
function nextQuestion() {
    //move to the next question by adding one value to the current question idx
    currentQuestIdx = currentQuestIdx + 1;
    
    //create an if statement so that the questions will stop after the last question
    if (currentQuestIdx < questions.length) {
        //call out the showQuestion and showAnswers function
        showQuestion();
        showAnswers();
        //empty the result display
        elResult.textContent = "";
    }
    // if reached the last question, end the quiz with a function
    else {
        endQuiz();
    }

    
};

//create a function for ending the quiz

function endQuiz() {
    //display a message in the question display that says quiz is over
    elQuestion.textContent = "Congrats! You Have Finished The Quiz!"
    //display the result of the quiz
    elResult.textContent = `Your Score: ${score} out of ${questions.length}`
    //hide the submit and next buttons
    elSubmit.style.display = "none";
    elNext.style.display = "none";
};

//create a function to reset