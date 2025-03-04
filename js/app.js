// create the consts for all the ids and classes
const elQuestion = document.querySelector("#question");
const elChoices = document.querySelectorAll(".choices");
const elResult = document.querySelector("#result");
const elNext = document.querySelector("#next-btn");
const elStart = document.querySelector("#start-btn");
const elScore = document.querySelector("#score");
const elOptions = document.querySelector("#options");
// assign variables into each button
const buttonA = document.getElementById("a");
const buttonB = document.getElementById("b");
const buttonC = document.getElementById("c");
const buttonD = document.getElementById("d");

//create the variables for scores
let score = 0;
let currentQuestIdx = 0;

// add an event listener for each buttons when clicked
elNext.addEventListener('click', nextQuestion);
elStart.addEventListener('click', startGame);


//add an event listener when each button is clicked
buttonA.addEventListener('click', selectedAnswer);
buttonB.addEventListener('click', selectedAnswer);
buttonC.addEventListener('click', selectedAnswer);
buttonD.addEventListener('click', selectedAnswer);

//when a button is clicked in the choices, make all buttons disabled and unclickable. a player can only click once from the choices

//loop through the elChoices buttons
elChoices.forEach(button =>  {
    //add an event listener for the clicked button
    button.addEventListener('click', () => {
        //disable all buttons by setting it to true
        elChoices.forEach(btn => btn.disabled = true);
        //assign a class to the clicked button, use the class name in css later to style the specific button
        button.classList.add("selected");     
    })
})

//create a function when starting a quiz
function startGame() {
    // enable the buttons
    enableBtns();
    //reset the question idx    
    currentQuestIdx = 0;
    //reset score to 0
    score = 0;
    //
    elResult.textContent = "";
    //
    elScore.textContent = `Score: ${score}/${currentQuestIdx}`
    //reset the start button text content
    elStart.textContent = "start";
    //restore the next button
    elNext.style.display = "unset";
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
    //enable the buttons;
    enableBtns();
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

    //GRADE THE ANSWER

    //the var for the answers array
    let choices = questions[currentQuestIdx].answers;
    //assign the trivia into a var
    let answerTrivia = questions[currentQuestIdx].trivia;

    //loop through the answers array
    for (let i = 0; i < choices.length; i++) {
        //finding the correct answer from choices
        if (choices[i].correct == true) {
            //compare user answer to the choices[i].choice
            //if correct
            if (event.target.textContent == choices[i].choice) {
                // add a score 
                score++;
                //display the current score 
                elScore.textContent = `Score: ${score}/${currentQuestIdx + 1}`
                //display the result for the question
                elResult.textContent = "✅  That is the correct answer! ✅";
                //input the trivia in the question display
                elQuestion.textContent = answerTrivia;
            }
            //if wrong
            else {
                //display an incorrect answer
                elResult.textContent = "❌ Incorrect answer! ❌"
                //display the current score
                elScore.textContent = `Score: ${score}/${currentQuestIdx + 1}`
                //input the trivia in the question display
                elQuestion.textContent = answerTrivia;
            }
        }
    }
}


//create a function for next question
function nextQuestion() {
    //move to the next question by adding one value to the current question idx
    currentQuestIdx = currentQuestIdx + 1;
    //update current score
    elScore.textContent = `Score: ${score}/${currentQuestIdx + 1}`;
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
    //hide the next button
    elNext.style.display = "none";
    //change the start button to restart
    elStart.textContent = "restart"
    //display the overall score in the score box
    elScore.textContent = `Score: ${score}/${questions.length}`
};


//create a function to enable the buttons, this will be needed when moving to the next question and starting the game
function enableBtns() {
    //for each button remove the selected classname and then enable the buttons
    elChoices.forEach(button => {
        //remove assigned class name
        button.classList.remove("selected");
        //enable the buttons
        button.disabled = false;
        //call out this function inside showQuestion()
    })
};
