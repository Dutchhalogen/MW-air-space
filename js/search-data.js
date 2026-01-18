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
  }

];


