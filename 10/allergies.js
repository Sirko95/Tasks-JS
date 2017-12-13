function Allergies(count) {
    this.count = count;
    this.allergies = {
        1: 'eggs',
        2: 'peanuts',
        4: 'shellfish',
        8: 'strawberries',
        16: 'tomatoes',
        32: 'chocolate',
        64: 'pollen',
        128: 'cats'
    }
    this.arrNumbers = [1,2,4,8,16,32,64,128]; 
    
}

Allergies.prototype.list = function list() {
    let count = this.count;
    let minApproach = 0;    
    let mass = [];
    const summ = this.arrNumbers.reduce(function(prev, curr){
        return prev + curr
    });
    if(summ < count) {
        count = count - summ - 1;
        console.log(count)
    }
    if(count > 0) {
        for(let i = this.arrNumbers.length; i >= 0; i--) {
            minApproach = count - this.arrNumbers[i];
            if(minApproach == 0 || minApproach > 0) {
                count = minApproach;
                mass.push(this.allergies[this.arrNumbers[i]]);
            }
        }
    } 
    return mass.reverse();
}

Allergies.prototype.allergicTo = function allergicTo(prod) {
    const count = this.count;
    for(let i = 0; i < this.arrNumbers.length; i++) {
        if(this.arrNumbers[i] <= count && this.allergies[this.arrNumbers[i]] == prod) {
            return true
        }
    }
    return false
}

module.exports = Allergies;
