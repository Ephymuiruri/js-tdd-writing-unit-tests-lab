// Your code here
 export function isPalindrome(word){
   word =word.toLowerCase()
    let length =word.length
    const newWordArray=[]
    for (let i =0;i<word.length/2;i++){
    if(word.charAt(i)!==word.charAt(word.length-1-i)){
        return false;
    }
}
return true
 }