//making true/false quiz - need buttons, conditions for when button is clicked, results display 
//when true clicked: (positive statement) 
// when false clicked: restate the fact 

let toggleBtn = document.getElementById('toggleBtn');
// console.log(toggleBtn)
let bodyBg = document.getElementsByTagName('body')[0];
// console.log(bodyBg);
let description = document.querySelector('.description');
// let selfieSection = document.querySelector('.wrapper');
// let personal = document.querySelector('.textBoxFront');
let gameTest = document.querySelector('.gameTest');
let therapy = document.querySelector('.therapy');
let footer = document.querySelector('footer');

// page is starting in light mode


// turn it light if isDark is true
// the style of `a ? b : c;` means if a is true, do b, otherwise do c
function changeColors(isDark) {
    bodyBg.style.background = isDark ? '#fdf0e6' : 'black';
    toggleBtn.style.backgroundColor = isDark ? '#fdf0e6' : 'black';
    description.style.backgroundColor = isDark ? '#fdf0e6' : 'transparent';
    description.style.color = isDark ? 'black' :'white';
    // selfieSection.style.backgroundColor = isDark ? '#fdf0e6' : 'transparent';
    description.style.backgroundColor = isDark ? '#fdf0e6' : 'transparent';
    // personal.style.backgroundColor = isDark ? '#fdf0e6' : 'transparent';
    // personal.style.color = isDark ? 'black' :'white';
    // personal.style.backgroundColor = isDark ? '#fdf0e6' : '#F08F80';
    gameTest.style.color = isDark ? 'black' :'white';
    therapy.style.color = isDark ? 'black' :'white';
    footer.style.backgroundColor = isDark ? '#fdf0e6' : 'transparent';
    document.querySelector('.links').style.color = isDark ? 'black' :'white';
}
// don't forget your variable! 
let isDark = false;
// add function which has parameters light mode dark mode
function toggleSwitch() {
    // currently background is dark, need to switch to light
    changeColors(isDark);
    isDark = !isDark; // if you are trying to switch between 2 modes ex "on/off" "light/dark" 
//goes after the rules but before end of function
}

toggleBtn.addEventListener('click', toggleSwitch);

//  toggleSwitch(); //turns dark because page started light 
//  toggleSwitch(); // turns light because the page was dark
//  toggleSwitch();

// PROBLEMS: WHEN I SWITCH TO DARK MODE AND THEN SWITCH BACK, NOTHING IS VISIBLE
// MAKING THE TRUE FALSE QUIZ PROPERLY, PSEUDO CODE LINES 1-3