---
numer: 17
tytul: "Granica ciągu i szereg geometryczny"
opis: "Obliczanie granic, twierdzenie o trzech ciągach, suma szeregu geometrycznego, ułamki okresowe i szeregi w geometrii."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{3n^{2}-n}{n^{2}+5}$.

<details>
<summary>Odpowiedź</summary>

$3$.

</details>

## Zadanie 2

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{2n+1}{n^{2}+1}$.

<details>
<summary>Odpowiedź</summary>

$0$.

</details>

## Zadanie 3

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{n^{3}-2}{4n^{2}+n}$.

<details>
<summary>Odpowiedź</summary>

$+\infty$.

</details>

## Zadanie 4

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{\sqrt{4n^{2}+n}}{n+3}$.

<details>
<summary>Odpowiedź</summary>

$2$.

</details>

## Zadanie 5

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{2^{n}+3^{n}}{3^{n}+1}$.

<details>
<summary>Odpowiedź</summary>

$1$ (podziel licznik i mianownik przez $3^n$).

</details>

## Zadanie 6

Oblicz granicę $\lim\limits_{n\to\infty}\left(\sqrt{n^{2}+n}-n\right)$.

<details>
<summary>Odpowiedź</summary>

$\frac12$ (pomnóż przez wyrażenie sprzężone).

</details>

## Zadanie 7

Oblicz sumę szeregu geometrycznego $8+4+2+1+\ldots$

<details>
<summary>Odpowiedź</summary>

$\frac{8}{1-\frac12}=16$.

</details>

## Zadanie 8

Zamień ułamek okresowy $0{,}(36)$ na ułamek zwykły nieskracalny.

<details>
<summary>Odpowiedź</summary>

$\frac{36}{99}=\frac4{11}$.

</details>

## Zadanie 9

Oblicz sumę szeregu $1-\frac13+\frac19-\frac1{27}+\ldots$

<details>
<summary>Odpowiedź</summary>

$\frac{1}{1+\frac13}=\frac34$.

</details>

## Zadanie 10

Szereg geometryczny $1+q+q^{2}+\ldots$ jest zbieżny i jego suma jest równa $3$. Oblicz $q$.

<details>
<summary>Odpowiedź</summary>

$\frac1{1-q}=3$, $q=\frac23$.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

Ciąg $(a_n)$, określony dla każdej liczby naturalnej $n\ge1$, jest geometryczny i zbieżny. W tym ciągu $a_1+a_3=20$ i $a_1^{2}+a_3^{2}=328$. Oblicz sumę wszystkich wyrazów tego ciągu. Rozważ wszystkie przypadki.

*[matura PR, maj 2025, zad. 6]*

<details>
<summary>Odpowiedź</summary>

$a_1=18$, $a_3=2$ (drugi układ, $a_1=2$, $a_3=18$, daje $|q|=3$ — szereg rozbieżny), więc $q=\frac13$ lub $q=-\frac13$. Suma: $27$ albo $\frac{27}2$.

</details>

## Zadanie 12

Określamy kwadraty $K_1, K_2, K_3,\ldots$ następująco:
- $K_1$ jest kwadratem o boku długości $a$,
- $K_2$ jest kwadratem, którego każdy wierzchołek leży na innym boku kwadratu $K_1$ i dzieli ten bok w stosunku $1:3$,
- $K_3$ jest kwadratem, którego każdy wierzchołek leży na innym boku kwadratu $K_2$ i dzieli ten bok w stosunku $1:3$,

i ogólnie, dla każdej liczby naturalnej $n\ge2$, $K_n$ jest kwadratem, którego każdy wierzchołek leży na innym boku kwadratu $K_{n-1}$ i dzieli ten bok w stosunku $1:3$. Obwody wszystkich kwadratów określonych powyżej tworzą nieskończony ciąg geometryczny. Na rysunku przedstawiono kwadraty utworzone w sposób opisany powyżej.

![Rysunek do zadania 12](/rysunki/s17-z12-1.svg)

Oblicz sumę wszystkich wyrazów tego nieskończonego ciągu.

*[matura PR, maj 2023, zad. 10]*

<details>
<summary>Odpowiedź</summary>

Bok $K_2$: $a\sqrt{\left(\frac14\right)^2+\left(\frac34\right)^2}=\frac{\sqrt{10}}4a$, więc $q=\frac{\sqrt{10}}4$. Suma obwodów: $\dfrac{4a}{1-\frac{\sqrt{10}}4}=\dfrac{16a}{4-\sqrt{10}}=\dfrac{8\left(4+\sqrt{10}\right)}{3}a$.

</details>

## Zadanie 13

Nieskończony ciąg geometryczny $(a_n)$ jest określony dla każdej liczby naturalnej $n\ge1$. Suma wszystkich wyrazów ciągu $(a_n)$ o numerach nieparzystych jest równa $16$, tj. $a_1+a_3+a_5+\ldots=16$. Ponadto $a_1+a_3=\frac52\cdot a_2$. Wyznacz wzór ogólny na $n$-ty wyraz ciągu $(a_n)$.

*[matura PR, czerwiec 2024, zad. 7]*

<details>
<summary>Odpowiedź</summary>

$1+q^2=\frac52q$, więc $q=\frac12$ (bo $q=2$ daje szereg rozbieżny); $\frac{a_1}{1-q^2}=16$, $a_1=12$. Odpowiedź: $a_n=12\cdot\left(\frac12\right)^{n-1}$.

</details>

## Zadanie 14

Ciąg $(a_n)$, określony dla każdej liczby naturalnej $n\ge1$, jest arytmetyczny i rosnący. W tym ciągu $a_6=15$ oraz $a_{15}=a_3\cdot(a_8-6)$. Ciąg $(b_n)$, określony dla każdej liczby naturalnej $n\ge1$, jest geometryczny i $b_1=a_{11}$ oraz $b_2=a_6$. Oblicz sumę wszystkich wyrazów ciągu $(b_n)$.

*[matura PR, czerwiec 2025, zad. 9]*

<details>
<summary>Odpowiedź</summary>

$r=4$, $a_1=-5$; $b_1=a_{11}=35$, $b_2=15$, $q=\frac37$. Suma: $\frac{35}{1-\frac37}=\frac{245}4$.

</details>

## Zadanie 15

Dany jest nieskończony szereg geometryczny
$$
2x-\frac{6x}{x-1}+\frac{18x}{(x-1)^{2}}-\frac{54x}{(x-1)^{3}}+\ldots
$$
Wyznacz wszystkie wartości zmiennej $x$ (różnej od $0$ i od $1$), dla których suma tego szeregu istnieje i jest równa $\frac{15}2$.

*[matura PR, czerwiec 2023, zad. 7]*

<details>
<summary>Odpowiedź</summary>

$q=-\frac{3}{x-1}$, zbieżność: $|x-1|>3$. Suma $\frac{2x(x-1)}{x+2}=\frac{15}2$ daje $x=6$ lub $x=-\frac54$; drugi warunku zbieżności nie spełnia. Odpowiedź: $x=6$.

</details>

## Zadanie 16

Oblicz granicę
$$
\lim_{n\to\infty}\left(\frac{11n^{3}+6n+5}{6n^{3}+1}-\frac{2n^{2}+2n+1}{5n^{2}-4}\right).
$$

*[matura PR, maj 2015, zad. 6 — oryginalnie z kodowaną odpowiedzią]*

<details>
<summary>Odpowiedź</summary>

$\frac{11}6-\frac25=\frac{43}{30}\approx1{,}43$.

</details>

## Zadanie 17

Wyznacz wartość parametru $a$, dla której $\lim\limits_{n\to\infty}\dfrac{an^{2}+3n}{2n^{2}-1}=4$.

<details>
<summary>Odpowiedź</summary>

$\frac a2=4$, $a=8$.

</details>

## Zadanie 18

Oblicz granicę $\lim\limits_{n\to\infty}\left(\sqrt{n^{2}+4n}-n\right)$.

<details>
<summary>Odpowiedź</summary>

$2$.

</details>

## Zadanie 19

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{1+2+3+\ldots+n}{n^{2}}$.

<details>
<summary>Odpowiedź</summary>

$\frac{n(n+1)}{2n^2}\to\frac12$.

</details>

## Zadanie 20

Oblicz granicę $\lim\limits_{n\to\infty}\dfrac{3^{n+1}-2^{n}}{3^{n}+2^{n+1}}$.

<details>
<summary>Odpowiedź</summary>

$3$.

</details>

## Zadanie 21

Zamień ułamek okresowy $1{,}2(3)$ na ułamek zwykły.

<details>
<summary>Odpowiedź</summary>

$1+\frac2{10}+\frac{3}{90}=\frac{37}{30}$.

</details>

## Zadanie 22

Rozwiąż równanie $1+x+x^{2}+x^{3}+\ldots=4$, w którym lewa strona jest sumą nieskończonego szeregu geometrycznego.

<details>
<summary>Odpowiedź</summary>

$\frac1{1-x}=4$, $x=\frac34$ (spełnia $|x|<1$).

</details>

## Zadanie 23

Rozwiąż równanie $x+x^{2}+x^{3}+\ldots=2x+1$, w którym lewa strona jest sumą nieskończonego szeregu geometrycznego.

<details>
<summary>Odpowiedź</summary>

$\frac{x}{1-x}=2x+1$ dla $|x|<1$, stąd $2x^2=1$: $x=\pm\frac{\sqrt2}2$.

</details>

## Zadanie 24

W trójkąt równoboczny o boku $a$ wpisano trójkąt, którego wierzchołkami są środki boków danego trójkąta, w ten trójkąt — kolejny w ten sam sposób, i tak dalej. Oblicz sumę pól wszystkich tych trójkątów (łącznie z pierwszym).

<details>
<summary>Odpowiedź</summary>

$q=\frac14$, suma $\frac{\sqrt3a^2}4\cdot\frac{1}{1-\frac14}=\frac{\sqrt3a^2}3$.

</details>

## Zadanie 25

Suma nieskończonego szeregu geometrycznego jest równa $9$, a suma kwadratów jego wyrazów jest równa $27$. Wyznacz pierwszy wyraz i iloraz tego szeregu.

<details>
<summary>Odpowiedź</summary>

$\frac{a_1}{1-q}=9$, $\frac{a_1^2}{1-q^2}=27$; dzieląc: $\frac{a_1}{1+q}=3$. Stąd $q=\frac12$, $a_1=\frac92$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

Wyznacz wszystkie wartości $x$, dla których szereg $1+(2x-1)+(2x-1)^{2}+\ldots$ jest zbieżny, a jego suma jest większa od $2$.

<details>
<summary>Wskazówka</summary>

Warunek zbieżności to $|2x-1|<1$. Suma szeregu to $\frac{1}{2-2x}$.

</details>

<details>
<summary>Odpowiedź</summary>

$x\in\left(\frac34,1\right)$.

</details>

## Zadanie 27

Korzystając z twierdzenia o trzech ciągach, oblicz $\lim\limits_{n\to\infty}\sqrt[n]{2^{n}+5^{n}}$.

<details>
<summary>Wskazówka</summary>

Oszacuj: $5^n\le2^n+5^n\le2\cdot5^n$, a potem wyciągnij pierwiastek $n$-tego stopnia.

</details>

<details>
<summary>Odpowiedź</summary>

$5\le\sqrt[n]{2^n+5^n}\le5\sqrt[n]2\to5$, więc granica jest równa $5$.

</details>

## Zadanie 28 (\*)

W kąt o mierze $60^\circ$ wpisano nieskończenie wiele okręgów: każdy jest styczny do obu ramion kąta, a każde dwa kolejne są styczne zewnętrznie. Największy okrąg ma promień $1$, a kolejne są coraz bliżej wierzchołka kąta. Oblicz sumę długości wszystkich okręgów oraz sumę pól wszystkich kół.

<details>
<summary>Wskazówka</summary>

Środki okręgów leżą na dwusiecznej; odległość środka od wierzchołka to $\frac{r}{\sin30^\circ}=2r$. Zapisz warunek styczności dwóch kolejnych okręgów.

</details>

<details>
<summary>Odpowiedź</summary>

$2r_1-2r_2=r_1+r_2$, więc $q=\frac13$. Suma długości: $\frac{2\pi}{1-\frac13}=3\pi$; suma pól: $\frac{\pi}{1-\frac19}=\frac{9\pi}8$.

</details>

## Zadanie 29

Oblicz granicę $\lim\limits_{n\to\infty}\left(\dfrac{1}{1\cdot2}+\dfrac{1}{2\cdot3}+\ldots+\dfrac{1}{n(n+1)}\right)$.

<details>
<summary>Wskazówka</summary>

$\frac{1}{k(k+1)}=\frac1k-\frac1{k+1}$.

</details>

<details>
<summary>Odpowiedź</summary>

Suma „teleskopowa” jest równa $1-\frac1{n+1}\to1$.

</details>

## Zadanie 30 (\*\*)

Rozwiąż równanie $1+\cos x+\cos^{2}x+\cos^{3}x+\ldots=2+\sqrt2$ w przedziale $\langle0,2\pi\rangle$, w którym lewa strona jest sumą nieskończonego szeregu geometrycznego.

<details>
<summary>Wskazówka</summary>

Szereg jest zbieżny, gdy $|\cos x|<1$. Zapisz sumę i wyznacz $\cos x$.

</details>

<details>
<summary>Odpowiedź</summary>

$\frac{1}{1-\cos x}=2+\sqrt2\iff\cos x=\frac{\sqrt2}2$; $x\in\left\{\frac\pi4,\frac{7\pi}4\right\}$.

</details>
