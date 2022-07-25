/*----- constants -----*/
//all the buttons
const sleepBtn = document.querySelector("#action-sleep");
const eatBtn = document.querySelector("#action-eat");
const advBtn = document.querySelector("#action-adventure");
//consts for main stats

const sleepLvl = document.querySelector("#sleep-stats");
const eatLvl = document.querySelector("#food-stats");
const advLvl = document.querySelector("#adventure-stats");
const statusBar = document.querySelector("#stats")
/*----- app's state (variables) -----*/
//state variables/init variables
const startSleep = 2;
const startFood = 2;// these are the values at start of game, or whenever browser is run
const startAdv = 2;
//day ticker
let daysLived = 1;
function init()
function hero() {
    this.sleep = startSleep;
    this.eat = startFood;
    this.adventure = startAdv;
}
console.log(hero);
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/