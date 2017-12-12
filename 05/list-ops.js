function List(arr) {
    if(arr == undefined) {
        this.arr = [];
    } else this.arr = arr;
}

List.prototype.append = function append() {
    for( var i = 0; i < arguments['0'].arr.length; i++) {
        this.arr.push(arguments['0'].arr[i]);
    }
    return this.arr;
}
List.prototype.concat = function concat() {
    if(arguments['0'].arr.length != 0) {
        for( var i = 0; i < arguments['0'].arr.length; i++) {
            this.arr.push(arguments['0'].arr[i]);
        }
    }
    return this.arr;
}

List.prototype.filter = function filter(func) {
    var mass = [];
    for(var i = 0; i < this.arr.length; i++) {
      if(func(this.arr[i])) {
        mass.push(this.arr[i]);
      }
    }
    return mass;
}

List.prototype.length = function length() {
    let count = 0;
    while (this.arr[count]) {
        count++;
    }
    return count
}

List.prototype.map = function map(func) {
    var mass = [];
    for(var i = 0; i < this.arr.length; i++){
      mass.push(func(this.arr[i]));
    }
    return mass;
}

module.exports = List;