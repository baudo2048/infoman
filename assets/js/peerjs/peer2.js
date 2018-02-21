// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// PeerJS object
var peer = new Peer({key: 'v5p7ahuf7g3f2yb9'});
peer.on('open', function(){
  console.log('peer.id: ' + peer.id);
});
