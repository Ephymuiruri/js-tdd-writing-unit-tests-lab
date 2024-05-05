// Your tests here
import {isPalindrome} from "../utils"
describe("isPalindrome",()=>{
    it("checks if a word is a palindrome and if so returns true else returns false",()=>{
        const word ="mom"
        const result=isPalindrome(word)
        expect(result).toBeTruthy()
    })
})
