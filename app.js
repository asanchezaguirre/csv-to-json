const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const csv = require('csvtojson')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JSON data in terminal');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//Convertir a Json
const csvFilePath='./customer-data.csv'

csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		console.log("Converting to JSON...")
		var convertirJson = JSON.stringify({array: jsonObj});
   	
	})
const jsonArray= csv().fromFile(csvFilePath);

