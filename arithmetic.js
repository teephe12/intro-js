const check = (num) => {
    if (num === 0) {
        return "Zero";
    } else if (num > 0) {
        return "positive";
    } else {
        return "negative";
    }
};

let num = 5;
console.log(check(num));