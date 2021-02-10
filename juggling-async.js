var http = require('http');
var bl = require('bl');
var output = [];
var cnt = 0;

for (var i in process.argv) {
    if (i > 1) {
        httpGet(i);
    }
}


function httpGet(index) {
    http.get(process.argv[index], function(response) {
        response.pipe(bl(function(err, data) {
            output[index - 2] = data.toString();
            cnt++;
            // Use cnt to decide if all the responses have arrived and then print
            if (cnt === (process.argv.length - 2)) {
                printResult(output);
            }
        }));
    });
}

function printResult(output){
  for (var i = 0; i < output.length; i++) {
    console.log(output[i]);
  }
}