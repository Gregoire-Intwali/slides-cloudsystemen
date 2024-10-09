# Git Intermediate
---
Atomaire commits

note:
- 1 feature / bugfix / ... per commit
- beperk je tot de noodzakelijke bestanden
- neem niet "nog snel iets extra" op (bv. whitespace, comments)
- splits frontend en backend aanpassingen
---
Duidelijke commit messages

note:
- maakt code veel beter doorzoekbaar
- afspraken met je collega's
- meng geen Engels en Nederlands
- afspraak vaak imperatief te gebruiken
- one-line summary, witregel, uitgebreidere omschrijving
---
[Voorbeeld richtlijnen](https://ec.europa.eu/component-library/v1.15.0/eu/docs/conventions/git/)
---
`git rm`

note:
- kan ook door gewoon te verwijderen en `git add` te gebruiken, ziet er vreemd uit
---
`git diff`
---
Merge conflicts

note:
- fact of life, klinkt erger dan het is
- **ook bij conflictvrije merge is review essentieel**, aanpassing code op één plaats kan gevolgen hebben op andere plaats!
- **demo in de les**:
  - lokale aanpassing in een file committen
  - andere remote aanpassing op zelfde plaats committen
  - `git pull`
  - bekijk annotaties
  - los op
  - maak nieuwe commit
---
Time travel:

- `HEAD`
- `git checkout <commit>`
- `git reset` (extra opties maken groot verschil)

note:
- `HEAD` is de huidige commit
- "detached head": we zitten niet op het uiteinde van een tak
---
`git bisect`

note:
- "convenience" tool die herhaaldelijk `git checkout` gebruikt om bron van een probleem op te sporen
- bewijsbaar optimale aanpak
- sluit af met `git bisect reset`
---
`.gitignore`

note:
- gebruikt glob operators, paar oefeningen in labo
- credentials en environment files
- gegenereerde bestanden
- dependencies (wel: specificaties zoals `package-lock.json` of `requirements.txt`)
---
Protected branches

note:
- oplossing: pull requests
---
Pull requests

note:
- demo
---
Rebase vs. merge

note:
- **denk in termen van de grafestructuur!**
- gebruik [voorbeeldrepo](https://github.com/v-nys/example-repo-merge-vs-rebase)
---
Merge

note:
- maakt **één nieuwe commit** met twee "parents"
- geschiedenis wordt alleen **uitgebreid**
- **demo**, toon achteraf graph
- feature branch wordt achteraf vaak "geknipt"
  - Github vermeldt ook: "branch can be safely deleted"
    - tussenstappen zijn dan niet meer zichtbaar!
---
Rebase (op een andere tak)

note:
- zoals "stekken" van een plant
- neemt de commits op één tak en "verplant" ze
- meestal van feature branch op main branch
- **herschrijft** de geschiedenis
- merge conflicts zijn ook hier mogelijk
- **demo**, toon achteraf graph
---
Rebase (interactief)

note:
- geschiedenis van één tak herschrijven
- ideaal voor wanneer taak "af" is
- https://git-rebase.io/, "fixing up later commits", 
---
`git rebase -i <voorouder van HEAD>`

note:
- demo: https://git-rebase.io/
  - "Fixing up older commits"
  - "Squashing several commits"
  - "Reordering commits"
---
Veilig **her**schrijven

note:
- **enkel redelijk voor code die nog niet gedeeld is met anderen**
  - niet vanzelfsprekend dat hun work-in-progress past op jouw nieuwe structuur
  - maak een klassieke lokale backup
  - probeer uit
  - controleer resultaat
  - verwijder of herstel de lokale backup
  - **zeker** als Git nog nieuw is voor je
- eventueel terugdraaien via een **revert commit**, niet via een reset!
- demonstreer tijdens les...
---
Onbehandelde functionaliteit:

- submodules
- LFS
- hooks
- vanalles, terug te vinden op [de officiële pagina](https://git-scm.com)

note:

- submodules bv. voor source dependencies
- LFS: files zelf worden niet in repo bijgehouden maar op aparte server, we houden pointers bij
- hooks: goede voorbeelden zijn controleren commit format, linter runnen,...
