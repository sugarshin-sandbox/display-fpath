var fs = require('fs');
var argv = process.argv;

displayFpath(argv[2]);

function displayFpath(path) {
  Promise.resolve(path)
    .then(readdir)
    // .then(each)
    .then(stats)
    .then(function (stat, name) {
      // console.log(stat);
      // console.log(name);
      if (stat.isDirectory()) {
        displayFpath(name);
      } else {
        console.log(name);
      }
    });
}

function readdir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(err, data) {
      if (err) reject('ERROR: \n' + err);
      resolve(path + '/' + data);
    });
  });
}

function each(arr) {
  arr.forEach(function(el, i) {
    return new Promise(function(resolve, reject) {
      resolve(el);
    });
  });
}

// function displayFpath(path) {
//   fs.readdir(path, function(err, data) {
//     data.forEach(function(el, i) {
//       var name = path + '/' + el;
//       stats(name)
//         .then(function(stats) {
//           if (stats.isDirectory()) {
//             displayFpath(name);
//           } else {
//             console.log(name);
//           }
//         })
//         .catch(function(err) {
//           return console.log('ERROR: \n' + err);
//         });
//     });
//   });
// }

function stats(path) {
  console.log(path);
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stat) {
      if (err) reject(err);
      resolve(stat, path);
    });
  });
}
