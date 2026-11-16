---
numer: 29
tytul: "Prawdopodobieństwo i statystyka"
opis: "Definicja klasyczna, drzewka, prawdopodobieństwo warunkowe i całkowite, schemat Bernoulliego oraz średnia, mediana i odchylenie standardowe."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Rzucamy dwa razy sześcienną kostką do gry. Oblicz prawdopodobieństwo, że suma oczek będzie równa $7$.

<details>
<summary>Odpowiedź</summary>

$\frac{6}{36}=\frac16$.

</details>

## Zadanie 2

Rzucamy trzy razy monetą. Oblicz prawdopodobieństwo, że co najmniej raz wypadnie orzeł.

<details>
<summary>Odpowiedź</summary>

$1-\frac18=\frac78$.

</details>

## Zadanie 3

Dany jest pięcioelementowy zbiór $K=\{5,6,7,8,9\}$. Wylosowanie każdej liczby z tego zbioru jest jednakowo prawdopodobne. Ze zbioru $K$ losujemy ze zwracaniem kolejno dwa razy po jednej liczbie i zapisujemy je w kolejności losowania. Oblicz prawdopodobieństwo zdarzenia $A$ polegającego na tym, że suma wylosowanych liczb jest liczbą parzystą.

*[matura PP, maj 2024, zad. 30]*

<details>
<summary>Odpowiedź</summary>

Obie parzyste ($2\cdot2$) lub obie nieparzyste ($3\cdot3$): $P(A)=\frac{13}{25}$.

</details>

## Zadanie 4

Średnia arytmetyczna trzech liczb: $a$, $b$, $c$, jest równa $9$. Oblicz średnią arytmetyczną sześciu liczb: $a$, $a$, $b$, $b$, $c$, $c$.

*[matura PP, maj 2024, zad. 28 — oryginalnie zamknięte]*

<details>
<summary>Odpowiedź</summary>

$9$.

</details>

## Zadanie 5

Oblicz medianę i średnią arytmetyczną danych: $3, 7, 8, 2, 5, 9, 6$.

<details>
<summary>Odpowiedź</summary>

Mediana $6$, średnia $\frac{40}7$.

</details>

## Zadanie 6

Oblicz odchylenie standardowe danych: $2, 4, 4, 4, 5, 5, 7, 9$.

<details>
<summary>Odpowiedź</summary>

Średnia $5$, wariancja $4$, odchylenie standardowe $2$.

</details>

## Zadanie 7

Dla zdarzeń $A$, $B$: $P(A)=0{,}3$, $P(B)=0{,}5$, $P(A\cap B)=0{,}1$. Oblicz $P(A\cup B)$.

<details>
<summary>Odpowiedź</summary>

$0{,}7$.

</details>

## Zadanie 8

W urnie są $4$ kule białe i $6$ czarnych. Losujemy jednocześnie dwie kule. Oblicz prawdopodobieństwo, że obie będą białe.

<details>
<summary>Odpowiedź</summary>

$\frac{\binom42}{\binom{10}2}=\frac2{15}$.

</details>

## Zadanie 9

Rzucamy cztery razy kostką. Oblicz prawdopodobieństwo, że szóstka wypadnie dokładnie dwa razy.

<details>
<summary>Odpowiedź</summary>

$\binom42\left(\frac16\right)^2\left(\frac56\right)^2=\frac{25}{216}$.

</details>

## Zadanie 10

Uczeń otrzymał trzy piątki, pięć czwórek i dwie trójki. Oblicz średnią jego ocen.

<details>
<summary>Odpowiedź</summary>

$\frac{15+20+6}{10}=4{,}1$.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

Tomek i Romek postanowili rozegrać między sobą pięć partii szachów. Prawdopodobieństwo wygrania pojedynczej partii przez Tomka jest równe $\frac14$. Oblicz prawdopodobieństwo wygrania przez Tomka co najmniej czterech z pięciu partii. Wynik podaj w postaci ułamka zwykłego nieskracalnego.

*[matura PR, maj 2023, zad. 2]*

<details>
<summary>Odpowiedź</summary>

$\binom54\left(\frac14\right)^4\cdot\frac34+\left(\frac14\right)^5=\frac{16}{1024}=\frac1{64}$.

</details>

## Zadanie 12

Prawdopodobieństwo wystąpienia awarii sieci ciepłowniczej na pewnym osiedlu mieszkaniowym w godzinach porannych pojedynczego dnia jest równe $0{,}1$. Oblicz prawdopodobieństwo zdarzenia $A$ polegającego na tym, że w okresie siedmiu dni wystąpią co najwyżej dwa takie dni, w których nastąpi awaria tej sieci na tym osiedlu w godzinach porannych. Wynik podaj w ułamku dziesiętnym w zaokrągleniu do części setnych.

*[matura PR, czerwiec 2023, zad. 3]*

<details>
<summary>Odpowiedź</summary>

$P(A)=\sum\limits_{k=0}^{2}\binom7k\cdot0{,}1^k\cdot0{,}9^{7-k}\approx0{,}97$.

</details>

## Zadanie 13

W pewnym zakładzie mleczarskim śmietana produkowana jest w $200$-gramowych opakowaniach. Prawdopodobieństwo zdarzenia, że w losowo wybranym opakowaniu śmietana zawiera mniej niż $36\%$ tłuszczu, jest równe $0{,}01$. Kontroli poddajemy $10$ losowo wybranych opakowań ze śmietaną. Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wśród opakowań poddanych tej kontroli będzie co najwyżej jedno opakowanie ze śmietaną, która zawiera mniej niż $36\%$ tłuszczu. Wynik zapisz w postaci ułamka dziesiętnego w zaokrągleniu do części tysięcznych.

*[matura PR, maj 2024, zad. 3]*

<details>
<summary>Odpowiedź</summary>

$0{,}99^{10}+10\cdot0{,}01\cdot0{,}99^{9}\approx0{,}996$.

</details>

## Zadanie 14

Sklep AGD prowadzi sprzedaż wysyłkową pralek. Prawdopodobieństwo uszkodzenia podczas transportu pralki wysłanej przez ten sklep do klienta jest równe $0{,}02$. Oblicz prawdopodobieństwo zdarzenia $A$ polegającego na tym, że spośród $10$ pralek wysłanych dziesięciu klientom przez ten sklep co najwyżej jedna ulegnie uszkodzeniu podczas transportu. Wynik zapisz w postaci ułamka dziesiętnego w zaokrągleniu do części tysięcznych.

*[matura PR, czerwiec 2025, zad. 1]*

<details>
<summary>Odpowiedź</summary>

$0{,}98^{10}+10\cdot0{,}02\cdot0{,}98^{9}\approx0{,}984$.

</details>

## Zadanie 15

W pierwszej urnie umieszczono $3$ kule białe i $5$ kul czarnych, a w drugiej urnie $7$ kul białych i $2$ kule czarne. Losujemy jedną kulę z pierwszej urny, przekładamy ją do urny drugiej i dodatkowo dokładamy do urny drugiej jeszcze dwie kule tego samego koloru, co wylosowana kula. Następnie losujemy dwie kule z urny drugiej. Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że obie kule wylosowane z drugiej urny będą białe.

*[matura PR, maj 2015, zad. 11]*

<details>
<summary>Odpowiedź</summary>

$\frac38\cdot\frac{\binom{10}2}{\binom{12}2}+\frac58\cdot\frac{\binom72}{\binom{12}2}=\frac5{11}$.

</details>

## Zadanie 16

W pojemniku jest siedem kul: pięć kul białych i dwie kule czarne. Z tego pojemnika losujemy jednocześnie dwie kule bez zwracania. Następnie – z kul pozostałych w pojemniku – losujemy jeszcze jedną kulę. Oblicz prawdopodobieństwo wylosowania kuli czarnej w drugim losowaniu.

*[matura PR (Formuła 2015), maj 2023, zad. 8]*

<details>
<summary>Odpowiedź</summary>

Z drzewka (lub z symetrii): $\frac27$.

</details>

## Zadanie 17

Z urny zawierającej $10$ kul ponumerowanych kolejnymi liczbami od $1$ do $10$ losujemy jednocześnie trzy kule. Oblicz prawdopodobieństwo zdarzenia $A$ polegającego na tym, że numer jednej z wylosowanych kul jest równy sumie numerów dwóch pozostałych kul.

*[matura PR, maj 2014, zad. 11]*

<details>
<summary>Odpowiedź</summary>

$|\Omega|=120$, $|A|=20$, $P(A)=\frac16$.

</details>

## Zadanie 18

Rzucamy cztery razy symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że iloczyn liczb oczek otrzymanych we wszystkich czterech rzutach będzie równy $60$.

*[matura PR, maj 2013, zad. 11]*

<details>
<summary>Odpowiedź</summary>

Układy $\{5,3,4,1\}$ ($24$ ciągi), $\{5,3,2,2\}$ ($12$), $\{5,6,2,1\}$ ($24$): $60$ wyników; $P=\frac{60}{1296}=\frac5{108}$.

</details>

## Zadanie 19

Oblicz prawdopodobieństwo tego, że w trzech rzutach symetryczną sześcienną kostką do gry suma kwadratów liczb uzyskanych oczek będzie podzielna przez $3$.

*[matura PR, maj 2010, zad. 10]*

<details>
<summary>Odpowiedź</summary>

Kwadrat daje resztę $0$ (dla $3$, $6$) albo $1$; suma podzielna przez $3$, gdy wszystkie trzy wyniki są podzielne przez $3$ albo żaden nie jest: $\frac{8+64}{216}=\frac13$.

</details>

## Zadanie 20

$A$, $B$ są zdarzeniami losowymi zawartymi w $\Omega$. Wykaż, że jeżeli $P(A)=0{,}9$ i $P(B)=0{,}7$, to $P(A\cap B')\le0{,}3$ ($B'$ oznacza zdarzenie przeciwne do zdarzenia $B$).

*[matura PR, maj 2011, zad. 12]*

<details>
<summary>Odpowiedź</summary>

$A\cap B'\subset B'$, więc $P(A\cap B')\le P(B')=0{,}3$. ✓

</details>

## Zadanie 21

Rzucamy dwa razy kostką. Oblicz prawdopodobieństwo, że suma oczek jest równa $8$, jeśli wiadomo, że co najmniej raz wypadła szóstka.

<details>
<summary>Odpowiedź</summary>

$P(B)=\frac{11}{36}$, $P(A\cap B)=\frac2{36}$; $P(A|B)=\frac2{11}$.

</details>

## Zadanie 22

Trzy maszyny produkują odpowiednio $50\%$, $30\%$ i $20\%$ wszystkich wyrobów, a wadliwe są odpowiednio $1\%$, $2\%$ i $3\%$ ich produkcji. Oblicz prawdopodobieństwo, że losowo wybrany wyrób jest wadliwy.

<details>
<summary>Odpowiedź</summary>

$0{,}5\cdot0{,}01+0{,}3\cdot0{,}02+0{,}2\cdot0{,}03=0{,}017$.

</details>

## Zadanie 23

Zdarzenia $A$ i $B$ są niezależne, $P(A)=0{,}4$, $P(B)=0{,}5$. Oblicz $P(A\cup B)$ oraz $P(A'\cap B')$.

<details>
<summary>Odpowiedź</summary>

$P(A\cup B)=0{,}7$, $P(A'\cap B')=0{,}6\cdot0{,}5=0{,}3$.

</details>

## Zadanie 24

Średnia arytmetyczna pięciu liczb jest równa $6$. Po dopisaniu szóstej liczby średnia wzrosła do $7$. Jaką liczbę dopisano?

<details>
<summary>Odpowiedź</summary>

$42-30=12$.

</details>

## Zadanie 25

Pięć osób, w tym Ania i Bartek, siada losowo w rzędzie pięciu krzeseł. Oblicz prawdopodobieństwo, że Ania i Bartek usiądą obok siebie.

<details>
<summary>Odpowiedź</summary>

$\frac{2\cdot4!}{5!}=\frac25$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

Test na pewną chorobę daje wynik dodatni u $90\%$ chorych i u $5\%$ zdrowych. Na chorobę cierpi $1\%$ populacji. Oblicz prawdopodobieństwo, że osoba z dodatnim wynikiem testu jest chora.

<details>
<summary>Wskazówka</summary>

Narysuj drzewko i skorzystaj ze wzoru na prawdopodobieństwo warunkowe $P(C|+)=\frac{P(C\cap+)}{P(+)}$.

</details>

<details>
<summary>Odpowiedź</summary>

$\frac{0{,}009}{0{,}009+0{,}0495}=\frac{2}{13}\approx0{,}15$.

</details>

## Zadanie 27

Ile co najmniej razy trzeba rzucić monetą, aby prawdopodobieństwo wyrzucenia co najmniej jednego orła było większe od $0{,}99$?

<details>
<summary>Wskazówka</summary>

Przejdź do zdarzenia przeciwnego: „ani jednego orła”.

</details>

<details>
<summary>Odpowiedź</summary>

$1-\left(\frac12\right)^n>0{,}99\iff2^n>100$: $n=7$.

</details>

## Zadanie 28 (\*)

Ze zbioru $\{1,2,\ldots,10\}$ losujemy bez zwracania dwie liczby. Oblicz prawdopodobieństwo, że ich iloczyn będzie liczbą parzystą.

<details>
<summary>Wskazówka</summary>

Zdarzenie przeciwne: obie liczby nieparzyste.

</details>

<details>
<summary>Odpowiedź</summary>

$1-\frac{\binom52}{\binom{10}2}=\frac79$.

</details>

## Zadanie 29

Średnia arytmetyczna liczb $1,2,\ldots,n$ jest równa $10$. Oblicz $n$ oraz odchylenie standardowe tych liczb.

<details>
<summary>Wskazówka</summary>

Średnia to $\frac{n+1}2$. Do wariancji przyda się wzór $1^2+2^2+\ldots+n^2=\frac{n(n+1)(2n+1)}6$.

</details>

<details>
<summary>Odpowiedź</summary>

$n=19$; wariancja $\frac{n^2-1}{12}=30$, odchylenie $\sqrt{30}$.

</details>

## Zadanie 30 (\*\*)

Gracze $A$ i $B$ rzucają na przemian kostką, zaczyna $A$. Wygrywa ten, kto pierwszy wyrzuci szóstkę. Oblicz prawdopodobieństwo wygranej gracza $A$.

<details>
<summary>Wskazówka</summary>

$A$ wygrywa w swoim $k$-tym rzucie, jeśli wcześniej $2(k-1)$ rzutów nie dało szóstki. Zsumuj szereg geometryczny.

</details>

<details>
<summary>Odpowiedź</summary>

$\sum\limits_{k\ge1}\left(\frac56\right)^{2(k-1)}\cdot\frac16=\frac{\frac16}{1-\frac{25}{36}}=\frac6{11}$.

</details>
