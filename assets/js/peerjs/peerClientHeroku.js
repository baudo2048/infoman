//https://baudo2048-peer-server.herokuapp.com:9000/myapp
//https://baudo2048-peer-server.herokuapp.com/

var peer1 = new Peer('peer1', {host: 'baudo2048-peer-server.herokuapp.com', port: 9007, key: 'peerjs', path: '/'});
var peer2 = new Peer('peer2', {host: 'baudo2048-peer-server.herokuapp.com', port: 9007, key: 'peerjs', path: '/'});

peer1.on('open', function(){
  console.log('peer.id: ' + peer1.id);
});

peer2.on('connection', function(dataConnection) {
  console.log('peer.connection' + dataConnection);
});


var conn1 = peer1.connect('peer2',{});
