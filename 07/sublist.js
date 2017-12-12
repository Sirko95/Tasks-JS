function List(arr) {
    if(arr == undefined) {
        this.arr = [];
    } else this.arr = arr;
}
List.prototype.length = function length() {
    let count = 0;
    while (this.arr[count]) {
        count++;
    }
    return count
}
List.prototype.compare = function compare(secArr) {
    const secArrText = secArr['arr'].join();
    const arrText = this.arr.join();
    if( secArr['arr'].length == this.arr.length) {
        if( this.arr[0] != secArr['arr'][0] ) {
            return 'UNEQUAL'
        }
        return 'EQUAL'
    }
    if (secArr['arr'].length > this.arr.length) {
        if(secArrText.indexOf(arrText) >= 0) {
            return 'SUBLIST'
        }
    }
    if (secArr['arr'].length < this.arr.length) {
        if(arrText.indexOf(secArrText) >= 0) {
            return 'SUPERLIST'
        } else return 'UNEQUAL'
    }
    else return 'UNEQUAL'
}
    

module.exports = List;
