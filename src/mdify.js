var fs = require('fs');
var contents = fs.readFile('about.json', function(err, file){
  if(err){
    console.err(err.message);
    return ;
  }
  var a = JSON.parse(JSON.stringify(file.toString()));
  console.log(a.split('body')[1]);
});


