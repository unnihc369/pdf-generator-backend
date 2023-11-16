// server.js
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/generate-pdf", (req, res) => {
  const { name, role, date, phone, email } = req.body;

  const html = `
    <html>
      <body>
        <h1>Offer Letter</h1>
        <p>Name: ${name}</p>
        <p>Role: ${role}</p>
        <p>Date of Joining: ${date}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
      </body>
    </html>
  `;

  pdf.create(html).toStream((err, stream) => {
    if (err) return res.status(500).send("Error generating PDF");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=offer-letter.pdf"
    );
    stream.pipe(res);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
