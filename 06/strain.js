function Strain(){}

Strain.prototype.keep = function keep(arr, func) {
    var mass = [];
    for(var i = 0; i < arr.length; i++) {
      if(func(arr[i])) {
        mass.push(arr[i]);
      }
    }
    return mass;
}

Strain.prototype.discard = function discard(arr, func) {
    var mass = [];
    for(var i = 0; i < arr.length; i++) {
      if(!func(arr[i])) {
        mass.push(arr[i]);
      }
    }
    return mass;
}

module.exports = Strain;