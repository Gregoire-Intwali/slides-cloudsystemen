# Presentaties Cloud systemen

## Uitgebreide uitleg
Deze presentaties gebruiken Reveal.js. Om de code van deze library gescheiden te houden van die van de slides zelf, wordt gebruik gemaakt van een Git submodule.

Dit betekent dat de repository op de gewone manier clonen niet volstaat. Je moet de extra vlag `--recurse-submodules` gebruiken bij de `git clone`-operatie om Reveal.js ook te downloaden.

Zorg dan dat alles geïnstalleerd is: `npm i`, zowel in de `reveal.js` folder als in de repository root.

Start een presentatie door volgend commando te runnen van uit de repository root: `node server.js labX`, waarbij `labX` de foldernaam van het labo in kwestie is, bijvoorbeeld `node server.js lab3` voor de slides van labo 3.

Dit start een web server die luistert naar poort 8000.

## Korte uitleg

### Eerste keer (NodeJS)
Als je NodeJS op je systeem hebt, kan je dit doen:

- `git clone --recurse-submodules https://github.com/AP-IT-GH/slides-cloudsystemen.git; cd slides-cloudsystemen; npm i; cd reveal.js; npm i; cd ..; node server.js labX`, waarbij `X` het nummer van het labo is.
- Surf dan naar `localhost:8000` (zonder `index.html`).

### Eerste keer (Docker)
TODO: moet aangepast worden, want gebruik Express impliceert dat NodeJS image gebruikt moet worden.

### PDF maken
Indien je een printable versie van de slides wil, gebruik je `localhost:8000?print-pdf`.
Dan gewoon via het printvenster van je browser printen.
Met de meeste browsers is dit CTRL-P.
Pas de settings aan om de gewenste weergave te verkrijgen (bv. wel/geen styling, zorgen dat slides mooi op één pagina passen,...).

### Updaten
`git pull`
