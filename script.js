let quoteText = null;


// HTTP request to random quote
let quoteDisplayEl = document.getElementById("quoteDisplay");
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let quote = jsonData.content;
        quoteDisplayEl.textContent = quote;
        quoteText = quote;
    })

// Settinng timer
let timerEl = document.getElementById("timer");
let secondTextEl = document.getElementById("secondText");
let counter = 0;
secondTextEl.textContent = "Seconds"
let intervalId = setInterval(function() {
    counter += 1;
    spinnerEl.classList.add("d-none");
    secondTextEl.classList.remove("d-none");
    timerEl.classList.remove("d-none");
    secondTextEl.textContent = "Seconds"
    timerEl.textContent = counter;
}, 1000);

// submit Button
let submitBtnEl = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let resultEl = document.getElementById("result")
submitBtnEl.addEventListener("click", function() {
    if (quoteText === quoteInput.value) {
        clearInterval(intervalId);
        resultEl.textContent = "You typed in " + counter + " Seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
})

// Reset Button
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
resetBtnEl.addEventListener("click", function() {
    spinnerEl.classList.remove("d-none");
    secondTextEl.classList.add("d-none");
    timerEl.classList.add("d-none");
    counter = 0;
})