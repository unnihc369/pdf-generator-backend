const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const pdfTemplate = require("./documents");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  return new Promise((resolve, reject) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("/result.pdf", (err) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  })
    .then(() => {
      res.send(Promise.resolve());
    })
    .catch((error) => {
      res.status(500).send("Error generating PDF");
    });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(5000, () => console.log(`Listening on port 5000`));
