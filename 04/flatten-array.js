var Flattener = function() {
}

Flattener.prototype.flatten = function flatten(array) {
    var res=[];
    for (var i = 0; i < array.length; i++)
    if (!Array.isArray(array[i])) res.push(array[i]);
    else res=res.concat(flatten(array[i]));
     const newRes = res.filter(function(curr) {
        return curr != null
     });
    return newRes
}

module.exports = Flattener;