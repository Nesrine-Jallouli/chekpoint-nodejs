const filtration = require('./mymodule.js');
const fldr = process.argv[2];
const myfilter = process.argv[3];

filtration(fldr, myfilter, function (err, files) {
  if (err) {
    return console.error('Something went wrong:', err)
  }
else {
  files.forEach(function (file) {
    console.log(file)
  })
}
})
