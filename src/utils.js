// Your code here
 export function isPalindrome(word){
    console.log(word)
    let length =word.length
    const newWordArray=[]
    for (let i =word.length;i > 0;i--){
    newWordArray.push(word.charAt(length-=1) )
    }
    console.log(newWordArray.join(''))  
    if(newWordArray.join('')=== word){
    return true
   }else{
    return false
   }
}
