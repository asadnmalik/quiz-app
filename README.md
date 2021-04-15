# A template for an online quiz app.
## Overview
A very simple template for an online quiz for your websites. You can change the questions and answers easily. It also includes an animation for your score.


## Demo
![Demo Gif](https://s4.gifyu.com/images/ezgifcom-gif-maker-1.gif)

## Libraries
* [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

Just add this block of code inside your HTML file's \<head> tag to get started with bootstrap.
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
```

## How it works?
Lets take the first question,

```HTML
<!-- Question # 1 -->
<div class="my-5">
    <p class="q1 lead font-weight-normal">1. What is the backbone of all webpages?</p>
    <div class="form-check my-2 text-white-50">
        <input type="radio" name="q1" value="A" checked>
        <label class="form-check-label">a) HTML</label>
    </div>
    <div class="form-check my-2 text-white-50">
        <input type="radio" name="q1" value="B">
        <label class="form-check-label">b) CSS</label>
    </div>
    <div class="form-check my-2 text-white-50">
        <input type="radio" name="q1" value="C">
        <label class="form-check-label">c) Python</label>
    </div>
    <div class="form-check my-2 text-white-50">
        <input type="radio" name="q1" value="D">
        <label class="form-check-label">d) Javascript</label>
    </div>
</div>
```
You can change the question in the \<p> tag and change the options below in the \<label> tags.

Note: Make sure the the value attribute of the \<input> tags are respective to their options because we will be using the value attributes of the options to compare with our correct answers.

### Correct answers array
Now we need to create the an array that contains the correct answers in order,
``` Javascript
// Create an array of correct answers. 
const correctAnswers = ['A','C','B','B'];
```
Whatever your questions will be make sure the correct answers are placed in order in this correctAnswers array because in order for this to work will be storing the selected answers's value attribute and store it in another array called userAnswers,
```Javascript
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
```
And then compare these two arrays, giving the user points for each element that matches in the array.

```Javascript

let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
        score += 25;
        
    }
    
```

### Displaying the result.
Note that we've given the d-none class to our result section

```HTML
<!-- Result Section -->
<div class="result py-4 d-none bg-light text-center">
    <div class="container">
        <p>You are <span class="text-primary display-4 p-3">0%</span> Expert Developer</p>
    </div>
</div>
```

This means the result will not be displayed until the user has clicked on the Submit button. Now in order for that to work will use the remove() method in javascript.

Once the Submit button is clicked, this code will be executed.

```Javascript
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
```

And the page will be scrolled to result section when it's displayed.

