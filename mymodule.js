var fs = require('fs')
var path = require('path')

module.exports = function (fldr, myfilter, callback) {
  fs.readdir(fldr, function (err, files) {
    if (err) 
      return callback(err)
    
    else {
    files = files.filter(function (file) {
      return path.extname(file) === '.' + myfilter
    })

    callback(null, files)
}
  })
}