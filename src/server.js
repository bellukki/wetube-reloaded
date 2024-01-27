import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("<h1>I still love you.</h1>");
};
const login = (req, res) => {
  console.log("I will respond.");
  return res.send("<h1>I still love you so much.</h1>");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handelListening = () =>
  console.log(`✅ Server lsitening on port http://localhost:${PORT} 🌠`);

app.listen(PORT, handelListening);
