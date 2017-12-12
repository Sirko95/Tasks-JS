function List(arr) {
    if(arr == undefined) {
        this.arr = [];
    } else this.arr = arr;
}

List.prototype.compare = function compare(secArr) {
    let mass = [];
    console.log(this.arr[2]);
    if( secArr.lenght == this.arr.lenght) {
        console.log(secArr.lenght);
        for ( var firstPos = 0; firstPos < this.arr.lenght; firstPos++ ) {
            for ( var secondPos = 0; secondPos < secArr.lenght; secondPos++ ) {
                if( this.arr[firstPos] != secArr[secondPos] ) {
                    return 'UNEQUAL'
                }
            }
        }
        return 'EQUAL'
    }
}

module.exports = List;