const http = require('http');
const url = require('url');

const getHintByNumber = require('./hints');

http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);

  // Set CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', '*');

  const routeCheck = parsedUrl.pathname.match(/^\/(\d+)$/);

  if (routeCheck && routeCheck[1]) {
    const hints = getHintByNumber(routeCheck[1]);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ hints }));
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
      message: '404 - The only valid route for this server is "/<a-number>"',
    }));
  }
  response.end();
}).listen(process.env.NODE_PORT || 8888);
