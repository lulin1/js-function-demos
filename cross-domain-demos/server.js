const url = require('url');

require('http').createServer((req,res) => {
	const data = {
		name: 'lulin'
	};
	const callback = url.parse(req.url, true).query.callback;
	res.writeHead(200)
	// res.end(`${callback}(${JSON.stringify(data)})`);
	res.end(`${callback}(${JSON.stringify(data)})`); //jsonpCallback({"x":"k"})
}).listen(3000,'127.0.0.1');

console.log('----启动服务，监听 127.0.0.1:3000-----');