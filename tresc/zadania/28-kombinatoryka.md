---
numer: 28
tytul: "Kombinatoryka"
opis: "Reguła mnożenia i dodawania, permutacje, wariacje, kombinacje — zadania pogrupowane według metody."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Podstawowe reguły i wzory

- **Reguła mnożenia.** Jeżeli wybór (doświadczenie) przebiega w $k$ etapach i w kolejnych etapach mamy odpowiednio $n_1, n_2, \ldots, n_k$ możliwości (niezależnie od tego, co wybraliśmy wcześniej), to wszystkich wyników jest $n_1\cdot n_2\cdot\ldots\cdot n_k$. **Spójnik „i” zamieniamy na mnożenie.** *Np. trzy rzuty monetą: $2\cdot2\cdot2=8$ wyników.*
- **Reguła dodawania.** Jeżeli wyniki dzielą się na rozłączne przypadki, w których jest odpowiednio $m_1, m_2, \ldots, m_k$ wyników, to wszystkich jest $m_1+m_2+\ldots+m_k$. **Spójnik „lub” (rozłączne przypadki) zamieniamy na dodawanie.**
- **Dopełnienie.** Liczba wyników „dobrych” $=$ liczba wszystkich wyników $-$ liczba wyników „złych”. Szczególnie przy *„co najmniej jeden”*: wszystkie $-$ „ani jednego”.
- **Permutacje** (ustawienia $n$ różnych elementów w ciąg): $P_n=n!$. **Z powtórzeniami** (elementy powtarzają się $k_1,\ldots,k_m$ razy): $\frac{n!}{k_1!\cdot\ldots\cdot k_m!}$.
- **Wariacje bez powtórzeń** ($k$-wyrazowe ciągi *różnych* elementów ze zbioru $n$-elementowego — kolejność ma znaczenie): $V_n^k=\frac{n!}{(n-k)!}=n(n-1)\ldots(n-k+1)$.
- **Wariacje z powtórzeniami** ($k$-wyrazowe ciągi, elementy mogą się powtarzać): $W_n^k=n^k$.
- **Kombinacje** ($k$-elementowe podzbiory zbioru $n$-elementowego — kolejność *nie* ma znaczenia): $C_n^k=\binom{n}{k}=\frac{n!}{k!\,(n-k)!}$. **Stosujemy, gdy wynikiem jest zbiór, a nie ciąg** (zamiana kolejności nie daje nowego wyniku): wybór osób do grupy bez funkcji, karty w ręce, losowanie kilku kul naraz, odcinki/trójkąty wyznaczone przez punkty, mecze „każdy z każdym”, wybór miejsc w ciągu.
- **Kule i przegródki** (kombinacje z powtórzeniami; poza wymaganiami CKE, ale wygodne): $n$ jednakowych kul do $k$ ponumerowanych pudełek można rozłożyć na $\binom{n+k-1}{k-1}$ sposobów, a gdy żadne pudełko nie może być puste — na $\binom{n-1}{k-1}$ sposobów.

**Jak rozpoznać?** Czy kolejność ma znaczenie? *Tak* $\to$ permutacje / wariacje (ciągi), *nie* $\to$ kombinacje (podzbiory). Czy elementy mogą się powtarzać? *Tak* $\to$ $n^k$, *nie* $\to$ $\frac{n!}{(n-k)!}$ lub $\binom nk$.

### Kule i przegródki — zadania wprowadzające

## Zadanie W1

Na ile sposobów można rozdać $7$ jednakowych cukierków trojgu dzieciom (Ani, Bartkowi i Celinie), jeśli: a) niektóre dzieci mogą nie dostać żadnego cukierka; b) każde dziecko ma dostać co najmniej jeden cukierek?

<details>
<summary>Odpowiedź</summary>

a) $\binom92=36$; b) $\binom62=15$.

</details>

## Zadanie W2

Ile rozwiązań ma równanie $x+y+z=7$: a) w liczbach całkowitych nieujemnych; b) w liczbach całkowitych dodatnich? Porównaj z zadaniem W1.

<details>
<summary>Odpowiedź</summary>

a) $36$; b) $15$ (to samo co W1).

</details>

## Zadanie W3

Ile jest liczb czterocyfrowych, których suma cyfr jest równa $6$?

<details>
<summary>Wskazówka</summary>

Cyfry to cztery „pudełka”, a suma $6$ to sześć kul. Pierwsza cyfra musi być co najmniej równa $1$ — daj jej jedną kulę na start.

</details>

<details>
<summary>Odpowiedź</summary>

$\binom83=56$.

</details>

### Reguła mnożenia + dopełnienie — układanie liczb

## Zadanie 1

Ile jest wszystkich liczb naturalnych trzycyfrowych? Ile jest wśród nich liczb o różnych cyfrach?

<details>
<summary>Odpowiedź</summary>

$900$; $9\cdot9\cdot8=648$.

</details>

## Zadanie 2

Ile jest liczb czterocyfrowych parzystych, w których zapisie cyfry się nie powtarzają?

<details>
<summary>Odpowiedź</summary>

$504+1792=2296$ (z $0$ na końcu i bez).

</details>

## Zadanie 3

Ile jest liczb pięciocyfrowych, w których zapisie występuje co najmniej jedna cyfra $7$?

<details>
<summary>Odpowiedź</summary>

$90\,000-8\cdot9^4=37\,512$.

</details>

## Zadanie 4

Rozważamy wszystkie liczby naturalne pięciocyfrowe zapisane przy użyciu cyfr $1, 3, 5, 7, 9$, bez powtarzania jakiejkolwiek cyfry. Oblicz sumę wszystkich takich liczb.

*[matura PR, maj 2019, zad. 6]*

<details>
<summary>Odpowiedź</summary>

$24\cdot25\cdot11\,111=6\,666\,600$.

</details>

### Kombinacje (wybór miejsc) + reguła mnożenia + reguła dodawania — liczby z warunkami

## Zadanie 5

Rozpatrujemy wszystkie liczby naturalne dziesięciocyfrowe, w zapisie których mogą występować wyłącznie cyfry $1$, $2$, $3$, przy czym cyfra $1$ występuje dokładnie trzy razy. Uzasadnij, że takich liczb jest $15\,360$.

*[matura PR, maj 2016, zad. 14]*

<details>
<summary>Odpowiedź</summary>

$\binom{10}{3}\cdot2^7=15\,360$.

</details>

## Zadanie 6

Ile jest liczb siedmiocyfrowych, w których zapisie występują dokładnie trzy cyfry $1$ i dokładnie dwie cyfry $2$?

<details>
<summary>Odpowiedź</summary>

$\binom73\binom42\cdot8^2-\binom63\binom32\cdot8=12\,960$.

</details>

## Zadanie 7 (□)

Rozważamy wszystkie liczby naturalne, w których zapisie dziesiętnym nie powtarza się jakakolwiek cyfra oraz dokładnie trzy cyfry są nieparzyste i dokładnie dwie cyfry są parzyste. Oblicz, ile jest wszystkich takich liczb.

*[matura PR, maj 2024, zad. 6]*

<details>
<summary>Odpowiedź</summary>

$\binom53\binom52\cdot5!-\binom53\cdot4\cdot4!=11\,040$.

</details>

## Zadanie 8 (\*)

Rozważamy wszystkie liczby naturalne sześciocyfrowe, w których zapisie dziesiętnym iloczyn cyfr jest liczbą parzystą mniejszą od $5$. Oblicz, ile jest wszystkich takich liczb sześciocyfrowych.

*[matura PR, czerwiec 2025, zad. 3]*

<details>
<summary>Wskazówka</summary>

Iloczyn może być równy $0$, $2$ albo $4$. Najwięcej jest liczb z iloczynem $0$ — policz je przez dopełnienie.

</details>

<details>
<summary>Odpowiedź</summary>

$368\,559+6+21=368\,586$.

</details>

### Kombinacje + wariacje + dopełnienie — losowanie kul

## Zadanie 9

W urnie jest $5$ kul białych i $7$ czarnych. Wyciągamy jednocześnie $3$ kule. Ile jest wszystkich możliwych wyników? W ilu z nich są: a) dokładnie dwie kule białe; b) co najmniej jedna kula biała?

<details>
<summary>Odpowiedź</summary>

$220$; a) $70$; b) $220-35=185$.

</details>

## Zadanie 10

Z tej samej urny wyciągamy kolejno $3$ kule bez zwracania (wynik to ciąg kolorów i numerów kul). Ile jest wszystkich wyników? W ilu z nich: a) pierwsza kula jest biała, a dwie pozostałe czarne; b) dokładnie dwie kule są białe? Porównaj wynik b) z wynikiem zadania 9a.

<details>
<summary>Odpowiedź</summary>

$1320$; a) $210$; b) $420=70\cdot3!$.

</details>

## Zadanie 11

Z tej samej urny wyciągamy kolejno $3$ razy po jednej kuli, za każdym razem zwracając ją do urny. Ile jest wszystkich wyników? W ilu z nich dokładnie dwa razy wyciągnięto kulę białą?

<details>
<summary>Odpowiedź</summary>

$12^3=1728$; $3\cdot5^2\cdot7=525$.

</details>

## Zadanie 12

W pudełku znajduje się $8$ piłeczek oznaczonych kolejnymi liczbami naturalnymi od $1$ do $8$. Losujemy jedną piłeczkę, zapisujemy liczbę na niej występującą, a następnie zwracamy piłeczkę. Tę procedurę wykonujemy jeszcze dwa razy i otrzymujemy zapisane trzy liczby. Oblicz, w ilu wynikach iloczyn trzech zapisanych liczb jest podzielny przez $4$.

*[matura PR, maj 2017, zad. 11 — oryginalnie obliczanie prawdopodobieństwa]*

<details>
<summary>Odpowiedź</summary>

$352$ (na $512$).

</details>

### Wariacje z powtórzeniami + kombinacje (wybór miejsc) — kostki i monety

## Zadanie 13

Rzucamy trzy razy sześcienną kostką do gry. W ilu wynikach: a) suma oczek jest równa $5$; b) co najmniej raz wypadnie szóstka?

<details>
<summary>Odpowiedź</summary>

a) $6$; b) $216-125=91$.

</details>

## Zadanie 14

Rzucamy dziesięć razy monetą. W ilu wynikach orzeł wypadł dokładnie trzy razy? W ilu z nich te trzy orły wypadły bezpośrednio jeden po drugim (trzy razy z rzędu)?

*[matura PR, czerwiec 2024, zad. 4 — oryginalnie obliczanie prawdopodobieństwa]*

<details>
<summary>Odpowiedź</summary>

$\binom{10}{3}=120$; $8$.

</details>

## Zadanie 15

Rzucamy cztery razy sześcienną kostką do gry. W ilu wynikach otrzymamy dokładnie dwa razy pięć oczek? W ilu spośród tych wyników otrzymamy co najmniej jeden raz sześć oczek?

*[matura PR, maj 2025, zad. 4 — oryginalnie obliczanie prawdopodobieństwa]*

<details>
<summary>Odpowiedź</summary>

$\binom42\cdot5^2=150$; $6\cdot(25-16)=54$.

</details>

### Kombinacje + reguła mnożenia + dopełnienie — karty

## Zadanie 16

Z talii $52$ kart wybieramy $5$ kart. Ile jest wszystkich możliwych wyborów? W ilu z nich są: a) dokładnie dwa asy; b) co najmniej jeden as?

<details>
<summary>Odpowiedź</summary>

$\binom{52}{5}=2\,598\,960$; a) $103\,776$; b) $886\,656$.

</details>

## Zadanie 17

Z talii $24$ kart (od dziewiątki do asa w czterech kolorach) wybieramy $4$ karty. W ilu wyborach występują karty: a) wszystkich czterech kolorów; b) dokładnie dwóch kolorów?

<details>
<summary>Odpowiedź</summary>

a) $6^4=1296$; b) $6\cdot\left[\binom{12}{4}-2\binom64\right]=2790$.

</details>

## Zadanie 18 (\*)

Z talii $52$ kart wybieramy $5$ kart. Ile jest wyborów zawierających dokładnie jedną parę (dwie karty tej samej wysokości, a pozostałe trzy karty mają różne wysokości, inne niż wysokość pary)?

<details>
<summary>Wskazówka</summary>

Wybierz po kolei: wysokość pary, dwa kolory do pary, trzy pozostałe wysokości, a na końcu kolor każdej z tych trzech kart.

</details>

<details>
<summary>Odpowiedź</summary>

$13\cdot\binom42\cdot\binom{12}{3}\cdot4^3=1\,098\,240$.

</details>

### Permutacje (też z powtórzeniami) + sklejanie + wstawianie w luki — ustawianie w kolejce

## Zadanie 19

Na ile sposobów $6$ osób może ustawić się w kolejce? W ilu ustawieniach Ania i Basia stoją obok siebie, a w ilu nie stoją obok siebie?

<details>
<summary>Odpowiedź</summary>

$720$; $240$; $480$.

</details>

## Zadanie 20

Ile różnych „słów” (niekoniecznie mających sens) można utworzyć, przestawiając litery słowa MATEMATYKA?

<details>
<summary>Odpowiedź</summary>

$\frac{10!}{2!\,3!\,2!}=151\,200$.

</details>

## Zadanie 21

Czterech chłopców i trzy dziewczynki ustawiają się w rzędzie. W ilu ustawieniach żadne dwie dziewczynki nie stoją obok siebie?

<details>
<summary>Odpowiedź</summary>

$4!\cdot5\cdot4\cdot3=1440$.

</details>

## Zadanie 22

Wśród $n$ osób są Ania i jej dwaj znajomi. Wszystkie te $n$ osób ustawiamy w kolejkę jedna za drugą. Liczba wszystkich takich ustawień jest $12$ razy większa od liczby wszystkich takich ustawień tych $n$ osób w kolejkę, w których Ania i jej dwaj znajomi zajmują trzy kolejne miejsca (w dowolnej kolejności). Oblicz $n$.

*[matura PR, czerwiec 2023, zad. 2]*

<details>
<summary>Odpowiedź</summary>

$n(n-1)=72$, $n=9$.

</details>

## Zadanie 23

Z liczb ośmioelementowego zbioru $Z=\{1,2,3,4,5,6,7,9\}$ tworzymy ośmiowyrazowy ciąg, którego wyrazy się nie powtarzają. Oblicz, ile jest takich ciągów, w których żadne dwie liczby parzyste nie są sąsiednimi wyrazami.

*[matura PR, maj 2018, zad. 9 — oryginalnie obliczanie prawdopodobieństwa]*

<details>
<summary>Odpowiedź</summary>

$5!\cdot6\cdot5\cdot4=14\,400$ (na $8!$).

</details>

## Zadanie 24

Ze zbioru $\{1,2,3,4,5,6,7,8\}$ losujemy bez zwracania osiem razy po jednej liczbie i ustawiamy je w ciąg zgodnie z kolejnością losowania. Oblicz, ile jest takich ciągów, w których iloczyn każdych trzech kolejnych wyrazów jest liczbą podzielną przez $3$.

*[matura PR, maj 2026, zad. 2 — oryginalnie obliczanie prawdopodobieństwa]*

<details>
<summary>Wskazówka</summary>

Tylko $3$ i $6$ są podzielne przez $3$. Gdzie muszą stać, żeby każda trójka kolejnych miejsc zawierała jedną z nich?

</details>

<details>
<summary>Odpowiedź</summary>

$1440$ (na $8!$).

</details>

### Kombinacje + dopełnienie — wybór z warunkami

## Zadanie 25

W klasie jest $12$ dziewcząt i $10$ chłopców. Na ile sposobów można wybrać czteroosobową delegację, w której jest co najmniej jedna dziewczyna i co najmniej jeden chłopiec?

<details>
<summary>Odpowiedź</summary>

$\binom{22}{4}-\binom{12}{4}-\binom{10}{4}=6610$.

</details>

## Zadanie 26

Ile przekątnych ma $n$-kąt wypukły? Który wielokąt wypukły ma $35$ przekątnych?

<details>
<summary>Odpowiedź</summary>

$\frac{n(n-3)}{2}$; $n=10$.

</details>

## Zadanie 27

Na płaszczyźnie danych jest $10$ punktów, z których dokładnie $4$ leżą na jednej prostej, a żadne inne trzy nie są współliniowe. Ile jest trójkątów o wierzchołkach w tych punktach?

<details>
<summary>Odpowiedź</summary>

$\binom{10}{3}-\binom43=116$.

</details>

### Kombinacje + kombinacje z powtórzeniami (kule i przegródki) — rozmieszczanie

## Zadanie 28

Na ile sposobów można rozłożyć $10$ jednakowych kul do $3$ ponumerowanych szuflad tak, aby żadna szuflada nie była pusta? A na ile sposobów, jeśli szuflady mogą być puste?

<details>
<summary>Wskazówka</summary>

Tak samo jak w zadaniu W1.

</details>

<details>
<summary>Odpowiedź</summary>

$\binom92=36$; $\binom{12}{2}=66$.

</details>

## Zadanie 29

Ile jest liczb czterocyfrowych, których suma cyfr jest równa $8$?

<details>
<summary>Odpowiedź</summary>

$\binom{10}{3}=120$.

</details>

## Zadanie 30 (\*\*)

Ile jest liczb sześciocyfrowych, w których zapisie każda kolejna cyfra jest: a) większa od poprzedniej; b) nie mniejsza od poprzedniej?

<details>
<summary>Wskazówka</summary>

W obu przypadkach cyfra $0$ nie może wystąpić. Liczba jest wyznaczona przez *zbiór* (w b) — przez zbiór z powtórzeniami) użytych cyfr; w b) użyj kul i przegródek jak w zadaniu W1.

</details>

<details>
<summary>Odpowiedź</summary>

a) $\binom96=84$; b) $\binom{14}{6}=3003$.

</details>
