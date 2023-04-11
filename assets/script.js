// Variable to target time and give a starting time
var timeEl = document.querySelector("#time");
var secondsLeft = 61;

// Variable to target my start quiz button
var startQuiz = document.querySelector(".quiz");

var choices = document.querySelector("#choices");
// Variable to hide my Starter screen content
var hide = document.querySelector('.hide');
// Variable I can use to be able to display my questions and answers
var wrapper = document.querySelector('.wrapper');
var h3El = document.querySelector('#question-title');
var choice1 = document.querySelector('.choice1');
var choice2 = document.querySelector('.choice2');
var choice3 = document.querySelector('.choice3');
var choice4 = document.querySelector('.choice4');
var allChoices = document.querySelector('#choices');
var h5El = document.querySelector('h5');
var footer = document.querySelector('footer');
var score = document.querySelector('#score');
var label = document.querySelector('label');
var input = document.querySelector('input');
var enterbtn = document.querySelector('#enter');
var h4El = document.querySelector('h4');
var btnscores = document.querySelector('.btnscores');
var formSection = document.querySelector('.formSection');
var allScoresTitle = document.querySelector('.allScoresTitle');
var allScores = document.querySelector('.allScores');
var goBack = document.querySelector('#goBack');
var clearHighScores = document.querySelector('#clearHighScores');

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
        questions: 'HighScores',
        choices: [],
        answer: 0
    }

];

var finalScore = []



// Variable to use for indexing
var i = 0;


//------------------------Functions Section--------------------------//

function setTime() {

    // Time interval
    setInterval(function() {
        
        if (secondsLeft > 0 && i < 3) {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
        }      
    }, 1000)
};

//Questions function
function questionsFunc() {

    choices.addEventListener("click", function(event){
    
        
    if (h3El.innerHTML === questions[0].question && event.target === choice4) {
        h5El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i = 1;       
    } 
    else if (h3El.innerHTML === questions[1].question && event.target === choice3) {
        h5El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i = 2;
    } 
    else if (h3El.innerHTML === questions[2].question && event.target === choice4) {
        h5El.innerHTML = "CORRECT!";
        footer.style.display = 'flex';
        i+=1;
    }
    else if (i<3){
        
        h5El.innerHTML = "INCORRECT!";
        footer.style.display = 'flex';
        secondsLeft -= 10;
        i+=1;        
    }
    

    h3El.innerHTML = questions[i].question;
    choice1.innerHTML = questions[i].choices[0];
    choice2.innerHTML = questions[i].choices[1];
    choice3.innerHTML = questions[i].choices[2];
    choice4.innerHTML = questions[i].choices[3]; 
    
})};

//Function for the enter initials form
function formFunc () {

    choices.addEventListener("click", function(){
            
    if(i == 2) {
        wrapper.style.display = 'none';
        h4El.style.display = 'flex';
        enterbtn.style.display = 'flex';
        label.style.display = 'flex';
        input.style.display = 'flex';
        score.textContent = 'Your score was: ' + secondsLeft;
        finalScore.push(secondsLeft);
        
    };
})};

function viewHighScores() {

    var scores = loadStorage();

    for(var i = 0; i< scores.length; i++) {
        var currentScore = scores[i];
        var initials = currentScore.initials;
        var score = currentScore.score;
        var initialSpan = document.createElement('li');
        var scoreSpan = document.createElement('span');
        initialSpan.textContent = initials;
        scoreSpan.textContent = score;
        allScores.appendChild(initialSpan);
        allScores.appendChild(scoreSpan);
    }
    hide.style.display = 'none';
    wrapper.style.display = 'none';
    h3El.innerHTML = questions[3].question;
    

};

// This is where we will retrieve the high scores
function loadStorage() {

    var highScores = localStorage.getItem('scores');
    if(highScores == null) {
        return [];
    }
    else {
        return JSON.parse(highScores);
    }
}; 

function updateStorage(new_entry) {

    var scores = loadStorage();
    var new_score = {
        initials: new_entry.initials,
        score: new_entry.score,
    }
    scores.push(new_score);
    localStorage.setItem('scores', JSON.stringify(scores));

};


//----------------------Event Listener Section-------------------------//

// To view high scores
btnscores.addEventListener("click", function() {
    
    // Erase all content
    hide.style.display = 'none';
    wrapper.style.display = 'none';
    h5El.style.display = 'none';
    btnscores.style.display = 'none';
    formSection.style.display = 'none';

    // Display High scores
    allScoresTitle.style.display = 'flex';
    allScores.style.display = 'flex';
    goBack.style.display = 'flex';
    clearHighScores.style.display = 'flex';
    viewHighScores();

});

// Go back button takes user back to the start of the quiz
goBack.addEventListener('click', function() {

    location.reload();

});

// Clear high scores button to erase local storage
clearHighScores.addEventListener('click', function() {
    
    localStorage.removeItem('scores');
    location.reload();
})

// Save initials and final score in local storage
enterbtn.addEventListener("click", function() {

    // Save the initials and final score into local storage
    var initials = localStorage.setItem('initials', input.value);
    var fScore = localStorage.setItem("FinalScore", finalScore);

    var object = {
        initials: input.value,
        score: secondsLeft,
    }
    updateStorage(object);



});

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

formFunc();
questionsFunc();
    
      





