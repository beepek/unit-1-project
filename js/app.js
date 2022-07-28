
//all the buttons
const sleepBtn = document.querySelector("#action-sleep");
const eatBtn = document.querySelector("#action-eat");
const advBtn = document.querySelector("#action-adventure");
//consts for the main screen
const sleepLvl = document.querySelector("#sleep-stats");
const eatLvl = document.querySelector("#food-stats");
const advLvl = document.querySelector("#adventure-stats");
const daysLived = document.querySelector("#days-lived");
const gameMessage = document.querySelector('#gamestatus');
//state variables/init variables
 const startSleep = 2;
 const startFood = 2;//values at start of game// 
 const startAdv = 2;
// //day counter
 let days = 1;
    
class hero {
    constructor(sleep, food, adventure, day) {
        this.sleep = startSleep;
        this.food = startFood;
        this.adventure = startAdv;
        this.day = days;
    }
}

 let hero1 =new hero();
 eatLvl.innerHTML = hero1.food
 sleepLvl.innerHTML = hero1.sleep
 advLvl.innerHTML = hero1.adventure
 daysLived.innerHTML = hero1.day

//console.log(hero1);
function actionEat(hero) {
    hero.food += 1 
    hero.day += 1
    hero.sleep -= 1 
    sleepLvl.innerHTML = hero.sleep
    eatLvl.innerHTML = hero.food
    daysLived.innerHTML = hero.day
    check();
}
//console.log(hero1);
function actionSleep(hero) {
    hero.sleep += 1
    hero.day += 1
    hero.food -= 1  
    eatLvl.innerHTML = hero.food
    sleepLvl.innerHTML = hero.sleep
    daysLived.innerHTML = hero.day
    check();
}
function actionAdventure(hero) {
    hero.adventure += 1
    hero.day += 1
    hero.sleep -= 1
    hero.food -= 1
    sleepLvl.innerHTML = hero.sleep
    eatLvl.innerHTML = hero.food
    advLvl.innerHTML = hero.adventure
    daysLived.innerHTML = hero.day
    check();
}
function check() {
    console.log(hero1.sleep, hero1.food);
    if (hero1.sleep <= 0 || hero1.food <= 0) {
        console.log("if statement")
        gameMessage.innerText = 'you lived for ' + days + " days";
    };
};
//console.log(days);
//event listeners for the buttons 
sleepBtn.addEventListener("click", function() {
   actionSleep(hero1);
   console.log(hero1, "hero1 after sleep click");
});
eatBtn.addEventListener("click", function() {
  //console.log(hero1.food);
    actionEat(hero1);
   console.log(hero1, "hero1 after click");
});
advBtn.addEventListener("click", function() {
   actionAdventure(hero1);
   //console.log(hero1.adventure);
});



