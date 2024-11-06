// const amIString= (input) => {
//     const typeOfInput= typeof input
//     if(typeOfInput === 'string'){
//         return 'I am a string'
//     }
// }
//console.log(amIString(9))

const amIString= (input) => {
    return typeof input === 'string'
    }

//console.log(amIString(9))



//Check for Array

const isArray= (input) => {
    return Array.isArray(input)
    }
// console.log(isArray('hello')); // => false
// console.log(isArray(['hello'])); // => true


//Check for types in Array

const sameTypeArray = (arrayInput) =>{
    const item1Type= arrayInput[0]
    
    for(let i=1; i<arrayInput.length;i++){
        if(typeof item1Type !== typeof arrayInput[i]){
            return false;
        }
    }
        return true;
    
    }

// console.log(sameTypeArray(['hello', 'world', 1,'long sentence'])) // => true
// console.log(sameTypeArray([1, 2, 9, 10])) // => true
// console.log(sameTypeArray([['hello'], 'hello', ['bye']])) // => false
// console.log(sameTypeArray([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true

//Sort and REmove Duplicated Characters

// number=123
// let array = [];
// array.push(number % 10);
// console.log(array)
// const arr1 = [24.6,23.7,18.9,76.5];
// function arrSort(arr) {
//     arr.sort((a,b)=>a-b);
//     //arr.reverse();
//     return arr;
// }
 
// console.log(arrSort(arr1));

function reversedArray(number){
    let array=[];
    while(number>0){
        array.push(number%10)
        number=Math.floor(number/10)

    }
    array.sort((a,b)=>a-b)
    array.reverse()
   // console.log(array)
}
//reversedArray(123456)

//Count repetitions


const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
//console.log(counts)

// const countRepetitions = (array) =>{
//     const objCount={}
//     for(const key of array)
        
//         objCount+=key
// }
// console.log(objCount)

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const count = fruits.reduce((accumulator, fruit) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }
// In this case, accumulator is an object that keeps track of each fruit's count.


//cat and mouse

function catchMouse(input)
{
    let catIndex= input.indexOf('C') + 1
    let mouseIndex=input.indexOf('m')
    let differnce=mouseIndex-catIndex;
    // console.log(catIndex)
    // console.log(mouseIndex)
    // console.log(differnce)
if(differnce<=3){
    return true
}
else{
    return false;
}
}
//console.log(catchMouse('..C.......m'))

//Split the bill

function splitTheBill(obj)
{
    const sumOfBill=Object.values(obj).reduce((a,b) => a+b,0);
    //console.log(sumOfBill)
    const average= sumOfBill/Object.keys(obj).length
    //console.log(average)
    for(let key in obj){
        obj[key] = average-obj[key]
    }
    return obj
  
}

console.log(splitTheBill({
    Amy: 20,
    Bill: 15,
    Chris: 10
}))










//Exponentiation

function exponential(base,power){
  let value=1
    while(power>0){
        value=value*base;
        power--
    }
    console.log(value)
}
//exponential(5,3)

function exponentialRecursive(base,power){
    let c=1
    if( power===0)
        return 1
    else
     return base*exponentialRecursive(base,power-1)
}
//console.log(exponentialRecursive(5,3))


//pig-latin

function pigLatin(word) {
    word = word.toLowerCase();
     if ('aeiou'.includes(word.charAt(0))) {
        word = word + 'way';
        return word
    } else {
        for(i=0;i<word.length;i++){
            if('aeiou'.includes(word.charAt(i))){
                     word=word.slice(i)+word.slice(0,i)+'ay'
                     break;
            }
        }
        return word
            }
        }
        //console.log(pigLatin('glove'))
      
//Search and Replace

// function searchAndReplace(sentence){
//     let wordsArr=[]
//     wordsArr=sentence.split(' ')
//     for(i=0;i<wordsArr.length;i++){
//         if(wordsArr[i]==='Boy'){
//             wordsArr[i]= 'Girl'
//         }

//     }
//     return wordsArr.join(' ')
// }
// console.log(searchAndReplace('I am a Boy'))


function searchAndReplace(sentence, targetWord, replacementWord) {
    let wordsArr = sentence.split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
        // Check if the word matches the target, ignoring case
        if (wordsArr[i].toLowerCase() === targetWord.toLowerCase()) {
            // Preserve case if the original word is capitalized
            if (wordsArr[i][0] === wordsArr[i][0].toUpperCase()) {
                wordsArr[i] = replacementWord[0].toUpperCase() + replacementWord.slice(1);
            } else {
                wordsArr[i] = replacementWord.toLowerCase();
            }
        }
    }

    return wordsArr.join(' ');
}
//console.log(searchAndReplace('I am a Boy','Boy','girl'))



//convert from binary

function binaryToText(binarySentence) {
    // Split the binary sentence into 8-bit chunks
    let binaryArray = binarySentence.split(' ');
    
    // Map each binary chunk to its ASCII character
    let text = binaryArray.map(binary => {
        // Convert binary to decimal
        let asciiCode = parseInt(binary, 2);
        // Convert ASCII code to character
        return String.fromCharCode(asciiCode);
    }).join(''); 
    
    return text;
}


//console.log(binaryToText('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'))

//check the ending

function checkEnding(str, target) {
    const targetLength = target.length;
    // Use slice to extract the last 'targetLength' characters of the string
    const strEnding = str.slice(-targetLength);
    
    // Check if the extracted part matches the target string
    return strEnding === target;
  }
  
  console.log(checkEnding("kevin", "vin"));

  //difference two arrays

  function symmetricDifference(arr1, arr2) {
    // Get elements in arr1 that are not in arr2
    const difference1 = arr1.filter(item => !arr2.includes(item));
    
    // Get elements in arr2 that are not in arr1
    const difference2 = arr2.filter(item => !arr1.includes(item));
    
    // Combine both arrays to return the symmetric difference
    return difference1.concat(difference2);
  }
  
  console.log(symmetricDifference([1, 2, 3], [2, 3, 4])); // Output: [1, 4]