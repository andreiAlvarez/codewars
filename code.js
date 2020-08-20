// First 
function solution(str, ending){
   return ending === str.substr(str.length - ending.length);
}

// Second

function reverseWords(str) {
return str.split("").reverse().join("").split(" ").reverse().join(" ")
}
