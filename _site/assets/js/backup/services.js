<script>
function save(doc, coll){
  console.log('save services called');
    var baseUri = 'https://api.mlab.com/api/1',
          apiKey = 'sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c',
          db_name = 'baudo2048';
      $.ajax( {
          url: baseUri + "/databases/"+db_name+"/collections/"+coll+"?apiKey="+apiKey,
          data: JSON.stringify( doc ),
          type: "POST",
          contentType: "application/json" } );
}

function open(query, coll){
  var baseUri = 'https://api.mlab.com/api/1',
        apiKey = 'sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c',
        db_name = 'baudo2048';
    return $.ajax( {
        url: baseUri + "/databases/"+db_name+"/collections/"+coll+"?q="+JSON.stringify(query)+"&apiKey="+apiKey,
        type: "GET",
        contentType: "application/json",
        complete: callback } );
}
</script>
