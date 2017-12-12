var HelloWorld = function(name) {
    this.name = name;
}
  
HelloWorld.prototype = {
    hello:  function(){
    return 'Hello, World!'
    }
};

module.exports = HelloWorld;