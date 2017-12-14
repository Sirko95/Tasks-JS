function Anagram(anagram){
    this.anagram = anagram;
}

Anagram.prototype.matches = function matches() {
    let mass = []
    let requiet = false;
    if( arguments.length > 1 || typeof arguments[0] == 'string') {
        for(var i = 0; i < arguments.length; i++) {
            mass.push(arguments[i]);
            if(i > 0) {
                delete arguments[i];
            }
        }
        arguments[0] = mass;
        mass = [];
    }
    for(var i = 0; i < arguments[0].length; i++) {
        if(arguments[0][i].length == this.anagram.length) {
           const lowerArg = arguments[0][i].toLowerCase().split('').sort();
           const lowerAnagr = this.anagram.toLowerCase().split('').sort();
           requiet = true;
           for(var j = 0; j < this.anagram.length; j++) {
               if(lowerArg[j] != lowerAnagr[j]) {
                   requiet = false;
               }
           }
           if(arguments[0][i].toLowerCase() == this.anagram.toLowerCase()) {
               requiet = false;
           }
           if(requiet && lowerAnagr != lowerArg) {
                mass.push(arguments[0][i]);           
           }
        }
    }
    return mass
}

module.exports = Anagram;