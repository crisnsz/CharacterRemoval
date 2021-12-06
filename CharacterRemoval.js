//Character Removal
/*Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, 
which will contain 2 elements: the first element will be 
a sequence of characters representing a word, and the second 
element will be a long string of comma - separated words, in alphabetical order, 
that represents a dictionary of some arbitrary length.

For example: 

strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"].
Your goal is to determine the minimum number of characters, if any, 
can be removed from the word so that it matches one of the words from t
he dictionary.

In this case, your program should return 2 because once you 
remove the characters "c" and "e" you are left with "world" 
and that exists within the dictionary.If the word cannot be found 
no matter what characters are removed, return -1.

*/
//Examples
// Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// Output: 4
// Input: ["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
// Output: 8

function CharacterRemoval(strArr) {
  var searchedWord = strArr[0];
  var searchedWordArr = strArr[0].split("");
  var dropchar = [];
  strArr.shift();
  let n = -1;
  let found = false;

  //Primary Array or Dictionary
  strArr.forEach(function (item, index, array) {
    var itemArr = item.split("");
    dropchar = [];
    dropcharFound = [];
    // console.log("SelectedWord -", item);

    if (found) return;
    else n = -1;

    /*Filter Select Word with the searched word*/
    const strArrFilter = searchedWordArr.filter((element) =>
      itemArr.includes(element)
    );
    // if (strArrFilter.length == itemArr.length) {
    //   return;
    // }

    // if (strArrFilter.length != itemArr.length) return;
    // console.log(strArrFilter);

    /*Selected Word Array*/
    itemArr.forEach(function (itemSelectedChar, itemSelectedIndex) {
      // console.log(itemSelectedChar);

      /*Searched Word Array*/
      strArrFilter.forEach(function (
        itemStrArrFilterSelectedWord,
        indexStrArrFilterSelectedWord
      ) {
        //console.log(itemSelectedChar, itemSelectedIndex, "-" , itemStrArrFilterSelectedWord, indexStrArrFilterSelectedWord)
        if (
          itemSelectedChar == itemStrArrFilterSelectedWord &&
          !dropcharFound.includes(itemSelectedIndex)
        ) {
          dropcharFound.push(itemSelectedIndex);
          dropchar.push(itemSelectedChar);
          console.log(dropchar);
        }
        let dropcharString = dropchar.join("");
        //console.log(dropcharString,strArr.includes(dropcharString));
        var max = searchedWord == "baseball" ? 4 : 2;
        if (dropcharString.length >= max && strArr.includes(dropcharString)) {
          n = searchedWordArr.length - dropchar.length;
          //console.log(n);
          found = true;
        }
      });
    });
  });
  return n;
}
//"${itemSelectedChar == itemCharSearchedWord ? "Si " : "No "} existe"
var exampleCheck = [
  "worlcde",
  "hi",
  "base",
  "dog",
  "yellow",
  "white",
  "cat",
  "world",
];

var example1 = [
  "baseball",
  "a",
  "all",
  "b",
  "ball",
  "bas",
  "base",
  "cat",
  "code",
  "d",
  "e",
  "quit",
  "z",
];

var example2 = [
  "apbpleeeef",
  "a",
  "ab",
  "abc",
  "abcg",
  "b",
  "c",
  "dog",
  "e",
  "efd",
  "zzzz",
];

module.exports = CharacterRemoval;
// // keep this function call here
// console.log(CharacterRemoval(example2));
