
 // function bind():
 //  example 1:
 //  var alice = {
 //   name: 'alice',
 //  s hout: function(){
 //     alert(this.name);
 //   }
 // }
 // var boundShout = bind(alice.shout, alice);
 // boundShout(); // alerts 'alice'
 // boundShout = bind(alice.shout, {name: 'bob'});
 // boundShout(); // alerts 'bob'
 //  example 2:
 //  var func = function(a, b){ return a + b };
 // var boundFunc = bind(func, null, 'foo');
 // var result = boundFunc('bar');
 // result === 'foobar'; // true


var bind = function(func, context) {
};

// bind is too hard 

Function.prototype.bind = function(a, args1, args2) {
};
