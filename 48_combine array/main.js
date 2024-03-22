var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//combine array
var laptop1prices = [50000, 65000, 70000];
var laptop2prices = [45000, 60000, 75000];
//use of spread operator to combine in one array and .sort() to ascending order
var Bothprices = __spreadArray(__spreadArray([], laptop1prices, true), laptop2prices, true).sort(function (a, b) { return a - b; });
console.log(Bothprices);
