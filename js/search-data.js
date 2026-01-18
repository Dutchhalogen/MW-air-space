// js/search-data.js
const searchIndex = [
  {
    title: "Home",
    url: "index.html#home",
    content: `Hier kommt der Text von deiner Startseite rein.`
  },
  {
    title: "Stealth – Einführung",
    url: "stealth.html#intro",
    content: `Stealth spielt in der modernen Kriegsführung eine sehr wichtige Rolle. Sie ist nicht nur äusserst vielseitig, sondern es gibt auch viele verschiedene technologische Varianten, sodass sich für praktisch jede Mission eine anwendbare Stealth Technologie finden lässt. Im Allgemeinen ist Stealth jedoch ein simples Konzept. Übersetzt man das Wort "Stealth" ins Deutsche, erhält man das Wort "Heimlichkeit", was das Prinzip eigentlich ziemlich akkurat wiedergibt. 
              Im Grunde ist Stealth eine defensive Eigenschaft. Aber anstatt Treffer durch umfangreiche Panzerung zu überstehen oder durch aktive defensive Systeme Angriffe zu verhindern, benutzt Stealth die simpelste und älteste Defensivtaktik: Nicht gesehen werden. Dies ist bei jeder Art von Stealth ausnahmslos der Fall. Die Unterschiede liegen in dem Bereich, in welchem sie operieren. 
              Einige dieser Stealth-Techniken werden schon seit Jahrtausenden verwendet, wie z.B. in Sun Tzu’s «The Art of War» (5. Jahrhundert v. Chr.) dokumentiert wird. Dort heisst es: «All warfare is based on deception.», was besagt, dass jeder Kampf auf Täuschung basiert. Ein Beispiel ist die Technik des "Visual Stealth", die beschreibt, wie man sich vor den Augen des Feindes tarnt. Solche Taktiken werden schon seit Tausenden von Jahren angewendet. Andere Taktiken sind jedoch sehr modern, wie beispielsweise Radar- oder Infrarot Stealth, die erst seit den 1980er Jahren existieren. 
              Die wichtigsten Stealth Arten werden hier erklärt.`
  },
  {
    title: "Visual Stealth",
    url: "stealth.html#visual",
    content: `Visual Stealth ist die älteste Art von Stealth Technik, welche man umgangssprachlich auch einfach "Tarnung" nennen kann. Ihr Ziel ist es, im sichtbaren Lichtspektrum unentdeckt zu bleiben. Dies erreicht man, indem man sich optisch so sehr wie möglich an die Umgebung anpasst. Visual Stealth wird heute in fast allen militärischen Einheiten verwendet: Von Infanterie bis zum Panzer.
              Als «Active Visual Stealth», wird hingegen eine Technologie bezeichnet, welche aktiv die Umgebung nachzuahmen versucht oder sogar den Eindruck von Transparenz erwecken will. Diese Technologie ist schon lange in Entwicklung, jedoch sehr komplex und deshalb noch nicht stark verbreitet.`
  },
  {
    title: "Radar Stealth",
    url: "stealth.html#radar",
    content: `"Radar Stealth” ist die Technologie, die meistens gemeint ist, wenn von “Stealth” gesprochen wird. Die Idee dahinter ist, für Radar, also «Radio Detection and Ranging» unentdeckt zu bleiben.  Radare senden elektromagnetische Wellen aus, welche dann von einem Objekt zurückgeworfen und von einer Antenne erkannt werden. Das Ziel besteht darin, keine elektromagnetische Wellen zurückzuwerfen und so unsichtbar zu bleiben.
              Radar Stealth ist bei Flugzeugen und Schiffen am weitesten verbreitet, jedoch liegt hier der Fokus auf Flugzeugen (wobei die meisten Stealth Flugzeuge nur gegen «High Frequency Radar» getarnt, jedoch nicht gegen «Low Frequency Radar» getarnt sind).
              Grundsätzlich gibt es zwei Arten von Radar Stealth: Geometrical Stealth und Material Stealth. 
              Beim «Geometrical Stealth», wir die Radarerkennung durch die Form des Objekts reduziert. Wenn ein Objekt eine gewisse Form hat, zum Beispiel eine geringe Anzahl an 90°-Winkeln, keine Spalten und wenige Kanten hat, reflektiert es automatisch weniger Radar zum Empfänger zurück und zerstreut stattdessen die Strahlen.  
              Beim «Material Stealth», also Stealth durch Material, wird sogenanntes «RAM» («Radar Absorbing Material») verwendet. Dies kann eine Oberflächenbeschichtung oder Baumaterial (oder beides) sein, welche die Radarstrahlen schluckt und die Energie absorbiert.  
              In der Regel werden beide Stealth-Technologien gemeinsam eingesetzt. Es gibt jedoch Ausnahmen. Bei älteren Flugzeugen, die nachträglich mit Stealth nachgerüstet werden sollen, ist es oft nicht möglich, die Geometrie zu verändern. In solchen Fällen wird lediglich RAM hinzugefügt. Beispiele dafür sind die USAF F-16C, die USN F/A-18E/F, der Eurofighter Typhoon und die Dassault Rafale. 
              Es gibt auch den umgekehrten Fall: Flugzeuge, die geometrisch „stealthy“ sind, jedoch kein RAM besitzen. Der Grund dafür liegt meist in fehlenden Materialkenntnissen eines Landes oder dessen technologischen Einschränkungen, da RAM sehr komplex in der Herstellung ist. Beispiele hierfür sind die VVS Su-T50 und die USAF Bird of Prey. 
              Stealth Flugzeuge, die nur eine der beiden Stealth-Eigenschaften besitzen, sind jedoch stark limitiert, insbesondere solche, die nur auf RAM setzen. 
              So ist die «RCS» (Radar cross section, Quantifizierung von Stealth in m2, je kleiner desto besser) des Eurofighter Typhoons (nur RAM keine Geometrie) bei geschätzten 0.5 - 1.0 m2 Clean (ohne Waffen). Im Vergleich: Die SU-T50 (nur Geometrie, kein RAM) hat eine geschätzte RCS von 0.1 - 0.25 m2 Loaded (mit Waffen). Beide sind jedoch nicht annähernd so stealthy wie Flugzeuge mit beiden Eigenschaften wie die F-35 (0.0035 - 0.0005 m2) oder die F22 (0.0001 - 0.0002 m2). Die besten Stealth Eigenschaften besitzen jedoch «Flying Wing» Bomber, da diese auch gegen Low-Frequency Radar stealthy sind, wie zum Beispiel die B-2 (0.000025 - 0.0001 m2).`
  },
  {
    title: "Infrared Stealth",
    url: "stealth.html#infrared",
    content: `„Infrared Stealth“ wird oft gemeinsam mit „Radar Stealth“ eingesetzt und wurde ungefähr zur gleichen Zeit erfunden. Die Funktionsweise ist jedoch sehr viel simpler als bei Radar Stealth: Ein Objekt soll möglichst wenig Wärme abstrahlen.
              Infrarot Stealth ist sehr verbreitet und wird bei Flugzeugen, Schiffen und Landfahrzeugen eingesetzt. Der Fokus liegt hier ebenfalls auf Flugzeugen. Momentan gibt es bei Flugzeugen hauptsächlich eine Form von Infrarot Stealth, nämlich die Reduktion der Triebwerkswärme. Da das Triebwerk mit Abstand der heisseste Teil eines Flugzeugs ist, ist das auch nicht überraschend.
              Dabei wird einerseits kalte Luft in die Triebwerksabgase geblasen. Andererseits kann der Aufbau der "Nozzles" optimiert werden, zum Beispiel durch eckigere oder geschlitzte Formen).
              Es gibt jedoch noch eine weitere, experimentelle Form von Infrarot Stealth. Dabei wird das gesamte Flugzeug mit einer reflektierenden Beschichtung ausgestattet, die Infrarotstrahlung reflektiert und zerstreut. Dadurch können Infrarot-Algorithmen verwirrt werden. Während Radar sehr einfach zu lesendes Signal liefert, benötigen IR-Daten komplexe Algorithmen, die nachweislich Mühe mit reflektierenden Oberflächen haben.`
  },
  {
    title: "Sonar Stealth",
    url: "stealth.html#sonar",
    content: `Sonar Stealth dient dazu, Unterwasserfahrzeuge vor Sonar zu verstecken, also vor Sound Navigation and Ranging. Dies funktioniert einerseits, indem das Fahrzeug selbst möglichst wenig Geräusche produziert, und andererseits, indem es aktive Sonar-Pings nur schwach reflektiert. Die einzige momentane Strategie hierzu sind Gummiplatten an der Aussenhülle. Diese Art von Stealth wird nur bei U-Booten und teilweise bei Schiffen eingesetzt.`
  },
  {
    title: "Weitere Arten",
    url: "stealth.html#more",
    content: `Es gibt noch weniger verbreitete oder nicht klar definierte Stealth-Arten, zum Beispiel Sound Stealth (nicht verwechseln mit Sonar Stealth), bei der die Geräuschsignatur ausserhalb des Wassers minimiert wird, oder UV Stealth, einer Unterart von IR Stealth. Auf diese wird hier jedoch nicht weiter eingegangen.`
  },
  {
    title: "Sensor Fusion",
    url: "sensor_fusion.html#fusion",
    content: `Hier kommt dein Text zu Sensor Fusion rein.`
  }
  // weitere Seiten / Kapitel kannst du hier hinzufügen
];

