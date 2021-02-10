let fs = require('fs');
let input = process.argv[2];

    fs.readFile(input,  function (err, data) {
         if (err) {return console.log(err)};
         let Nb = data.toString().split('\n').length - 1
             console.log(Nb)
    })
