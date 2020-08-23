let assert = require("assert")
let chai = require("chai")
let Phrase = require("../index.js")
let expect = require("chai").expect

describe("Phrase", function(){
    it('Fail with non-String parameter', function () {
        assert.throws(function () {
         sharp().overlayWith(1);
        });
       });
    describe("#palindrome", function(){
        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(nonPalindrome.palindrome() == `"apple" be no palindrome, pleb.`);
        });
        it("should return false for an empty string", function() {
            let empty = new Phrase("");
            assert.strictEqual(empty.palindrome(), "It's empty.")
        })
        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome() == `"racecar" be palindrome.`);
          });
        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(!!(mixedCase.palindrome() == `"RaceCar" be palindrome.`))
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.palindrome(), `"Madam, I'm Adam." be palindrome.`)
        });
        it("should return true for a palindrome of numbers", function() {
            let numberPalindrome = new Phrase(3003);
            assert.strictEqual(numberPalindrome.palindrome(), `"3003" be palindrome.`)
        })
    })
    describe("#letter", function() {
        it("should return only letters in a string", function() {
            let punctuatedString = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedString.letter(), "madamimadam")
        })
    })
})