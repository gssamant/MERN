const fs = require('fs');

// fs.writeFileSync('./test.txt', "Hello World!");

// fs.writeFile('./test.txt', "Overwriting you", (err) => { });

// const res = fs.readFileSync("./test.txt", 'utf-8');
// console.log(res);

// fs.readFile("./test.txt", 'utf-8', (err, result) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(result);
// 	}
// });

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
