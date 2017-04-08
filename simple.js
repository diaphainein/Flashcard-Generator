// creating simple card constructor
function Simple(front, back) {
    this.front = front;
    this.back = back;
}

// adding a print the whole card (front and back) function to constructor prototype
Simple.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
};

// adding a print front function to constructor prototype
Simple.prototype.printFront = function() {
    console.log(this.front);

}

// adding a print the answer function to constructor prototype
Simple.prototype.printAnswer = function() {
    console.log('Sorry, the correct answer is ' + this.back + '.');
}

// exports the simple card constructor to be used by other files
module.exports = Simple;