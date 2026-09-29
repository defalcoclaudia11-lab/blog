# AGENTS.md — Istruzioni operative per agenti AI

## Identità del progetto

Questo è il **sito personale / blog** di **Claudia De Falco**, studentessa e ricercatrice in Scienze della Comunicazione.  
Il sito è un progetto editoriale che unisce **riflessione critica, cultura visiva e progettazione grafica**.

- **Dominio**: [claudiadefalco.netlify.app](https://claudiadefalco.netlify.app)
- **Hosting**: Netlify (deploy automatico da GitHub)
- **Repository**: `github.com/defalcoclaudia11-lab/blog`
- **Branch principale**: `main`

---

## Stack tecnico

| Componente     | Tecnologia        |
|----------------|--------------------|
| Struttura      | HTML5 semantico    |
| Stile          | CSS puro (no framework) |
| JavaScript     | Solo se strettamente necessario |
| CMS            | Nessuno (statico)  |
| Deploy         | Netlify via GitHub  |
| Dominio        | `.netlify.app`     |

### Regole fondamentali

- **Non usare mai framework CSS** (no Tailwind, no Bootstrap).
- **Non usare JavaScript** a meno che non sia indispensabile per una funzionalità specifica.
- **Non usare bundler, task runner o preprocessor** (no Webpack, no Sass, no PostCSS).
- Il sito deve restare **statico, leggero e leggibile** anche senza JS.

---

## Struttura del progetto

```
blog/
├── index.html                  ← Home page (lista articoli)
├── 404.html                    ← Pagina errore personalizzata
├── robots.txt
├── netlify.toml
├── README.md
├── AGENTS.md                   ← (questo file)
├── GUIDA-CLAUDIA.md            ← Guida semplificata per Claudia
│
├── assets/
│   ├── style.css               ← Foglio di stile principale
│   ├── favicon.svg
│   └── img/                    ← Immagini condivise
│       ├── hero-home.jpg
│       └── ...
│
├── articoli/
│   ├── psicofagia/
│   │   ├── index.html
│   │   └── img/
│   │       ├── cover.jpg
│   │       └── ...
│   ├── prossimo-articolo/
│   │   ├── index.html
│   │   └── img/
│   └── ...
│
└── _modelli/                   ← Template e snippet (non pubblicati)
    ├── articolo-base.html
    └── sezione-cta.html
```

---

## Sistema grafico e identità visiva

### Palette colori (variabili CSS)

```css
:root {
  --color-bg:         #FDFDFC;
  --color-text:       #1A1A1A;
  --color-accent:     #C45A3C;
  --color-accent-hover:#A3412B;
  --color-muted:      #6B6B6B;
  --color-border:     #E0DDD8;
  --color-surface:    #F5F3EF;
}
```

### Tipografia

| Uso             | Font                        |
|------------------|-----------------------------|
| Titoli (`h1–h3`) | *Newsreader*, serif          |
| Corpo testo      | *DM Sans*, sans-serif        |
| Didascalie, note | *DM Sans* a dimensione ridotta |

Caricati da Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,700&display=swap" rel="stylesheet">
```

### Principi di design

- **Stile editoriale**, ispirato a riviste culturali e portfolio di design.
- **Uso dello spazio bianco** generoso (margini, padding larghi).
- **Griglie semplici** (max 2-3 colonne), layout centrato con `max-width`.
- **Immagini grandi**, usate come elementi narrativi, non decorativi.
- **Micro-interazioni** solo con CSS (`:hover`, `transition`).
- **Mobile first**: il sito deve essere perfettamente leggibile su smartphone.

---

## Come aggiungere un nuovo articolo

### 1. Creare la cartella

```
articoli/nome-articolo/
├── index.html
└── img/
    ├── cover.jpg
    └── ...
```

### 2. Struttura HTML dell'articolo

Ogni articolo segue questo schema:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo Articolo — Claudia De Falco</title>
    <meta name="description" content="Breve descrizione dell'articolo per SEO.">
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/style.css">
</head>
<body>

    <nav class="site-nav">
        <a href="/" class="nav-logo">Claudia De Falco</a>
    </nav>

    <article class="article-page">
        <header class="article-header">
            <span class="article-category">Categoria</span>
            <h1>Titolo dell'articolo</h1>
            <p class="article-meta">
                <time datetime="YYYY-MM-DD">GG mese AAAA</time> · X min di lettura
            </p>
        </header>

        <figure class="article-cover">
            <img src="img/cover.jpg" alt="Descrizione immagine" loading="lazy">
            <figcaption>Eventuale didascalia</figcaption>
        </figure>

        <div class="article-body">
            <!-- Contenuto dell'articolo -->
            <p>...</p>
            <h2>...</h2>
            <blockquote>...</blockquote>
        </div>

        <footer class="article-footer">
            <a href="/" class="back-link">← Torna alla home</a>
        </footer>
    </article>

    <footer class="site-footer">
        <p>© 2025 Claudia De Falco</p>
    </footer>

</body>
</html>
```

### 3. Aggiungere la card in home page

In `index.html`, nella sezione `.articles-grid`, aggiungere:

```html
<article class="article-card">
    <a href="/articoli/nome-articolo/">
        <img src="/articoli/nome-articolo/img/cover.jpg" alt="Descrizione" loading="lazy">
        <div class="card-content">
            <span class="card-category">Categoria</span>
            <h2>Titolo dell'articolo</h2>
            <p>Breve descrizione / sottotitolo dell'articolo.</p>
            <span class="card-date">GG mese AAAA</span>
        </div>
    </a>
</article>
```

---

## Convenzioni di scrittura

### Nome file e cartelle
- Tutto **minuscolo**
- Parole separate da **trattino** (`-`)
- Niente spazi, accenti o caratteri speciali
- Esempio: `articoli/cultura-visiva-oggi/`

### Immagini
- Formato preferito: **WebP** o **JPG**
- Dimensione massima: **1200px** di larghezza
- Compresse (usare strumenti come Squoosh)
- Sempre con attributo `alt` descrittivo
- Sempre con `loading="lazy"` (tranne hero/cover above-the-fold)

### Testi
- Tono: **riflessivo, colto ma accessibile**
- Evitare linguaggio troppo accademico
- Paragrafi brevi (3-4 righe max)
- Uso di **sottotitoli** (`h2`, `h3`) per scandire la lettura

---

## SEO e accessibilità

### Ogni pagina deve avere:
- `<title>` unico e descrittivo
- `<meta name="description">` (max 155 caratteri)
- Un solo `<h1>` per pagina
- Attributi `alt` su tutte le immagini
- HTML semantico (`<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<figure>`)
- Link con testo significativo (no "clicca qui")

### Struttura heading:
```
h1 → Titolo principale (uno solo)
  h2 → Sezioni principali
    h3 → Sotto-sezioni
```

---

## Deploy e workflow

### Come pubblicare le modifiche:

1. Modificare i file localmente
2. Commit su Git:
   ```bash
   git add .
   git commit -m "Descrizione breve della modifica"
   git push origin main
   ```
3. Netlify rileva automaticamente il push e pubblica il sito aggiornato (1-2 minuti)

### Netlify

- Build command: nessuno (sito statico)
- Publish directory: `/` (root)
- Le configurazioni sono in `netlify.toml`

---

## Cosa NON fare

- ❌ Non aggiungere framework CSS o JS
- ❌ Non modificare la struttura delle cartelle senza aggiornare i link
- ❌ Non usare immagini senza `alt`
- ❌ Non creare pagine senza `<title>` e `<meta description>`
- ❌ Non committare file temporanei o di sistema (`.DS_Store`, `Thumbs.db`)
- ❌ Non usare `style` inline — tutto va in `style.css`
- ❌ Non usare `id` per lo stile — usare classi CSS
- ❌ Non modificare il favicon senza approvazione

---

## Note per l'agente

- Prima di ogni modifica, **verifica** lo stato attuale del file che vuoi modificare.
- Se devi creare un nuovo articolo, **chiedi** titolo, categoria, descrizione e immagini prima di procedere.
- Mantieni **coerenza** con lo stile esistente (colori, font, spaziature).
- Ogni modifica deve essere **testabile** aprendo il file HTML nel browser.
- Se non sei sicuro di qualcosa, **chiedi** prima di procedere.
