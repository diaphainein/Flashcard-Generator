// creating Cloze constructor
function Cloze(text, cloze) {

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '________');

}

// adding a print the answer function to our prototype (to be used if the answer given is incorrect)
Cloze.prototype.printAnswer = function() {

    console.log('Incorrect. Here is the full sentence: \n' + this.text.replace(/[{()}]/g, ''));
}

// exporting this constructor to be used in other files (hooray!)
module.exports = Cloze;