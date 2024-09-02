

const array = [1, 2, 3, 4, 5, 6];

function findIndex(array, num){
    return array.findIndex(num)
}


//console.log(findIndex(array, 5));

function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(1,2));

const addNumberArrow = (num1, num2) => num1 + num2;


function addNumberNested(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

console.log(addNumberNested (3)(99))
