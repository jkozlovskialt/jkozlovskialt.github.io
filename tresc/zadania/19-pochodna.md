---
numer: 19
tytul: "Pochodna — definicja i technika"
opis: "Iloraz różnicowy, reguły różniczkowania wielomianów i funkcji wymiernych, interpretacja geometryczna i równanie stycznej."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Oblicz pochodną funkcji $f(x)=3x^{4}-2x^{3}+x-7$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=12x^3-6x^2+1$.

</details>

## Zadanie 2

Oblicz pochodną funkcji $f(x)=\dfrac{2x-1}{x+3}$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=\dfrac{7}{(x+3)^2}$.

</details>

## Zadanie 3

Oblicz pochodną funkcji $f(x)=\left(x^{2}+1\right)\left(x^{3}-x\right)$.

<details>
<summary>Odpowiedź</summary>

$f(x)=x^5-x$, więc $f'(x)=5x^4-1$.

</details>

## Zadanie 4

Dla funkcji $f(x)=\dfrac1{x^{2}}$ oblicz $f'(2)$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=-\frac{2}{x^3}$, $f'(2)=-\frac14$.

</details>

## Zadanie 5

Dla funkcji $f(x)=\sqrt{x}$ oblicz $f'(4)$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=\frac{1}{2\sqrt x}$, $f'(4)=\frac14$.

</details>

## Zadanie 6

Dla funkcji $f(x)=x^{2}$ zapisz iloraz różnicowy $\dfrac{f(1+h)-f(1)}{h}$ w najprostszej postaci i na tej podstawie oblicz $f'(1)$.

<details>
<summary>Odpowiedź</summary>

$2+h$; $f'(1)=\lim\limits_{h\to0}(2+h)=2$.

</details>

## Zadanie 7

Wyznacz równanie stycznej do wykresu funkcji $f(x)=x^{2}-3x$ w punkcie o odciętej $1$.

<details>
<summary>Odpowiedź</summary>

$y=-x-1$.

</details>

## Zadanie 8

Oblicz współczynnik kierunkowy stycznej do wykresu funkcji $f(x)=x^{3}$ w punkcie $(-1,-1)$.

<details>
<summary>Odpowiedź</summary>

$3$.

</details>

## Zadanie 9

Rozwiąż równanie $f'(x)=0$ dla $f(x)=x^{3}-6x$.

<details>
<summary>Odpowiedź</summary>

$3x^2-6=0$, $x=\pm\sqrt2$.

</details>

## Zadanie 10

Oblicz miarę kąta, jaki tworzy z osią $Ox$ styczna do wykresu funkcji $f(x)=\frac12x^{2}$ w punkcie o odciętej $1$.

<details>
<summary>Odpowiedź</summary>

$f'(1)=1$, kąt $45^\circ$.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

Funkcja $f$ jest określona wzorem $f(x)=2x^{3}-4x^{2}+9x$ dla każdego $x\in\mathbb{R}$. Punkt $P=(x_0,18)$ należy do wykresu funkcji $f$. Oblicz $x_0$ oraz wyznacz równanie stycznej do wykresu funkcji $f$ w punkcie $P$.

*[matura PR, czerwiec 2023, zad. 4]*

<details>
<summary>Odpowiedź</summary>

$2x^3-4x^2+9x-18=(x-2)(2x^2+9)$, więc $x_0=2$; $f'(2)=17$; styczna $y=17x-16$.

</details>

## Zadanie 12

Funkcja $f$ jest określona wzorem $f(x)=\dfrac{3x^{2}-2x}{x^{2}+2x+8}$ dla każdej liczby rzeczywistej $x$. Punkt $P=(x_0,3)$ należy do wykresu funkcji $f$. Oblicz $x_0$ oraz wyznacz równanie stycznej do wykresu funkcji $f$ w punkcie $P$.

*[matura PR, maj 2023, zad. 3]*

<details>
<summary>Odpowiedź</summary>

$x_0=-3$; $f'(-3)=-\frac8{11}$; styczna $y=-\frac8{11}x+\frac9{11}$.

</details>

## Zadanie 13

Funkcja $f$ jest określona wzorem $f(x)=\dfrac{x^{3}-3x+2}{x}$ dla każdej liczby rzeczywistej $x$ różnej od zera. W kartezjańskim układzie współrzędnych $(x,y)$ punkt $P$, o pierwszej współrzędnej równej $2$, należy do wykresu funkcji $f$. Prosta o równaniu $y=ax+b$ jest styczna do wykresu funkcji $f$ w punkcie $P$. Oblicz współczynniki $a$ oraz $b$ w równaniu tej stycznej.

*[matura PR, maj 2024, zad. 4]*

<details>
<summary>Odpowiedź</summary>

$f(x)=x^2-3+\frac2x$, $f(2)=2$, $f'(x)=2x-\frac{2}{x^2}$, $f'(2)=\frac72$. Odpowiedź: $a=\frac72$, $b=-5$.

</details>

## Zadanie 14

Funkcja $f$ jest określona wzorem $f(x)=\dfrac{2x+1}{x-4}$ dla każdej liczby rzeczywistej $x\neq4$. W kartezjańskim układzie współrzędnych $(x,y)$ punkt $P=(x_0,5)$ należy do wykresu funkcji $f$. Oblicz $x_0$ oraz wyznacz równanie stycznej do wykresu funkcji $f$ w punkcie $P$.

*[matura PR, czerwiec 2024, zad. 3]*

<details>
<summary>Odpowiedź</summary>

$x_0=7$; $f'(x)=-\frac{9}{(x-4)^2}$, $f'(7)=-1$; styczna $y=-x+12$.

</details>

## Zadanie 15

Punkt $P=(10,\,2429)$ leży na paraboli o równaniu $y=2x^{2}+x+2219$. Prosta o równaniu kierunkowym $y=ax+b$ jest styczna do tej paraboli w punkcie $P$. Oblicz współczynnik $b$.

*[matura PR, maj 2019, zad. 7 — oryginalnie z kodowaną odpowiedzią]*

<details>
<summary>Odpowiedź</summary>

$a=f'(10)=41$, $b=2429-410=2019$.

</details>

## Zadanie 16

Funkcja $f$ określona jest wzorem $f(x)=x^{3}-2x^{2}+1$ dla każdej liczby rzeczywistej $x$. Wyznacz równania tych stycznych do wykresu funkcji $f$, które są równoległe do prostej o równaniu $y=4x$.

*[matura PR, maj 2015, zad. 12]*

<details>
<summary>Odpowiedź</summary>

$3x^2-4x=4$, $x=2$ lub $x=-\frac23$. Styczne: $y=4x-7$ oraz $y=4x+\frac{67}{27}$.

</details>

## Zadanie 17

Wielomian $f$ zmiennej rzeczywistej $x$ jest określony wzorem $f(x)=x^{3}+ax^{2}+bx+c$, gdzie $a,b,c\in\mathbb{R}$. Liczba $(-2)$ jest miejscem zerowym tego wielomianu. W kartezjańskim układzie współrzędnych $(x,y)$ styczna do wykresu wielomianu $f$ w punkcie $A$ o pierwszej współrzędnej równej $(-2)$ przecina ten wykres w punkcie $P=(1,9)$. Wyznacz wzór wielomianu $f$.

*[matura PR, czerwiec 2025, zad. 8]*

<details>
<summary>Odpowiedź</summary>

Styczna przechodzi przez $A=(-2,0)$ i $P=(1,9)$, więc $f'(-2)=3$. Układ: $f(-2)=0$, $f(1)=9$, $f'(-2)=3$ daje $a=3$, $b=3$, $c=2$: $f(x)=x^3+3x^2+3x+2$.

</details>

## Zadanie 18

Wyznacz równania stycznych do wykresu funkcji $f(x)=x^{3}-3x$, które są prostopadłe do prostej $y=-\frac19x+1$.

<details>
<summary>Odpowiedź</summary>

Współczynnik $9$: $3x^2-3=9$, $x=\pm2$. Styczne: $y=9x-16$ i $y=9x+16$.

</details>

## Zadanie 19

Wyznacz równania stycznych do paraboli $y=x^{2}$, które przechodzą przez punkt $(1,-3)$.

<details>
<summary>Odpowiedź</summary>

Punkty styczności o odciętych $3$ i $-1$; styczne $y=6x-9$ oraz $y=-2x-1$.

</details>

## Zadanie 20

Wyznacz współrzędne tych punktów wykresu funkcji $f(x)=\dfrac{x+1}{x-1}$, w których styczna jest równoległa do prostej $y=-2x$.

<details>
<summary>Odpowiedź</summary>

$f'(x)=-\frac{2}{(x-1)^2}=-2$, $x=0$ lub $x=2$: punkty $(0,-1)$ i $(2,3)$.

</details>

## Zadanie 21

Korzystając z definicji pochodnej, oblicz $f'(2)$ dla $f(x)=\dfrac1x$.

<details>
<summary>Odpowiedź</summary>

$\lim\limits_{h\to0}\dfrac{\frac1{2+h}-\frac12}{h}=\lim\limits_{h\to0}\dfrac{-1}{2(2+h)}=-\frac14$.

</details>

## Zadanie 22

Wyznacz $a$ i $b$, dla których parabola $y=x^{2}+ax+b$ jest styczna do prostej $y=2x$ w punkcie $(1,2)$.

<details>
<summary>Odpowiedź</summary>

$1+a+b=2$ i $2+a=2$: $a=0$, $b=1$.

</details>

## Zadanie 23

Wyznacz wszystkie wartości $m$, dla których prosta $y=3x+m$ jest styczna do wykresu funkcji $y=x^{3}$.

<details>
<summary>Odpowiedź</summary>

$3x^2=3$, $x=\pm1$; $m=-2$ lub $m=2$.

</details>

## Zadanie 24

Wykaż, że styczne do paraboli $y=x^{2}$ w punktach o odciętych $\frac12$ i $-\frac12$ są prostopadłe, i wyznacz punkt ich przecięcia.

<details>
<summary>Odpowiedź</summary>

Styczne $y=x-\frac14$ i $y=-x-\frac14$ (iloczyn współczynników $-1$); przecinają się w $\left(0,-\frac14\right)$.

</details>

## Zadanie 25

Punkt porusza się po prostej tak, że jego położenie w chwili $t$ (w sekundach) opisuje wzór $s(t)=t^{3}-6t^{2}+9t$ (w metrach). Wyznacz prędkość $v(t)=s'(t)$, oblicz $v(2)$ i wyznacz chwile, w których punkt się zatrzymuje.

<details>
<summary>Odpowiedź</summary>

$v(t)=3t^2-12t+9$; $v(2)=-3$ m/s; $v=0$ dla $t=1$ i $t=3$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

Wyznacz równanie wspólnej stycznej do parabol $y=x^{2}$ i $y=x^{2}-4x+8$.

<details>
<summary>Wskazówka</summary>

Zapisz styczną do pierwszej paraboli w punkcie o odciętej $a$ i do drugiej w punkcie o odciętej $b$. Porównaj współczynniki kierunkowe i wyrazy wolne.

</details>

<details>
<summary>Odpowiedź</summary>

$a=1$, $b=3$; wspólna styczna: $y=2x-1$.

</details>

## Zadanie 27

Wykaż, że styczna do hiperboli $y=\frac1x$ w dowolnym jej punkcie tworzy z osiami układu współrzędnych trójkąt o polu $2$.

<details>
<summary>Wskazówka</summary>

Styczna w punkcie $\left(a,\frac1a\right)$ ma równanie $y=-\frac{1}{a^2}x+\frac2a$. Wyznacz punkty przecięcia z osiami.

</details>

<details>
<summary>Odpowiedź</summary>

Styczna przecina osie w $(2a,0)$ i $\left(0,\frac2a\right)$, więc pole $=\frac12\cdot|2a|\cdot\left|\frac2a\right|=2$. ✓

</details>

## Zadanie 28 (\*)

Wyznacz wszystkie wartości parametru $m$, dla których wykres funkcji $f(x)=x^{3}-3x^{2}+m$ jest styczny do osi $Ox$.

<details>
<summary>Wskazówka</summary>

Styczność do osi $Ox$ w punkcie $x_0$ oznacza: $f(x_0)=0$ i $f'(x_0)=0$.

</details>

<details>
<summary>Odpowiedź</summary>

$f'(x)=0$ dla $x=0$ lub $x=2$; odpowiednio $m=0$ lub $m=4$.

</details>

## Zadanie 29

Korzystając z definicji pochodnej, wykaż, że funkcja $f(x)=x|x|$ ma pochodną w punkcie $0$, i oblicz $f'(0)$. Czy funkcja $g(x)=|x|$ ma pochodną w zerze?

<details>
<summary>Wskazówka</summary>

Oblicz granice ilorazu różnicowego $\frac{f(h)-f(0)}{h}$ przy $h\to0$.

</details>

<details>
<summary>Odpowiedź</summary>

$\frac{h|h|}{h}=|h|\to0$, więc $f'(0)=0$. Dla $g$ iloraz $\frac{|h|}{h}$ ma granice jednostronne $-1$ i $1$ — pochodna w zerze nie istnieje.

</details>

## Zadanie 30 (\*\*)

Styczna do wykresu funkcji $f(x)=x^{3}$ w punkcie o odciętej $a\neq0$ przecina ten wykres jeszcze w punkcie $B$. Wykaż, że odcięta punktu $B$ jest równa $-2a$ oraz że współczynnik kierunkowy stycznej do wykresu w punkcie $B$ jest cztery razy większy od współczynnika kierunkowego pierwszej stycznej.

<details>
<summary>Wskazówka</summary>

Styczna ma równanie $y=3a^2x-2a^3$. Wielomian $x^3-3a^2x+2a^3$ ma podwójny pierwiastek $a$ — podziel przez $(x-a)^2$.

</details>

<details>
<summary>Odpowiedź</summary>

$x^3-3a^2x+2a^3=(x-a)^2(x+2a)$, więc $x_B=-2a$; $f'(-2a)=12a^2=4\cdot3a^2$. ✓

</details>
