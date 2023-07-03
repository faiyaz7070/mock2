const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(cors());
server.use(middleware);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
