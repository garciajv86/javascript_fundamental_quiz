// Variable to target time and give a starting time
var timeEl = document.querySelector("#time");
var secondsLeft = 61;

// Variable to target my start quiz button
var startQuiz = document.querySelector(".quiz");

var choices = document.querySelector("#choices");

// Array Object with questions and answers
// Found this example in stack-overflow
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

    {
        question: "Game Over",
        choices: ['1']
    }

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
// Variable to use for indexing
var i = 0;

//------------------------Logic Section--------------------------//

function setTime() {
    // Time interval
    setInterval(function() {
        
        if(secondsLeft > 0 && i < 3) {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
        }      
    }, 1000)
};

//function stopTime() {
    //clearInterval(timerInterval);
//};



startQuiz.addEventListener("click", function() {

    setTime();
    hide.style.display = 'none';
    wrapper.style.display = 'flex';
    h3El.innerHTML = questions[i].question;
    choice1.innerHTML = questions[i].choices[0];
    choice2.innerHTML = questions[i].choices[1];
    choice3.innerHTML = questions[i].choices[2];
    choice4.innerHTML = questions[i].choices[3];
    
});
    
choices.addEventListener("click", function(event){

    if (h3El.innerHTML === questions[0].question && event.target === choice4) {
        h4El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i = 1;
            
    } else if (h3El.innerHTML === questions[1].question && event.target === choice3) {
        h4El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i = 2;

    } else if (h3El.innerHTML === questions[2].question && event.target === choice4) {
        h4El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i = 3;
        
        

    }else {
        h4El.innerHTML = "INCORRECT!";
        footer.style.display = 'flex';
        secondsLeft -= 10;
        i+=1
             
    } if (i < 4) {
        h3El.innerHTML = questions[i].question;
        choice1.innerHTML = questions[i].choices[0];
        choice2.innerHTML = questions[i].choices[1];
        choice3.innerHTML = questions[i].choices[2];
        choice4.innerHTML = questions[i].choices[3]; 
        console.log(i)
    }
     
});



