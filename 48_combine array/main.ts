//combine array
let laptop1prices = [50000, 65000, 70000];
let laptop2prices = [45000, 60000, 75000];

//use of spread operator to combine in one array and .sort() to ascending order
let Bothprices = [...laptop1prices, ...laptop2prices].sort((a, b) => a - b);
console.log(Bothprices);
