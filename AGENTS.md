# AGENTS.md — Blog di Claudia De Falco

Istruzioni per qualsiasi assistente AI che lavora su questo repository (Claude, Codex, Antigravity/Gemini, Copilot, Cursor…). **Leggile tutte prima di modificare qualcosa.** Se una regola qui è in conflitto con quello che vedi nei file, fidati dei file e segnala l'incoerenza a Claudia.

- **Sito online**: https://cdf-blog.netlify.app
- **Repository**: `github.com/defalcoclaudia11-lab/blog`, ramo `main`
- **Hosting**: Netlify, pubblicazione automatica a ogni push su `main` (circa 1 minuto)

---

## 1. Con chi stai lavorando

- La proprietaria del sito è **Claudia De Falco**, laureanda magistrale in **Filologia Moderna** all'Università di Napoli Federico II (tesi in Storia della critica letteraria). **Non è una programmatrice.**
- **Parla sempre in italiano**, con frasi semplici. Se nomini un termine tecnico (commit, push, deploy) spiegalo in una riga.
- Prima di modifiche grandi (nuova sezione, colori, caratteri, struttura) descrivi in 2-3 righe cosa farai e **aspetta il suo ok**. Per correzioni piccole (un refuso, una frase) procedi.
- Alla fine dille: cosa hai cambiato, come vederlo, se è già online.
- Claudia ha l'ultima parola sui contenuti: tu proponi, lei decide.

## 2. Com'è fatto il sito

Sito **statico**: solo HTML e CSS, nessun framework, nessun comando di build, nessun JavaScript. Ogni file è esattamente ciò che va online.

```
/
├── index.html                      Home: presentazione, elenco lavori, chi sono, contatti
├── 404.html                        Pagina "non trovata"
├── articoli/
│   └── <slug>/
│       ├── index.html              Un articolo = una cartella (URL: /articoli/<slug>/)
│       └── img/                    Immagini di QUELL'articolo (copertina, pagine, slide)
├── assets/
│   ├── style.css                   UNICO foglio di stile di tutto il sito
│   ├── favicon.svg
│   └── <slug>.pdf                  PDF scaricabili (es. seminario-debenedetti.pdf)
├── _modelli/articolo.html          Modello da copiare per ogni nuovo articolo (non indicizzato)
├── GUIDA-CLAUDIA.md                Guida per Claudia
├── CLAUDE.md, GEMINI.md            Rimandano a questo file
└── netlify.toml                    Configurazione Netlify (non serve toccarla)
```

Articoli attuali: `seminario-debenedetti`, `manoscritti-dante-manus`, `psicofagia`.

## 3. Regole che non si violano mai

1. **Niente framework, bundler o preprocessori** (React, Astro, Tailwind, Bootstrap, Sass, npm…) e niente JavaScript.
2. **Un solo CSS**: `assets/style.css`. **Mai `style="..."` nell'HTML.** Un nuovo componente = nuove classi in `style.css`.
3. **Link relativi**: in home `articoli/...`, `assets/...`; dentro un articolo `img/...` per le sue immagini e `../../assets/...`, `../../` per il resto. Mai percorsi assoluti (`/assets`), tranne in `404.html`.
4. **Non inventare contenuti a nome di Claudia**: niente citazioni, dati, voti, date, esperienze o bibliografia non presenti nei suoi materiali. Le bozze scritte da te vanno segnalate come bozze e approvate.
5. **Coautori sempre citati** nella scheda in home e nell'articolo (es. *Psicofagia* con Rossella Esposito; il seminario con Antimo Amore, Giuseppe Monda e Guido Somma).
6. **Privacy**: sul sito compare solo l'email `defalcoclaudia11@gmail.com`. Mai telefono, indirizzo, data di nascita.
7. **Copyright**: niente immagini prese dal web, niente foto di manoscritti o copertine di libri di altri editori. Per i lavori senza immagini proprie usa la **copertina tipografica** in CSS (vedi 4.4). La scheda Manus **non ha immagini** per scelta.
8. **Niente tracciamento** (analytics, cookie, pixel, widget social) senza richiesta esplicita.
9. **Non cancellare** articoli, PDF o immagini senza conferma esplicita.

## 4. Sistema grafico (da rispettare)

Stile **editoriale e minimale**, da rivista letteraria: molto spazio, una colonna di lettura, colori caldi, un solo accento rosso. Il design di riferimento è nel file Figma "Claudia De Falco – Blog".

### 4.1 Colori (variabili in `:root` di `style.css`)

| Variabile   | Valore    | Uso |
|-------------|-----------|-----|
| `--bg`      | `#F6F2EA` | Sfondo "carta" |
| `--surface` | `#FFFDF8` | Riquadri in rilievo |
| `--band`    | `#EDE6DA` | Fascia dietro le immagini |
| `--ink`     | `#1B1916` | Testo principale |
| `--muted`   | `#6E665B` | Testo secondario, didascalie, meta |
| `--rule`    | `#E2DACB` | Linee sottili |
| `--accent`  | `#A8322A` | Rosso: etichette, link, pulsanti, numeri |

Usa sempre le variabili. Niente gradienti, niente ombre pesanti, angoli al massimo 6px (pulsanti a pillola esclusi). Contrasto minimo 4.5:1.

### 4.2 Caratteri

- **Newsreader** (serif): titoli e testo di lettura (pesi 300, 400, 500, 600; corsivo per sottotitoli, citazioni e numeri di sezione).
- **DM Sans**: solo elementi di servizio (menu, etichette maiuscole, date, didascalie, pulsanti, dati delle schede).
- Nessun altro carattere. Il link Google Fonts è già in ogni pagina: copialo identico.

### 4.3 Misure

`--wide: 880px` (header, home, fasce immagini) e `--col: 680px` (colonna di testo). Testo articolo 20px/1.7 (18px su mobile). Spazi tra sezioni 56–112px.

### 4.4 Componenti (classi CSS)

**Struttura**
| Classe | Cosa è |
|---|---|
| `.wrap` / `.col` | Contenitore largo (880) / colonna di lettura (680) |
| `.site-header`, `.brand`, `.nav` | Intestazione |
| `.site-footer` | Piè di pagina |
| `.section`, `.section-head` (+ `.strong`), `.count` | Sezione con titoletto e linea (`.strong` = linea scura) |

**Home**
| Classe | Cosa è |
|---|---|
| `.hero`, `.lead` | Apertura |
| `.entries` > `.entry` | Elenco lavori, dal più recente |
| `.entry-sep` (`.n`, `.line`, `.kind`) | **Separatore numerato** tra i lavori: «N. 01 ——— Tipo · data» |
| `.card` (`.cover`, `.body`, `.meta`, `.more`) | Scheda del lavoro (titolo in `<h3>`) |
| `.type-cover` + `.tc-bordeaux` / `.tc-notte` / `.tc-bosco` | **Copertina tipografica** senza immagini: `.tc-kicker`, `.tc-author`, `.tc-title`, `.tc-sub`, `.tc-initial` (grande iniziale) |
| `.about`, `.about-text`, `.contact` | Chi sono e contatti |

**Articolo**
| Classe | Cosa è |
|---|---|
| `.intro`, `.back`, `.standfirst`, `.byline`, `.who`, `.info` | Testata |
| `.btn` | Pulsante rosso a pillola |
| `.pages` > `.band` + `figcaption` | Fascia di 4 immagini verticali (pagine) |
| `.band.wide` | Variante per immagini orizzontali (slide): 2 colonne, 1 su mobile |
| `.prose` | Corpo: `p`, `h2` con `<span class="num">I.</span>`, `blockquote` + `cite`, `.keypoints` |
| `.download` (`.t`, `.s`) | Box "Scarica il PDF" |
| `.biblio` | Bibliografia |
| `.toc` | Indice della pagina con link alle sezioni (usato nella scheda Manus) |
| `.catalog-sheet` > `.catalog-block` | Scheda di catalogo: blocchi con `h2`, `h3.catalog-sub`, `.catalog-data` (+ `.spaced`), `.field-pair` (`.term`, `.value`), `.catalog-text`, `.catalog-quote` |

Riusa questi componenti prima di crearne di nuovi.

## 5. Procedure

### A. Nuovo articolo
1. Scegli uno **slug** minuscolo, senza accenti, con trattini (es. `calvino-lezioni-americane`).
2. Copia `_modelli/articolo.html` in `articoli/<slug>/index.html` e **togli la riga `noindex`**.
3. Compila tutti i segnaposto `{{...}}`; elimina i blocchi opzionali non usati. Minuti di lettura = parole ÷ 200.
4. Immagini in `articoli/<slug>/img/`; PDF in `assets/<slug>.pdf`.
5. In `index.html` copia un blocco `<article class="entry">` **in cima** a `.entries`, rinumera tutti i separatori (N. 01 = il più recente) e aggiorna il contatore («N lavori · anni»).
6. Copertina: immagine di Claudia (`<img>` dentro `.cover`) oppure copertina tipografica con una variante di colore non ancora usata dal lavoro precedente.
7. Controlla con la checklist (sezione 6).

**Struttura consigliata:** apertura (2 paragrafi), sezioni numerate `I.`, `II.`…, al massimo 2-3 citazioni brevi con autore e opera, chiusura, box PDF, bibliografia.

### B. Modificare un testo
Cambia solo il testo richiesto. Mantieni virgolette «…», apostrofi tipografici (’) e trattini lunghi (–, —).

### C. Immagini
JPG, lato lungo max 1400px, possibilmente sotto 300 KB. Sempre `width`, `height`, `alt` descrittivo in italiano e `loading="lazy"` (tranne la prima immagine della pagina).

### D. PDF
Tieni i PDF **sotto i 10 MB**: se una presentazione esportata da Canva è più pesante, comprimila prima di pubblicarla.

### E. Grafica
Solo tramite variabili e classi di `style.css`. Descrivi prima l'effetto a Claudia (meglio con 2 alternative). Dopo il cambio controlla desktop e mobile (390px): nessuno scorrimento orizzontale.

### F. Pubblicare
1. Checklist. 2. Commit con messaggio in italiano chiaro (es. `Nuovo articolo: Lezioni americane di Calvino`). 3. Push su `main`. 4. Comunica a Claudia l'indirizzo della pagina.
Se non puoi fare il push, spiegale come caricare i file da GitHub (*Add file → Upload files*, trascinando le cartelle intere).

## 6. Checklist prima di pubblicare

- [ ] Tutti i link funzionano (immagini, PDF, ritorno alla home).
- [ ] `<title>` e `<meta name="description">` (max 155 caratteri) unici; un solo `<h1>` per pagina.
- [ ] Nessun `{{...}}` rimasto, nessun `style="..."`.
- [ ] Coautori e fonti citati; solo l'email come dato personale.
- [ ] Leggibile a 390px e su desktop.
- [ ] Immagini con `alt`, `width`, `height`; PDF sotto i 10 MB.
- [ ] Nuova scheda in cima alla home, separatori rinumerati, contatore aggiornato.

## 7. Tono dei contenuti

Italiano curato ma accessibile, da lettrice che consiglia: frasi non troppo lunghe, termini tecnici spiegati la prima volta, citazioni sempre attribuite. Prima persona quando parla Claudia, prima persona plurale nei lavori di gruppo.
