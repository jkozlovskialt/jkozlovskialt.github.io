---
numer: 16
tytul: "Ciąg arytmetyczny i ciąg geometryczny"
opis: "Wzory ogólne i rekurencyjne, sumy, monotoniczność i zadania łączące oba ciągi."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Ciąg arytmetyczny $(a_n)$ ma pierwszy wyraz $a_1=3$ i różnicę $r=4$. Oblicz $a_{20}$ oraz sumę dwudziestu początkowych wyrazów tego ciągu.

<details>
<summary>Odpowiedź</summary>

$a_{20}=79$, $S_{20}=820$.

</details>

## Zadanie 2

Ciąg geometryczny $(a_n)$ ma pierwszy wyraz $a_1=2$ i iloraz $q=3$. Oblicz $a_6$ oraz sumę sześciu początkowych wyrazów tego ciągu.

<details>
<summary>Odpowiedź</summary>

$a_6=486$, $S_6=728$.

</details>

## Zadanie 3

Sprawdź, który z ciągów jest arytmetyczny, a który geometryczny, i podaj jego różnicę lub iloraz: a) $a_n=5-2n$, b) $b_n=3\cdot 2^{n}$.

<details>
<summary>Odpowiedź</summary>

a) arytmetyczny, $r=-2$; b) geometryczny, $q=2$.

</details>

## Zadanie 4

Liczby $2$, $x$, $18$ tworzą (w podanej kolejności) ciąg geometryczny, a liczby $2$, $y$, $18$ — ciąg arytmetyczny. Wyznacz $x$ oraz $y$.

<details>
<summary>Odpowiedź</summary>

$x=6$ lub $x=-6$; $y=10$.

</details>

## Zadanie 5

Na lokatę wpłacono $10\,000$ zł przy oprocentowaniu $4\%$ w skali roku z roczną kapitalizacją odsetek. Oblicz stan lokaty po trzech latach (pomiń podatek).

<details>
<summary>Odpowiedź</summary>

$10\,000\cdot1{,}04^3=11\,248{,}64$ zł.

</details>

## Zadanie 6

Ciąg $(a_n)$ jest określony wzorem $a_n=n^{2}-6n$ dla $n\geq 1$. Które wyrazy tego ciągu są ujemne? Czy ten ciąg jest monotoniczny?

<details>
<summary>Odpowiedź</summary>

$a_1,\ldots,a_5$ (bo $a_n=n(n-6)<0\iff n<6$); ciąg nie jest monotoniczny ($a_1>a_2$, ale $a_4<a_5$).

</details>

## Zadanie 7

Ciąg $(a_n)$ jest określony rekurencyjnie: $a_1=1$, $a_{n+1}=2a_n+1$ dla $n\geq 1$. Wypisz wyrazy $a_2,\ a_3,\ a_4,\ a_5$.

<details>
<summary>Odpowiedź</summary>

$3,\ 7,\ 15,\ 31$.

</details>

## Zadanie 8

Ciąg arytmetyczny $(a_n)$ jest określony dla każdej liczby naturalnej $n\geq 1$. Trzeci wyraz tego ciągu jest równy $(-1)$, a suma piętnastu początkowych kolejnych wyrazów tego ciągu jest równa $(-165)$. Oblicz różnicę tego ciągu.

*[matura PP, maj 2024, zad. 17]*

<details>
<summary>Odpowiedź</summary>

$r=-2$ ($S_{15}=15a_8$, więc $a_8=-11=a_3+5r$).

</details>

## Zadanie 9

Oblicz sumę wszystkich liczb dwucyfrowych podzielnych przez $7$.

<details>
<summary>Odpowiedź</summary>

$728$ ($13$ liczb: $14,21,\ldots,98$).

</details>

## Zadanie 10

Trzywyrazowy ciąg $(12,\ 6,\ 2m-1)$ jest geometryczny. Wyznacz $m$ i określ, czy ten ciąg jest rosnący, czy malejący.

*[matura PP, maj 2024, zad. 16 — oryginalnie zadanie zamknięte]*

<details>
<summary>Odpowiedź</summary>

$q=\tfrac12$, $2m-1=3$, $m=2$; ciąg malejący.

</details>

### Część B — poziom maturalny

## Zadanie 11

Oblicz $1-2+3-4+5-6+\ldots+99-100$.

<details>
<summary>Odpowiedź</summary>

$-50$ ($50$ par, każda równa $-1$).

</details>

## Zadanie 12

Suma $n$ początkowych wyrazów ciągu $(a_n)$ jest dla każdego $n\geq1$ równa $S_n=2n^{2}+3n$. Oblicz $a_1$, $a_2$, $a_3$, a następnie wyznacz wzór ogólny ciągu i wykaż, że jest to ciąg arytmetyczny.

<details>
<summary>Odpowiedź</summary>

$a_1=5$, $a_2=9$, $a_3=13$; $a_n=4n+1$, $a_{n+1}-a_n=4$.

</details>

## Zadanie 13

Ile dodatnich wyrazów ma ciąg arytmetyczny $100,\ 97,\ 94,\ \ldots$? Oblicz sumę wszystkich dodatnich wyrazów tego ciągu.

<details>
<summary>Odpowiedź</summary>

$34$ wyrazy dodatnie ($a_n=103-3n$, $a_{34}=1$); suma $1717$.

</details>

## Zadanie 14

Miary kątów pewnego trójkąta tworzą ciąg arytmetyczny. Wykaż, że jeden z kątów tego trójkąta ma miarę $60^{\circ}$. Wyznacz miary kątów, jeśli najmniejszy z nich ma miarę $30^{\circ}$.

<details>
<summary>Odpowiedź</summary>

$3\alpha=180^{\circ}\Rightarrow\alpha=60^{\circ}$; kąty: $30^{\circ},60^{\circ},90^{\circ}$.

</details>

## Zadanie 15

Między liczby $2$ i $162$ wstaw trzy liczby tak, aby razem z nimi tworzyły pięciowyrazowy ciąg geometryczny. Rozważ wszystkie możliwości.

<details>
<summary>Odpowiedź</summary>

$q^4=81$: $(6,18,54)$ lub $(-6,18,-54)$.

</details>

## Zadanie 16

Ciąg $(a_n)$ jest określony rekurencyjnie: $a_1=3$, $a_{n+1}=2a_n-1$ dla $n\geq1$. Wypisz kilka początkowych wyrazów i zgadnij wzór ogólny. Następnie wykaż, że ciąg $b_n=a_n-1$ jest geometryczny, i uzasadnij swój wzór.

<details>
<summary>Odpowiedź</summary>

$3,5,9,17,33,\ldots$; $b_{n+1}=2b_n$, $b_1=2$, więc $a_n=2^n+1$.

</details>

## Zadanie 17

Liczby dodatnie $a$, $b$, $c$ tworzą (w podanej kolejności) ciąg geometryczny. Wykaż, że liczby $\log a$, $\log b$, $\log c$ tworzą ciąg arytmetyczny.

<details>
<summary>Odpowiedź</summary>

$b^2=ac\Rightarrow 2\log b=\log a+\log c$. ✓

</details>

## Zadanie 18

O ciągu $(x_n)$ dla $n\geq1$ wiadomo, że: \begin{itemize}[nosep] \item[a)] ciąg $(a_n)$ określony wzorem $a_n=3^{x_n}$ dla $n\geq1$ jest geometryczny o ilorazie $q=27$, \item[b)] $x_1+x_2+\ldots+x_{10}=145$. \end{itemize} Oblicz $x_1$.

*[matura PR, maj 2011, zad. 5]*

<details>
<summary>Odpowiedź</summary>

$3^{x_{n+1}-x_n}=27\Rightarrow (x_n)$ arytm., $r=3$; $10x_1+135=145$, $x_1=1$.

</details>

## Zadanie 19

Uzasadnij, że jeżeli $a\neq b$, $a\neq c$, $b\neq c$ i $a+b=2c$, to

$$
\frac{a}{a-c}+\frac{b}{b-c}=2.
$$

*[matura PR, maj 2011, zad. 2]*

<details>
<summary>Odpowiedź</summary>

$c=\tfrac{a+b}{2}$, więc $a-c=\tfrac{a-b}{2}$, $b-c=\tfrac{b-a}{2}$; suma $=\tfrac{2a-2b}{a-b}=2$. ✓

</details>

## Zadanie 20

Trójkąt $ABC$ jest wpisany w okrąg o środku $S$. Kąty wewnętrzne $CAB$, $ABC$ i $BCA$ tego trójkąta są równe, odpowiednio, $\alpha$, $2\alpha$ i $4\alpha$. Wykaż, że trójkąt $ABC$ jest rozwartokątny, i udowodnij, że miary wypukłych kątów środkowych $ASB$, $ASC$ i $BSC$ tworzą w podanej kolejności ciąg arytmetyczny.

*[matura PR, maj 2014, zad. 6]*

<details>
<summary>Odpowiedź</summary>

$\alpha=\tfrac{180^{\circ}}{7}$, $4\alpha=\tfrac{720^{\circ}}{7}>90^{\circ}$; kąty środkowe: $\tfrac{1080^{\circ}}{7},\ \tfrac{720^{\circ}}{7},\ \tfrac{360^{\circ}}{7}$ — ciąg arytm. o różnicy $-\tfrac{360^{\circ}}{7}$. ✓

</details>

## Zadanie 21

Wyrazy ciągu geometrycznego $(a_n)$, określonego dla $n\geq1$, spełniają układ równań

$$
\begin{cases} a_3+a_6=-84\\ a_4+a_7=168 \end{cases}
$$

Wyznacz liczbę $n$ początkowych wyrazów tego ciągu, których suma $S_n$ jest równa $32\,769$.

*[matura PR, maj 2018, zad. 13]*

<details>
<summary>Odpowiedź</summary>

$q=-2$, $a_3=12$, $a_1=3$; $S_n=1-(-2)^n=32769$, $n=15$.

</details>

## Zadanie 22

Trzywyrazowy ciąg $(x,\ y,\ z)$ jest geometryczny i rosnący. Suma wyrazów tego ciągu jest równa $105$. Liczby $x$, $y$ oraz $z$ są — odpowiednio — pierwszym, drugim oraz szóstym wyrazem ciągu arytmetycznego $(a_n)$, określonego dla każdej liczby naturalnej $n\geq1$. Oblicz $x$, $y$ oraz $z$.

*[matura PR, maj 2024, zad. 7]*

<details>
<summary>Odpowiedź</summary>

$r=3x$, więc $(x,4x,16x)$; $21x=105$: $x=5$, $y=20$, $z=80$.

</details>

## Zadanie 23 (□)

O liczbach $a$, $b$, $c$ wiemy, że ciąg $(a,\ b,\ c)$ jest arytmetyczny i $a+c=10$, zaś ciąg $(a+1,\ b+4,\ c+19)$ jest geometryczny. Wyznacz te liczby.

*[matura PR, maj 2010, zad. 5]*

<details>
<summary>Odpowiedź</summary>

$(2,5,8)$ lub $(26,5,-16)$.

</details>

## Zadanie 24

Ciąg liczbowy $(a,\ b,\ c)$ jest arytmetyczny i $a+b+c=33$, natomiast ciąg $(a-1,\ b+5,\ c+19)$ jest geometryczny. Oblicz $a$, $b$, $c$.

*[matura PR, maj 2013, zad. 5]*

<details>
<summary>Odpowiedź</summary>

$(9,11,13)$ lub $(33,11,-11)$.

</details>

## Zadanie 25

Dany jest ciąg arytmetyczny $(a_n)$ o skończonej liczbie wyrazów. Liczba wyrazów tego ciągu jest większa od $6$. Pierwszy wyraz tego ciągu jest równy $1$, a ostatni wyraz tego ciągu jest równy $(-2025)$. Drugi, trzeci i szósty wyraz tego ciągu tworzą — w podanej kolejności — ciąg geometryczny. Oblicz sumę wszystkich wyrazów ciągu $(a_n)$.

*[matura PR, maj 2026, zad. 6]*

<details>
<summary>Odpowiedź</summary>

$r=-2$ ($r=0$ odpada), $n=1014$; $S=-1\,026\,168$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26

Liczby $a$, $b$, $c$ są — odpowiednio — pierwszym, drugim i trzecim wyrazem ciągu arytmetycznego. Suma tych liczb jest równa $27$. Ciąg $(a-2,\ b,\ 2c+1)$ jest geometryczny. Wyznacz liczby $a$, $b$, $c$.

*[matura PR, maj 2017, zad. 14]*

<details>
<summary>Odpowiedź</summary>

$(5,9,13)$ lub $\left(\tfrac{31}{2},9,\tfrac52\right)$.

</details>

## Zadanie 27 (\*)

Ciąg $(a,\ b,\ c)$ jest trzywyrazowym ciągiem geometrycznym o wyrazach dodatnich. Ciąg $(2a,\ 2b,\ c+1)$ jest trzywyrazowym ciągiem arytmetycznym. Ponadto spełniony jest warunek $c-b=6$. Oblicz $a$, $b$ oraz $c$.

*[matura PR, czerwiec 2023, zad. 11]*

<details>
<summary>Wskazówka</summary>

Zapisz $b=aq$, $c=aq^{2}$; z obu warunków wyznacz $a$ i porównaj — dostaniesz równanie kwadratowe z niewiadomą $q$.

</details>

<details>
<summary>Odpowiedź</summary>

$7q^2-25q+12=0$, $q=3$ ($q=\tfrac47$ daje wyrazy ujemne); $(1,3,9)$.

</details>

## Zadanie 28 (\*)

Trzy liczby tworzą ciąg geometryczny. Jeżeli do drugiej liczby dodamy $8$, to ciąg ten zmieni się w arytmetyczny. Jeżeli zaś do ostatniej liczby nowego ciągu arytmetycznego dodamy $64$, to tak otrzymany ciąg będzie znów geometryczny. Znajdź te liczby. Uwzględnij wszystkie możliwości.

*[matura PR, maj 2012, zad. 5]*

<details>
<summary>Odpowiedź</summary>

$(4,12,36)$ lub $\left(\tfrac49,-\tfrac{20}{9},\tfrac{100}{9}\right)$.

</details>

## Zadanie 29

Trzywyrazowy ciąg $(a,\ b,\ c)$ o wyrazach dodatnich jest arytmetyczny, natomiast ciąg

$$
\left(\frac{1}{a},\ \frac{2}{3b},\ \frac{1}{2a+2b+c}\right)
$$

jest geometryczny. Oblicz iloraz ciągu geometrycznego.

*[matura PR, maj 2019, zad. 12]*

<details>
<summary>Wskazówka</summary>

Zapisz $b=\tfrac{a+c}{2}$ i doprowadź warunek ciągu geometrycznego do jednorodnego równania kwadratowego z niewiadomymi $a$ i $c$.

</details>

<details>
<summary>Odpowiedź</summary>

$c=3a$, $b=2a$; $q=\tfrac{2a}{3b}=\tfrac13$.

</details>

## Zadanie 30 (\*\*)

Ciąg geometryczny $(a_n)$ ma $100$ wyrazów i są one liczbami dodatnimi. Suma wszystkich wyrazów o numerach nieparzystych jest sto razy większa od sumy wszystkich wyrazów o numerach parzystych oraz

$$
\log a_1+\log a_2+\log a_3+\ldots+\log a_{100}=100.
$$

Oblicz $a_1$.

*[matura PR, maj 2014, zad. 7]*

<details>
<summary>Wskazówka</summary>

Jak ma się suma $a_2+a_4+\ldots+a_{100}$ do sumy $a_1+a_3+\ldots+a_{99}$? A do czego sprowadza się suma logarytmów?

</details>

<details>
<summary>Odpowiedź</summary>

$q=\tfrac1{100}$; $100\log a_1+4950\log q=100$, $\log a_1=100$, $a_1=10^{100}$.

</details>
