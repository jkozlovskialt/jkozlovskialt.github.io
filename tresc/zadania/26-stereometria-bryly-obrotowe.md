---
numer: 26
tytul: "Stereometria — bryły obrotowe"
opis: "Walec, stożek i kula, bryły wpisane i opisane, przekroje oraz zadania optymalizacyjne w stereometrii (powrót pochodnej)."
data: 2026-11-15
poziom: "matura rozszerzona"
---

**Oznaczenia:** (□) — zadanie bardzo typowe, (\*) — zadanie trudne, (\*\*) — zadanie bardzo trudne. Wskazówki i odpowiedzi są ukryte pod zadaniami.

### Część A — rozgrzewka

## Zadanie 1

Oblicz objętość i pole powierzchni całkowitej walca o promieniu podstawy $3$ i wysokości $5$.

<details>
<summary>Odpowiedź</summary>

$V=45\pi$, $P_c=48\pi$.

</details>

## Zadanie 2

Oblicz objętość i pole powierzchni całkowitej stożka o promieniu podstawy $3$ i wysokości $4$.

<details>
<summary>Odpowiedź</summary>

$l=5$; $V=12\pi$, $P_c=24\pi$.

</details>

## Zadanie 3

Oblicz objętość i pole powierzchni kuli o promieniu $3$.

<details>
<summary>Odpowiedź</summary>

$V=36\pi$, $P=36\pi$.

</details>

## Zadanie 4

Przekrój osiowy walca jest kwadratem o boku $4$. Oblicz objętość walca.

<details>
<summary>Odpowiedź</summary>

$r=2$, $h=4$, $V=16\pi$.

</details>

## Zadanie 5

Tworząca stożka ma długość $10$, a kąt rozwarcia stożka ma miarę $60^\circ$. Oblicz objętość stożka.

<details>
<summary>Odpowiedź</summary>

$r=5$, $h=5\sqrt3$, $V=\frac{125\sqrt3}3\pi$.

</details>

## Zadanie 6

Oblicz promienie kuli wpisanej w sześcian o krawędzi $6$ i kuli opisanej na nim.

<details>
<summary>Odpowiedź</summary>

$r=3$, $R=3\sqrt3$.

</details>

## Zadanie 7

Powierzchnia boczna stożka po rozwinięciu jest wycinkiem koła o promieniu $6$ i kącie środkowym $120^\circ$. Oblicz objętość stożka.

<details>
<summary>Odpowiedź</summary>

$l=6$, $2\pi r=\frac13\cdot12\pi$, $r=2$, $h=4\sqrt2$; $V=\frac{16\sqrt2}3\pi$.

</details>

## Zadanie 8

Oblicz objętość walca wpisanego w sześcian o krawędzi $2$ (podstawy walca są kołami wpisanymi w przeciwległe ściany).

<details>
<summary>Odpowiedź</summary>

$V=2\pi$.

</details>

## Zadanie 9

Trójkąt prostokątny o przyprostokątnych $3$ i $4$ obraca się wokół dłuższej przyprostokątnej. Oblicz objętość otrzymanej bryły.

<details>
<summary>Odpowiedź</summary>

Stożek: $r=3$, $h=4$, $V=12\pi$.

</details>

## Zadanie 10

Oblicz stosunek objętości kuli do objętości walca opisanego na tej kuli.

<details>
<summary>Odpowiedź</summary>

$\frac23$.

</details>

### Część B — poziom maturalny

## Zadanie 11 (□)

Rozpatrujemy wszystkie stożki, których przekrojem osiowym jest trójkąt o obwodzie $20$. Oblicz wysokość i promień podstawy tego stożka, którego objętość jest największa. Oblicz objętość tego stożka.

*[matura PR, maj 2015, zad. 16]*

<details>
<summary>Odpowiedź</summary>

$l=10-r$, $h=\sqrt{100-20r}$, $V(r)=\frac\pi3r^2\sqrt{100-20r}$ dla $r\in(0,5)$. Maksimum dla $r=4$: $h=2\sqrt5$, $V=\frac{32\sqrt5}3\pi$.

</details>

## Zadanie 12

Rozpatrujemy wszystkie walce o danym polu powierzchni całkowitej $P$. Oblicz wysokość i promień podstawy tego walca, którego objętość jest największa. Oblicz tę największą objętość.

*[matura PR, maj 2017, zad. 15]*

<details>
<summary>Odpowiedź</summary>

$V(r)=\frac{r\left(P-2\pi r^2\right)}2$; maksimum dla $r=\sqrt{\frac{P}{6\pi}}$, wtedy $h=2r$ i $V=\frac P3\sqrt{\frac P{6\pi}}$.

</details>

## Zadanie 13

Rozważmy wszystkie graniastosłupy prawidłowe trójkątne o objętości $V=2$. Wyznacz długości krawędzi tego z rozważanych graniastosłupów, którego pole powierzchni całkowitej jest najmniejsze. Oblicz to najmniejsze pole.

*[matura PR, maj 2019, zad. 15]*

<details>
<summary>Odpowiedź</summary>

$P(a)=\frac{\sqrt3}2a^2+\frac{8\sqrt3}a$; minimum dla $a=2$, wtedy $h=\frac{2\sqrt3}3$, $P=6\sqrt3$.

</details>

## Zadanie 14

Wśród wszystkich graniastosłupów prawidłowych sześciokątnych, w których suma długości wszystkich krawędzi jest równa $24$, jest taki, który ma największe pole powierzchni bocznej. Oblicz długość krawędzi podstawy tego graniastosłupa.

*[matura PR, maj 2011, zad. 8]*

<details>
<summary>Odpowiedź</summary>

$12a+6h=24$, $P_b=6a(4-2a)$; maksimum dla $a=1$.

</details>

## Zadanie 15

Rozważamy wszystkie graniastosłupy prawidłowe czworokątne $ABCDEFGH$, w których odcinek łączący punkt $O$ przecięcia przekątnych $AC$ i $BD$ podstawy $ABCD$ z dowolnym wierzchołkiem podstawy $EFGH$ ma długość $d$.
a) Wyznacz zależność objętości $V$ graniastosłupa od jego wysokości $h$ i podaj dziedzinę funkcji $V(h)$.
b) Wyznacz wysokość tego z rozważanych graniastosłupów, którego objętość jest największa.

*[matura PR, czerwiec 2023, zad. 13]*

<details>
<summary>Odpowiedź</summary>

a) Połowa przekątnej podstawy: $\sqrt{d^2-h^2}$, krawędź podstawy: $\sqrt{2\left(d^2-h^2\right)}$; $V(h)=2h\left(d^2-h^2\right)$, $h\in(0,d)$. b) $h=\frac{\sqrt3}3d$.

</details>

## Zadanie 16

Rozważamy wszystkie graniastosłupy prawidłowe trójkątne o objętości $3456$, których krawędź podstawy ma długość nie większą niż $8\sqrt3$. Wykaż, że pole $P$ powierzchni całkowitej graniastosłupa w zależności od długości $a$ krawędzi podstawy graniastosłupa jest określone wzorem
$$
P(a)=\frac{a^{2}\sqrt3}{2}+\frac{13824\sqrt3}{a}.
$$

*[matura PR, maj 2024, zad. 13.1]*

<details>
<summary>Odpowiedź</summary>

$h=\frac{4\cdot3456}{\sqrt3a^2}$, $P=2\cdot\frac{\sqrt3}4a^2+3ah=\frac{\sqrt3}2a^2+\frac{13824\sqrt3}a$. ✓ (Ciąg dalszy — zadanie 13.2 — jest w serii 20.)

</details>

## Zadanie 17

Rozważamy wszystkie stożki, których wysokość jest większa od $5$, a odległość środka podstawy od tworzącej jest równa $5$. Wykaż, że objętość $V$ stożka, jako funkcja wysokości $h$ stożka, wyraża się wzorem
$$
V(h)=\frac{\pi}{3}\cdot\frac{25h^{3}}{h^{2}-25}.
$$

*[matura PR, maj 2025, zad. 12.1]*

<details>
<summary>Odpowiedź</summary>

W przekroju osiowym: $\frac{rh}{\sqrt{r^2+h^2}}=5$, stąd $r^2=\frac{25h^2}{h^2-25}$ i $V=\frac\pi3r^2h$. ✓

</details>

## Zadanie 18

Rozważamy wszystkie ostrosłupy prawidłowe trójkątne, w których suma wysokości $H$ ostrosłupa oraz promienia $R$ okręgu opisanego na podstawie tego ostrosłupa jest równa $6$. Wykaż, że objętość $V$ każdego z takich ostrosłupów w zależności od długości $R$ promienia okręgu opisanego na podstawie ostrosłupa jest określona wzorem
$$
V(R)=\frac{\sqrt3}{4}\cdot\left(6R^{2}-R^{3}\right).
$$

*[matura PR, czerwiec 2024, zad. 13.1]*

<details>
<summary>Odpowiedź</summary>

Krawędź podstawy $R\sqrt3$, pole podstawy $\frac{3\sqrt3}4R^2$, $H=6-R$; $V=\frac13\cdot\frac{3\sqrt3}4R^2(6-R)$. ✓

</details>

## Zadanie 19

Rozważamy wszystkie graniastosłupy prawidłowe trójkątne o polu powierzchni całkowitej równym $24\sqrt3$. Wykaż, że objętość $V$ graniastosłupa w zależności od długości $a$ krawędzi podstawy jest określona wzorem
$$
V(a)=6a-\frac18a^{3}.
$$

*[matura PR, czerwiec 2025, zad. 12.1]*

<details>
<summary>Odpowiedź</summary>

Z $\frac{\sqrt3}2a^2+3ah=24\sqrt3$: $h=\frac{\sqrt3\left(48-a^2\right)}{6a}$; $V=\frac{\sqrt3}4a^2h=6a-\frac18a^3$. ✓

</details>

## Zadanie 20

Objętość stożka ściętego można obliczyć ze wzoru $V=\frac13\pi H\left(r^{2}+rR+R^{2}\right)$, gdzie $r$ i $R$ są promieniami podstaw ($r<R$), a $H$ jest wysokością bryły. Dany jest stożek ścięty, którego wysokość jest równa $10$, objętość $840\pi$, a $r=6$. Oblicz cosinus kąta nachylenia przekątnej przekroju osiowego tej bryły do jednej z jej podstaw.

*[matura PR, maj 2018, zad. 10]*

<details>
<summary>Odpowiedź</summary>

$R^2+6R-216=0$, $R=12$. Przekątna trapezu (przekroju): rzut na podstawę $18$, wysokość $10$; $\cos\alpha=\frac{18}{\sqrt{424}}=\frac{9\sqrt{106}}{106}$.

</details>

## Zadanie 21

W czworościanie, którego wszystkie krawędzie mają taką samą długość $6$, umieszczono kulę tak, że ma ona dokładnie jeden punkt wspólny z każdą ścianą czworościanu. Płaszczyzna $\pi$, równoległa do podstawy tego czworościanu, dzieli go na dwie bryły: ostrosłup o objętości równej $\frac{8}{27}$ objętości dzielonego czworościanu i ostrosłup ścięty. Oblicz odległość środka $S$ kuli od płaszczyzny $\pi$, tj. długość najkrótszego spośród odcinków $SP$, gdzie $P$ jest punktem płaszczyzny $\pi$.

*[matura PR, maj 2017, zad. 9]*

<details>
<summary>Odpowiedź</summary>

$H=2\sqrt6$; odcięty ostrosłup ma skalę $\frac23$, więc $\pi$ leży na wysokości $\frac H3$ nad podstawą, a środek kuli na wysokości $\frac H4$. Odległość: $\frac H{12}=\frac{\sqrt6}6$.

</details>

## Zadanie 22

W stożek o promieniu podstawy $6$ i wysokości $8$ wpisano kulę. Oblicz jej objętość.

<details>
<summary>Odpowiedź</summary>

Promień okręgu wpisanego w przekrój osiowy: $\rho=\frac{48}{16}=3$; $V=36\pi$.

</details>

## Zadanie 23

W kulę o promieniu $5$ wpisano stożek o wysokości $8$. Oblicz objętość stożka.

<details>
<summary>Odpowiedź</summary>

$r^2=25-9=16$; $V=\frac{128}3\pi$.

</details>

## Zadanie 24

W stożek o promieniu podstawy $6$ i wysokości $12$ wpisano walec o promieniu $x$ (dolna podstawa walca leży na podstawie stożka). Wyznacz $x$, dla którego objętość walca jest największa.

<details>
<summary>Odpowiedź</summary>

Wysokość walca $12-2x$; $V(x)=\pi x^2(12-2x)$, maksimum dla $x=4$: $V=64\pi$.

</details>

## Zadanie 25

Kulę o promieniu $10$ przecięto płaszczyzną odległą o $6$ od jej środka. Oblicz pole przekroju.

<details>
<summary>Odpowiedź</summary>

Promień przekroju $8$, pole $64\pi$.

</details>

### Część C — zadania trudniejsze

## Zadanie 26 (\*)

W kulę o promieniu $R$ wpisano stożek o największej objętości. Oblicz wysokość tego stożka i jego objętość.

<details>
<summary>Wskazówka</summary>

Jeśli $h$ jest wysokością stożka, to $r^2=2Rh-h^2$.

</details>

<details>
<summary>Odpowiedź</summary>

$V(h)=\frac\pi3\left(2Rh-h^2\right)h$, maksimum dla $h=\frac{4R}3$: $V=\frac{32\pi R^3}{81}$.

</details>

## Zadanie 27

Oblicz promień kuli opisanej na ostrosłupie prawidłowym czworokątnym o krawędzi podstawy $4$ i wysokości $4$.

<details>
<summary>Wskazówka</summary>

Środek kuli leży na wysokości ostrosłupa. Zapisz warunek równej odległości od wierzchołka i od wierzchołka podstawy.

</details>

<details>
<summary>Odpowiedź</summary>

Połowa przekątnej $2\sqrt2$: $R^2=(4-R)^2+8$, $R=3$.

</details>

## Zadanie 28 (\*)

Płaszczyzna równoległa do podstawy stożka dzieli go na dwie bryły o równych objętościach. W jakiej odległości od wierzchołka (w stosunku do wysokości $h$) leży ta płaszczyzna?

<details>
<summary>Wskazówka</summary>

Odcięty stożek jest podobny do danego. Jak skala podobieństwa wpływa na objętość?

</details>

<details>
<summary>Odpowiedź</summary>

$k^3=\frac12$, odległość $\frac{h}{\sqrt[3]2}$.

</details>

## Zadanie 29

Oblicz promień kuli stycznej do wszystkich krawędzi sześcianu o krawędzi $a$.

<details>
<summary>Wskazówka</summary>

Środek kuli to środek sześcianu, a punkty styczności to środki krawędzi.

</details>

<details>
<summary>Odpowiedź</summary>

$r=\frac{a\sqrt2}2$.

</details>

## Zadanie 30 (\*\*)

Spośród wszystkich walców wpisanych w kulę o promieniu $R$ wyznacz ten, który ma największe pole powierzchni bocznej.

<details>
<summary>Wskazówka</summary>

Jeśli promień walca to $r$, to jego wysokość to $2\sqrt{R^2-r^2}$. Wygodnie jest maksymalizować kwadrat pola.

</details>

<details>
<summary>Odpowiedź</summary>

$P_b(r)=4\pi r\sqrt{R^2-r^2}$, maksimum dla $r=\frac{\sqrt2}2R$: $h=\sqrt2R$, $P_b=2\pi R^2$.

</details>
