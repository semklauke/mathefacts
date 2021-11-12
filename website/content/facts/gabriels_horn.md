---
title: Gabriel's Horn
desc: Gabriel's Horn ist ein Geometrische Körper mit einem endliche Volumen aber einr unendliche großen Oberfläche.
tags:
    - Mathe
nr: 15
episode:
    nr: 15
    name: Analplugs und Stiefmütter
    link: https://open.spotify.com/episode/4lPTPLPb7twZf83LYVixY6?si=d238ada968784887
    embed: https://open.spotify.com/embed/episode/4lPTPLPb7twZf83LYVixY6?theme=0&t=2249
    date: "15.10.2021"
    timestamp: 2249
---

<img src="https://soulofmathematics.com/wp-content/uploads/2021/03/GettyImages-123689209-56c4f8273df78c763fa076c1-removebg-preview.png" class="b img_small f_right" />

Üblicherweise, wenn man sich eine Körper mit unendlicher großer Oberfläche vorstellt, denkt man auch, dass das Volumen unendlich sein müsste.

Aber der Körper, bennant nach dem Horn das der Erzengle Gabriel spielt, hat genau diese Eigenschaft.


Um den Körper zu konstruieren nimmt man die Funktion $ f(x) = \frac{1}{x} $ für $x \geq 1 $ und rotiert sie um die x Achse.

<img src="/images/1facx.jpg" class="b img_full" /><br />

Die Erklärung von Rezo so bezog sich dabei auf die diskrete Variante von diesem Paradox, auch genannt [Gabriel's Wedding Cake](https://www.matharticles.com/ma/ma044.pdf).
Diskret im gegensatz zu Analytisch beudeutet etwas vereinfacht in der Mathematik, dass wir nicht mit Rellen Zahlen arbeiten, sonder nur mit Ganzen Zahlen oder auch Brüchen.

Enssprechend ist die Funktion, die um die x-Achse rotiert wird, bei dem "Kuchen" $ f(x) = \frac{1}{\lfloor x \rfloor} $ ( $ \lfloor x \rfloor $ beudeutet abrunden).

<img src="/images/1facfloorx.jpg" class="b img_full" /><br />

Da hier die Mathematik deutlich einfacher ist schauen wir uns auch wider den "Kuchen" an.
Zunächst die Bildliche Vorstellung: 

Stellen wir uns einen Kuchen mit dem Volumen $ 1\mathrm{cm}^3 $ vor.
Halbiert man diesen, hat jede Hälft nun $ 0.5\mathrm{cm}^3 $.
Jetzt halbiert man eine Hälft wieder und legt davon die Hälft wieder auf die andere Hälft.\
Damit hat man eine 2er Stapel mit $ 0.5\mathrm{cm}^3 + 0.25\mathrm{cm}^3 = 0.75\mathrm{cm}^3$ und das Viertel.

Dies macht man nun einfach Unendlich oft :D
Dabei wächst die Fläche des Stapels jedes man, wenn man ein neues Stück darauf legt, also ins Unendliche.
Aber das $ 1\mathrm{cm}^3 $ Volumen vom Kuchen wird nie aufgebraucht, da ja immer halbiert wird.


### Aber schauen wir uns das mal Mathematisch an:

<img src="/images/gabriels_wedding_cake.jpg" class="img_medium f_right b" />

Rotiert man also die Funktion $ f(x) = \frac{1}{\lfloor x \rfloor} $ um die x-Achse, erhält man einen Unendlich langen Stapel an Zylindern (wie rechts zu sehen). Um davon das Volumen zu berechen, berechen wir also das Volumen von jedem Zylinder und nehmen davon die Summe. Aus der Grundschule wissen wir, das Volumen eins Zylider wird mit

<center>

$ V_{\mathrm{Zylinder}} = \pi \cdot \mathrm{radius}^2 \cdot \mathrm{hoehe} $

</center>
berechnet.




Der Radius von unseren Zylindern ist das Abstand von der x-Achse. Also für den $n$-ten Zylinder ist der Radius $\frac{1}{n}$. Höhe ist hier für jeden Zylinder $1$, was man am Grpahen erkennen kann oder daran, oder genauer wenn man $ f(x) = \frac{1}{\lfloor x \rfloor} $ betrachtet, sieht man, das die funktion genau für ein Intervall von $1$ gleich bleibt und dann springt.

Jetzt müssen wir mit einer Summe alle unendliche viele Zylinder zusammen addieren:

<center>

$ V_{\mathrm{Alle Zylinder}} = \sum\limits^{\infty}_{n=1} V_{\mathrm{Zylinder}\ n} = \sum\limits^{\infty}_{n=1} \pi \cdot \left(\frac{1}{n}\right)^2 \cdot 1$

</center>

Diese Summe lässt sich vereinfachen, indem wir das $\pi$ aus der Summe holen und das quadrat in den Bruch rein holen

<center>

$ \sum\limits^{\infty}_{n=1} \pi \cdot \left(\frac{1}{n}\right)^2 \cdot 1 = \pi \cdot \sum\limits^{\infty}_{n=1} \frac{1}{n^2} $

</center>

Dank [Euler]() wissen wir, dass die Reihe $\sum\limits^{\infty}_{n=1} \frac{1}{n^2}$ gegen $\frac{\pi{}^2}{6} \approx 1.644934$ konvergiert ([Basler Problem](https://de.wikipedia.org/wiki/Basler_Problem)). 

Also ist das endliche Volumen all userer Zylinder ("Kuchenteile") insgesammt $\pi \cdot \frac{\pi{}^2}{6} \approx 5.1677$

Schauen wir uns jetzt die Oberfläche all diese Zylinder an:

Zur Vereinfachung schauen wir uns auch nur die Mantelfläche der Zylinder, also nicht die Flächen oben und unten. Denn, wenn die Mantelfäche schon unedlich ist, sind die Grundflächen auch nicht mehr relevant.
Aus der Grundschule kennen wir die Formel für die Mantelfläche eines Zylinders
<center>

$ A_{\mathrm{MantelZylinder}} = \mathrm{umfang} \cdot \mathrm{hoehe} = 2 \cdot \pi \cdot \mathrm{radius} \cdot \mathrm{hoehe}$

</center>

Das wäre also hier für den $n$-ten Zylinder $2 \cdot \pi \cdot \frac{1}{n} \cdot 1$.

Dann wieder als Summe für alle Zylinder

<center>

$ A_{\mathrm{Alle Zylinder}} = \sum\limits^{\infty}_{n=1} 2 \cdot \pi \cdot \frac{1}{n} \cdot 1 = 2 \cdot \pi \cdot \sum\limits^{\infty}_{n=1} \frac{1}{n}$

</center>

Die Reihe $\sum\limits^{\infty}_{n=1} \frac{1}{n}$ ist die sogenannte [Harmonische Reihe](https://de.wikipedia.org/wiki/Harmonische_Reihe), von der bekannt ist, dass sie divergiert, also gegen Unendlich läuft.


Somit ist die Fläche alle Zylinder Unendlich groß.

### Jetzt in stetig

Die Mathematik hinter Gabriels Horn ist noch etwas kompliziert, wird aber in diesem Video ganz gut erläuter

<iframe width="560" height="315" src="https://www.youtube.com/embed/yZOi9HH5ueU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Quellen

* [https://www.matharticles.com/ma/ma044.pdf](https://www.matharticles.com/ma/ma044.pdf)
* [Gabriel's Horn](https://en.wikipedia.org/wiki/Gabriel%27s_Horn)
* [Gabriel's Horn Paradox - Numberphile](https://www.youtube.com/watch?v=yZOi9HH5ueU)
* [Harmonische_Reihe](https://de.wikipedia.org/wiki/Harmonische_Reihe)
* [Basler Problem](https://de.wikipedia.org/wiki/Basler_Problem)
* [Zylinder berechnen/](https://www.nachhilfe-team.net/lernen-leicht-gemacht/zylinder-berechnen/)
