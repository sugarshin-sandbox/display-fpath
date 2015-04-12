var argv = process.argv;
var recursive = require('recursive-readdir');

recursive(argv[2], function (err, files) {
  console.log(files.join('\n'));
});
