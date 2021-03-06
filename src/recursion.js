// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n) {
    if (n < 0) {


        return null;
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, i = 0, result = 0) {
    if(i === array.length){
        return result;
    }
    result = result + array[i];
    return sum(array, ++i , result)
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array, i = 0, total = 0) {
    var results = function (arrays, result = []) {
        arrays.forEach(function (arr) {
            if (Array.isArray(arr)) {
                flatten(arr, result);
            } else {
                result.push(arr);
            }
        });
        return result;
    }(array);

    if (i > results.length - 1) {
        return total
    }

    total = total + results[i]
    return arraySum(array, ++i, total)
};

// 4. Check if a number is even.
var isEven = function (n, result = false, i = 0, res = 0, total = n) {
    if (n < 0) {
        n = Math.abs(n);
        total = n;
    }
    res = n / 2;
    if (i === res || total === 1) {
        if (total === 0) {
            result = true;
        }
        return result;
    }

    total = total - 2;
    return isEven(n, result, ++i, res, total);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (num, results = 0) {
    if (num === 0) {
        return results;
    }
    if (num < 0) {
        results = results + num + 1;
        return sumBelow(num + 1, results)
    }
    results = results + num - 1;
    return sumBelow(num - 1, results);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y, results = [], i = x) {
    if (x < y) {

        if (i === y) {
            results.shift()
            return results;
        }
        results.push(i)
        

        return range(x, y, results, ++i)


    }if (x > y) {

        if (i === y) {
            results.shift()
            return results;
        }
        results.push(i)

        return range(x, y, results, --i);
    }
    return results;

    
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, i = 0, results = 1) {
    if (exp < 0) {
        if (i === exp * -1) {
            return results;
        }
    }
    if (i === exp) {
        return results;
    }
    if (exp < 0) {
        results = results / base

        return exponent(base, exp, ++i, results)
    }
    results = results * base;
    return exponent(base, exp, ++i, results);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, i = 0, results = false) {
    if (n === 1) {
        results = true;
        return results;
    }
    if (n < 1) {
        results = false;
        return results;
    }
    n = n / 2;
    return powerOfTwo(n, i, results);

};

var reverse = function (string, results = '', i = string.length - 1) {
    if (i === -1) {
        return results;
    }

    return reverse(string, results.concat(string[i]), --i);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string, rev = '', i = 0, results = false) {
    string = string.replace(/\s/g, '');
    //console.log(string);
    if (i === string.length) {
        rev = rev.split('').reverse().join('')
        if (string.toLowerCase() === rev.toLowerCase()) {
            results = true;

        }
        return results;
    }
    return palindrome(string, rev.concat(string[i]), ++i);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y, i = x) {

    
    if (x === 0 && y === 0) {
        return NaN
    }

    if (x === 0 || y === 0) {
        return 0
    }

    
    if (x < 0 && y < 0) {
        if (x > y) {
            return x
        }

    }


    
    if (x < 0 && y < 0) {
        if (i > y) {
            return i
        }
        
        if (y > x) {

            i = i - y
            return modulo(x, y, i)

        } else if (x > y) {
            return x
        }

    }

    

    if (x > 0 && y > 0) {
        if (x > y) {
            if (i <= 0) {
                if (i < 0) {
                    return i + y
                } else {
                    return i
                }
            }
        }
    }

    
    if (x > 0 && y > 0) {
        if (x > y) {
            if (i <= 0) {
                if (i < 0) {
                    return i + y
                } else {
                    return i
                }
            }
            else {
                i = i - y
                return modulo(x, y, i)
            }
        } else if (y > x) {
            return x
        }
    }

    
    if (x > 0 && x < y) {
        return x
    }

    if (x < 0 && y > 0) {
        if (i >= 0) {
            if (i > 0) {
                return i - y
            }
            else {
                return i
            }
        }
        i = i + y
        return modulo(x, y, i)
    }






};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function (x, y, results = 0, i = 0, time = 0) {
    time = y;
    if (y < 0) {
        time = -y;
    }
    if (x <= -1 && y <= -1) {
        x = -x;
        y = -y;
        time = y;
        console.log(time);
    }
    if (i === time) {

        return results;
    }
    results = x + results;
    return multiply(x, y, results, ++i, time)
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y, result = x, times = x, counter = 0) {

   
    if (x === 0 && y === 0) {

        return NaN;
    }
    if (x <= 0 ) {
        return 0
    }
    if (y === 0) {
        return 0
    }
    if (times <= 0) {
          if (times < 0) {
            counter = counter - 1
            return counter
        } else {
            return counter;
        }
    }


    result = result - y
    times = times - y

    return divide(x, y, result, times, ++counter)

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if(x < 0 || y < 0){
        return null
    }
    if (!y) {
        return x;
    }

    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2, i = 0, result = false) {
    if (i === str2.length + 1) {
        return result;
    }

    if (str1.length === 0 && str2.length === 0) {
        result = true;
        return compareStr(str1, str2, ++i, result)
    }

    if (str1[i] !== str2[i] || str1.length !== str2.length) {
        result = false;
        return compareStr(str1, str2, ++i, result)
    }
    if (str1[i] === str2[i]) {
        result = true;
        return compareStr(str1, str2, ++i, result)
    }

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str, results = [], i = 0) {
    if (i === str.length) {
        return results;
    }
    results.push(str[i]);

    return createArray(str, results, ++i);
};

// 17. Reverse the order of an array
var reverseArr = function (array, results = [], i = array.length - 1) {
    if (i === -1) {
        return results;
    }
    results.push(array[i]);

    return reverseArr(array, results, --i);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length, results = [], i = 0) {
    if (i === length) {
        return results;
    }
    results.push(value);
    return buildList(value, length, results, ++i);

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, results = [], i = 0, total = 0) {
    if (i === array.length) {
        return total;
    }
    if (array[i] === value) {
        results.push(array[i]);
        total = results.length;

    }

    return countOccurrence(array, value, results, ++i, total);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, result = [], i = 0) {
    if (i === array.length) {
        return result;
    }
    result.push(callback(array[i], i, array));
    return rMap(array, callback, result, ++i)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key, counter = 0) {

    for (var k in obj) {

        if (k === key) {

            ++counter
        }

        if (typeof obj[k] === "object") {

            counter = countKeysInObj(obj[k], key, counter);

        }
    }

    return counter

};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, key, counter = 0) {

    for (var k in obj) {

        if (obj[k] === key) {

            ++counter
        }

        if (typeof obj[k] === "object") {

            counter = countValuesInObj(obj[k], key, counter);

        }
    }

    return counter

};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
    for (var k in obj) {

        if (k === key) {
            //console.log(k)
            // k = newKey
            obj[newKey] = obj[key]
            delete obj[k]
        }

        if (typeof obj[k] === "object") {

            replaceKeysInObj(obj[k], key, newKey);

        }
    }

    return obj




};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n, i = 0, results = [], j = 1) {
    if (i === n + 1) {
        return results
    }
    if (n <= 0) {
        return null;
    }

    if (results.length < 2) {
        results.push(i)
        //console.log(results.length, results, i)
        //j = i + results[i] 
        return fibonacci(n, ++i, results, j)
    } else {

        results.push(j)
        //console.log(results, i)

        j = results[i - 1] + results[i]
        console.log(results)

        return fibonacci(n, ++i, results, j)
    }


};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, i = 0, results = [], j = 1) {
    if (i === n + 1) {
        return results[n]
    }
    if (n < 0) {
        return null;
    }

    if (results.length < 2) {
        results.push(i)
        //console.log(results.length, results, i)
        //j = i + results[i] 
        return nthFibo(n, ++i, results, j)
    } else {

        results.push(j)
        //console.log(results, i)

        j = results[i - 1] + results[i]
        // console.log(results)

        return nthFibo(n, ++i, results, j)
    }


};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input, results = [], i = 0) {
    if (i === input.length) {
        return results;
    }
    results.push(input[i].toUpperCase());
    return capitalizeWords(input, results, ++i);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, results = [], i = 0, total = '') {
    if (i === array.length) {
        return results;
    }
    total = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    results.push(total);
    return capitalizeFirst(array, results, ++i, total);
}

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj, key, count = 0) {
    for (var k in obj) {

        if (obj[k] % 2 === 0) {

            count = obj[k] + count
        }

        if (typeof obj[k] === "object") {

            count = nestedEvenSum(obj[k], key, count);

        }
    }

    return count

};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, result = []) {
     arrays.forEach(function (arr) {
         if (Array.isArray(arr)) {
             flatten(arr, result);
         } else {
             result.push(arr);
         }
     });
     return result;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj = {}, i = 0, count = 0, ) {

    if (i === str.length) {
        return obj;
    }
    obj[str[i]] = (obj[str[i]] || 0) + 1


    return letterTally(str, obj, ++i);


};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, i = 0, results = []) {
    if (i > list.length - 1) {
        return results;
    }
    var current = list[i];
    if (current !== list[i +1]) results.push(current);
    return compress(list, ++i, results);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug, i = 0, result = []) {
    if (i > array.length - 1) {
        return result;
    }

    result.push(array[i])

    array[i].push(aug)

    return augmentElements(array, aug, ++i, result)

};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array, i = 0, results = []) {
    if (i === array.length) {
        console.log(results)
        return results;
    }
    if (array[i] !== 0) {
        results.push(array[i])
        return minimizeZeroes(array, ++i, results)

    } if (array[i] === 0 && array[i + 1] !== 0) {
        if (results[i - 1] !== 0) {
            results.push(array[i])
            return minimizeZeroes(array, ++i, results)
        }
    }
    return minimizeZeroes(array, ++i, results)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array, i = 0, results = []) {
    if (i > array.length - 1) {
        return results;
    }
    if (i % 2 !== 0) {
        if (array[i] < 0) {
            results.push(array[i])
            return alternateSign(array, ++i, results)

        } else {
            results.push(array[i] * -1)
            return alternateSign(array, ++i, results)
        }
    }

    if (array[i] < 0) {
        results.push(array[i] * -1)
        return alternateSign(array, ++i, results)
    }

    results.push(array[i])
    return alternateSign(array, ++i, results)


};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, i = 0, result = str.split(' ')) {
    var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    if (i > result.length - 1) {
        return result.join(" ")
    }

    if (Number(result[i]) || Number(result[i]) === 0) {
        console.log(i)
        result[i] = words[Number(result[i])]

    }
    return numToText(str, ++i, result)
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    return document.getElementsByTagName(tag).length
    
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max, i = 0, result = null) {
    if (i > array.length) {
        return result
    }

    if (array[i] === target) {
        result = i
    }
    return binarySearch(array, target, min, max, ++i, result)
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array, results = [], i = 0) {
    var newArr = array.slice()
    if (i > newArr.length - 1) {
        return results
    }
    newArr.sort(function (a, b) { return a - b })
    results.push(newArr[i])

    return mergeSort(array, results, ++i)

};