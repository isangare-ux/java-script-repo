# Einfaches JavaScript Projekt für GitHub Actions

Dieses Projekt ist bewusst sehr klein gehalten. Es eignet sich für den ersten Unterrichtstag zu GitHub Actions.

Die Teilnehmer sehen daran:

1. Ein Repository wird bei GitHub hochgeladen.
2. GitHub Actions startet automatisch bei einem Push.
3. Die Workflow Datei wird gelesen.
4. Node.js wird auf dem Runner installiert.
5. Die Tests werden automatisch ausgeführt.
6. Wenn ein Test fehlschlägt, wird die Pipeline rot.

## Projektstruktur

```text
github-actions-javascript-einfach/
├── .github/
│   └── workflows/
│       └── erste-pipeline.yml
├── index.js
├── rechner.js
├── rechner.test.js
├── package.json
├── .gitignore
└── README.md
```

## Lokal testen

Im Terminal im Projektordner ausführen:

```bash
npm install
npm test
```

Wenn alles richtig ist, sollten die Tests erfolgreich durchlaufen.

## Bei GitHub hochladen

```bash
git init
git add .
git commit -m "Erstes JavaScript Projekt mit GitHub Actions"
git branch -M main
git remote add origin <DEIN_REPOSITORY_LINK>
git push -u origin main
```

Danach in GitHub oben auf den Reiter **Actions** klicken.

## Übung für Teilnehmer

Ändere in der Datei `rechner.js` absichtlich eine Funktion falsch.

Beispiel:

```js
return a - b;
```

statt

```js
return a + b;
```

Dann wieder committen und pushen.

Die GitHub Actions Pipeline sollte danach fehlschlagen.
