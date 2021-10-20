## Superpermutation (Oder das Haruhi Problem)
### *Aufhänger*: Ein Anonymer 4chan User hat einen neuen, schwierigen Mathematischenn Beweis zu Supermermutationen auf 4chen Gepostet, weil er wissen wollte ich welcher Reihnfolge er Anime Folgen schauen wollte (das Haruhi Problem)

Supermutation sind zeichenkettenk, in denen alle Permutation von einer Menge enthalten sind. Also Beispiele:

Für `n=2` mit der Menge `{A,B}` ist die Superpermutation `ABA`, da dort `AB` und `BA` drin sind: **AB**A, A**BA**

Für `n=3` mit der Menge `{A,B,C}` ist die Superpermutation `ABCABACBA`, da dort alle 6 Permutatione von der Menge drin sind:
**ABC**ABACBA, A**BCA**BACBA, AB**CAB**ACBA, ABCA**BAC**BA, ABCABA**CBA**


Was für `n > 5` kein triviales Problem mehr ist, ist eine minimale Superpermutation zu finden (also eine, sodass es keine kürzere mehr gibt, es kann aber mehere "gleichkurze" geben). Denn man kann hier dann nicht mehr beweisen, dass es keine kürzere Superpermutation mehr gibt.

Bei `n=5` sind die kürzesten Superpermutation 153 lang.
Bei `n=6` sind die kürzesten, bis jetzt gefundenen Superpermutation 872 lang.

Beim Upperbond von der Länge batteln die sich die ganze Zeit. Also einer sagt es ist `n! + (n−1)! + (n−2)! + (n−3)! + n − 3` dann findet aber irgend nen dude eine die 1 weniger hat und dann wird wieder gebattle. Aber alles recht aktuell, das ist so 2018-heute


#### Der 4chan Poster.

Ein user auf 4chan wollten die 14 Folgen von seinem Anime ([The Melancholy of Haruhi Suzumiya](https://warosu.org/sci/thread/S3751105#p3751197))
in jeder möglichen Reinfolge schauen und wollte wissen, ich welcher Reihnfolger er/sie die Folgen dann schauen soll, so dass er die folgen an wengisteen oft schaut.
(wikich war, hier [original post](https://warosu.org/sci/thread/S3751105#p3751197)
und nochmal in schön [https://mathsci.fandom.com/wiki/The_Haruhi_Problem](https://mathsci.fandom.com/wiki/The_Haruhi_Problem) ) 

Also bspw. gäbe es nur 2 Folgen schaut man folge 1, dann 2, dann wieder 1.
Das sind wir wieder bei den Superpermutaion. Und bei der Frage will man natürilich die kleinste Superpermutation fur `n=14`.

Und dann hat, schon 2011, ein Anonymer user eine Beweis für einen lower bound gepostet.
Einfach random.
Und erst 2018 habe sich nach diesem [Tweet](https://twitter.com/robinhouston/status/1054637891085918209) das mal echte Mathematiker:innen angeschaut und gesehn, dass es geht und haben nen [Paper](https://oeis.org/A180632/a180632.pdf) draus geamacht. mit "Anonymouns 4chan Poster" als Hauptauthor  


### Quellen

* [Das Paper](https://oeis.org/A180632/a180632.pdf)
* [Superpermutations - Numberphile](https://www.youtube.com/watch?v=wJGE4aEWc28) <- Mit dem Paper Author, ist sehr gut
* [4chan Post](https://warosu.org/sci/thread/S3751105#p3751197)
* [The Verge Artikerl](https://www.theverge.com/2018/10/24/18019464/4chan-anon-anime-haruhi-math-mystery)
* [Wikipedia](https://en.wikipedia.org/wiki/Superpermutation)