console.log('it works');

var peer1 = new Peer({key: 'v5p7ahuf7g3f2yb9'});
var peer2 = new Peer('my-id-peer-test-2',{key: 'p53s0i9c6uma38fr'});

console.log('peer1: ' + peer1);

var conn1 = peer1.connect('my-id-peer-test-2');
conn1.on('open', function(){
  conn1.send('hi!');
  console.log('greetings');
});



peer2.on('connection', function(conn) {
  conn2.on('data', function(data){
    // Will print 'hi!'
    console.log(data);
  });
});
