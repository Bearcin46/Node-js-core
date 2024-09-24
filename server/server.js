import http from "http";

//create server
// const server = http.createServer((req, res) => {
//   //   res.write("Hello from node");
//   //   res.end(); or use below
//   res.end("Hello from node");
// });

//set header
const server = http.createServer((req, res) => {
  // if no setheader then it will be normal text, if setheader is used then it will show as h1 tag
  //   res.setHeader("content-type", "text/html");
  //  res.statusCode=500
  //   res.end("<h1>Hello from node</h1>");

  //instead of writing this you can use writehead
  res.writeHead(500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "server connected" }));
});

//create port
const SERVER_PORT = 5555;

//listen to server
server.listen(SERVER_PORT, () => {
  console.log(`server is running in http://localhost:${SERVER_PORT}`);
});
