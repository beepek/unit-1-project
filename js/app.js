
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
 daysLived.innerHTML = hero1.day


function actionEat(hero) {
    hero.food += 1 
    days += 1
    hero.sleep -= 1 //for some reason this doesnt work? 
    console.log(hero.sleep);
    eatLvl.innerHTML = hero.food//for each action//
    daysLived.innerHTML = hero.day// added this morning
}
function actionSleep(hero) {
    hero.sleep += 1
    days += 1
    //hero.food -= 1  //im hoping this will minus 1 from the non-clicked core value (food/sleep)
    sleepLvl.innerHTML = hero.sleep
    daysLived.innerHTML = hero.day
}
function actionAdventure(hero) {
    hero.adventure += 1
    days += 1
    hero.sleep -= 1
    //hero.food -= 1
    advLvl.innerHTML = hero.adventure
    daysLived.innerHTML = hero.day
}
console.log(days);
//event listeners for dem buttons 
sleepBtn.addEventListener("click", function() {
   actionSleep(hero1);
   //console.log(hero1.sleep);
});
eatBtn.addEventListener("click", function() {
  //console.log(hero1.food);
    actionEat(hero1);
   //console.log(hero1.food);
});
advBtn.addEventListener("click", function() {
   actionAdventure(hero1);
   //console.log(hero1.adventure);
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

// sleepLvl.innerHTML= sleep;
// eatLvl.innerHTML = food;
// advLvl.innerHTML = adventure;
// // what i need to do - clean up my logic and get my init working


//render();// im totally forgetting how to do this
//init();