import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from directories
app.use(express.static(path.join(__dirname, "CSS Files")));
app.use(express.static(path.join(__dirname, "HTML Files")));
app.use(express.static(path.join(__dirname, "JS Files")));

app.get('/', function (req, res) {
  res.send("hello!!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});