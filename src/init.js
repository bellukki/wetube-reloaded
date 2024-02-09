import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;
const handelListening = () =>
  console.log(`✅ Server lsitening on port http://localhost:${PORT} 🌠`);

app.listen(PORT, handelListening);
