# Presentaties Cloud systemen

## Korte uitleg

### Eerste keer (NodeJS)
Als je NodeJS op je systeem hebt, kan je dit doen:

- `git clone git@github.com:AP-IT-GH/slides-cloudsystemen.git; cd slides-cloudsystemen; npm i; node server.js labo X`, waarbij `X` het nummer van het labo is.
- Surf dan naar `localhost:8000` (zonder `index.html`).

### Eerste keer (Dev container)
Open de root folder met Visual Studio Code. Als je de dev container extensie hebt, krijg je vanzelf de optie om een dev container te starten. In die container run je `node server.js labo X`, waarbij `X` het nummer van het labo is.

### PDF maken
Indien je een printable versie van de slides wil, gebruik je `localhost:8000?print-pdf`.
Dan gewoon via het printvenster van je browser printen.
Met de meeste browsers is dit CTRL-P.
Pas de settings aan om de gewenste weergave te verkrijgen (bv. wel/geen styling, zorgen dat slides mooi op één pagina passen,...).

### Updaten
`git pull`

### Nieuwe presentaties maken
Voeg een map toe met daarin een `index.md`.
Schrijf daarin Markdown compatibel met Reveal.js.
Geen extra `<section>` of `<script>` of `<textarea>`, gewoon de Markdown.
