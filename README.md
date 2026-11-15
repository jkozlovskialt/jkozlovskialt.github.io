# Strona z seriami zadań

Statyczna strona zbudowana w [Astro](https://astro.build). Treść piszesz w Markdownie,
`npm run build` robi z niej zwykłe pliki HTML/CSS w folderze `dist/`, a nginx je serwuje.
Na serwerze nie działa żaden Node ani baza danych.

## Uruchomienie

Wymaga Node.js 22 lub nowszego.

```sh
npm install
npm run dev       # podgląd na http://localhost:4321, odświeża się po zapisaniu pliku
npm run build     # gotowa strona w dist/
```

## Wdrożenie na nginx

```sh
npm run build
rsync -av --delete dist/ uzytkownik@serwer:/var/www/strona/
```

Przykładowa konfiguracja serwera jest w `nginx/strona.conf`.
Folder `dist/` w tej paczce jest już zbudowany — możesz go wgrać od razu.

## Gdzie co zmienić

| Co | Gdzie |
| --- | --- |
| Imię, e-mail, menu | `src/site.ts` |
| Tekst na stronie głównej | `src/pages/index.astro` |
| Sekcja „O mnie” na stronie głównej | `tresc/o-mnie.md` |
| Koziołek | `src/components/Koziolek.astro` |
| Serie zadań | `tresc/zadania/*.md` |
| Kolory i fonty | początek `src/styles/global.css` |

## Nowa seria zadań

Dodaj plik w `tresc/zadania/`, np. `04-indukcja.md`. Nazwa pliku staje się adresem
(`/zadania/04-indukcja/`).

```md
---
numer: 4
tytul: "Indukcja matematyczna"
opis: "Jedno zdanie widoczne na liście serii."
data: 2026-11-23
poziom: "liceum"
---

## Zadanie 1

Wykaż, że $1 + 2 + \ldots + n = \frac{n(n+1)}{2}$.

<details>
<summary>Wskazówka</summary>

Treść wskazówki. Zostaw pustą linię po `<summary>` i przed `</details>`.

</details>

## Zadanie 2

Wzór w osobnej linii:

$$
2^n > n
$$
```

- Każdy nagłówek `##` to jedno zadanie — strona sama je liczy.
- Wzory piszesz w LaTeX-u: `$...$` w tekście, `$$...$$` w osobnej linii.
- `<details>` nadaje się też na rozwiązania (`<summary>Rozwiązanie</summary>`).
  Na wydruku wskazówki i rozwiązania są ukryte.
- Dopisz `szkic: true` w nagłówku pliku, żeby seria nie pojawiła się na stronie.

## Rozbudowa

Nowa podstrona to nowy plik w `src/pages/` (np. `materialy.astro`) i wpis w `nav`
w `src/site.ts`.
