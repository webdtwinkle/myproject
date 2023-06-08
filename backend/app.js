const express = require("express");

const http = require("http");
const cookieparser = require("cookie-parser");

const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

const server = http.createServer(app);

const cors = require("cors");
app.use(
  cors({
    origin: "*"
  })
);
app.use(cookieparser());
app.use(express.json());
require("./db/database");

app.use(require("./router/auth"));
app.use(require("./router/documentRoute"));



server.listen(PORT, () => {
    console.log(`server is running on port no. ${PORT}`);
  });
  