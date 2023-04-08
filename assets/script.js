// Variable to target time and give a starting time
var timeEl = document.querySelector("#time");
var secondsLeft = 60;

// Variable to target my start quiz button
var startQuiz = document.querySelector(".quiz");

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
    
    setTime()
})
