## Four color theorem
### *Aufhänger*: Mann kann JEDE Landkarte mit nur vier Farben einfärbern, sodass aneinandergrenzenden Länder nie die selbe Farbe haben.
### Und das war die erste große Mathematische Entdeckung, die durch einen Computer (bzw. Computergestützt) bewiesen wurde

* Herkufnt aus der Graphen-Theorie => adjazente knoten haben nie die selbe Farbe. (man kann Landkarten hier immer durch Graphen ersetzen)
* Klar war schon 1852: 3 farben geht nicht immer und 5 werden bei keinem Beispiel gebraucht. Aber beweis, dass 4 immer geht fehlt (ähnlich zu der colatz Vermutung)
* Es gab viele Beweisversuche
	- [Alfred Kemp](https://de.wikipedia.org/wiki/Alfred_Kempe) 1879, wiederlegt erst 1890
	- [Peter Guthrie Tait](https://de.wikipedia.org/wiki/Peter_Guthrie_Tait) 1880, wiederlegt 1891
* [Heinrich Heesch](https://en.wikipedia.org/wiki/Heinrich_Heesch) (DE) zwischen 1960 - 1970 hatte ne gute Idee: Man kann alle Landkarten reduzuieren auf kleinere (so gannte "unavoidable") Karten. Und wenn man die unavoidable Karten mit 4 farben einfärben kann, dann auch die Größeren, die reduzuiert wurden.
* Wenn man also alle diese kleinen unavoidable Landkarten überprüft, ob sie mit 4-färb-bar sind, sind dann auch alle Karten 4-färb-bar.
> BISSCHEN DEEPER:
> Jede Landkarte kann in einen Grpahen überführt werden, aber nichts andersrum. Knoten = Länder und Kante = die Länder haben eine Grenze auf der Karte. Manche Knoten kann man einfach nicht in eine Landkarte überführen, z.B. selfloops oder zu hohe Kanten-Grade in den Knoten. Darum gibt es auch nur einen endliche Anzahl and Graphen, die diese Basecaseses für die Landkarten definiert.
* Bei ersten versuch gab es dann 1834 von diesen diese kleinen unavoidable Landkarte. Zu viele für die Computer damals
* Erst um 1889 konnte man das richtig Checken und es hat mehrere tausedn Stunden gedauert.
* Also war das der erste Mathmatisch, Computergestützte Bewei. Da gab es viel Kritik/wurde von manchen vollblut Mathematikern garnicht erst anerkannt:
	- Man könnte ja garnicht jeden Schritt nachvollziehen, den der Computer macht.
	- Nur wenn alle Schritte von einem Menschen gemacht und kontrolliert werden, ist es es vollständiger Beweis (lol wie lost weil Menschen ja keine Fehler machen)
	- Man muss auf Korrektheit von Hardware und Compiler vertrauen
	- Manchen fehlt auch die "Mathemaische eleganz" [Ian Stewart](https://de.wikipedia.org/wiki/Ian_Stewart_(Mathematiker))


#### Quellen
* [https://en.wikipedia.org/wiki/Four_color_theorem](https://en.wikipedia.org/wiki/Four_color_theorem) 
* [Numberfile Youtube](https://www.youtube.com/watch?v=NgbK43jB4rQ) <- Empfehlung
* Zum abnerden: [https://link.springer.com/article/10.1007/BF03023914](https://link.springer.com/article/10.1007/BF03023914) (kann da auf nachfrage gerne das pdf rueberwachsen lassen)
