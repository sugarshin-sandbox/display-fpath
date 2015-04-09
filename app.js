var fs = require('fs');
var glob = require('glob');
var argv = process.argv;

function showConsole(data) {
  console.log(data);
}

function writeFile(data, filePath) {
  fs.writeFile(filePath, data, function (err) {
    if (err) return console.log('File error: ' + err);
    console.log('Success!!');
  });
}

glob(argv[2] + '/**/*', function(err, files) {
  var d = '';
  files.forEach(function(el, i, arr) {
    var stat = fs.statSync(el);
    if (!stat.isDirectory()) {
      d += el + '\n';
    }
  });

  if (argv[3]) {
    writeFile(d, argv[3]);
  } else {
    showConsole(d);
  }
});
