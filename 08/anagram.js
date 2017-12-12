function Anagram(anagram){
    this.anagram = anagram;
}

Anagram.prototype.matches = function matches() {
    let mass = []
    for(var i = 0; i < arguments[0].length; i++) {
        if(arguments[0][i].length == this.anagram.length) {
           for(var j = 0; j < this.anagram.length; j++) {
               if(arguments[0][i].indexOf(this.anagram[j]) == -1) {
                   return mass
               }
           }
           mass.push(arguments[0][i]);
        } else return mass
    }
}

module.exports = Anagram;