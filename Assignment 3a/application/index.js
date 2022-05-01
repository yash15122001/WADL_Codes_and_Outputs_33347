const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');

const server = http.createServer((req, res) => {
	console.log(req.url);

	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');

	if (req.url == '/') {
		res.end(index);
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
