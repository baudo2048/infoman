var peer = new Peer('someid', {host: 'localhost', port: 9000, path: '/myapp'});

peer.on('open', function(){
  console.log('peer.id: ' + peer.id);
});

peer.on('', function(){

});
