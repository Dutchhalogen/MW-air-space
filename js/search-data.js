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
    title: "Stealth – Visual Stealth",
    url: "stealth.html#visual",
    content: `Visual Stealth ist die älteste Art von Stealth Technik, welche man umgangssprachlich auch einfach "Tarnung" nennen kann. Ihr Ziel ist es, im sichtbaren Lichtspektrum unentdeckt zu bleiben. Dies erreicht man, indem man sich optisch so sehr wie möglich an die Umgebung anpasst. Visual Stealth wird heute in fast allen militärischen Einheiten verwendet: Von Infanterie bis zum Panzer.
              Als «Active Visual Stealth», wird hingegen eine Technologie bezeichnet, welche aktiv die Umgebung nachzuahmen versucht oder sogar den Eindruck von Transparenz erwecken will. Diese Technologie ist schon lange in Entwicklung, jedoch sehr komplex und deshalb noch nicht stark verbreitet.`
  },
  {
    title: "Stealth – Radar Stealth",
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
    title: "Stealth – Infrared Stealth",
    url: "stealth.html#infrared",
    content: `„Infrared Stealth“ wird oft gemeinsam mit „Radar Stealth“ eingesetzt und wurde ungefähr zur gleichen Zeit erfunden. Die Funktionsweise ist jedoch sehr viel simpler als bei Radar Stealth: Ein Objekt soll möglichst wenig Wärme abstrahlen.
              Infrarot Stealth ist sehr verbreitet und wird bei Flugzeugen, Schiffen und Landfahrzeugen eingesetzt. Der Fokus liegt hier ebenfalls auf Flugzeugen. Momentan gibt es bei Flugzeugen hauptsächlich eine Form von Infrarot Stealth, nämlich die Reduktion der Triebwerkswärme. Da das Triebwerk mit Abstand der heisseste Teil eines Flugzeugs ist, ist das auch nicht überraschend.
              Dabei wird einerseits kalte Luft in die Triebwerksabgase geblasen. Andererseits kann der Aufbau der "Nozzles" optimiert werden, zum Beispiel durch eckigere oder geschlitzte Formen).
              Es gibt jedoch noch eine weitere, experimentelle Form von Infrarot Stealth. Dabei wird das gesamte Flugzeug mit einer reflektierenden Beschichtung ausgestattet, die Infrarotstrahlung reflektiert und zerstreut. Dadurch können Infrarot-Algorithmen verwirrt werden. Während Radar sehr einfach zu lesendes Signal liefert, benötigen IR-Daten komplexe Algorithmen, die nachweislich Mühe mit reflektierenden Oberflächen haben.`
  },
  {
    title: "Stealth – Sonar Stealth",
    url: "stealth.html#sonar",
    content: `Sonar Stealth dient dazu, Unterwasserfahrzeuge vor Sonar zu verstecken, also vor Sound Navigation and Ranging. Dies funktioniert einerseits, indem das Fahrzeug selbst möglichst wenig Geräusche produziert, und andererseits, indem es aktive Sonar-Pings nur schwach reflektiert. Die einzige momentane Strategie hierzu sind Gummiplatten an der Aussenhülle. Diese Art von Stealth wird nur bei U-Booten und teilweise bei Schiffen eingesetzt.`
  },
  {
    title: "Stealth – Weitere Arten",
    url: "stealth.html#more",
    content: `Es gibt noch weniger verbreitete oder nicht klar definierte Stealth-Arten, zum Beispiel Sound Stealth (nicht verwechseln mit Sonar Stealth), bei der die Geräuschsignatur ausserhalb des Wassers minimiert wird, oder UV Stealth, einer Unterart von IR Stealth. Auf diese wird hier jedoch nicht weiter eingegangen. `
  },
  {
    title: "Sensor Fusion – Einführung",
    url: "sensor_fusion.html#intro",
    content: `Sensor Fusion ist ein Überbegriff für alle Systeme, die Informationen aus verschiedenen Quellen kombinieren und verwerten. Diese Quellen variieren stark und können zum Beispiel Radar-, Infrarot- oder elektromagnetischer Natur sein. Bei der Sensorfusion geht es jedoch nicht darum, einfach mehrere Sensoren und Informationsquellen zu besitzen, sondern darum, diese Intelligent (oft mit KI) zu kombinieren und für andere Systeme oder Menschen lesbar zu machen. Dies hat den Zweck in kritischen Situationen Entscheidungen einfacher und schneller zu treffen. Viele moderne Kriegs-Systeme wie zum Beispiel Flugzeuge, auf denen hier der Fokus liegt, brauchen zwingend Sensor-Fusion, da die Menge und Komplexität der Systeme ohne Fusion absolut unbezwingbar wären. Sensor Fusion ist also ein Zusatzfeature für moderne Kriegssysteme, hat sich aber in der Zwischenzeit als zwingendes Bestandteil moderner Kriegsführung etabliert. Ein weiterer Bestandteil von Sensor Fusion sind Datalinks. Diese bezeichnen den Datentransfer zwischen Einheiten, während Sensor Fusion meist Datenfusion innerhalb einer Einheit beschreibt. Heutzutage sind aber meistens beide kombiniert und unter Sensor Fusion bekannt.`
  },
  {
    title: "Moderne Sensor Fusion",
    url: "sensor_fusion.html#modern",
    content: `Moderne Sensor Fusion geht jedoch auch über das einfache Verwerten von Informationen hinaus. Einfache Systeme waren schon in den 70er Jahren vorhanden und haben hauptsächlich Informationen innerhalb eines Systems sortiert und arrangiert. Heutige Systeme jedoch machen weit mehr aus den Informationen. Sie werden zusätzlich analysiert, gefiltert, verbessert, kombiniert und geteilt, auch mit anderen Einheiten. So können Flugzeuge, die mit NATO Link16 ausgestattet sind, Informationen vollständig automatisiert teilen und verwerten. Angenommen, eine E-3 AWACS (Fliegende Radarstation) erfasst ein Ziel. Dieses Flugzeug besitzt selber jedoch keine Waffen. Mit dem Link16 kann es die Zieldaten an eine F-35 in der Nähe schicken, die dann das Ziel zwar nicht selber erfasst, aber trotzdem eine Aim-120D (Air to Air Missile) abfeuern kann. Diese bekommt dann ihre Micourse Zieldaten von der E-3, obwohl die F-35 sie abgefeuert hat. Sagen wir jetzt aber die E-3 kann die Aim-120D nicht bis zum Ziel lenken, da es im Zielgebiet zu gefährlich für eine unbewaffnete Maschine ist. In diesem Fall kann eine F-22, die bisher überhaupt nicht beteiligt war, bei der Aktion teilnehmen. Wegen der Tarnkappen Eigenschaften der F-22 hat sie keine Probleme im Zielgebiet. Letztendlich wird die Aim-120D die letzten etwa 25 Kilometer vom eigenen internen Radar gelenkt und erfüllt die Mission. All das ist nur möglich, weil <strong>ALLE</strong> beteiligten Flugzeuge NATO Link16 besitzen. Natürlich haben China, Russland und andere Länder eigene Systeme entwickelt, aber NATO Link16 ist am weitesten verbreitet.
              Besonders bei unbemannten oder "intelligenten" Systemen werden solche Systeme immer wichtiger, da diese entweder ohne Menschen operieren oder wegen ihrer Funktionsweise einfach sehr viele Daten brauchen und diese nur durch Sensorfusion erhalten können. Auch die wachsenden Zahlen an Stealth Flugzeugen erfordern Sensor Fusion, da diese mit nur einem alleinstehenden Sensor schwer zu erfassen sind.
              Das vorherige Beispiel ist nur eines von vielen Einsatzgebieten von Datalinks und Sensorfusion.
              Ein weiterer, tatsächlich von der US Navy vorgestellter Einsatz von Sensor Fusion ist folgender: Die USN operiert im Moment 2 Flugzeugtypen von ihren Flugzeugträgern aus. Die F/A-18E/F, ein schwerer, nicht getarnter Flieger der 4ten Generation und die F-35C, ein leichter, getarnter Flieger der 5ten Generation. Ausserdem nutzt die USN die Aim-174B, eine Extrem-Langstrecken- Rakete. Diese hat eine Reichweite von über 350 km. Sie ist so gross, dass sie nur von der schweren F/A-18 getragen werden kann. Jedoch besitzt dieses Flugzeug ein zu schwaches Radar, um 350km Reichweite zu haben. Also was tut man? Man sendet eine F-35 näher zum Ziel, die wegen ihrer Tarnkappen Eigenschaften unentdeckt bleibt. Dann sendet die F-35 die Zieldaten zur F/A-18 zurück, die dann die Aim-174B abfeuert. Die F-35 übernimmt darauf die Kontrolle über die Aim-174B und lenkt sie ins Ziel. So nutzt man die Tragekapazität der F/A-18 zusammen mit den Modernen Systemen der F-35. Diese Mission wurde von der Navy exakt beschrieben und angeblich auch erprobt.
              Dies beschreibt jedoch eher Einsatzgebiete und nicht die tatsächlichen Systeme. Mit diesen befassen wir uns jetzt:`
  },
  {
    title: "Systeme der Sensor Fusion",
    url: "sensor_fusion.html#system",
    content: `Das vermutlich modernste System ist das der F-35A/B/C. Während die meisten modernen westlichen Flugzeuge die Standard Sensoren besitzen (Radar IRST Link16) und diese dann nachträglich fusionieren, ist die gesamte F-35 eigentlich ein vorfusioniertes Datensystem. Das Herzstück ist das MADL (Multifunction Advanced Datalink) - im Prinzip Link16 aber besser. Damit verbunden sind andere Fusionssysteme wie das AAQ-37 DAS, auch genannt das "Distributed Aperture System", das mehrere Kameras verbindet, um ein fusioniertes Bild der Umgebung zu erzeugen. Es erlaubt dem Piloten sogar, mit seinem Helm durch das Flugzeug zu schauen. Andere Bestandteile des Systems sind das AAQ-40 EOTS, ein Multispektrales Electro Optical Targeting System, das jegliche Waffen lenken kann, und das APG-81 Radar sowie das ASQ-239 Elektronische Kriegsführungssystem. All das macht die F-35 zum technologisch mit Abstand besten Flugzeug mit der besten Sensor-Fusion.
              Zugegeben haben fast alle modernen Flugzeuge Sensor Fusion, wenn auch nicht so gute wie der F-35. Eurofighter Typhoon, Dassault Rafale, Gripen E, F-22, F/A-18, Su-57, Su-35 und Mig-35 haben alle moderne und kompetente Systeme. Man muss auch immer bedenken, dass Sensor Fusion auch Nachteile hat. Insbesondere die Komplexität, die hohen Kosten und die "Überintegration". Überintegration bedeutet in diesem Fall, das Data Fusion erfordert, dass alle Systeme komplett vernetzt sind und nicht ohne einander auskommen. So kann ein Ausfall eines Systems den Ausfall aller Systeme bedeuten. Natürlich werden diese Probleme mitigiert, trotzdem KÖNNTE man den Ansatz der F-35, mehr auf Technologie und Integration zu setzen, anstatt auf Performance und Power, als schlecht ansehen. Es entsteht dasselbe Problem wie beim Killchain Prinzip.`
  },
  {
    title: "Fighter Generations – Einführung",
    url: "fighter_generations.html#intro",
    content: `Fighter Generations ordnen Kampfjets zu bestimmten Generationen zwischen 0 und 6 zu. Allerdings sind diese Zuordnungen nicht genau definiert und variieren von Quelle zu Quelle. Kampfjets wurden erstmals in den 1990ern Generationen zugewiesen. Es gibt unzählige Skalen für Generationen, darunter 1, 2, 3, 4, 4.5, 5 und 6. Einigkeit besteht lediglich darüber, dass die Generation zwischen 1970 und 1990 meist in zwei bis drei Untergruppen eingeteilt wird. Diese werden als vierte und 4.5te Generation bezeichnet. Sie sind heute die bei weitem verbreitetsten, während viele Länder zur fünften Generation wechseln und bereits an der sechsten Generation arbeiten. Auch anhand welcher Eigenschaften Flugzeuge den Generationen zugeordnet werden ist umstritten. Einige Merkmale sind jedoch relativ klar definiert. Flugzeuge mit geraden Flügeln gehören zur ersten Generation, ab der zweiten Generation treten gepfeilte Flügel auf. Stealth ist eine entscheidende Eigenschaft für die fünfte und sechste Generation. Radar und Radarlenkwaffen gibt es ab der dritten Generation, moderne Sensorsysteme meist ab der 4.5ten Generation. Diese Generationen gelten nur für Kampfjets und stellen keine offiziell festgelegte Klassifikation dar.`
  },
  {
    title: "Fighter Generations – 1st Generation",
    url: "fighter_generations.html#gen1",
    content: `Die erste Generation beschreibt Jets, die während oder direkt nach dem Zweiten Weltkrieg ihren Erstflug hatten. Sie zeichnen sich durch gerade Flügel aus und sind zwar schneller als Kolbenmotorflugzeuge, jedoch in allen anderen Bereichen unterlegen. Alte Jet-Triebwerke waren schwer, schwach und reagierten langsam auf Schubänderungen. Häufig wurden Centrifugal Flow Turbojets verwendet. Die Bewaffnung bestand ausschliesslich aus Maschinengewehren und die Elektronik war sehr limitiert. Beispiele sind Me-262, F-80, Mig-9 und die Gloster Meteor.`
  },
  {
    title: "Fighter Generations – 2nd Generation",
    url: "fighter_generations.html#gen2",
    content: `Die zweite Generation beschreibt Flugzeuge der späten 1940er und frühen 1950er Jahre. Sie besitzen meist nach hinten gepfeilte Flügel und Axial Flow Turbojets, welche viele Probleme der ersten Generation lösten. Die Elektronik war deutlich moderner, mit Feuerleitradars und hydraulisch-elektrischen Steuersystemen. Teilweise verfügten sie bereits über infrarotgesteuerte Kurzstrecken-Lenkwaffen. Einige Modelle konnten Überschallgeschwindigkeit erreichen. Beispiele sind F-86, Mig-15, Mig-17, Mig-19 und F-100.`
  },
  {
    title: "Fighter Generations – 3rd Generation",
    url: "fighter_generations.html#gen3",
    content: `Die dritte Generation umfasst Kampfjets aus den Jahren 1960 bis 1975. Alle Flugzeuge dieser Generation sind überschallfähig, teilweise bis Mach 2 oder 3. Die neue Raketen-Doktrin führte zu höherem Schub, mehr Treibstoff und stärkerer Bewaffnung, jedoch zu geringerer Wendigkeit. Maschinengewehre wurden durch Radar- und Infrarotlenkwaffen ersetzt. Die Flugzeuge verfügten nun über echte Such- und Verfolgungsradare, was BVR-Kampf ermöglichte. Erste teildigitale Computersysteme wurden eingesetzt, wie bei der F-4 Phantom. Beispiele sind Mig-21, F-4 Phantom, F-5, Mig-23, English Electric Lightning und Mirage III.`
  },
  {
    title: "Fighter Generations – 4th Generation",
    url: "fighter_generations.html#gen4",
    content: `Die vierte Generation beschreibt Kampfflugzeuge aus der Zeit zwischen 1975 und 1990. Sie zeichnet sich durch verbesserte Elektronik, grössere Reichweiten und die Einführung von Multirole-Fähigkeiten aus. Flugzeuge konnten nun mehrere Missionen erfüllen. Dies wurde durch digitale Multifunktionscomputer, integrierte Schaltkreise und moderne Mikroelektronik ermöglicht. Computerunterstützte Aerodynamik verbesserte Wendigkeit und Flugleistung. Low Bypass Turbofans führten zu besseren Schub-Gewichts-Verhältnissen. Einige Flugzeuge wie die F-14 und Su-24 nutzten verstellbare Pfeilflügel. Beispiele sind F-14, F-15, F-16, F/A-18, Mig-29, Su-27, Mirage 2000 und Panavia Tornado.`
  },
  {
    title: "Fighter Generations – 4.5th Generation",
    url: "fighter_generations.html#gen4.5",
    content: `Die 4.5te Generation ist eine Weiterentwicklung der vierten Generation und besitzt teilweise Technologien der fünften Generation. Diese Flugzeuge wurden hauptsächlich zwischen 1990 und 2000 entwickelt, einige werden bis heute produziert. Zu den wichtigsten Merkmalen gehören AESA-Radare, moderne Infrarotsensoren, Sensor Fusion, Datenlinks und teilweise Radarabsorptionsmaterialien. Obwohl diese Flugzeuge sehr leistungsfähig sind, setzen die meisten Länder langfristig auf Stealth-Flugzeuge, da diese Gegner auf grosse Distanz bekämpfen können, während sie selbst nur schwer entdeckt werden. Beispiele sind F-15E, F-16E, Su-30, Su-35, Mig-35, Eurofighter Typhoon, Rafale und J-10.`
  },
  {
    title: "Fighter Generations – 5th Generation",
    url: "fighter_generations.html#gen5",
    content: `Die fünfte Generation ist derzeit die modernste Generation im aktiven Dienst. Der erste einsatzfähige 5th-Gen-Kampfjet war die F-22, die zwischen 1995 und 2005 eingeführt wurde. Charakteristisch sind vollständig integrierte Stealth-Eigenschaften, stark reduzierte Radarquerschnitte und interne Waffenschächte. Moderne Sensor Fusion, Thrust Vectoring und Infrarotsuchsysteme wie IRST sind verbreitet. Trotz Stealth bleibt die Wärmesignatur eine Herausforderung. Flugzeuge dieser Generation befinden sich weiterhin in aktiver Weiterentwicklung. Beispiele sind F-22, F-35, Su-57, J-20 und J-35.`
  },
  {
    title: "Fighter Generations – 6th Generation",
    url: "fighter_generations.html#gen6",
    content: `Die sechste Generation umfasst zukünftige Kampfflugzeuge, die voraussichtlich ab 2030 bis 2035 in Dienst gestellt werden. Da sich noch kein Flugzeug dieser Generation im aktiven Einsatz befindet, sind die Merkmale nicht eindeutig definiert. Erwartete Fähigkeiten sind verbesserte Stealth-Eigenschaften aus allen Blickwinkeln, weiterentwickelte Sensor Fusion, die Zusammenarbeit mit KI-gesteuerten Drohnen sowie neue Technologien wie variable Cycle Engines und Directed Energy Weapons. Viele dieser Eigenschaften befinden sich noch in der Konzept- oder Entwicklungsphase.`
  },
  {
  title: "Killchain – Einführung",
  url: "killchain.html#intro",
  content: `Die "Killchain" ist ein Konzept, das von praktisch allen Luftwaffen weltweit verwendet wird. Es beschreibt den Prozess zwischen dem ersten Moment, in dem ein Ziel auf dem Bildschirm erscheint, bis zu dem Moment, an dem die Analyse eines erfolgreichen oder erfolglosen Abschusses fertiggestellt ist. Verschiedene Luftwaffen verwenden verschiedene Varianten der Killchain, wir konzentrieren uns hier jedoch auf die NATO Standard-Variante, das sogenannte F2T2EA System. F2T2EA steht für Find / Fix / Track / Target / Engage / Assess. Ein weiteres Konzept ist das sogenannte "Killnet". Dieser Begriff wird vom US-Militär benutzt und soll mehrere Killchains zu einem Netz zusammenfügen, Schwächen der Chain zu beheben und mehr Nutzen aus Sensor Fusion zu ziehen. Als erstes ist es wichtig zu verstehen, wie genau F2T2EA funktioniert, denn erst dann kann man Vor- und Nachteile verstehen und es mit anderen Killchains und dem Killnet vergleichen.`
},
{
  title: "Killchain – Find",
  url: "killchain.html#find",
  content: `Das "Find" in der Killchain beschreibt der Moment, wo das das Ziel zum ersten Mal wahrgenommen wird. Hierbei kann jegliche Methode verwendet werden, von Satelliten über Radar bis zu Fotos. Alles, womit die Existenz eines Ziels zum ersten Mal bewiesen werden kann, gilt als "Find". Es sollte jedoch klar sein, dass das Find allein noch praktisch keinen Nutzen hat, da jegliche Informationen zum Ziel fehlen. Es ist zwar konzeptuell der Wichtigste Schritt, für sich allein jedoch nicht nutzbar.`
},
{
  title: "Killchain – Fix",
  url: "killchain.html#fix",
  content: `Das "Fix" ergänzt nun das "Find". Bei diesem Schritt werden relevante Informationen zum Ziel gesammelt, z.B. Position, Verhalten und Typ des Ziels. Diese Informationen basieren jedoch noch nicht zwingend auf Echtzeit, sondern können auch vergangenes Verhalten des Ziels beschreiben. Im spezifischen Fall von Flugzeugen sind die meisten "Fix"-Daten in Echtzeit, da Flugzeuge sich sehr schnell bewegen, weshalb alte Information praktisch nutzlos ist. Man geht deshalb meist direkt zum nächsten Schritt über. Es ist anzumerken, dass besonders bei diesem Schritt Stealth Technologie sehr nützlich ist, da man ein Stealth Flugzeug zwar finden kann, das Fixen jedoch sehr schwierig ist.`
},
{
  title: "Killchain – Track",
  url: "killchain.html#track",
  content: `"Track" ist der erste aktive Schritt zum Ziel. Eigentlich ist er fast identisch zu "Fix", jedoch müssen die Daten nun zwingend in Echtzeit sein. Deshalb sind nun auch die Methoden, die ein "Track" produzieren können, stark eingeschränkt. Methoden wie Fotos, Videos und Satelliten entfallen und es bleiben nur Methoden wie Echtzeit-Kameras, Radar, IRST etc. Auch hier sind Gegenmassnahmen wie Stealth und elektronische Kriegsführung sehr effektiv. In den meisten Fällen ist “Track” auch der letzte Schritt, der absolviert wird, bevor das Ziel selbst merkt, dass es in eine Killchain geraten ist.`
},
{
  title: "Killchain – Engage",
  url: "killchain.html#engage",
  content: `"Engage" ist bei weitem der spannendste und auch aktivste Schritt in der Killchain. Als erstes wird entschieden, ob der Kill tatsächlich stattfinden soll. Dieser Entscheid ist gewissermassen der "Point of no return". Danach wird die Waffe zum ausführen des Kills abgefeuert. Nun sind also nicht mehr nur Sensoren im Spiel, denn die "Kugel" ist jetzt in der Luft. Der Gegner wird muss jetzt sehr aktiv werden und versuchen, mit verschiedensten Methoden dem Geschoss zu entkommen. Stealth, EW und vieles mehr wird jetzt wieder viel nützlicher als zuvor. Die Wahrscheinlichkeit, eine abgefeuertes Geschoss zu überleben, ist relativ hoch. Man muss aber beachten, dass nach einem erfolgreichen "Track"-Schritt der "Engage"-Schritt beliebig oft ausgeführt werden kann, um das Ziel zu eliminieren, vorausgesetzt, es steht noch Munition zur Verfügung. Während in den vorherigen Phasen ein Entkommen zwar schwer war, ein einziges Entkommen dafür reichte, gestaltet sich nun das Entkommen leichter, muss jedoch unter hohem Stress und einer sich verschlechternden Situation mehrmals geschehen, was die tatsächliche Schwierigkeit extrem erhöht. Am Ende des "Engagements" wird das Ziel entweder erfolgreich neutralisiert oder entkommen endgültig.`
},
{
  title: "Killchain – Assess",
  url: "killchain.html#assess",
  content: `Der letzte Schritt ist besonders, denn "Assess" wird immer dann angehängt, wenn die Killchain endet. Im Fall einer erfolgreichen Killchain geschieht dies nach dem "Engage"- Schritt, bei einer erfolglosen Killchain jedoch nach dem letzten begonnenen, aber nicht erfolgreich abgeschlossenen Schritt, unabhängig davon, welcher das war. Beim "Assessment" wird analysiert, warum die Killchain erfolgreich oder erfolglos war, und welche Erkenntnisse und Verbesserungen man daraus ableiten kann. Im Fall einer erfolgreichen Chain wird das Wrack des Flugzeuges gesichtet und analysiert. War die Killchain erfolglos, wird ermittelt, weshalb und wohin das Flugzeug entkommen ist. Hierbei sind erneut alle Sensoren von Nutzen, einschliesslich Satellitenbilder, Videos und physische Wrackteile.`
},
{
  title: "Killchain – Vorteile",
  url: "killchain.html#vorteile",
  content: `Ein wesentlicher Vorteil der Killchain gegenüber dem Konzept, dass alle Beteiligten auf sämtliche Ziele schiessen, besteht in der deutlich verbesserten Struktur, die das Risiko von Friendly Fire und Misskommunikation verringert. Ausserdem lässt sich diese Taktik einfacher standardisieren und verbessern.`
},
{
  title: "Killchain – Nachteile",
  url: "killchain.html#nachteil",
  content: `Der nahezu einzige Nachteil liegt darin, dass jede Kette nur so stark ist wie ihr schwächstes Glied. Kann ein Schritt nicht durchgeführt werden, zerbricht die Killchain. Ausserdem könnten die klar definierten Abläufe in Stresssituationen zur Herausforderung werden oder wertvolle Sekunden kosten. Insgesamt deutet die weltweite Verbreitung der Killchain jedoch darauf hin, dass die Vorteile die Nachteile überwiegen und es sich um ein erfolgreiches System handelt. Schwachstellen liegen also vermutlich eher in der praktischen Umsetzung des Systems als im theoretischen Konzept.`
},
{
  title: "Killchain – Killnet",
  url: "killchain.html#killnet",
  content: `Ein "Killnet" versucht nun das Problem des "schwächsten Glieds" zu lösen, indem es das Konzept der Killchain, bei dem ein einzelnes oder einige wenige Flugzeuge die ganze Chain ausführen, auflöst. Stattdessen wird ein Netzwerk aus vielen Flugzeugen gebildet, die untereinander kommunizieren. So können sich Flugzeuge auf einzelne Abschnitte der Chain konzentrieren und die Informationen einem anderen Flugzeug übergeben, das dann seinerseits den nächsten Schritt ausführt. Falls nun ein "Glied" ausfällt, können die übrigen versuchen, das Loch im Netz zu füllen und für das ausgefallene Flugzeug einzuspringen. In der Theorie klingt dieses System zwar fast perfekt, jedoch ist die Ausführung hoch komplex. Während bei nur einem Flugzeug lediglich einzelne Schritte scheitern können, kann bei einem Netz von mehreren Flugzeugen zusätzlich noch der komplexe Austausch von Daten zwischen den Schritten fehlschlagen oder zu lange dauern. Obwohl das System also einige existierende Schwachstellen reduziert, integriert es zugleich viele neue.`
},
  {
  title: "UAV & UCAV – Einführung",
  url: "uav_ucav.html#intro",
  content: `Drohnen nehmen in der modernen Kriegsführung eine sehr bedeutende Rolle ein und werden in naher Zukunft einen Schwerpunkt für vieler Länder bilden. UAVs sind unbemannte Aufklärungsdrohnen, UCAVs sind unbemannte Kampf- oder Mehrzweckdrohnen.`
},
{
  title: "Loitering Munitions (Kamikaze-Drohnen)",
  url: "uav_ucav.html#lm",
  content: `Loitering Munitions (Kamikaze-Drohnen) sind Drohnen, welche nicht nur das Liefersystem einer Waffe darstellen, sondern auch die Waffe selbst. Sie fliegen direkt ins Ziel hinein und explodieren.`
},
{
  title: "UCAs",
  url: "uav_ucav.html#uca",
  content: `UCAs sind wiederverwendbare UCAVs und werden nach Gewicht, Größe und Einsatzgebiet unterteilt. Gruppen wie MALE und HALE bestimmen die Einsatzdauer und Flughöhe.`
},
{
  title: "Attack Drones",
  url: "uav_ucav.html#attack",
  content: `Attack Drones werden für Close Air Support und Interdiction Strikes genutzt, z.B. MQ-1 Predator, MQ-9 Reaper, Wing Loong II und Hermes-Serie. Sie fliegen bewaffnet ins Zielgebiet und feuern Waffen auf die zugewiesenen Ziele ab.`
},
{
  title: "Reconnaissance Drones",
  url: "uav_ucav.html#recon",
  content: `Reconnaissance Drones sammeln Informationen über feindliche Einrichtungen und Bewegungen. Vorteile gegenüber bemannten Systemen: geringere Gefahr für Menschenleben und längere Flugdauer. Beispiele: RQ-4, RQ-7, RQ-170.`
},
{
  title: "Electronic Warfare",
  url: "uav_ucav.html#ew",
  content: `Electronic Warfare Drohnen stören gegnerische Kommunikation und Radar oder lenken gegnerische Aufmerksamkeit auf sich ab. Spezielle EW-Drohnen sind selten, viele Mehrzweckdrohnen können dies jedoch als Zweitmission ausführen.`
},
{
  title: "Loyal Wingman Drones",
  url: "uav_ucav.html#lw",
  content: `Loyal Wingman Drones unterstützen bemannte Kampfjets, führen Befehle aus und können autonome Missionen fliegen. Beispiele: S-70, YFQ-42, YFQ-44.`
},
{
  title: "Autonome Drohnen",
  url: "uav_ucav.html#ki",
  content: `Autonome Drohnen werden vollständig von KI gesteuert, z.B. X-62 Vista, S-70, YFQ-42 und YFQ-44. Sie sind für autonome Tests, Simulationen und künftigen Kampfeinsatz konzipiert.`
},
{
  title: "KI & Digitalisierung – Einführung",
  url: "ki_digitalisierung.html#intro",
  content: `KI und Digitalisierung werden in der modernen Kriegsführung immer wichtiger. Digitalisierung gibt es seit den 80er-Jahren, KI wird seit ca. zehn Jahren deklassifiziert eingesetzt. Beide Technologien beeinflussen Logistik, Flugsteuersysteme, Waffen- und Zielerfassung sowie autonome Flugsysteme.`
},
{
  title: "Logistik",
  url: "ki_digitalisierung.html#logistik",
  content: `In der Logistik werden Digitalisierung und KI verwendet, um Wartung und Ersatzteilmanagement zu verbessern. Beispiel: F-35 nutzt ODIN für vollautomatische Störungserfassung, Reparaturplanung und Teilebereitstellung.`
},
{
  title: "Flugsteuersysteme",
  url: "ki_digitalisierung.html#flysystem",
  content: `Fly-by-Wire-Systeme erlauben das Fliegen extrem instabiler Flugzeuge. Der Pilot bewegt den Knüppel, ein Computer berechnet optimal die Steuerflächenauslenkung. Erstmal bei der F-16 eingesetzt, heute Standard.`
},
{
  title: "Autopiloten",
  url: "ki_digitalisierung.html#auto",
  content: `Moderne Autopiloten führen automatische Manöver, Landungen und Zielanvisierung aus. Sie verhindern Kollisionen, stabilisieren das Flugzeug und können bei Pilotenausfall reagieren.`
},
{
  title: "Waffen- und Zielerfassung",
  url: "ki_digitalisierung.html#targetlock",
  content: `KI hilft bei der Zielerkennung und Angriffsdynamik. Beispiel: AGM-158 LRASM kann mit KI den optimalen Einschlagsort analysieren. Die F-35 nutzt ein 360° Multispektral-Zielsystem (DAS) zur Waffenführung.`
},
{
  title: "Vollautonome Drohnen",
  url: "ki_digitalisierung.html#drohne",
  content: `KI-gesteuerte vollautonome Drohnen agieren ohne menschliche Steuerung. Beispiele: X-62 Vista (Test/Simulation), S-70 (aktiver Einsatz), YFQ-42 und YFQ-44. Die KI steuert Zielsysteme, Flugmanöver und kann mit KI-Wartungssystemen interagieren.`
},
{
  title: "Electronic Warfare – Einführung",
  url: "electronic_warfare.html#intro",
  content: `Electronic Warfare, auch EW genannt, beschreibt Kriegsführung mithilfe elektromagnetischer Wellen anstelle physischer Waffen. Die Hauptkategorien sind ECM, ECCM und ESM, welche sich auf Störung, Schutz und Unterstützung elektronischer Systeme konzentrieren.`
},
{
  title: "Signal Jamming",
  url: "electronic_warfare.html#jam",
  content: `Signal Jamming stört oder unterbricht gegnerische Signale wie Kommunikation, Radar, GPS oder Sensoren. Ziel ist es, feindliche Systeme unbrauchbar oder unzuverlässig zu machen.`
},
{
  title: "Spoofing",
  url: "electronic_warfare.html#spoof",
  content: `Spoofing manipuliert Signale so, dass der Gegner falsche Informationen empfängt, ohne die Manipulation zu bemerken. Dadurch können gegnerische Systeme gezielt in die Irre geführt werden.`
},
{
  title: "EMP-Waffen",
  url: "electronic_warfare.html#emp",
  content: `EMP-Waffen zerstören elektronische Systeme dauerhaft, indem sie Hardware durch elektromagnetische Impulse beschädigen. Sie unterscheiden sich von Jamming durch ihre permanente Wirkung.`
},
{
  title: "ECM – Beispiele",
  url: "electronic_warfare.html#example",
  content: `Beispiele für ECM sind Towed Decoys wie das AN/ALE-50 oder AN/ALE-70, welche gegnerische Sensoren täuschen und vom eigentlichen Flugzeug ablenken.`
},
{
  title: "Spezialisierte ECM-Flugzeuge",
  url: "electronic_warfare.html#spec",
  content: `Spezialisierte Flugzeuge wie die EA-18G Growler führen offensive elektronische Angriffe durch. Moderne Kampfflugzeuge besitzen zwar eigene ECM-Systeme, sind jedoch offensiv begrenzt.`
},
{
  title: "ECCM – Schutz vor Electronic Warfare",
  url: "electronic_warfare.html#eccm",
  content: `ECCM dient dem Schutz eigener Systeme gegen elektronische Angriffe. Dazu gehören widerstandsfähige Hardware, Software sowie Techniken wie Home-on-Jamming.`
},
{
  title: "Electronic Support Measures",
  url: "electronic_warfare.html#esm",
  content: `Electronic Support Measures umfassen Aufklärung, Signalverarbeitung, sichere Kommunikation und teilweise Sensorfusion. Die genaue Definition variiert je nach militärischem Standard.`
},
{
  title: "Künstliche Intelligenz in Electronic Warfare",
  url: "electronic_warfare.html#ki",
  content: `Künstliche Intelligenz wird in der elektronischen Kriegsführung eingesetzt, um Störungen zu erkennen, abzuwehren oder autonome Systeme zu betreiben, die weniger anfällig für Jamming und Spoofing sind.`
},

{
  title: "Engines – Einführung",
  url: "engines.html#intro",
  content: `Variable Cycle Engines sind eine Weiterentwicklung klassischer Turbinentriebwerke. Sie kombinieren Eigenschaften von Turbojets und Turbofans, um sowohl hohe Geschwindigkeit als auch Effizienz zu ermöglichen. Besonders relevant sind dabei Three-Stream-Konzepte für moderne Kampfjets.`
},
{
  title: "Engines – Grundprinzip",
  url: "engines.html#basic",
  content: `Alle Turbinentriebwerke basieren auf demselben Grundprinzip: Luftansaugung, Verdichtung im Kompressor, Verbrennung in der Brennkammer und Energiegewinnung über die Turbine. Nachbrenner können zusätzlichen Schub erzeugen, erhöhen jedoch den Treibstoffverbrauch stark.`
},
{
  title: "Engines – Turbojet",
  url: "engines.html#turbojet",
  content: `Turbojets leiten nahezu die gesamte angesaugte Luft durch die Brennkammer. Sie erzeugen hohen Schub bei hohen Geschwindigkeiten, sind jedoch ineffizient und verbrauchen viel Treibstoff. Heute werden sie fast nur noch militärisch eingesetzt.`
},
{
  title: "Engines – Turbofan",
  url: "engines.html#turbofan",
  content: `Turbofans leiten einen Teil der Luft am Kerntriebwerk vorbei. Low-Bypass-Turbofans werden in Kampfjets verwendet, High-Bypass-Turbofans in Verkehrsflugzeugen. Sie sind deutlich effizienter als Turbojets, jedoch langsamer.`
},
{
  title: "Engines – Turboprop",
  url: "engines.html#turboprop",
  content: `Turboprops nutzen eine Turbine, um einen Propeller anzutreiben. Sie sind extrem effizient bei niedrigen Geschwindigkeiten, jedoch ungeeignet für Kampfjets. Moderne Turboprops unterscheiden sich grundlegend von Kolbenmotor-Propellern des Zweiten Weltkriegs.`
},
{
  title: "Engines – Variable Cycle Engines",
  url: "engines.html#engine",
  content: `Variable Cycle Engines kombinieren Turbojet- und Turbofan-Prinzipien und besitzen oft einen dritten, umschaltbaren Luftkanal. Dadurch können sie zwischen effizientem Reiseflug und maximaler Leistung wechseln. Nachteile sind Gewicht und technische Komplexität.`
},
{
  title: "Engines – Beispiele",
  url: "engines.html#example",
  content: `Zukünftige Kampfjets wie die F-35 und F-47 sollen mit Variable Cycle Engines ausgerüstet werden. Beispiele für solche Triebwerke sind die US-Modelle XA-100 bis XA-103. Sie bieten zusätzlich höhere Kühlleistung und Stromerzeugung für KI, Sensoren und Laserwaffen.`
},
{
  title: "Interview Moderne Kriegsführung",
  url: "interview.html#intro",
  content: `Im Rahmen dieses Projektes konnten wir ein Interview mit Oberst im Generalstab Marcel Mühlethaler führen. Dabei konnten wir wertvolle Erkenntnisse über die modernen Systeme in der Schweizer Luftwaffe gewinnen. Im etwa 45-minütigen Interview haben wir über 22 Fragen verteilt Einsichten in die F/A-18, die F-35 und die Schweizer Luftwaffe im Allgemeinen erhalten. Die Erkenntnisse dieses Interviews werden im folgenden Text zusammengefasst und analysiert. 
Momentan ist die Schweizer Luftwaffe mitten im Prozess den neuesten Standard der Modernität zu integrieren: Die Lockheed Martin F-35A Lightning II. Die F-35, welche als das modernste und fortschrittlichste Flugzeug der Welt angesehen wird, soll dabei die F/A-18C Hornet ersetzen, welche seit den 1990ern im Einsatz ist. Beide sind amerikanische Flugzeuge, jedoch auf die Schweiz angepasst. So wurde die F/A-18C zum Beispiel verstärkt gebaut, was den Flug mit bis zu 9g ermöglicht, während amerikanische Hornets nur 7.5g schaffen. Auf tagtäglicher Basis begrenzt sich die Schweizer Luftwaffe jedoch auch auf 7.5g um die Flugzeugzelle nicht zu sehr zu strapazieren. Die F-35 ersetzt jedoch nicht nur die F/A-18, sie eröffnet auch völlig neue Möglichkeiten. Während mit der F/A-18C lediglich Luftverteidigung möglich war, kann die F-35 nicht nur den Luftkampf besser, sondern ermöglicht sogar den Angriff von Bodenzielen und feindlicher Luftverteidigung. Ausserdem bringt die F-35 auch neue Technologien, wie Stealth, Sensor Fusion und völlig neue Möglichkeiten in Hinsicht auf elektronische Kriegsführung, Digitalisierung und Zielfindung mithilfe von integrierten Sensoren.  
Doch warum gerade die F-35?  
Natürlich bringt ein vollkommen modernes Flugzeug Vorteile gegenüber einem Jet aus den 90ern, aber ist die F-35 wirklich das beste System?  
Die Antwort ist fast zweifellos «Ja». Nicht nur sind die Stealth Eigenschaften der F-35 in einem Kriegsfall entscheidend und praktisch unübertroffen, sondern auch die Zukunft der F-35 ist sicherer als bei allen anderen Kandidaten. Auch bei der Variantenwahl ist die Luftwaffe zufrieden. Da die F/A-18C ein CATOBAR (Flugzeugträger) Flugzeug ist stellt sich die Frage, ob man sie durch die F-35A, die Landvariante, oder durch ein weiteres CATOBAR Flugzeug wie die F-35C ersetzen soll. Schlussendlich hat man sich für die A Variante entschieden und stattdessen diese, genau wie die F/A-18C, an die Schweiz angepasst. So erhalten die Schweizer F-35 einen Bremsschirm.  
Es gibt zwar noch eine Senkrechtstarter Version, die F-35B, jedoch sind bei diesem Modell die Leistungsverluste zu gross. Mit der F-35 erhält die Luftwaffe noch ein paar andere Systeme und Waffen. So zum Beispiel Gleitflug und Fallbomben sowie Patriot Luftverteidigungssysteme. Zusätzlich zur Aim-120C7 und der Aim-9X Block I wird die F-35 auch noch die Aim-9X Block II erhalten, mit der die F-35 sogar nach hinten schiessen kann.  
Auch der Blick in die Zukunft der Schweizer Luftwaffe ist spannend. Die F-35 soll für die nächsten etwa 30 Jahre verwendet werden. In dieser Zeit soll es auch mehrere Upgrades geben. Das erste davon, das sogenannte Block Upgrade, soll schon kurze Zeit nach dem Auslieferungsbeginn im Jahr 2027 stattfinden. Auch auf die Frage wie zukünftige Entwicklungen im Luftkampf aussehen könnten gibt es spannende Einsichten. Das Prinzip „Quality over Quantity“ und das technologieorientierte Design von Kampfjets wie der F-35 werden zwar vermutlich bestehen bleiben, jedoch ist eine Ergänzung durch günstigere und vielseitig einsetzbare Drohnen wahrscheinlich. Auch die Schweizer Luftwaffe könnte also in der Zukunft auf Drohnen setzen.  
Die Vorbereitungen auf die F-35 sind auf jeden Fall schon in vollem Gange. In Payerne wird das Hauptcenter der F-35 gebaut, während in Meiringen und Emmen kleinere Renovationen im Gange sind. Wenn dann 2028 die ersten F-35 in der Schweiz ankommen, beginnt auch die Ausmusterung der F/A-18. Dieser Prozess sollte bis 2030 dauern.  
Bis dahin wird auch RUAG die vier F-35 fertiggestellt haben, die in der Schweiz selbst gebaut werden. Während die F-35 online zwar oft kritisiert wird ist sie im Endeffekt trotzdem ein Gamechanger und wird von allen Ländern, die sie bereits haben, gelobt. Das negative Bild kommt wohl eher davon, dass die F-35 eine komplette Neuheit ist und sehr aktiv eingesetzt und getestet.  
Ein grosser und sehr kontroverser Punkt ist auch die Frage, ob die USA die F-35 jederzeit mit einem "Killswitch" abschalten könnten. Die Antwort darauf ist, wenig überraschend, «Nein».`
}




];
