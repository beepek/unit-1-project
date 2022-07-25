
//all the buttons
const sleepBtn = document.querySelector("#action-sleep");
const eatBtn = document.querySelector("#action-eat");
const advBtn = document.querySelector("#action-adventure");
//consts for the main screen
init();
const sleepLvl = document.querySelector("#sleep-stats");
const eatLvl = document.querySelector("#food-stats");
const advLvl = document.querySelector("#adventure-stats");
const daysLived = document.querySelector("#days-lived");
/*----- app's state (variables) -----*/
//state variables/init variables
//idk if im doing this correctly
const startSleep = 2;
const startFood = 2;// these are the values at start of game
const startAdv = 2;
//day ticker
let days = 1;

console.log(startAdv);
function hero() {//new hero
    this.sleep = startSleep;
    this.food = startFood;
    this.adventure = startAdv;
    this.day = days;
}
//console.log(hero);
hero.actionSleep = function() {// functions for the buttons 
    this.sleep+=1 / (daysLived += 1)
};
hero.actionEat = function() {
    this.food+=1 / (daysLived += 1)
};
hero.actionAdventure = function() {
    this.adventure+=1 / (daysLived += 1)
};

//event listeners for dem buttons 
sleepBtn.addEventListener("click", function() {
    hero.actionEat();
});
eatBtn.addEventListener("click", function() {
    hero.actionEat();
});
advBtn.addEventListener("click", function() {
    hero.actionAdventure();
});
//score
daysLived++;
daysLived.innerHTML = daysLived;

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function init();