let cashInWallet = 30;
let cardAmount = 20;
const price = 40;

const canPayWithCard = cardAmount >= price;
const hasEnoughCash = cashInWallet >= price;

const canBuy = hasEnoughCash || canPayWithCard;

// console.log(canBuy);

//Can stay home

function printRectangleInfo(a, b) {

};

function isEven(x) {
    return (x % 2) === 0
};
console.log(
    isEven(60)
);
