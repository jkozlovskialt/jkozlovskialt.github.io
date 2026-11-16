---
numer: 10
tytul: "Funkcja wykładnicza i logarytmiczna"
opis: "Wykresy i własności, przekształcenia wykresów oraz zastosowania: procent składany, wzrost i rozpad."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Naszkicuj w jednym układzie współrzędnych wykresy funkcji $f(x)=2^{x}$ oraz $g(x)=\left(\frac12\right)^{x}$. Podaj zbiór wartości i monotoniczność każdej z nich oraz ich punkt wspólny.

<details>
<summary>Odpowiedź</summary>

Obie mają $ZW=(0,+\infty)$; $f$ jest rosnąca, $g$ malejąca; punkt wspólny $(0,1)$ (wykresy są symetryczne względem osi $Oy$).

</details>

## Zadanie 2

Dana jest funkcja $f(x)=2^{x-1}+3$. Podaj równanie asymptoty jej wykresu, zbiór wartości oraz $f(1)$.

<details>
<summary>Odpowiedź</summary>

Asymptota $y=3$; $ZW=(3,+\infty)$; $f(1)=4$.

</details>

## Zadanie 3

Wyznacz dziedzinę funkcji $f(x)=\log_3\left(x^{2}-4\right)$.

<details>
<summary>Odpowiedź</summary>

$D=(-\infty,-2)\cup(2,+\infty)$.

</details>

## Zadanie 4

Wyznacz dziedzinę funkcji $f(x)=\log_{x}(5-x)$.

<details>
<summary>Odpowiedź</summary>

$D=(0,1)\cup(1,5)$.

</details>

## Zadanie 5

Dana jest funkcja $g(x)=\log_2(x+2)-1$. Podaj równanie asymptoty jej wykresu, zbiór wartości i miejsce zerowe.

<details>
<summary>Odpowiedź</summary>

Asymptota $x=-2$; $ZW=\mathbb{R}$; miejsce zerowe $x=0$.

</details>

## Zadanie 6

Wykres funkcji $f(x)=a^{x}$ przechodzi przez punkt $\left(2,\frac94\right)$. Wyznacz $a$ i rozstrzygnij, czy funkcja $f$ jest rosnąca.

<details>
<summary>Odpowiedź</summary>

$a=\frac32$; funkcja rosnąca.

</details>

## Zadanie 7

Wykres funkcji $f(x)=\log_a x$ przechodzi przez punkt $(8,-3)$. Wyznacz $a$.

<details>
<summary>Odpowiedź</summary>

$a=\frac12$.

</details>

## Zadanie 8

Dana jest funkcja $f(x)=3^{x}$. Oblicz $f(-2)$ oraz $f\left(\frac12\right)\cdot f\left(\frac32\right)$.

<details>
<summary>Odpowiedź</summary>

$f(-2)=\frac19$; $f\left(\frac12\right)\cdot f\left(\frac32\right)=3^{2}=9$.

</details>

## Zadanie 9

Na lokatę z roczną kapitalizacją odsetek i oprocentowaniem $3\%$ w skali roku wpłacono $10\,000$ zł. Zapisz wzór na kwotę po $n$ latach i oblicz ją po $4$ latach (pomiń podatek).

<details>
<summary>Odpowiedź</summary>

$K_n=10\,000\cdot1{,}03^{n}$; $K_4\approx11\,255{,}09$ zł.

</details>

## Zadanie 10

Wyznacz zbiór wartości funkcji $f(x)=2^{|x|}$ i zbadaj jej parzystość.

<details>
<summary>Odpowiedź</summary>

$ZW=\langle1,+\infty)$; funkcja parzysta.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

W warunkach laboratoryjnych obserwowano dynamikę wzrostu liczebności populacji pewnego gatunku bakterii. Liczebność $N$ populacji bakterii zmienia się w czasie zgodnie z zależnością wykładniczą
$$
N(t)=N_0\cdot k^{t}\quad\text{dla } t\ge0,
$$
gdzie: $N_0$ – liczebność populacji w chwili $t=0$ rozpoczęcia obserwacji, $k$ – stała dodatnia, charakterystyczna dla danego gatunku bakterii i dla warunków przeprowadzenia obserwacji, $t$ – czas wyrażony w godzinach, liczony od chwili $t=0$ rozpoczęcia obserwacji.
W chwili rozpoczęcia obserwacji liczebność populacji była równa $10\,000$, a po dwóch godzinach była równa $15\,625$. Oblicz, o ile procent wzrastała liczebność populacji tej bakterii w ciągu każdej godziny.

*[matura PR, maj 2025, zad. 1]*

<details>
<summary>Odpowiedź</summary>

$k^{2}=1{,}5625$, więc $k=1{,}25$: liczebność rosła o $25\%$ na godzinę.

</details>

## Zadanie 12

W chwili początkowej $(t=0)$ zainicjowano pewną reakcję chemiczną, w której brał udział związek A. W wyniku tej reakcji masa $m$ związku A zmieniała się w czasie zgodnie z zależnością
$$
m(t)=a\cdot2^{-0{,}05\cdot t}+b\quad\text{dla } t\ge0,
$$
gdzie: $m$ – masa związku A wyrażona w gramach, $t$ – czas wyrażony w sekundach (liczony od chwili $t=0$), $a$, $b$ – współczynniki liczbowe. Masa początkowa związku A (tj. masa w chwili $t=0$) była równa $m_0$ gramów. Po osiągnięciu stanu równowagi (tj. gdy $t\to\infty$) masa tego związku była równa $\frac19$ jego masy początkowej. Oblicz, po ilu sekundach (licząc od chwili zainicjowania tej reakcji) przereagowało $87{,}5\%$ masy początkowej tego związku.

*[matura PR, czerwiec 2024, zad. 1]*

<details>
<summary>Odpowiedź</summary>

$b=\frac19m_0$, $a=\frac89m_0$; warunek $m(t)=\frac18m_0$ daje $2^{-0{,}05t}=\frac1{64}$, czyli $t=120$ s.

</details>

## Zadanie 13

Na rysunku przedstawiony jest fragment wykresu funkcji logarytmicznej $f$ określonej wzorem $f(x)=\log_2(x+p)$.

<img src="/rysunki/s10-z13-1.svg" alt="Rysunek do zadania 13" width="380">

a) Podaj wartość $p$.
b) Narysuj wykres funkcji określonej wzorem $y=\left|f(x)\right|$.
c) Podaj wszystkie wartości parametru $m$, dla których równanie $\left|f(x)\right|=m$ ma dwa rozwiązania o przeciwnych znakach.

*[matura PR, maj 2013, zad. 12]*

<details>
<summary>Odpowiedź</summary>

a) $p=4$ (z $f(0)=2$, czyli $\log_2 p=2$). b) Część wykresu leżącą pod osią $Ox$ odbijamy symetrycznie względem tej osi. c) Rozwiązania $x_1=2^{m}-4$ i $x_2=2^{-m}-4<0$; potrzeba $x_1>0$, czyli $m>2$.

</details>

## Zadanie 14

Wykaż, że jeżeli $a=\log_2 14$ oraz $b=\log_{\sqrt2}27$, to $\log_7 54=\dfrac{b+2}{2a-2}$.

*[matura PR, czerwiec 2025, zad. 2]*

<details>
<summary>Odpowiedź</summary>

$b=2\log_2 27=6\log_2 3$, $a-1=\log_2 7$, więc $\log_7 54=\dfrac{1+3\log_2 3}{\log_2 7}=\dfrac{1+\frac b2}{a-1}=\dfrac{b+2}{2a-2}$. ✓

</details>

## Zadanie 15

Naszkicuj wykres funkcji $f(x)=\left|\log_2(x-1)\right|$ i podaj liczbę rozwiązań równania $f(x)=m$ w zależności od wartości parametru $m$.

<details>
<summary>Odpowiedź</summary>

$m<0$: brak; $m=0$: jedno ($x=2$); $m>0$: dwa.

</details>

## Zadanie 16

Wyznacz liczbę rozwiązań równania $\left|2^{x}-4\right|=m$ w zależności od wartości parametru $m$.

<details>
<summary>Odpowiedź</summary>

$m<0$: $0$; $m=0$: $1$; $0<m<4$: $2$; $m\ge4$: $1$ (asymptota $y=4$ dla $x\to-\infty$).

</details>

## Zadanie 17

Kwotę $5000$ zł wpłacono na lokatę oprocentowaną $4\%$ w skali roku. Oblicz kwotę po $2$ latach, jeśli odsetki kapitalizuje się: a) co rok; b) co kwartał (pomiń podatek). O ile złotych druga lokata jest korzystniejsza?

<details>
<summary>Odpowiedź</summary>

a) $5000\cdot1{,}04^{2}=5408$ zł; b) $5000\cdot1{,}01^{8}\approx5414{,}28$ zł; różnica $\approx6{,}28$ zł.

</details>

## Zadanie 18

Okres połowicznego rozpadu pewnego izotopu wynosi $30$ lat. Zapisz wzór na masę izotopu po $t$ latach, jeśli początkowo było go $800$ g. Ile gramów pozostanie po $90$ latach? Po ilu latach zostanie $\frac{1}{32}$ masy początkowej?

<details>
<summary>Odpowiedź</summary>

$m(t)=800\cdot\left(\frac12\right)^{t/30}$; po $90$ latach: $100$ g; $\frac1{32}$ masy po $150$ latach.

</details>

## Zadanie 19

Funkcja $f(x)=\log_a x$ spełnia warunek $f(9)-f(3)=2$. Wyznacz $a$.

<details>
<summary>Odpowiedź</summary>

$\log_a 3=2$, więc $a=\sqrt3$.

</details>

## Zadanie 20

Wykaż, że funkcja $f(x)=\log_2\dfrac{1+x}{1-x}$ jest nieparzysta.

<details>
<summary>Odpowiedź</summary>

$D=(-1,1)$ jest symetryczna względem $0$ i $f(-x)=\log_2\frac{1-x}{1+x}=-\log_2\frac{1+x}{1-x}=-f(x)$. ✓

</details>

## Zadanie 21

Wyznacz zbiór wartości funkcji $f(x)=\log_{\frac12}\left(x^{2}+4\right)$.

<details>
<summary>Odpowiedź</summary>

$x^2+4\ge4$, a funkcja $\log_{\frac12}$ jest malejąca, więc $ZW=(-\infty,-2\rangle$.

</details>

## Zadanie 22

Wyznacz dziedzinę funkcji $f(x)=\sqrt{\log_{\frac12}(x-1)}$.

<details>
<summary>Odpowiedź</summary>

Warunek $0<x-1\le1$, czyli $D=(1,2\rangle$.

</details>

## Zadanie 23

Dana jest funkcja $f(x)=2^{x}+2^{-x}$. Wykaż, że jest parzysta, i wyznacz jej najmniejszą wartość.

<details>
<summary>Odpowiedź</summary>

$f(-x)=f(x)$; z nierówności $t+\frac1t\ge2$ dla $t=2^x>0$: wartość najmniejsza $2$ (dla $x=0$).

</details>

## Zadanie 24

Liczba mieszkańców miasta maleje co roku o $2\%$. Obecnie miasto ma $50\,000$ mieszkańców. Zapisz wzór na liczbę mieszkańców po $n$ latach i wyznacz, po ilu pełnych latach liczba mieszkańców po raz pierwszy spadnie poniżej $40\,000$ (przy założeniu, że tendencja się utrzyma).

<details>
<summary>Odpowiedź</summary>

$L(n)=50\,000\cdot0{,}98^{n}$; $L(11)\approx40\,037$, $L(12)\approx39\,236$ — po $12$ latach.

</details>

## Zadanie 25

Wyznacz współrzędne punktu wspólnego wykresów funkcji $f(x)=3^{x+1}$ i $g(x)=9^{x}$.

<details>
<summary>Odpowiedź</summary>

$3^{x+1}=3^{2x}$, więc $x=1$; punkt $(1,9)$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

Wyznacz wszystkie wartości parametru $m$, dla których równanie $4^{x}-2^{x+1}=m$ ma dwa różne rozwiązania.

<details>
<summary>Wskazówka</summary>

Podstaw $t=2^{x}$. Każdemu dodatniemu $t$ odpowiada dokładnie jedno $x$, więc równanie kwadratowe musi mieć dwa różne pierwiastki dodatnie.

</details>

<details>
<summary>Odpowiedź</summary>

$t^2-2t-m=0$: $\Delta=4+4m>0$, $t_1t_2=-m>0$, $t_1+t_2=2>0$. Odpowiedź: $m\in(-1,0)$.

</details>

## Zadanie 27

Wykaż, że funkcja $f(x)=\log_2\left(x+\sqrt{x^{2}+1}\right)$ jest nieparzysta.

<details>
<summary>Wskazówka</summary>

Sprawdź najpierw, że dziedziną jest $\mathbb{R}$. Potem oblicz $f(x)+f(-x)$ i skorzystaj z $\left(\sqrt{x^2+1}+x\right)\left(\sqrt{x^2+1}-x\right)=1$.

</details>

<details>
<summary>Odpowiedź</summary>

$\sqrt{x^2+1}>|x|$, więc $D=\mathbb{R}$; $f(x)+f(-x)=\log_2\left[\left(\sqrt{x^2+1}+x\right)\left(\sqrt{x^2+1}-x\right)\right]=\log_2 1=0$. ✓

</details>

## Zadanie 28

Ile rozwiązań ma równanie $2^{x}=x+2$? Uzasadnij odpowiedź, szkicując wykresy obu stron, i podaj rozwiązanie całkowite.

<details>
<summary>Wskazówka</summary>

Porównaj wartości obu stron w kilku punktach, np. $x=-2$, $x=-1$, $x=2$.

</details>

<details>
<summary>Odpowiedź</summary>

Dwa rozwiązania: $x=2$ oraz jedno w przedziale $(-2,-1)$ (bo $2^{-2}>0$ i $2^{-1}<1$).

</details>

## Zadanie 29 (\*)

Wyznacz wszystkie wartości parametru $m$, dla których równanie $\log_2 x+\log_2(4-x)=m$ ma dwa różne rozwiązania.

<details>
<summary>Wskazówka</summary>

Z dziedziny $x\in(0,4)$. Równanie jest równoważne $x(4-x)=2^{m}$ — jakie wartości przyjmuje $x(4-x)$ na przedziale $(0,4)$?

</details>

<details>
<summary>Odpowiedź</summary>

$x(4-x)\in(0,4\rangle$, przy czym wartość $4$ przyjmowana jest tylko dla $x=2$. Dwa rozwiązania $\iff 0<2^m<4$, czyli $m\in(-\infty,2)$.

</details>

## Zadanie 30 (\*\*)

Wyznacz wszystkie wartości parametru $m$, dla których nierówność $4^{x}-m\cdot2^{x}+1>0$ jest spełniona przez każdą liczbę rzeczywistą $x$.

<details>
<summary>Wskazówka</summary>

Podstaw $t=2^{x}>0$ i podziel przez $t$. Jaką najmniejszą wartość ma $t+\frac1t$ dla $t>0$?

</details>

<details>
<summary>Odpowiedź</summary>

Warunek $t+\frac1t>m$ dla każdego $t>0$; $\min\left(t+\frac1t\right)=2$ (dla $t=1$), więc $m<2$.

</details>
