import http from 'http';
import cors from "cors";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import dbConnection from './database';
import swaggerUi from 'swagger-ui-express';
import { swaggerJson } from './swagger';

require('dotenv').config()
morgan("dev");

const app = express();
const PORT = process.env.PORT || 3000;

// server
const server = new http.Server(app);

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// swagger docs
app.get("/", (req, res) => {
  res.redirect("/docs");
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerJson)));

// routes
routes(app);

//database
dbConnection();

// listen
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
