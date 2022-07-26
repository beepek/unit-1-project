
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
// //day counter
 let days = 1;

// //console.log(startAdv);
// //function hero () {//new hero object}
    

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
    hero.sleep -= 1 //for some reason this doesnt work? 
    //console.log(hero.sleep);
    sleepLvl.innerHTML = hero.sleep//please god let this work
    eatLvl.innerHTML = hero.food//for each action//
    daysLived.innerHTML = hero.day// added this morning
}
//console.log(hero1);
function actionSleep(hero) {
    hero.sleep += 1
    hero.day += 1
    hero.food -= 1  
    eatLvl.innerHTML = hero.food
    sleepLvl.innerHTML = hero.sleep
    daysLived.innerHTML = hero.day
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
}
//console.log(days);
//event listeners for dem buttons 
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


/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

//
//     sleepCount = (hero.sleep / startSleep + 1);
// foodCount = (hero.food /startFood + 1);
// advCount = (hero.adventure / startAdv + 1);

// writing a loop for death condition
if ((hero.sleep <= 0) || (hero.food <= 0)) {
    alert('you lived for ' + days);
};


// sleepLvl.innerHTML= sleep;
// eatLvl.innerHTML = food;
// advLvl.innerHTML = adventure;
// // what i need to do - clean up my logic and get my init working


//render();// im totally forgetting how to do this
