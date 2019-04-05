const http = require('http');
// const url = require('url');

const requestHandler = (client_req, client_res) => {
  console.log("Searched url: " + client_req.url);

  const options = {
    method: client_req.method,
    headers: client_req.headers
  };

  const proxy = http.request(client_req.url, options, (res) => {
    client_res.writeHead(res.statusCode, res.statusMessage, res.headers);
    res.pipe(client_res, { end: true });
  });

  client_req.pipe( proxy, { end: true });
};

const server = http.createServer(requestHandler);

server.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  };

  console.log(`server is listening on 3000`);
});
