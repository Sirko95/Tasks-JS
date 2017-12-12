var HelloWorld = require('./hello-world');

console.log(HelloWorld);

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
