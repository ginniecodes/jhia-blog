var Markdown = require('markdown-to-html').Markdown;
var md = new Markdown();
var fs = require('fs');
var a;
md.bufmax = 2048;
md.debug = true;
var dir = 'layouts/';
module.exports = function () {
    fs.readdir(dir, function(err, files){
        if (err)
            throw err;
        files.forEach(function (file){
                console.log('-----------');
                md.once('end', function(){
                    console.log('=========');
                });
                md.render(dir + file, {title: 'File $FILENAME on $DIRNAME', stylesheet: 'styles.css'}, function(err){
                    if(err)
                        console.error('>' + err);
                    md.pipe(process.stdout);
                });
        });
    });
}