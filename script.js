//making true/false quiz - need buttons, conditions for when button is clicked, results display 
//when true clicked: (positive statement) 
// when false clicked: restate the fact 

let toggleBtn = document.getElementById('toggleBtn');
// console.log(toggleBtn)
let bodyBg = document.getElementsByTagName('body')[0];
// console.log(bodyBg);
let description = document.querySelector('.description');
let selfieSection = document.querySelector('.fourth');
let personal = document.querySelector('.personal');
let gameTest = document.querySelector('.gameTest');
let therapy = document.querySelector('.therapy');
let footer = document.querySelector('footer');

// page is starting in light mode



// don't forget your variable! 
let isDark = false;

function toggleSwitch() {
    // currently background is dark, need to switch to light
    if( isDark === true){
        console.log('working on making the background light');
        bodyBg.style.background = 'white';
        toggleBtn.style.backgroundColor = '#fdf0e6'
        // toggleBtn.innerHTML = 'Darken';
        //console.log('its bright');
        // isDark = false;
        console.log('background is light, isDark: ' + isDark); 
    // currently background is light, need to make dark 
     } else if (isDark === false){
        console.log('working on making the backgound dark')
        bodyBg.style.background = 'black';
        // toggleBtn.innerHTML = 'Lighten';
        toggleBtn.style.backgroundColor = 'black';
        console.log('its dark');
        description.style.backgroundColor = 'transparent';
        description.style.color = 'white';
        selfieSection.style.backgroundColor = 'transparent';
        description.style.backgroundColor = 'transparent';
        personal.style.backgroundColor = 'transparent';
        personal.style.color = 'white';
        personal.style.backgroundColor = '#F08F80';
        gameTest.style.color = 'white';
        therapy.style.color = 'white';
        footer.style.backgroundColor = 'transparent';
        document.querySelector('.links').style.color = 'white';
        

        // isDark = true;
        console.log('background is dark, isDark: ' + isDark);
}
isDark = !isDark; // if you are trying to switch between 2 modes ex "on/off" "light/dark" 
//goes after the rules but before end of function
}

toggleBtn.addEventListener('click', toggleSwitch);

//  toggleSwitch(); //turns dark because page started light 
//  toggleSwitch(); // turns light because the page was dark
//  toggleSwitch();

// PROBLEMS: WHEN I SWITCH TO DARK MODE AND THEN SWITCH BACK, NOTHING IS VISIBLE
// MAKING THE TRUE FALSE QUIZ PROPERLY, PSEUDO CODE LINES 1-3