# Motus · demo dei wireframe

Wireframe a bassa fedeltà dell'app Motus («Mind your move»), generati con Figma Make a partire dall'alberatura funzionale, dalle mappe funzionali e dall'ontologia del progetto.

## Portare qui il codice da Figma Make

1. Apri il progetto MOTUS in Figma Make e scarica il codice (zip).
2. Dalla cartella della repository:

   ```bash
   ./scripts/importa-da-figma-make.sh ~/Downloads/NOME-DELLO-ZIP.zip
   ```

   Lo script copia il codice, scrive `vercel.json` con la cartella di uscita giusta, installa le dipendenze e prova la build.
3. Pubblica le modifiche:

   ```bash
   git add -A && git commit -m "Wireframe Motus da Figma Make" && git push
   ```

Per aggiornare la demo dopo nuove modifiche su Figma Make si ripetono gli stessi tre passi.

## Provarla in locale

```bash
npm install
npm run dev
```

## Metterla online con Vercel

- **Dal sito:** su <https://vercel.com/new> importa la repository `davidesaporita/motus-app`. Le impostazioni sono già in `vercel.json`: non serve cambiare niente. Da quel momento ogni `git push` su `main` aggiorna la demo.
- **Da terminale:** `npx vercel --prod` dalla cartella della repository.
