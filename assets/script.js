// Variable to target time and give a starting time
var timeEl = document.querySelector("#time");
var secondsLeft = 61;

// Variable to target my start quiz button
var startQuiz = document.querySelector(".quiz");

var choices = document.querySelector("#choices");

// Array Object with questions and answers
// Found this example in stackoverflow
var questions = [
    {
        question: 'A very useful tool used during development and debugging,<br>for printing content to the debugger is: ',
        choices: ['1. JavaScript', '2. Terminal/Bash', '3. for loops', '4. console.log'],
        answer: 4
    },

    {
        question: 'Commonly used data types DO NOT include: ',
        choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer: 3
    },

    {
        question: 'Arrays in JavaScript can be used to store ___.',
        choices: ['Numbers and Strings', 'Other arrays', 'Booleans', 'All of the above'],
        answer: 4
    },

];
// Variable to hide my Starter screen content
var hide = document.querySelector('.hide');
// Variable I can use to be able to display my questions and answers
var wrapper = document.querySelector('.wrapper');
var h3El = document.querySelector('#question-title');
var choice1 = document.querySelector('.choice1');
var choice2 = document.querySelector('.choice2');
var choice3 = document.querySelector('.choice3');
var choice4 = document.querySelector('.choice4');
var h4El = document.querySelector('h4')
var footer = document.querySelector('footer');



function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        
        if(secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = secondsLeft
        }
        
    }, 1000)
}

startQuiz.addEventListener("click", function() {
    
    setTime();
    hide.style.display = 'none';
    wrapper.style.display = 'flex';
    h3El.innerHTML = questions[0].question;
    choice1.innerHTML = questions[0].choices[0]
    choice2.innerHTML = questions[0].choices[1]
    choice3.innerHTML = questions[0].choices[2]
    choice4.innerHTML = questions[0].choices[3]
    
});

choices.addEventListener("click", function(event){
    if (event.target === choice4) {
        h4El.innerHTML = "CORRECT!"
        footer.style.display = 'flex';

    } else {
        h4El.innerHTML = "INCORRECT!"
    }
    
})
