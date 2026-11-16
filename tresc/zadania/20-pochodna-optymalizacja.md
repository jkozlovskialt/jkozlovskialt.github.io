---
numer: 20
tytul: "Pochodna — optymalizacja"
opis: "Znak pochodnej i monotoniczność, ekstrema lokalne, największa i najmniejsza wartość oraz zadania optymalizacyjne z arkuszy."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Wyznacz przedziały monotoniczności funkcji $f(x)=x^{3}-3x$.

<details>
<summary>Odpowiedź</summary>

Rosnąca w $(-\infty,-1\rangle$ i w $\langle1,+\infty)$, malejąca w $\langle-1,1\rangle$.

</details>

## Zadanie 2

Wyznacz ekstrema lokalne funkcji $f(x)=x^{3}-3x$.

<details>
<summary>Odpowiedź</summary>

Maksimum $f(-1)=2$, minimum $f(1)=-2$.

</details>

## Zadanie 3

Wyznacz ekstrema lokalne funkcji $f(x)=2x^{3}-6x^{2}+5$.

<details>
<summary>Odpowiedź</summary>

Maksimum $f(0)=5$, minimum $f(2)=-3$.

</details>

## Zadanie 4

Wyznacz ekstrema lokalne funkcji $f(x)=x^{4}-2x^{2}$.

<details>
<summary>Odpowiedź</summary>

Minima $f(-1)=f(1)=-1$, maksimum $f(0)=0$.

</details>

## Zadanie 5

Wyznacz ekstrema lokalne funkcji $f(x)=x+\dfrac4x$.

<details>
<summary>Odpowiedź</summary>

Maksimum $f(-2)=-4$, minimum $f(2)=4$.

</details>

## Zadanie 6

Wyznacz najmniejszą i największą wartość funkcji $f(x)=x^{2}-4x+1$ w przedziale $\langle0,3\rangle$.

<details>
<summary>Odpowiedź</summary>

Najmniejsza $f(2)=-3$, największa $f(0)=1$.

</details>

## Zadanie 7

Wyznacz najmniejszą i największą wartość funkcji $f(x)=x^{3}-3x^{2}$ w przedziale $\langle-1,3\rangle$.

<details>
<summary>Odpowiedź</summary>

$f(-1)=-4$, $f(0)=0$, $f(2)=-4$, $f(3)=0$: największa $0$, najmniejsza $-4$.

</details>

## Zadanie 8

Wykaż, że funkcja $f(x)=x^{3}+3x$ jest rosnąca w zbiorze liczb rzeczywistych.

<details>
<summary>Odpowiedź</summary>

$f'(x)=3x^2+3>0$ dla każdego $x$. ✓

</details>

## Zadanie 9

Wyznacz ekstrema lokalne funkcji $f(x)=\dfrac{x}{x^{2}+1}$.

<details>
<summary>Odpowiedź</summary>

Minimum $f(-1)=-\frac12$, maksimum $f(1)=\frac12$.

</details>

## Zadanie 10

Wyznacz ekstrema lokalne funkcji $f(x)=(x-1)^{2}(x+2)$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=3(x-1)(x+1)$: maksimum $f(-1)=4$, minimum $f(1)=0$.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

W projekcie ogrodu zaplanowano kwietnik w kształcie trójkąta równoramiennego o podstawie długości $x$ metrów nieprzekraczającej $10$ metrów. Na tym kwietniku ma znajdować się fontanna w kształcie koła o średnicy $4$ metrów, które ma być styczne do każdego z boków trójkątnego kwietnika (zobacz rysunek). Projektantowi zależy, aby przy tak ustalonej wielkości fontanny pole tego kwietnika było najmniejsze.

<img src="/rysunki/s20-z11-1.svg" alt="Rysunek do zadania 11" width="380">

a) Wykaż, że pole $P$ (wyrażone w metrach kwadratowych) trójkątnego kwietnika o podstawie długości $x$ metrów jest określone wzorem $P(x)=\dfrac{2x^{3}}{x^{2}-16}$.
b) Pole $P$ trójkątnego kwietnika o podstawie długości $x$ metrów jest określone wzorem $P(x)=\dfrac{2x^{3}}{x^{2}-16}$ dla każdego $x\in(4,10\rangle$. Wyznacz długość $x$ podstawy trójkątnego kwietnika, dla której pole tego kwietnika jest najmniejsze. Oblicz to najmniejsze pole.

*[matura PR, maj 2026, zad. 12]*

<details>
<summary>Odpowiedź</summary>

a) Z $P=r\cdot p$ ($r=2$, $p$ — połowa obwodu) i $P=\frac12xh$ dostajemy $h=\frac{4x^2}{x^2-16}$, czyli $P=\frac{2x^3}{x^2-16}$. b) $P'(x)=\dfrac{2x^2\left(x^2-48\right)}{\left(x^2-16\right)^2}$; minimum dla $x=4\sqrt3$, $P_{\min}=12\sqrt3$ m².

</details>

## Zadanie 12

Funkcja $f$ jest określona wzorem $f(x)=81^{\log_3 x}+\dfrac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}\cdot x^{2}-6x$ dla każdej liczby dodatniej $x$.
a) Wykaż, że dla każdej liczby dodatniej $x$ wyrażenie $81^{\log_3 x}+\dfrac{2\cdot\log_2\sqrt{27}\cdot\log_3 2}{3}\cdot x^{2}-6x$ można równoważnie przekształcić do postaci $x^{4}+x^{2}-6x$.
b) Oblicz najmniejszą wartość funkcji $f$ określonej dla każdej liczby dodatniej $x$.

*[matura PR, maj 2023, zad. 12]*

<details>
<summary>Odpowiedź</summary>

a) $81^{\log_3x}=x^4$, $\log_2\sqrt{27}\cdot\log_3 2=\frac32$. b) $f'(x)=2(x-1)\left(2x^2+2x+3\right)$; najmniejsza wartość $f(1)=-4$.

</details>

## Zadanie 13

Parabola o równaniu $y=2-\frac12x^{2}$ przecina oś $Ox$ układu współrzędnych w punktach $A=(-2,0)$ i $B=(2,0)$. Rozpatrujemy wszystkie trapezy równoramienne $ABCD$, których dłuższą podstawą jest odcinek $AB$, a końce $C$ i $D$ krótszej podstawy leżą na paraboli (zobacz rysunek).

<img src="/rysunki/s20-z13-1.svg" alt="Rysunek do zadania 13" width="380">

Wyznacz pole trapezu $ABCD$ w zależności od pierwszej współrzędnej wierzchołka $C$. Oblicz współrzędne wierzchołka $C$ tego z rozpatrywanych trapezów, którego pole jest największe.

*[matura PR, maj 2016, zad. 16]*

<details>
<summary>Odpowiedź</summary>

Dla $C=\left(x,2-\frac12x^2\right)$, $x\in(0,2)$: $P(x)=(2+x)\left(2-\frac12x^2\right)=-\frac12x^3-x^2+2x+4$. $P'(x)=0$ dla $x=\frac23$; $C=\left(\frac23,\frac{16}9\right)$.

</details>

## Zadanie 14

Rozpatrujemy wszystkie trapezy równoramienne, w które można wpisać okrąg, spełniające warunek: suma długości dłuższej podstawy $a$ i wysokości trapezu jest równa $2$.
a) Wyznacz wszystkie wartości $a$, dla których istnieje trapez o podanych własnościach.
b) Wykaż, że obwód $L$ takiego trapezu, jako funkcja długości $a$ dłuższej podstawy trapezu, wyraża się wzorem $L(a)=\dfrac{4a^{2}-8a+8}{a}$.
c) Oblicz tangens kąta ostrego tego spośród rozpatrywanych trapezów, którego obwód jest najmniejszy.

*[matura PR, maj 2018, zad. 15]*

<details>
<summary>Odpowiedź</summary>

a) $a\in(1,2)$. b) Z warunku wpisania okręgu ramię $c=\frac{a+b}2$, a z twierdzenia Pitagorasa $c=\frac{h^2+a^2}{2a}$, gdzie $h=2-a$; $L=4c$. c) $L'(a)=4-\frac8{a^2}=0$ dla $a=\sqrt2$; wtedy $\operatorname{tg}\alpha=1$.

</details>

## Zadanie 15

Rozważamy wszystkie graniastosłupy prawidłowe trójkątne o objętości $3456$, których krawędź podstawy ma długość nie większą niż $8\sqrt3$. Pole $P$ powierzchni całkowitej graniastosłupa w zależności od długości $a$ krawędzi podstawy graniastosłupa jest określone wzorem
$$
P(a)=\frac{a^{2}\sqrt3}{2}+\frac{13824\sqrt3}{a}\quad\text{dla } a\in\left(0,8\sqrt3\right\rangle.
$$
Wyznacz długość krawędzi podstawy tego z rozważanych graniastosłupów, którego pole powierzchni całkowitej jest najmniejsze. Oblicz to najmniejsze pole.

*[matura PR, maj 2024, zad. 13.2]*

<details>
<summary>Odpowiedź</summary>

$P'(a)=\sqrt3\cdot\frac{a^3-13824}{a^2}<0$ w całej dziedzinie ($a=24$ leży poza nią), więc $P$ maleje: minimum dla $a=8\sqrt3$, $P_{\min}=1728+96\sqrt3$.

</details>

## Zadanie 16

Rozważamy wszystkie stożki, których wysokość jest większa od $5$, a odległość środka podstawy od tworzącej jest równa $5$. Objętość $V$ stożka, jako funkcja wysokości $h$ stożka, wyraża się wzorem
$$
V(h)=\frac{\pi}{3}\cdot\frac{25h^{3}}{h^{2}-25}\quad\text{dla } h\in(5,+\infty).
$$
Wyznacz wysokość tego z rozważanych stożków, którego objętość jest najmniejsza. Oblicz tę najmniejszą objętość.

*[matura PR, maj 2025, zad. 12.2]*

<details>
<summary>Odpowiedź</summary>

$V'(h)=\frac{25\pi}{3}\cdot\frac{h^2\left(h^2-75\right)}{\left(h^2-25\right)^2}$; minimum dla $h=5\sqrt3$, $V_{\min}=\frac{125\sqrt3}{2}\pi$.

</details>

## Zadanie 17

Rozważamy wszystkie ostrosłupy prawidłowe trójkątne, w których suma wysokości $H$ ostrosłupa oraz promienia $R$ okręgu opisanego na podstawie tego ostrosłupa jest równa $6$. Objętość $V$ ostrosłupa w zależności od długości $R$ promienia okręgu opisanego na podstawie ostrosłupa jest określona wzorem
$$
V(R)=\frac{\sqrt3}{4}\cdot\left(6R^{2}-R^{3}\right)\quad\text{dla } R\in(0,6).
$$
Wyznacz długość promienia okręgu opisanego na podstawie tego z rozważanych ostrosłupów, którego objętość jest największa. Oblicz tę największą objętość.

*[matura PR, czerwiec 2024, zad. 13.2]*

<details>
<summary>Odpowiedź</summary>

$V'(R)=\frac{\sqrt3}4(12R-3R^2)$; maksimum dla $R=4$, $V_{\max}=8\sqrt3$.

</details>

## Zadanie 18

Rozważamy wszystkie graniastosłupy prawidłowe trójkątne o polu powierzchni całkowitej równym $24\sqrt3$. Objętość $V$ graniastosłupa w zależności od długości $a$ krawędzi podstawy jest określona wzorem
$$
V(a)=6a-\frac18a^{3}\quad\text{dla } a\in\left(0,4\sqrt3\right).
$$
Wyznacz długość krawędzi podstawy tego z rozważanych graniastosłupów, którego objętość jest największa. Oblicz tę największą objętość.

*[matura PR, czerwiec 2025, zad. 12.2]*

<details>
<summary>Odpowiedź</summary>

$V'(a)=6-\frac38a^2=0$ dla $a=4$; $V_{\max}=16$.

</details>

## Zadanie 19

Wyznacz liczbę rozwiązań równania $x^{3}-3x=m$ w zależności od wartości parametru $m$.

<details>
<summary>Odpowiedź</summary>

$|m|>2$: jedno; $m=\pm2$: dwa; $|m|<2$: trzy.

</details>

## Zadanie 20

Wyznacz najmniejszą odległość punktu $A=(0,2)$ od punktów paraboli $y=x^{2}$.

<details>
<summary>Odpowiedź</summary>

$d^2=x^4-3x^2+4$ jest najmniejsze dla $x^2=\frac32$; $d_{\min}=\frac{\sqrt7}2$.

</details>

## Zadanie 21

W półkole o promieniu $2$ wpisano prostokąt tak, że jeden jego bok leży na średnicy. Wyznacz wymiary prostokąta o największym polu.

<details>
<summary>Odpowiedź</summary>

Pole $P(x)=2x\sqrt{4-x^2}$, gdzie $x$ to połowa boku na średnicy; maksimum dla $x=\sqrt2$: prostokąt $2\sqrt2\times\sqrt2$, pole $4$.

</details>

## Zadanie 22

Z kwadratowego arkusza blachy o boku $30$ cm wycinamy w rogach jednakowe kwadraty o boku $x$, a następnie zaginamy boki, otrzymując otwarte pudełko. Dla jakiego $x$ objętość pudełka jest największa?

<details>
<summary>Odpowiedź</summary>

$V(x)=x(30-2x)^2$, $x\in(0,15)$; $V'(x)=(30-2x)(30-6x)$; maksimum dla $x=5$ cm, $V=2000$ cm³.

</details>

## Zadanie 23

Wykaż, że dla każdego $x\ge0$ prawdziwa jest nierówność $x^{3}-3x^{2}+5>0$.

<details>
<summary>Odpowiedź</summary>

Najmniejsza wartość funkcji w $\langle0,+\infty)$ to $f(2)=1>0$. ✓

</details>

## Zadanie 24

Wyznacz wszystkie wartości parametru $a$, dla których funkcja $f(x)=x^{3}+ax^{2}+3x$ jest rosnąca w zbiorze liczb rzeczywistych.

<details>
<summary>Odpowiedź</summary>

$f'(x)=3x^2+2ax+3\ge0$ dla każdego $x\iff\Delta\le0$: $a\in\langle-3,3\rangle$.

</details>

## Zadanie 25

Wyznacz $a$ i $b$, dla których funkcja $f(x)=x^{3}+ax^{2}+b$ ma w punkcie $x=2$ ekstremum lokalne równe $-1$.

<details>
<summary>Odpowiedź</summary>

$f'(2)=12+4a=0$, $a=-3$; $f(2)=-4+b=-1$, $b=3$ (jest to minimum).

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

Na paraboli $y=4-x^{2}$ wybieramy punkt $P$ leżący w pierwszej ćwiartce układu współrzędnych. Styczna do paraboli w punkcie $P$ tworzy z osiami układu trójkąt. Wyznacz współrzędne punktu $P$, dla którego pole tego trójkąta jest najmniejsze.

<details>
<summary>Wskazówka</summary>

Dla $P=\left(t,4-t^2\right)$ styczna ma równanie $y=-2tx+t^2+4$. Wyznacz punkty przecięcia z osiami i zapisz pole jako funkcję $t$.

</details>

<details>
<summary>Odpowiedź</summary>

$P(t)=\dfrac{\left(t^2+4\right)^2}{4t}$, minimum dla $t=\frac{2\sqrt3}3$: $P=\left(\frac{2\sqrt3}3,\frac83\right)$, pole $\frac{32\sqrt3}9$.

</details>

## Zadanie 27

Wykaż, że dla każdej liczby rzeczywistej $x$ prawdziwa jest nierówność $x^{4}-4x+3\ge0$.

<details>
<summary>Wskazówka</summary>

Zbadaj najmniejszą wartość funkcji $f(x)=x^4-4x+3$.

</details>

<details>
<summary>Odpowiedź</summary>

$f'(x)=4x^3-4$, minimum dla $x=1$: $f(1)=0$. ✓

</details>

## Zadanie 28 (\*)

Wyznacz liczbę rozwiązań równania $x^{4}-2x^{2}=m$ w zależności od wartości parametru $m$.

<details>
<summary>Wskazówka</summary>

Narysuj wykres funkcji $f(x)=x^4-2x^2$ na podstawie jej ekstremów.

</details>

<details>
<summary>Odpowiedź</summary>

$m<-1$: $0$; $m=-1$: $2$; $-1<m<0$: $4$; $m=0$: $3$; $m>0$: $2$.

</details>

## Zadanie 29

Suma dwóch liczb nieujemnych jest równa $12$. Wyznacz te liczby, dla których iloczyn kwadratu pierwszej z nich i drugiej liczby jest największy.

<details>
<summary>Wskazówka</summary>

Zapisz iloczyn jako funkcję $f(x)=x^2(12-x)$ dla $x\in\langle0,12\rangle$.

</details>

<details>
<summary>Odpowiedź</summary>

$x=8$ i $4$; największy iloczyn $256$.

</details>

## Zadanie 30 (\*\*)

Wyznacz najmniejszą wartość funkcji $f(x)=\sqrt{x^{2}+1}+\sqrt{(x-3)^{2}+4}$.

<details>
<summary>Wskazówka</summary>

Pochodna prowadzi do celu, ale szybciej: $f(x)$ to suma odległości punktu $(x,0)$ od punktów $(0,1)$ i $(3,2)$. Odbij jeden z nich symetrycznie względem osi $Ox$.

</details>

<details>
<summary>Odpowiedź</summary>

Suma odległości od $(0,1)$ i $(3,-2)$ jest najmniejsza, gdy $(x,0)$ leży na odcinku je łączącym, czyli dla $x=1$: $f_{\min}=\sqrt{9+9}=3\sqrt2$.

</details>
