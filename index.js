module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

function Phrase(content){
    if (!(typeof content == 'string' || typeof content == 'number')) {
        throw("Error: wrong sort of value");
    }
    this.content = content;
    this.String = String(this.content).toLowerCase();
    this.letter = function letter() {
        let goodyRegex = /[a-zA-Z]/;
        if (Number(this.String)) {
            return this.String;
        } else {
        return Array.from(this.String).filter(c => c.match(goodyRegex)).join("")};
    };
    this.processor = function processor(){
        if (!!Number(this.content)) {
            return String(this.content).reverse();
        }else {
            return (this.letter()).reverse();
        }
    }
    this.processedContent = function processedContent(){
        return this.processor();
    }
    this.palindrome = function palindrome() {
        if (this.processedContent() == ""){
            return "It's empty."
        } else if (this.processedContent() == "0"){
            return "Please input a number other than 0."
        } else if (this.processedContent() === this.letter()){
            return `"${this.content}" be palindrome.`
        }else {
            return `"${this.content}" be no palindrome, pleb.`
        }
        }
}
