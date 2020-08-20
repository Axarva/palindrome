let assert = require("assert")
let Phrase = require("../index.js")

describe("Phrase", function(){
    describe("#palindrome", function(){
        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(nonPalindrome.palindrome() == "This no palindrome, pleb.");
        });
        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome() == "This a palindrome.");
          });
        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(!!(mixedCase.palindrome() == "This a palindrome."))
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome() == "This a palindrome.")
        });
        it("should return true for a palindrome of numbers", function() {
            let numberPalindrome = new Phrase(3003);
            assert(numberPalindrome.palindrome() == "This a palindrome.")
        })
    })
    describe("#letter", function() {
        it("should return only letters in a string", function() {
            let punctuatedString = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedString.letter(), "madamimadam")
        })
    })
})