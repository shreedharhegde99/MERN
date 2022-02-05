const fs = require("fs");

// to create a file
// fs.writeFile("example.txt", "My name is Shreedhar Hegde", (err) => {
// 	if (err) {
// 		console.log("error");
// 	} else {
// 		console.log("success");
// 	}
// });

// // to rename a file

// fs.rename("example.txt", "me.txt", (err) => {
// 	if (err) {
// 		console.log("error");
// 	} else {
// 		console.log("success rename");
// 	}
// });

// to delete a file
// fs.unlink("me.txt", (err) => {
// 	if (err) {
// 		console.console.log("error");
// 	}else{
// console.log('successfully deleted');
// }
// });

// to create a folder

// fs.mkdir("src", (err) => {
// 	if (err) {
// 		console.log("error creating folder");
// 	} else {
// 		fs.writeFile("src/me.txt", "My name is shreedhar ", (err) => {
// 			if (err) {
// 				console.log("error");
// 			} else {
// 				console.log("successfully created file in src");
// 			}
// 		});
// 	}
// });

// fs.readFile("me.txt", "utf-8", (err, data) => {
// 	if (err) {
// 		console.log("error reading file");
// 	} else {
// 		console.log(data);
// 	}
// });

const readStream = fs.createReadStream("me.txt");
readStream.on("data", (chunk) => {
	console.log(chunk);
});
