////////////////////////////////////////////Stop gninnipS My sdroW!/////////////////////////////////////////////////////
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
// letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
//
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(string){
    //TODO Have fun :)
    // split string by spaces
    let newStrings = string.split(" ");

    // loop through all words
    for(let i = 0; i < newStrings.length; i++){
        let rev = '';
        // check if word length is equal or great to 5
        if(newStrings[i].length >= 5){
            // get that word and reverse it
            rev = newStrings[i].split("").reverse().join("");

            // replace that word with reversed word
            string = string.replace(newStrings[i], rev)
        }
    }

    return string;

    // better solution
    // return string.split(' ').map((word) => {
    //     return (word.length > 4) ? word.split('').reverse().join('') : word;
    // }).join(' ');


    // best solution
    // return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// console.log(spinWords("Welcome"));
// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"));
// console.log(spinWords("This is another test"));
// console.log(spinWords("You are almost to the last test"));
// console.log(spinWords("Seriously this is the last one"));





////////////////////////////////////////////Unique In Order/////////////////////////////////////////////////////
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
// with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
const uniqueInOrder = function(iterable){
    //your code here - remember iterable can be a string or an array
    let res = [];
    for (let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i + 1]){
            res.push(iterable[i])
        }
    }
    return res;

    // best solution
    // return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1,2,2,3,3]));



////////////////////////////////////////////Sum of two lowest positive integers/////////////////////////////////////////////////////
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    return sorted[0] + sorted[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));




////////////////////////////////////////////Shortest Word/////////////////////////////////////////////////////
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    return s.split(" ").sort((a, b) => a.length - b.length)[0].length;

    // best solution
    // return Math.min(...s.split(" ").map (s => s.length));
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(findShort("Let's travel abroad shall we"));





////////////////////////////////////////////Array.diff/////////////////////////////////////////////////////
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
    const res = [];
    for (let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            res.push(a[i])
        }
    }

    return res;

    // best solution
    //return a.filter(e => !b.includes(e));
}

// console.log(arrayDiff([], [4,5]));
// console.log(arrayDiff([3,4], [3]));
// console.log(arrayDiff([1,8,2], []));
// console.log(arrayDiff([1,2,3], [1,2]));




////////////////////////////////////////////Valid Parentheses/////////////////////////////////////////////////////
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
function validParentheses(parens){
    //TODO
    if (parens.length % 2 !== 0) return false;
    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    for (let i = 0 ; i < parens.length ; i++) {
        if (map.has(parens[i])) {
            stack.push(map.get(parens[i]));
        } else if (parens[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;


    // best solution
    // return [...parens].reduce((a, c) => (a + c).replace("()",'')) === "" ? true : false;
}

// console.log(validParentheses( "()" ));
// console.log(validParentheses( "())" ));
// console.log(validParentheses( "(())(())()()()(()(" ));




////////////////////////////////////////////Duplicate Encoder/////////////////////////////////////////////////////
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that
// character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
function duplicateEncode(word){
    // ...
    return word
        .toLowerCase()
        .split('')
        .map(  (a, i, w) =>
            w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
        )
        .join('');
}

// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));




////////////////////////////////////////////Bouncing Balls/////////////////////////////////////////////////////
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1
// (Condition 2) not fulfilled).
function bouncingBall(h,  bounce,  window) {
    // your code here
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
    } else {
        return -1;
    }
}

// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));





////////////////////////////////////////////Write Number in Expanded Form/////////////////////////////////////////////////////
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
function expandedForm(num) {
    // Your code here
    // let numStr = num.toString().split('');
    //
    // for(let i = 0 ; i < numStr.length; i++ ){
    //     for(let y = numStr.length - i; y > 1; y--){
    //         if(numStr[i] !== '0'){
    //             numStr[i] += 0;
    //         };
    //     };
    // };
    //
    // const filtered = numStr.filter(function (el) {
    //     return el !== '0';
    // });
    //
    // return filtered.join(' + ');


    // best practice
    return num.toString()
            .split("")
            .reverse()
            .map( (a, i) => a * Math.pow(10, i))
            .filter(a => a > 0)
            .reverse()
            .join(" + ");
}

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));




////////////////////////////////////////////Format a string of names like 'Bart, Lisa & Maggie'//////////////////////////////////////////////////
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
function list(names){
    //your code here
    let newArr = [];
    for (let n of names){
        newArr.push(n.name)
    }

    return newArr.join(', ').replace(/,([^,]*)$/, " &$1");

    // best solution
    //return names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
}

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
// console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
// console.log(list([{name: 'Bart'}]));
// console.log(list([]));




////////////////////////////////////////////Replace With Alphabet Position/////////////////////////////////////////////
// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
function alphabetPosition(text) {
    const letters = {
        a: '1', b: '2', c: '3', d: '4',
        e: '5', f: '6', g: '7', h: '8',
        i: '9', j: '10', k: '11', l: '12',
        m: '13', n: '14', o: '15', p: '16',
        q: '17', r: '18', s: '19', t: '20',
        u: '21', v: '22', w: '23', x: '24',
        y: '25', z: '26'
    };

    let spl = text.toLowerCase().split("");

    let newArr = [];
    for (let i = 0; i < spl.length; i++){
        if(letters.hasOwnProperty(spl[i])){
            newArr.push(letters[spl[i]])
        }
    }

    return newArr.join(" ");

    // best solution
    // return text
    //     .toUpperCase()
    //     .match(/[a-z]/gi)
    //     .map( (c) => c.charCodeAt() - 64)
    //     .join(' ');
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// console.log(alphabetPosition("The narwhal bacons at midnight."));





////////////////////////////////////////////Find the odd int/////////////////////////////////////////////
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
    //happy coding!
    const counts = {};
    A.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });

    for(let i = 0; i < Object.values(counts).length; i++){
        if(Object.values(counts)[i] % 2 !== 0){
            return parseInt(Object.keys(counts)[i])
        }
    }

    // best solution
    // return A.reduce((a, b) => a ^ b);
}

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
// console.log(findOdd([10]));
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));




////////////////////////////////////////////Find the unique number//////////////////////////////////////////////////////
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
    // do magic
    let res = ''
    arr.map((a, i, w) => {
        if(w.indexOf(a) === w.lastIndexOf(a)){
            res = a
        }
    });

    return res;

    // best solution
    // return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// console.log(findUniq([ 0, 1, 0 ]));
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// console.log(findUniq([ 3, 10, 3, 3, 3 ]));




////////////////////////////////////////////Snail//////////////////////////////////////////////////////
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
const snail = function(array) {
    // enjoy
    const sorted = [];
    while(array.length){
        sorted.push(...array.shift())
        for(let i = 0; i < array.length; i++){
            sorted.push(array[i].pop())
        }

        sorted.push(...(array.pop() || []).reverse());

        for(let i = array.length - 1; i >= 0; i--){
            sorted.push(array[i].shift())
        }
    }
    return sorted;
}

// console.log(snail([[]]));
// console.log(snail([[1]]));
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));




////////////////////////////////////////////The observed PIN//////////////////////////////////////////////////////
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a
// secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock.
// Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
// The keypad has the following layout:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit
// (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system
// or sound the alarm. That's why we can try out all possible (*) variations.
// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#)
// of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#).
// But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.
// Detective, we are counting on you!
function getPINs(observed) {
    // TODO: This is your job, detective!
    let digits = [["0", "8"], ["1", "2", "4"],
        ["1", "2", "3", "5"], ["2", "3", "6"],["1", "4", "5", "7"],
        ["2", "4", "5", "6", "8"], ["3", "5", "6", "9"],
        ["4", "7", "8"], ["5", "7", "8", "9", "0"], ["6", "8", "9"]
        ]

    return observed.split("").reduce((previousVal, currentVal) =>
         digits[currentVal].reduce((prVal, curVal) => [...prVal, ...previousVal.map(a => `${a}${curVal}`)], []), ['']
    );
}

// console.log(getPINs("8"));
// console.log(getPINs("11"));
// console.log(getPINs("369"));



////////////////////////////////////////////Did I Finish my Sudoku?//////////////////////////////////////////////////////
// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
// Sudoku rules:
// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.
// Rows:
// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There
// may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.
// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.
// Columns:
// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers
// 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.
// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.
// Regions
// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.
// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9.
// Duplicate numbers are not permitted in any region. Each region will differ from the other regions.
// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.
function doneOrNot(board){
    return getGridTotal(board) === 9 * 9 &&
    getGridTotal(transpose(board)) === 9 * 9 &&
    getGridTotal(getRegions(board)) === 9 * 9 ?
        'Finished!' : 'Try again!';
};

function getGridTotal(board){
    return board.map(row => new Set(row))
        .map(row => row.size)
        .reduce((tempGrid, cell) => tempGrid + cell);
};

function transpose(board){
    return board.map((col, i) => board.map(row => row[i]));
};

function getRegions(board){
    let one = [], two = [], three = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < 3; j++) {
            one.push(board[i][j]);
            two.push(board[i][j + 3]);
            three.push(board[i][j + 6]);
        }
    }
    let cubes = [...one, ...two, ...three];
    return createRegionsGrid(cubes);
};

function createRegionsGrid(regions){
    let i, j, newCubes = [], chunk = 9;
    for (i = 0, j = regions.length; i < j; i += chunk) {
        newCubes.push(regions.slice(i, i + chunk));
    }
    return newCubes;
};

//best solution
// const done = [1, 0, 1, 0, 0, 0]
// function doneOrNot() {
//     return done.shift() ? 'Finished!' : 'Try again!'
// }

// console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
//
// console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 9],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]]));



////////////////////////////////////////////Next bigger number with the same digits////////////////////////////////////////////////////
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil
function nextBigger(n){
    //your code here
    let arr = n.toString().split("").reverse();
    let i = arr.findIndex((d, _i) => d < arr[_i - 1]);
    if (i === -1) { return -1; };
    let subArr = arr.slice(0, i);
    let j = subArr.findIndex((d) => d > arr[i]);
    subArr.splice(j, 1, arr[i]);
    return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subArr).join(""));
}

// console.log(nextBigger(12));
// console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));




////////////////////////////////////////////Sudoku Solution Validator////////////////////////////////////////////////////
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9,
// so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board,
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's,
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false
function validSolution(board){
    let comb = [], rows = board, blocks = [], count = 0;
    let columns = board.map((row, index, rows) => rows.map(row => row[index]));

    let temp = board.map(row => [row.slice(0, 3), row.slice(3, 6), row.slice(6, 9)])
        .reduce((prev, curr) => prev.concat(curr), []);

    for(let i = 0; i < 9; i++) {
        let pos;

        if(count === 3) {
            pos = i * 3;
            count = 0;
        }
        blocks.push([].concat(temp[pos], temp[pos + 3], temp[pos + 6]));
        count++;
    }

    comb = comb.concat(rows, columns, blocks);

    return !comb.some(function(combination) {
        let result = Boolean(combination.join('').match(/(\d)(?=.*\1)/));
        return result;
    });
}

// console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
//
// console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]]));




////////////////////////////////////////////The Millionth Fibonacci Kata////////////////////////////////////////////////////
// In this kata you will have to calculate fib(n) where:
// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.
// Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.
// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)?
// Use this to reason what value fib has to have for negative values.
function fib(n, memo = {}) {
    if(n in memo) return memo[n];
    if(n === 0) return 0n;
    if(n === 1 || n === -1) return 1n;
    if(n < 0){
        memo[n] = BigInt(Math.pow(-1, n + 1)) * fib(Math.abs(n), memo)
    }else{
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    }
    return memo[n];
}

function sumFibs(num, memo = {}) {
    var result = 0
    function fibonacci(num, memo = {}) {
        if(num in memo) return memo[num];
        if (num === 0) {
            return 0
        }
        if (num === 1 || num === -1) {
            return 1
        }
        if(num < 0){
            memo[num] = BigInt(Math.pow(-1, num + 1)) * fibonacci(Math.abs(num), memo)
        }else{
            memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
        }
        return memo[num];

    }
    for(var i = 0; i <= num; i++) {
        if (fibonacci(i, memo) % 2 === 1 && fibonacci(i, memo) < num) {
            result += fibonacci(i, memo)
        }
    }
    return result
}

console.log(fib(100));
console.log(fib(-6));






