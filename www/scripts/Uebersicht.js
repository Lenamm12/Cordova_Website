//var BVJ = "Jugendliche ohne Versetzung in Klasse 9 müssen zuerst ein Berufsvorbereitungsjahr in einer Produktionsschule oder Werkstattschule ableisten. Möglich ist eine Teilnahme an der Prüfung zum Erwerb des Hauptschulabschlusses und der Berechtigung zum Übergang in die zweijährige Berufsfachschule.";
//var BGJ = "Nach Erfüllung der Vollzeitschulpflicht und der Versetzung in Klassenstufe 9 oder nach dem erfolgreichen Besuch des Berufsvorbereitungsjahres kann im Berufsgrundbildungsjahr eine berufliche Grundbildung in einem Berufsfeld erlernt werden.";
//var BGS = "Die Berufsgrundschule vermittelt Grundkenntnisse und Fertigkeiten im hauswirtschaftlich-sozialpflegerischen Bereich. Voraussetzung ist die Versetzung in die Klassenstufe 9 oder der erfolgreiche Besuch des Berufsvorbereitungsjahres.";


    var ebene;              var zweiteebene; var ol;
    var li1;    var li2;    var li20;   var li21;
    var div1;   var div2;   var div20;  var div21;
    var h1;     var h2;     var h20;    var h21;



function Reset() {
    if (document.getElementById('Abschluesse').value !== "Bitte auswahlen") { location.reload(); }
    

    //div1.removechild(h1);
    //div2.removechild(h2);
    //div20.removechild(h20);
    //div21.removechild(h21);

    //li1.removechild(div1);
    //li2.removechild(div2);
    //li20.removechild(div20);
    //li21.removechild(div21);

    //ebene.removechild(li1, li2);
    //zweiteebene.removechild(li20, li21);
}

function Auswaehlen() {
    document.getElementById("chart").style.display = "inline";
   
    var IchHabe = document.getElementById('Abschluesse').value;

    if (IchHabe === "Bitte auswählen") {
        alert("Sie haben nichts ausgewählt!");
        document.getElementById("chart").style.display = "none";
    }
    else{

    document.getElementById('Abschluss').innerHTML = IchHabe;
   

        if (IchHabe === "keinen Abschluss") {
            document.getElementById("meinbutton").disabled = true;

        document.getElementById('Ziel1').innerHTML = "Hauptschulabschluss";
        document.getElementById('Moeglichkeit11').innerHTML = "Berufsvorbereitungsjahr";
        
        ebene = document.getElementById('dritteebene1');

        li1 = document.createElement("li");
        div1 = document.createElement("div");
        h1 = document.createElement("h3");
        h1.innerHTML = "Berufsgrundbildungsjahr";
        ebene.appendChild(li1);
        li1.appendChild(div1);
        div1.appendChild(h1);
        
        li2 = document.createElement("li");
        div2 = document.createElement("div");
        h2 = document.createElement("h3");
        h2.innerHTML = "Berufsgrundschule";
        ebene.appendChild(li2);
        li2.appendChild(div2);
        div2.appendChild(h2);

        document.getElementById("keinAbschlussTxt").style.display = "";
    }

    else if (IchHabe === "Hauptschulabschluss") {
            document.getElementById("meinbutton").disabled = true;

        document.getElementById('Ziel1').innerHTML = "Mittlerer Bildungsabschluss";
        document.getElementById('Moeglichkeit11').innerHTML = "Duale Ausbildung an einer Berufsschule";

        ebene = document.getElementById('dritteebene1');

        li1 = document.createElement("li");
        div1 = document.createElement("div");
        h1 = document.createElement("h3");
        h1.innerHTML = "an einer Berufsfachschule";
        ebene.appendChild(li1);
        li1.appendChild(div1);
        div1.appendChild(h1);

        document.getElementById("HauptschulTxt").style.display = "";
    }

    else if (IchHabe === "Mittlerer Bildungsabschluss") {
            document.getElementById("meinbutton").disabled = true;

        document.getElementById('Ziel1').innerHTML = "Fachhochschulreife";
        document.getElementById('Moeglichkeit11').innerHTML = "an einer Fachschule";

        ebene = document.getElementById('dritteebene1');

        li1 = document.createElement("li");
        div1 = document.createElement("div");
        h1 = document.createElement("h3");
        h1.innerHTML = "an einer Berufsschule";
        ebene.appendChild(li1);
        li1.appendChild(div1);
        div1.appendChild(h1);

        li2 = document.createElement("li");
        div2 = document.createElement("div");
        h2 = document.createElement("h3");
        h2.innerHTML = "an einer Fachoberschule";
        ebene.appendChild(li2);
        li2.appendChild(div2);
        div2.appendChild(h2);
        
        zweiteebene = document.getElementById('zweiteebene');

        li20 = document.createElement("li");
        div20 = document.createElement("div");
        h20 = document.createElement("h2");
        h20.innerHTML = "Allgemeine Hochschulreife";
        ol = document.createElement("ol");
        li20.setAttribute("id", "zweiterzweig");
        li21 = document.createElement("li");
        div21 = document.createElement("div");
        h21 = document.createElement("h3");
        h21.innerHTML = "an einem Beruflichen Oberstufengymnasium";

        zweiteebene.appendChild(li20);
        li20.appendChild(div20);
        li20.appendChild(ol);
        div20.appendChild(h20);
        ol.appendChild(li21);
        li21.appendChild(div21);
        div21.appendChild(h21);

        document.getElementById("MittlereTxt").style.display = "";

    }

    else if (IchHabe === "Fachhochschulreife") {
            document.getElementById("meinbutton").disabled = true;

        document.getElementById('Ziel1').innerHTML = "Allgemeine Hochschulreife";
        document.getElementById('Moeglichkeit11').innerHTML = "Berufliches Oberstufengymnasium";
        
        zweiteebene = document.getElementById('zweiteebene');

        li20 = document.createElement("li");
        div20 = document.createElement("div");
        h20 = document.createElement("h2");
        h20.innerHTML = "Staatlich geprüfter Berufsabschluss";
        li21 = document.createElement("li");
        div21 = document.createElement("div");
        h21 = document.createElement("h3");
        h21.innerHTML = "an einer Höheren Berufsfachschule";
        ol = document.createElement("ol");
        li20.setAttribute("id", "zweiterzweig");

        zweiteebene.appendChild(li20);
        li20.appendChild(div20);
        li20.appendChild(ol);
        div20.appendChild(h20);
        ol.appendChild(li21);
        li21.appendChild(div21);
        div21.appendChild(h21);

        document.getElementById("FachhochschulreifeTxt").style.display = "";
    }

    else if (IchHabe === "Allgemeine Hochschulreife") {
            document.getElementById("meinbutton").disabled = true;

        document.getElementById('Ziel1').innerHTML = "  Bachelor/Master";
        document.getElementById('Moeglichkeit11').innerHTML = "an einer Fachhochschule";

        ebene = document.getElementById('dritteebene1');

        li1 = document.createElement("li");
        div1 = document.createElement("div");
        h1 = document.createElement("h3");
        h1.innerHTML = "an einer Universität";
        ebene.appendChild(li1);
        li1.appendChild(div1);
        div1.appendChild(h1);

       
        zweiteebene = document.getElementById('zweiteebene');

        li20 = document.createElement("li");
        div20 = document.createElement("div");
        h20 = document.createElement("h2");
        h20.innerHTML = "Staatlich geprüfter Berufsabschluss";
        li21 = document.createElement("li");
        div21 = document.createElement("div");
        h21 = document.createElement("h3");
        ol = document.createElement("ol");
        li20.setAttribute("id", "zweiterzweig");

        zweiteebene.appendChild(li20);
        li20.appendChild(div20);
        li20.appendChild(ol);
        div20.appendChild(h20);
        ol.appendChild(li21);
        li21.appendChild(div21);
        div21.appendChild(h21);
        h21.innerHTML = "an einer Höheren Berufsfachschule";

        document.getElementById("HochschulreifeTxt").style.display = "";
    }

    //var cssStyleSheet = document.createElement("link");
    //cssStyleSheet.href = "Uebersicht.css";
    //cssStyleSheet.rel = "stylesheet";
    //document.head.appendChild(cssStyleSheet);

    //sichtbar machen
    document.getElementById("chart").style.display = "inline";
   // document.getElementById("Abschluesse").value = "Bitte auswahlen";
}
}