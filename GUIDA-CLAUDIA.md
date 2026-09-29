# Guida rapida per Claudia 🌸

Questa guida ti spiega come gestire il tuo sito in modo semplice, passo per passo.

---

## Come funziona il sito

Il tuo sito è composto da **file HTML e CSS** salvati in questa cartella (`blog/`).  
Quando fai un **push su GitHub**, Netlify pubblica automaticamente le modifiche online.

Il sito è visibile su: **[claudiadefalco.netlify.app](https://claudiadefalco.netlify.app)**

---

## Struttura delle cartelle

```
blog/
├── index.html          ← La home page
├── assets/
│   ├── style.css       ← Lo stile grafico
│   └── img/            ← Immagini generali
├── articoli/
│   ├── psicofagia/     ← Primo articolo
│   │   ├── index.html
│   │   └── img/
│   └── ...             ← Altri articoli futuri
```

---

## Come pubblicare le modifiche

Dopo aver modificato un file:

1. Apri il terminale nella cartella `blog`
2. Scrivi questi comandi:

```bash
git add .
git commit -m "Descrizione della modifica"
git push
```

Oppure chiedi all'agente AI di farlo per te! 😊

---

## Come chiedere modifiche all'agente

Puoi chiedere cose come:

- *"Aggiungi un nuovo articolo su [argomento]"*
- *"Cambia il colore di sfondo"*
- *"Aggiungi un'immagine alla home"*
- *"Correggi il testo dell'articolo su Psicofagia"*
- *"Pubblica le modifiche su GitHub"*

L'agente conosce tutte le regole del sito (sono scritte in `AGENTS.md`) e farà le modifiche rispettando lo stile.

---

## Regole importanti da ricordare

- 📁 I nomi dei file sono sempre **minuscoli** e con **trattini** (es. `cultura-visiva`)
- 🖼️ Le immagini vanno nella cartella `img/` di ogni articolo
- 🎨 I colori e i font sono definiti nel file `style.css` — non cambiarli a caso
- 📱 Il sito è progettato per funzionare bene anche su telefono

---

## In caso di problemi

Se qualcosa non funziona:
1. Controlla che i file siano stati salvati
2. Controlla di aver fatto `git push`
3. Aspetta 1-2 minuti (Netlify ci mette un po')
4. Chiedi all'agente AI di controllare!
