
//all the buttons
const sleepBtn = document.querySelector("#action-sleep");
const eatBtn = document.querySelector("#action-eat");
const advBtn = document.querySelector("#action-adventure");
//consts for the main screen
//test for git push
const sleepLvl = document.querySelector("#sleep-stats");
const eatLvl = document.querySelector("#food-stats");
const advLvl = document.querySelector("#adventure-stats");
const daysLived = document.querySelector("#days-lived");
/*----- app's state (variables) -----*/
//state variables/init variables
//idk if im doing this correctly
const startSleep = 2;
const startFood = 2;// these are the values at start of game// 
const startAdv = 2;
//day counter
let days = 1;

//console.log(startAdv);
function hero() {//new hero object
    this.sleep = startSleep;
    this.food = startFood;
    this.adventure = startAdv;
    this.day = days;
}

 let hero1 =new hero();
 eatLvl.innerHTML = hero1.food
 sleepLvl.innerHTML = hero1.sleep
 advLvl.innerHTML = hero1.adventure
 // am i messing up by adding this?
// let sleepCount;
// let foodCount;
// let advCount;
// let day = 0;
// console.log("hero1", hero1);


// hero.actionSleep = function() {// functions for the buttons 
//     this.sleep += 1 / (daysLived += 1)
// };
// hero.actionEat = function() {
//     this.food += 1 / (daysLived += 1)
// };
// hero.actionAdventure = function() {
//     this.adventure += 1 / (daysLived += 1)
// };
function actionEat(hero) {
    hero.food += 1 
    days += 1
    eatLvl.innerHTML = hero.food//for each action
}
function actionSleep(hero) {
    hero.sleep += 1
    days += 1
    sleepLvl.innerHTML = hero.sleep
}
function actionAdventure(hero) {
    hero.adventure += 1
    days += 1
    advLvl.innerHTML = hero.adventure
}
console.log(days);
//event listeners for dem buttons 
sleepBtn.addEventListener("click", function() {
   actionSleep(hero1);
   console.log(hero1.sleep);
});
eatBtn.addEventListener("click", function() {
  console.log(hero1.food);
    actionEat(hero1);
   console.log(hero1.food);
});
advBtn.addEventListener("click", function() {
   actionAdventure(hero1);
   console.log(hero1.adventure);
});


/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function init() {
//
//     sleepCount = (hero.sleep / startSleep + 1);
// foodCount = (hero.food /startFood + 1);
// advCount = (hero.adventure / startAdv + 1);
//days your hero survived counter
days++;
daysLived.innerHTML = days;

// writing a loop for death condition
if ((sleepCount <= 0) || (foodCount <= 0)) {
    sleepCount = 0,
    foodCount = 0,
    advCount = 0,
    alert( 'you lived for ' + days);
}
};

sleepLvl.innerHTML= sleepCount;
eatLvl.innerHTML = foodCount;
advLvl.innerHTML = advCount;
// what i need to do - clean up my logic and get my init working


render();// im totally forgetting how to do this
init();