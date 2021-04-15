// Create an array of correct answers. 
const correctAnswers = ['A','C','B','B'];

//Attach an eventListener to the form. 
const form = document.querySelector('.quiz-form');

//Get the result element from the DOM. 
const result = document.querySelector('.result');




form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
            
        }
    })

    // show the result class on submit. 
    result.classList.remove('d-none');
    //Scroll to the top. 
    scrollTo(0,0);

 

    //Animate the score value: Interval
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})


// How to stop the setInterval method?
let i = 0;
//store setInterval in a variable. 
const timer = setInterval(() => {
    i++;
    if (i === 5) {
        clearInterval(timer)
    }
}, 1000)


