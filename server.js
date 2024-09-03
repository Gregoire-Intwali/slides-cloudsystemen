/* Officiële Reveal docs doen uitschijnen dat het nodig is de broncode te klonen en aan te passen per presentatie.
 * Dit script staat toe presentaties buiten die folder te plaatsen.
 * Zo blijft code van Reveal.js zelf gescheiden van code slides.
 */
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

const staticDir = path.join(__dirname, process.argv[2]);

app.get('/', (req, res, next) => {
    const filePath = path.join(staticDir, req.path, "index.html");
    console.debug(filePath);
    ejs.renderFile(
        filePath,
        { folderName: process.argv[2] },
        (err, str) => {
            if (err) return next(err);
            res.send(str);
        });
});

// afbeeldingen en Reveal moeten ook geserveerd worden!
app.use(express.static(staticDir));
app.use(express.static("."));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port} with static dir ${path.join(__dirname, process.argv[2])}`);
});
