let sum = 0;

for (let i = 0; i < process.argv.length-2; i++) {
  sum += Number(process.argv[i+2])
}

console.log(sum)