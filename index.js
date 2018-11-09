const http = require('http');
const url = require('url');

const getHintByNumber = require('./hints');

http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);

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
