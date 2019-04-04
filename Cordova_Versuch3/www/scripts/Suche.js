
//

function distance(lat1, lon1, lat2, lon2) {


    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;


    //var glatlng1 = new GLatLng(location1.lat, location1.lon);
    //var glatlng2 = new GLatLng(location2.lat, location2.lon);
    //var miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
    //var kmdistance = (miledistance * 1.609344).toFixed(1);

    //var latitudeSin = Math.sin((latitude2 - latitude1) / 2);

    //var longitudeSin = Math.sin((longitude2 - longitude1) / 2);



    //var a = (latitudeSin * latitudeSin) + (Math.cos(latitude1) * Math.cos(latitude2) * longitudeSin * longitudeSin);


    //var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return dist;
}

//

// Google maps API Key : AIzaSyByrFSb-3ZBmtjum59uZ0pOT8ZIUcLrLfc
//sqrt( ( (49.46633-49.34449) *71.5)^2 + ((7.16814-7.18045) *111.3 )^2 )
// d = acos(sin(lat1) * sin(lat2) + cos(lat1) * cos(lat2) * cos(lon1 - lon2))

var VA = document.getElementById("VolleAnzeige");

var schDetails = ["Name", "Voraussetzungen", "Standort", "Dauer", "Abschluss"];

var standort0 = document.getElementById("eingabeSuchort")
var umkreis0 = document.getElementById("umkreis")

var HBFSs = new Array();

HBFSs[0] = new Object();
HBFSs[0]["Name"] = "Wirschaftsinformatik";
HBFSs[0]["Voraussetzung"] = "Fach- / Hochschulreife";
HBFSs[0]["Standort"] = "K BBZ Halberg";
HBFSs[0]["GeoDaten"] = "Saarbrücken";
HBFSs[0]["Dauer"] = "2 Jahre";
HBFSs[0]["Abschluss"] = "Ausbildung: Staatlich geprüfter Wirtschaftsinformatiker";
HBFSs[0]["Interesse1"] = "Wirtschaft";
HBFSs[0]["Interesse2"] = "Informatik";
HBFSs[0]["Interesse3"] = "";

HBFSs[1] = new Object();
HBFSs[1]["Name"] = "Automatisierungstechnik";
HBFSs[1]["Voraussetzung"] = "Fach- / Hochschulreife";
HBFSs[1]["Standort"] = "BBZ Völklingen";
HBFSs[1]["GeoDaten"] = "Völklingen";
HBFSs[1]["Dauer"] = "2 Jahre";
HBFSs[1]["Abschluss"] = "Ausbildung: Staatlich geprüfter Automatisierungstechniker";
HBFSs[1]["Interesse1"] = "Technik";
HBFSs[1]["Interesse2"] = "";
HBFSs[1]["Interesse3"] = "";

HBFSs[2] = new Object();
HBFSs[2]["Name"] = "Fremdsprachen in Wirtschaft und Verwaltung";
HBFSs[2]["Voraussetzung"] = "Fach- / Hochschulreife mit Englisch oder Französisch";
HBFSs[2]["Standort"] = "K BBZ Neunkirchen";
HBFSs[2]["GeoDaten"] = "Neunkirchen";
HBFSs[2]["Dauer"] = "2 Jahre + 1 Jahr Berufspraktikum im Ausland";
HBFSs[2]["Abschluss"] = "Ausbildung: Staatlich geprüfter Internationaler Wirtschaftsassistent";
HBFSs[2]["Interesse1"] = "Wirtschaft";
HBFSs[2]["Interesse2"] = "Fremdsprachen";
HBFSs[2]["Interesse3"] = "";

HBFSs[3] = new Object();
HBFSs[3]["Name"] = "Hotel-, Gaststätten- und Fremdenverkehrsgewerbe";
HBFSs[3]["Voraussetzung"] = "Fach- / Hochschulreife";
HBFSs[3]["Standort"] = "TG BBZ II Saarbrücken";
HBFSs[3]["GeoDaten"] = "Saarbrücken";
HBFSs[3]["Dauer"] = "2 Jahre + 1 Jahr Berufspraktikum im Ausland";
HBFSs[3]["Abschluss"] = "Ausbildung: Staatlich geprüfter Assistent für das Hotel-, Gaststätten- und Fremdenverkehrsgewerbe";
HBFSs[3]["Interesse1"] = "Wirtschaft";
HBFSs[3]["Interesse2"] = "Design";
HBFSs[3]["Interesse3"] = "Fremdsprachen";


var HBFSWI = { Name: "Wirtschaftsinformatik", Voraussetzung: "Fach- / Hochschulreife", Standort: "K BBZ Halberg", Dauer: "2 Jahre", Abschluss: "Ausbildung: Staatlich geprüfter Wirtschaftsinformatiker" };
var HBFSAT = { Name: "Automatisierungstechnik", Voraussetzung: "Fach- / Hochschulreife", Standort: "BBZ Völklingen", Dauer: "2 Jahre", Abschluss: "Ausbildung: Staatlich geprüfter Automatisierungstechniker" };
var HBFSFWV = { Name: "Fremdsprachen in Wirtschaft und Verwaltung", Voraussetzung: "Fach- / Hochschulreife mit Englisch oder Französisch", Standort: "K BBZ Neunkirchen", Dauer: "2 Jahre + 1 Jahr Berufspraktikum im Ausland", Abschluss: "Ausbildung: Staatlich geprüfter Internationaler Wirtschaftsassistent" };
var HBFSHGF = { Name: "Hotel-, Gaststätten- und Fremdenverkehrsgewerbe", Voraussetzung: "Fach- / Hochschulreife", Standort: "TG BBZ II Saarbrücken", Dauer: "2 Jahre + 1 Jahr Berufspraktikum im Ausland", Abschluss: "Ausbildung: Staatlich geprüfter Assistent für das Hotel-, Gaststätten- und Fremdenverkehrsgewerbe" };

var AngewandteInformatik = ["Umwelt-Campus Birkenfeld", "Universität des Saarlandes", "HTW Saarbrücken", "Deutsch-Französische Hochschule"];
var MedienInformatik = ["Umwelt-Campus Birkenfeld", "Universität des Saarlandes", "HTW Saarbrücken"];
var Maschinenbau = ["Umwelt-Campus Birkenfeld", "HTW Saarbrücken", "Deutsch-Französische Hochschule"];

var SchulenMeh = [
    ["Höhere Berufsfachschule für Wirtschaftsinformatik", "Fach- / Hochschulreife", "K BBZ Halberg", "2 Jahre", "Ausbildung: Staatlich geprüfter Wirtschaftsinformatiker"],
    ["Höhere Berufsfachschule für Automatisierungstechnik", "Fach- / Hochschulreife", "BBZ Völklingen", "2 Jahre", "Ausbildung: Staatlich geprüfter Automatisierungstechniker"]
];

var BBZs = new Array();

BBZs[0] = new Object();
BBZs[0]["Name"] = "K BBZ Halberg";
BBZs[0]["Ort"] = "Saarbrücken";
BBZs[0]["Interesse"] = "Wirtschaft";
BBZs[0]["Voraussetzung"] = 1;

BBZs[1] = new Object();
BBZs[1]["Name"] = "BBZ Völklingen";
BBZs[1]["Ort"] = "Völklingen";
BBZs[1]["Interesse"] = "Technik";
BBZs[1]["Voraussetzung"] = 1;


BBZs[2] = new Object();
BBZs[2]["Name"] = "K BBZ Neunkirchen";
BBZs[2]["Ort"] = "Neunkirchen";
BBZs[2]["Interesse"] = "Fremdsprachen";
BBZs[2]["Voraussetzung"] = 1;

BBZs[3] = new Object();
BBZs[3]["Name"] = "TG BBZ II Saarbrücken";
BBZs[3]["Ort"] = "Saarbrücken";
BBZs[3]["Interesse"] = "Design";
BBZs[3]["Voraussetzung"] = 2;


BBZs[4] = new Object();
BBZs[4]["Name"] = "TG BBZ St. Wendel";
BBZs[4]["Ort"] = "St. Wendel";
BBZs[4]["Interesse"] = "Technik";
BBZs[4]["Voraussetzung"] = 0;


BBZs[5] = new Object();
BBZs[5]["Name"] = "K BBZ St. Wendel";
BBZs[5]["Ort"] = "St. Wendel";
BBZs[5]["Interesse"] = "Wirtschaft";
BBZs[5]["Voraussetzung"] = 1;


BBZs[6] = new Object();
BBZs[6]["Name"] = "S BBZ St. Wendel";
BBZs[6]["Ort"] = "St. Wendel";
BBZs[6]["Interesse"] = "Sozial";
BBZs[6]["Voraussetzung"] = 1;

var LatLongOrte = new Array();

LatLongOrte[0] = new Object();
LatLongOrte[0]["Ort"] = "Saarbrücken";
LatLongOrte[0]["Lat"] = 49.2401572;
LatLongOrte[0]["Long"] = 6.9969327;
LatLongOrte[0]["Entfernung"] = null;


LatLongOrte[1] = new Object();
LatLongOrte[1]["Ort"] = "Völklingen";
LatLongOrte[1]["Lat"] = 49.25162;
LatLongOrte[1]["Long"] = 6.85873;
LatLongOrte[1]["Entfernung"] = null;


LatLongOrte[2] = new Object();
LatLongOrte[2]["Ort"] = "Neunkirchen";
LatLongOrte[2]["Lat"] = 49.3518048;
LatLongOrte[2]["Long"] = 7.186363;
LatLongOrte[2]["Entfernung"] = null;


LatLongOrte[3] = new Object();
LatLongOrte[3]["Ort"] = "St. Wendel";
LatLongOrte[3]["Lat"] = 49.46633;
LatLongOrte[3]["Long"] = 7.16814;
LatLongOrte[3]["Entfernung"] = null;


LatLongOrte[4] = new Object();
LatLongOrte[4]["Ort"] = "Ottweiler";
LatLongOrte[4]["Lat"] = 49.40133;
LatLongOrte[4]["Long"] = 7.16424;
LatLongOrte[4]["Entfernung"] = null;



var Schulen = [HBFSWI, HBFSAT, HBFSFWV, HBFSHGF];

var Studienfächer = [AngewandteInformatik, MedienInformatik, Maschinenbau];
var StudienfächerS = ["Angewandte Informatik", "Medieninformatik", "Maschinenbau"];

var Anzeige = [Schulen, Studienfächer];

var lat1, lon1, lat2, lon2, pos;
var entfernung;


//
//var map, infoWindow;
//function initMap() {
//    map = new google.maps.Map(document.getElementById('map'), {
//        center: { lat: 49.2354, lng: 6.98165 },
//        zoom: 6
//    });
//    infoWindow = new google.maps.InfoWindow;
//}

//function Standort() {

//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function (position) {
//            pos = {
//                lat: position.coords.latitude,
//                lng: position.coords.longitude
//            };
//            lat1 = pos.lat;
//            lon1 = pos.lng;
//        });

//        var Suchort = document.getElementById("eingabeSuchort");

//        for (i = 0; i < LatLongOrte.length; i++) {

//            lat2 = LatLongOrte[i]["Lat"];
//            lon2 = LatLongOrte[i]["Long"];

//            var entfernungSchleife = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));

//            if (entfernung === null || entfernungSchleife < entfernung) {
//                entfernung = entfernungSchleife;
//                Suchort.value = LatLongOrte[i]["Ort"];
//            }
//        }
//    }
//    else {
//        Window.alert("Navigation nicht aktiviert");
//    }
//}

function Generieren(item, index) {

    while (VA.firstChild) {
        VA.removeChild(VA.firstChild);
    }

    var qualification = document.getElementById("abschluss").value;
    var rank;

    switch (qualification) {
        case "Nicht angegeben":
            rank = -1;
            break;
        case "Kein Hauptschulabschluss":
            rank = 0;
            break;
        case "Hauptschulabschluss":
            rank = 1;
            break;
        case "Mittlere Reife":
            rank = 2;
            break;
        case "Fachabitur":
            rank = 3;
            break;
        case "Abitur":
            rank = 4;
            break;
    }

    var Interesse = document.getElementById("Interessen");
    var InteresseKomp = "";
    if (Interesse.value === "Informatik" || Interesse.value === "informatik" ||
        Interesse.value === "Computer" || Interesse.value === "computer" ||
        Interesse.value === "IT" || Interesse.value === "it" ||
        Interesse.value === "EDV" || Interesse.value === "edv" ||
        Interesse.value === "Spiele" || Interesse.value === "spiele"
    ) {
        InteresseKomp = "Informatik";
    }
    else if (Interesse.value === "Wirtschaft" || Interesse.value === "wirtschaft" ||
        Interesse.value === "Handel" || Interesse.value === "handel" ||
        Interesse.value === "Vertrieb" || Interesse.value === "vertrieb" ||
        Interesse.value === "Verkauf" || Interesse.value === "verkauf" ||
        Interesse.value === "Büro" || Interesse.value === "büro" ||
        Interesse.value === "Verwaltung" || Interesse.value === "verwaltung" ||
        Interesse.value === "Rechnungswesen" || Interesse.value === "rechnungswesen"
    ) {
        InteresseKomp = "Wirtschaft";
    }
    else if (Interesse.value === "Fremdsprachen" || Interesse.value === "fremdsprachen" ||
        Interesse.value === "Sprachen" || Interesse.value === "sprachen" ||
        Interesse.value === "Zweitsprachen" || Interesse.value === "zweitsprachen" ||
        Interesse.value === "International" || Interesse.value === "international"
    ) {
        InteresseKomp = "Fremdsprachen";
    }
    else if (Interesse.value === "Design" || Interesse.value === "design" ||
        Interesse.value === "Medien" || Interesse.value === "medien" ||
        Interesse.value === "Druck" || Interesse.value === "druck" ||
        Interesse.value === "Gestaltung" || Interesse.value === "gestaltung"
    ) {
        InteresseKomp = "Design";
    }
    else if (Interesse.value === "Technik" || Interesse.value === "technik" ||
        Interesse.value === "Bau" || Interesse.value === "bau" ||
        Interesse.value === "Industrie" || Interesse.value === "industrie" ||
        Interesse.value === "Maschinen" || Interesse.value === "maschinen" ||
        Interesse.value === "Maschinenbau" || Interesse.value === "Maschinenbau" ||
        Interesse.value === "Ingenieurswesen" || Interesse.value === "ingenieurswesen"
    ) {
        InteresseKomp = "Technik";
    }
    else if (Interesse.value === "Soziales" || Interesse.value === "soziales" ||
        Interesse.value === "Sozial" || Interesse.value === "sozial" ||
        Interesse.value === "Krankenpflege" || Interesse.value === "Krankenpflege" ||
        Interesse.value === "Medizin" || Interesse.value === "Medizin" ||
        Interesse.value === "Pfege" || Interesse.value === "pflege"
    ) {
        InteresseKomp = "Sozial";
    }




    var standortString = standort0.value;

    var umkreis;
    switch (umkreis0.value) {
        case "10 km":
            umkreis = 10;
            break;
        case "15 km":
            umkreis = 15;
            break;
        case "20 km":
            umkreis = 20;
            break;
        case "25 km":
            umkreis = 25;
            break;
        case "30 km":
            umkreis = 30;
            break;
        case "Ganzes Saarland":
            umkreis = 500000;
            break;
    }


    if (document.getElementById("ipSchulen").checked) {

        var neuerContainerSch = document.createElement('div');
        neuerContainerSch.className = "container-fluid";
        neuerContainerSch.style.border = "1px solid rgb(131,146,178)";
        neuerContainerSch.style.marginBottom = "1px";
        VA.appendChild(neuerContainerSch);

        var ÜberschriftSch = document.createElement('div');
        ÜberschriftSch.className = "urow";
        ÜberschriftSch.style.overflow = "hidden";
        ÜberschriftSch.style.marginTop = "0";
        ÜberschriftSch.style.marginBottom = "0";
        neuerContainerSch.appendChild(ÜberschriftSch);

        var inhaltUSch = document.createElement('div');
        inhaltUSch.className = "col-12";
        ÜberschriftSch.appendChild(inhaltUSch);

        var paraSch = document.createElement('p');
        paraSch.id = "HBFS";
        inhaltUSch.appendChild(paraSch);
        paraSch.style.fontSize = "35px";
        paraSch.innerHTML = "Höhere Berufsfachschulen";

        var inhaltSch = document.createElement('div');
        inhaltSch.className = "jrow";
        inhaltSch.style.padding = " 0 18px 0 13px";
        inhaltSch.style.display = "none";
        inhaltSch.style.overflow = "hidden";
        neuerContainerSch.appendChild(inhaltSch);


        var i;

        if (rank >= 3 || rank === -1) {
            if (InteresseKomp === "") {
                if (Interesse.value === "") {
                    if (standort0.value === "") {
                        for (i = 0; i < HBFSs.length; i++) {
                            var inhalt1 = document.createElement('div');
                            inhalt1.className = "frow";
                            inhalt1.style.borderRadius = "0 40px 40px 0";
                            inhaltSch.appendChild(inhalt1);

                            var inhaltColL = document.createElement('div');
                            inhaltColL.className = "col-12";
                            inhalt1.appendChild(inhaltColL);

                            var para1 = document.createElement('p');
                            para1.id = "SchuleNr1";
                            para1.style.fontSize = "20px";
                            inhaltColL.appendChild(para1);



                            var inhalt2 = document.createElement('div');
                            inhalt2.className = "jrow";
                            inhaltSch.appendChild(inhalt2);

                            var inhaltCol2L = document.createElement('div');
                            inhaltCol2L.className = "col-sm-4";
                            inhalt2.appendChild(inhaltCol2L);
                            var inhaltCol2R = document.createElement('div');
                            inhaltCol2R.className = "col-sm-8";
                            inhalt2.appendChild(inhaltCol2R);

                            var para12 = document.createElement('p');
                            para12.id = "SchuleNr12";
                            inhaltCol2L.appendChild(para12);
                            var para22 = document.createElement('p');
                            para22.id = "SchuleNr22";
                            para22.className = "textRight";
                            inhaltCol2R.appendChild(para22);






                            var inhalt3 = document.createElement('div');
                            inhalt3.className = "jrow";
                            inhaltSch.appendChild(inhalt3);

                            var inhaltCol3L = document.createElement('div');
                            inhaltCol3L.className = "col-sm-4";
                            inhalt3.appendChild(inhaltCol3L);
                            var inhaltCol3R = document.createElement('div');
                            inhaltCol3R.className = "col-sm-8";
                            inhalt3.appendChild(inhaltCol3R);

                            var para13 = document.createElement('p');
                            para13.id = "SchuleNr13";
                            inhaltCol3L.appendChild(para13);
                            var para23 = document.createElement('p');
                            para23.id = "SchuleNr23";
                            para23.className = "textRight";
                            inhaltCol3R.appendChild(para23);





                            var inhalt4 = document.createElement('div');
                            inhalt4.className = "jrow";
                            inhaltSch.appendChild(inhalt4);

                            var inhaltCol4L = document.createElement('div');
                            inhaltCol4L.className = "col-sm-4";
                            inhalt4.appendChild(inhaltCol4L);
                            var inhaltCol4R = document.createElement('div');
                            inhaltCol4R.className = "col-sm-8";
                            inhalt4.appendChild(inhaltCol4R);

                            var para14 = document.createElement('p');
                            para14.id = "SchuleNr14";
                            inhaltCol4L.appendChild(para14);
                            var para24 = document.createElement('p');
                            para24.id = "SchuleNr14";
                            para24.className = "textRight";
                            inhaltCol4R.appendChild(para24);





                            var inhalt5 = document.createElement('div');
                            inhalt5.className = "jrow";
                            inhaltSch.appendChild(inhalt5);

                            var inhaltCol5L = document.createElement('div');
                            inhaltCol5L.className = "col-sm-4";
                            inhalt5.appendChild(inhaltCol5L);
                            var inhaltCol5R = document.createElement('div');
                            inhaltCol5R.className = "col-sm-8";
                            inhalt5.appendChild(inhaltCol5R);

                            var para15 = document.createElement('p');
                            para15.id = "SchuleNr15";
                            inhaltCol5L.appendChild(para15);
                            var para25 = document.createElement('p');
                            para25.id = "SchuleNr15";
                            para25.className = "textRight";
                            inhaltCol5R.appendChild(para25);



                            para1.innerHTML = Schulen[i].Name;
                            para12.innerHTML = schDetails[1];
                            para22.innerHTML = Schulen[i].Voraussetzung;
                            para13.innerHTML = schDetails[2];
                            para23.innerHTML = Schulen[i].Standort;
                            para14.innerHTML = schDetails[3];
                            para24.innerHTML = Schulen[i].Dauer;
                            para15.innerHTML = schDetails[4];
                            para25.innerHTML = Schulen[i].Abschluss;



                        }
                    }
                    else {
                        var stgefunden = false;

                        for (i = 0; i < LatLongOrte.length; i++) {
                            if (LatLongOrte[i]["Ort"] === standort0.value) {
                                lat1 = LatLongOrte[i]["Lat"];
                                lon1 = LatLongOrte[i]["Long"];
                                stgefunden = true;
                            }
                        }
                        for (i = 0; i < LatLongOrte.length; i++) {
                            lat2 = LatLongOrte[i]["Lat"];
                            lon2 = LatLongOrte[i]["Long"];
                            LatLongOrte[i]["Entfernung"] = distance(lat1, lon1, lat2, lon2);
                        }
                        for (i = 0; i < LatLongOrte.length; i++) {
                            if (LatLongOrte[i]["Entfernung"] < umkreis) {
                                for (j = 0; j < HBFSs.length; j++) {
                                    if (HBFSs[j]["GeoDaten"] === LatLongOrte[i]["Ort"]) {

                                        var inhalt1 = document.createElement('div');
                                        inhalt1.className = "frow";
                                        inhalt1.style.borderRadius = "0 40px 40px 0";
                                        inhaltSch.appendChild(inhalt1);

                                        var inhaltColL = document.createElement('div');
                                        inhaltColL.className = "col-12";
                                        inhalt1.appendChild(inhaltColL);

                                        var para1 = document.createElement('p');
                                        para1.id = "SchuleNr1";
                                        para1.style.fontSize = "20px";
                                        inhaltColL.appendChild(para1);



                                        var inhalt2 = document.createElement('div');
                                        inhalt2.className = "jrow";
                                        inhaltSch.appendChild(inhalt2);

                                        var inhaltCol2L = document.createElement('div');
                                        inhaltCol2L.className = "col-sm-4";
                                        inhalt2.appendChild(inhaltCol2L);
                                        var inhaltCol2R = document.createElement('div');
                                        inhaltCol2R.className = "col-sm-8";
                                        inhalt2.appendChild(inhaltCol2R);

                                        var para12 = document.createElement('p');
                                        para12.id = "SchuleNr12";
                                        inhaltCol2L.appendChild(para12);
                                        var para22 = document.createElement('p');
                                        para22.id = "SchuleNr22";
                                        para22.className = "textRight";
                                        inhaltCol2R.appendChild(para22);






                                        var inhalt3 = document.createElement('div');
                                        inhalt3.className = "jrow";
                                        inhaltSch.appendChild(inhalt3);

                                        var inhaltCol3L = document.createElement('div');
                                        inhaltCol3L.className = "col-sm-4";
                                        inhalt3.appendChild(inhaltCol3L);
                                        var inhaltCol3R = document.createElement('div');
                                        inhaltCol3R.className = "col-sm-8";
                                        inhalt3.appendChild(inhaltCol3R);

                                        var para13 = document.createElement('p');
                                        para13.id = "SchuleNr13";
                                        inhaltCol3L.appendChild(para13);
                                        var para23 = document.createElement('p');
                                        para23.id = "SchuleNr23";
                                        para23.className = "textRight";
                                        inhaltCol3R.appendChild(para23);





                                        var inhalt4 = document.createElement('div');
                                        inhalt4.className = "jrow";
                                        inhaltSch.appendChild(inhalt4);

                                        var inhaltCol4L = document.createElement('div');
                                        inhaltCol4L.className = "col-sm-4";
                                        inhalt4.appendChild(inhaltCol4L);
                                        var inhaltCol4R = document.createElement('div');
                                        inhaltCol4R.className = "col-sm-8";
                                        inhalt4.appendChild(inhaltCol4R);

                                        var para14 = document.createElement('p');
                                        para14.id = "SchuleNr14";
                                        inhaltCol4L.appendChild(para14);
                                        var para24 = document.createElement('p');
                                        para24.id = "SchuleNr14";
                                        para24.className = "textRight";
                                        inhaltCol4R.appendChild(para24);





                                        var inhalt5 = document.createElement('div');
                                        inhalt5.className = "jrow";
                                        inhaltSch.appendChild(inhalt5);

                                        var inhaltCol5L = document.createElement('div');
                                        inhaltCol5L.className = "col-sm-4";
                                        inhalt5.appendChild(inhaltCol5L);
                                        var inhaltCol5R = document.createElement('div');
                                        inhaltCol5R.className = "col-sm-8";
                                        inhalt5.appendChild(inhaltCol5R);

                                        var para15 = document.createElement('p');
                                        para15.id = "SchuleNr15";
                                        inhaltCol5L.appendChild(para15);
                                        var para25 = document.createElement('p');
                                        para25.id = "SchuleNr15";
                                        para25.className = "textRight";
                                        inhaltCol5R.appendChild(para25);



                                        para1.innerHTML = HBFSs[j]["Name"];
                                        para12.innerHTML = schDetails[1];
                                        para22.innerHTML = HBFSs[j]["Voraussetzung"];
                                        para13.innerHTML = schDetails[2];
                                        para23.innerHTML = HBFSs[j]["Standort"];
                                        para14.innerHTML = schDetails[3];
                                        para24.innerHTML = HBFSs[j]["Dauer"];
                                        para15.innerHTML = schDetails[4];
                                        para25.innerHTML = HBFSs[j]["Abschluss"];

                                    }
                                }
                            }
                        }
                    }
                    if (stgefunden === false) {
                        var keinTrefferSch = document.createElement('div');
                        keinTrefferSch.className = "jrow";
                        inhaltSch.appendChild(keinTrefferSch);

                        var ikeinTrefferSch = document.createElement('div');
                        ikeinTrefferSch.className = "col-12";
                        inhaltSch.appendChild(ikeinTrefferSch);

                        var paraKTS = document.createElement('p');
                        ikeinTrefferSch.appendChild(paraKTS);
                        paraKTS.innerHTML = "Es wurden keine Höheren Berufsfachschulen gefunden die sich mit " + Interesse.value + " befassen";

                    }
                }
            }
            else {
                var schulegefunden = false;
                for (i = 0; i < HBFSs.length; i++) {
                    if (standort0.value === "") {
                        if (HBFSs[i]["Interesse1"] === InteresseKomp || HBFSs[i]["Interesse2"] === InteresseKomp || HBFSs[i]["Interesse3"] === InteresseKomp) {
                            schulegefunden = true;
                            var inhalt1a = document.createElement('div');
                            inhalt1a.className = "frow";
                            inhalt1a.style.borderRadius = "0 40px 40px 0";
                            inhaltSch.appendChild(inhalt1a);

                            var inhaltColLa = document.createElement('div');
                            inhaltColLa.className = "col-12";
                            inhalt1a.appendChild(inhaltColLa);

                            var para1a = document.createElement('p');
                            para1a.id = "SchuleNr1";
                            para1a.style.fontSize = "20px";
                            inhaltColLa.appendChild(para1a);



                            var inhalt2a = document.createElement('div');
                            inhalt2a.className = "jrow";
                            inhaltSch.appendChild(inhalt2a);

                            var inhaltCol2La = document.createElement('div');
                            inhaltCol2La.className = "col-sm-4";
                            inhalt2a.appendChild(inhaltCol2La);
                            var inhaltCol2Ra = document.createElement('div');
                            inhaltCol2Ra.className = "col-sm-8";
                            inhalt2a.appendChild(inhaltCol2Ra);

                            var para12a = document.createElement('p');
                            para12a.id = "SchuleNr12";
                            inhaltCol2La.appendChild(para12a);
                            var para22a = document.createElement('p');
                            para22a.id = "SchuleNr22";
                            para22a.className = "textRight";
                            inhaltCol2Ra.appendChild(para22a);






                            var inhalt3a = document.createElement('div');
                            inhalt3a.className = "jrow";
                            inhaltSch.appendChild(inhalt3a);

                            var inhaltCol3La = document.createElement('div');
                            inhaltCol3La.className = "col-sm-4";
                            inhalt3a.appendChild(inhaltCol3La);
                            var inhaltCol3Ra = document.createElement('div');
                            inhaltCol3Ra.className = "col-sm-8";
                            inhalt3a.appendChild(inhaltCol3Ra);

                            var para13a = document.createElement('p');
                            para13a.id = "SchuleNr13";
                            inhaltCol3La.appendChild(para13a);
                            var para23a = document.createElement('p');
                            para23a.id = "SchuleNr23";
                            para23a.className = "textRight";
                            inhaltCol3Ra.appendChild(para23a);





                            var inhalt4a = document.createElement('div');
                            inhalt4a.className = "jrow";
                            inhaltSch.appendChild(inhalt4a);

                            var inhaltCol4La = document.createElement('div');
                            inhaltCol4La.className = "col-sm-4";
                            inhalt4a.appendChild(inhaltCol4La);
                            var inhaltCol4Ra = document.createElement('div');
                            inhaltCol4Ra.className = "col-sm-8";
                            inhalt4a.appendChild(inhaltCol4Ra);

                            var para14a = document.createElement('p');
                            para14a.id = "SchuleNr14";
                            inhaltCol4La.appendChild(para14a);
                            var para24a = document.createElement('p');
                            para24a.id = "SchuleNr14";
                            para24a.className = "textRight";
                            inhaltCol4Ra.appendChild(para24a);





                            var inhalt5a = document.createElement('div');
                            inhalt5a.className = "jrow";
                            inhaltSch.appendChild(inhalt5a);

                            var inhaltCol5La = document.createElement('div');
                            inhaltCol5La.className = "col-sm-4";
                            inhalt5a.appendChild(inhaltCol5La);
                            var inhaltCol5Ra = document.createElement('div');
                            inhaltCol5Ra.className = "col-sm-8";
                            inhalt5a.appendChild(inhaltCol5Ra);

                            var para15a = document.createElement('p');
                            para15a.id = "SchuleNr15";
                            inhaltCol5La.appendChild(para15a);
                            var para25a = document.createElement('p');
                            para25a.id = "SchuleNr15";
                            para25a.className = "textRight";
                            inhaltCol5Ra.appendChild(para25a);



                            para1a.innerHTML = HBFSs[i]["Name"];
                            para12a.innerHTML = schDetails[1];
                            para22a.innerHTML = HBFSs[i]["Voraussetzung"];
                            para13a.innerHTML = schDetails[2];
                            para23a.innerHTML = HBFSs[i]["Standort"];
                            para14a.innerHTML = schDetails[3];
                            para24a.innerHTML = HBFSs[i]["Dauer"];
                            para15a.innerHTML = schDetails[4];
                            para25a.innerHTML = HBFSs[i]["Abschluss"];



                        }
                    } else {

                        var stgefunden = false;

                        for (i = 0; i < LatLongOrte.length; i++) {
                            if (LatLongOrte[i]["Ort"] === standort0.value) {
                                lat1 = LatLongOrte[i]["Lat"];
                                lon1 = LatLongOrte[i]["Long"];
                                stgefunden = true;
                            }
                        }
                        for (i = 0; i < LatLongOrte.length; i++) {
                            lat2 = LatLongOrte[i]["Lat"];
                            lon2 = LatLongOrte[i]["Long"];
                            LatLongOrte[i]["Entfernung"] = distance(lat1, lon1, lat2, lon2);
                        }
                        for (i = 0; i < LatLongOrte.length; i++) {
                            if (LatLongOrte[i]["Entfernung"] < umkreis) {
                                for (j = 0; j < HBFSs.length; j++) {
                                    if ((HBFSs[j]["GeoDaten"] === LatLongOrte[i]["Ort"]) && (HBFSs[j]["Interesse1"] === InteresseKomp || HBFSs[j]["Interesse2"] === InteresseKomp || HBFSs[j]["Interesse3"] === InteresseKomp)) {

                                        var inhalt1 = document.createElement('div');
                                        inhalt1.className = "frow";
                                        inhalt1.style.borderRadius = "0 40px 40px 0";
                                        inhaltSch.appendChild(inhalt1);

                                        var inhaltColL = document.createElement('div');
                                        inhaltColL.className = "col-12";
                                        inhalt1.appendChild(inhaltColL);

                                        var para1 = document.createElement('p');
                                        para1.id = "SchuleNr1";
                                        para1.style.fontSize = "20px";
                                        inhaltColL.appendChild(para1);



                                        var inhalt2 = document.createElement('div');
                                        inhalt2.className = "jrow";
                                        inhaltSch.appendChild(inhalt2);

                                        var inhaltCol2L = document.createElement('div');
                                        inhaltCol2L.className = "col-sm-4";
                                        inhalt2.appendChild(inhaltCol2L);
                                        var inhaltCol2R = document.createElement('div');
                                        inhaltCol2R.className = "col-sm-8";
                                        inhalt2.appendChild(inhaltCol2R);

                                        var para12 = document.createElement('p');
                                        para12.id = "SchuleNr12";
                                        inhaltCol2L.appendChild(para12);
                                        var para22 = document.createElement('p');
                                        para22.id = "SchuleNr22";
                                        para22.className = "textRight";
                                        inhaltCol2R.appendChild(para22);






                                        var inhalt3 = document.createElement('div');
                                        inhalt3.className = "jrow";
                                        inhaltSch.appendChild(inhalt3);

                                        var inhaltCol3L = document.createElement('div');
                                        inhaltCol3L.className = "col-sm-4";
                                        inhalt3.appendChild(inhaltCol3L);
                                        var inhaltCol3R = document.createElement('div');
                                        inhaltCol3R.className = "col-sm-8";
                                        inhalt3.appendChild(inhaltCol3R);

                                        var para13 = document.createElement('p');
                                        para13.id = "SchuleNr13";
                                        inhaltCol3L.appendChild(para13);
                                        var para23 = document.createElement('p');
                                        para23.id = "SchuleNr23";
                                        para23.className = "textRight";
                                        inhaltCol3R.appendChild(para23);





                                        var inhalt4 = document.createElement('div');
                                        inhalt4.className = "jrow";
                                        inhaltSch.appendChild(inhalt4);

                                        var inhaltCol4L = document.createElement('div');
                                        inhaltCol4L.className = "col-sm-4";
                                        inhalt4.appendChild(inhaltCol4L);
                                        var inhaltCol4R = document.createElement('div');
                                        inhaltCol4R.className = "col-sm-8";
                                        inhalt4.appendChild(inhaltCol4R);

                                        var para14 = document.createElement('p');
                                        para14.id = "SchuleNr14";
                                        inhaltCol4L.appendChild(para14);
                                        var para24 = document.createElement('p');
                                        para24.id = "SchuleNr14";
                                        para24.className = "textRight";
                                        inhaltCol4R.appendChild(para24);





                                        var inhalt5 = document.createElement('div');
                                        inhalt5.className = "jrow";
                                        inhaltSch.appendChild(inhalt5);

                                        var inhaltCol5L = document.createElement('div');
                                        inhaltCol5L.className = "col-sm-4";
                                        inhalt5.appendChild(inhaltCol5L);
                                        var inhaltCol5R = document.createElement('div');
                                        inhaltCol5R.className = "col-sm-8";
                                        inhalt5.appendChild(inhaltCol5R);

                                        var para15 = document.createElement('p');
                                        para15.id = "SchuleNr15";
                                        inhaltCol5L.appendChild(para15);
                                        var para25 = document.createElement('p');
                                        para25.id = "SchuleNr15";
                                        para25.className = "textRight";
                                        inhaltCol5R.appendChild(para25);



                                        para1.innerHTML = HBFSs[j]["Name"];
                                        para12.innerHTML = schDetails[1];
                                        para22.innerHTML = HBFSs[j]["Voraussetzung"];
                                        para13.innerHTML = schDetails[2];
                                        para23.innerHTML = HBFSs[j]["Standort"];
                                        para14.innerHTML = schDetails[3];
                                        para24.innerHTML = HBFSs[j]["Dauer"];
                                        para15.innerHTML = schDetails[4];
                                        para25.innerHTML = HBFSs[j]["Abschluss"];

                                    }
                                }
                            }
                        }
                    }
                    if (stgefunden === false) {
                        var keinTrefferSch = document.createElement('div');
                        keinTrefferSch.className = "jrow";
                        inhaltSch.appendChild(keinTrefferSch);

                        var ikeinTrefferSch = document.createElement('div');
                        ikeinTrefferSch.className = "col-12";
                        inhaltSch.appendChild(ikeinTrefferSch);

                        var paraKTS = document.createElement('p');
                        ikeinTrefferSch.appendChild(paraKTS);
                        paraKTS.innerHTML = "Es wurden keine Höheren Berufsfachschulen gefunden die sich mit " + Interesse.value + " befassen";

                    }
                }
                if (schulegefunden === false) {

                    var keinTrefferHSch = document.createElement('div');
                    keinTrefferHSch.className = "jrow";
                    inhaltSch.appendChild(keinTrefferHSch);

                    var ikeinTrefferHSch = document.createElement('div');
                    ikeinTrefferHSch.className = "col-12";
                    inhaltSch.appendChild(ikeinTrefferHSch);

                    var paraKTHS = document.createElement('p');
                    ikeinTrefferHSch.appendChild(paraKTHS);
                    paraKTHS.innerHTML = "Es wurden keine Höheren Berufsfachschulen gefunden die im Bereich " + InteresseKomp + " ausbilden";

                }
                // wenn suchbereich eingetragen
                // wenn  interesse gefunden UND entfernung kleiner als suchbereich
                //
            }
        }
        else {

            var keineQualSch = document.createElement('div');
            keineQualSch.className = "jrow";
            inhaltSch.appendChild(keineQualSch);

            var ikeineQualSch = document.createElement('div');
            ikeineQualSch.className = "col-12";
            inhaltSch.appendChild(ikeineQualSch);

            var paraKQS = document.createElement('p');
            ikeineQualSch.appendChild(paraKQS);
            paraKQS.innerHTML = "Man benötigt mindestens Fachhochschulreife um eine Höhere Berufsfachschule besuchen zu können";
        }



        var neuerContainerBBZ = document.createElement('div');
        neuerContainerBBZ.className = "container-fluid";
        neuerContainerBBZ.style.border = "1px solid rgb(131,146,178)";
        neuerContainerBBZ.style.marginBottom = "1px";
        VA.appendChild(neuerContainerBBZ);

        var ÜberschriftBBZ = document.createElement('div');
        ÜberschriftBBZ.className = "urow";
        ÜberschriftBBZ.style.overflow = "hidden";
        ÜberschriftBBZ.style.marginTop = "0";
        ÜberschriftBBZ.style.marginBottom = "0";
        neuerContainerBBZ.appendChild(ÜberschriftBBZ);

        var inhaltUBBZ = document.createElement('div');
        inhaltUBBZ.className = "col-12";
        ÜberschriftBBZ.appendChild(inhaltUBBZ);

        var paraBBZ = document.createElement('p');
        paraBBZ.id = "BBZ";
        inhaltUBBZ.appendChild(paraBBZ);
        paraBBZ.style.fontSize = "35px";
        paraBBZ.innerHTML = "Schulen";

        var inhaltBBZ = document.createElement('div');
        inhaltBBZ.className = "jrow";
        inhaltBBZ.style.padding = " 0 18px 0 13px";
        inhaltBBZ.style.display = "none";
        inhaltBBZ.style.overflow = "hidden";
        neuerContainerBBZ.appendChild(inhaltBBZ);

        if (InteresseKomp === "") {
            if (Interesse.value === "") {
                if (standort0.value === "") {
                    for (i = 0; i < BBZs.length; i++) {
                        if (BBZs[i]["Voraussetzung"] <= rank || rank === -1) {
                            schulegefunden = true;
                            var AusgabeI = document.createElement('div');
                            AusgabeI.className = "jrow";
                            inhaltBBZ.appendChild(AusgabeI);

                            var AusgebeColL = document.createElement('div');
                            AusgebeColL.className = "col-sm-4";
                            AusgabeI.appendChild(AusgebeColL);
                            var AusgebeColR = document.createElement('div');
                            AusgebeColR.className = "col-sm-8";
                            AusgabeI.appendChild(AusgebeColR);

                            var paraIL = document.createElement('p');
                            AusgebeColL.appendChild(paraIL);
                            var paraIR = document.createElement('p');
                            paraIR.className = "textRight";
                            AusgebeColR.appendChild(paraIR);

                            paraIL.innerHTML = BBZs[i]["Name"];
                            paraIR.innerHTML = BBZs[i]["Interesse"];
                        }
                    }
                }
                else {

                    var stgefunden = false;

                    for (i = 0; i < LatLongOrte.length; i++) {
                        if (LatLongOrte[i]["Ort"] === standort0.value) {
                            lat1 = LatLongOrte[i]["Lat"];
                            lon1 = LatLongOrte[i]["Long"];
                            stgefunden = true;
                        }
                    }
                    for (i = 0; i < LatLongOrte.length; i++) {
                        lat2 = LatLongOrte[i]["Lat"];
                        lon2 = LatLongOrte[i]["Long"];
                        LatLongOrte[i]["Entfernung"] = distance(lat1, lon1, lat2, lon2);
                    }
                    for (i = 0; i < LatLongOrte.length; i++) {
                        if (LatLongOrte[i]["Entfernung"] < umkreis) {
                            for (j = 0; j < BBZs.length; j++) {
                                if ((BBZs[j]["Ort"] === LatLongOrte[i]["Ort"]) && (BBZs[j]["Voraussetzung"] <= rank || rank === -1)) {
                                    schulegefunden = true;
                                    var AusgabeI = document.createElement('div');
                                    AusgabeI.className = "jrow";
                                    inhaltBBZ.appendChild(AusgabeI);

                                    var AusgebeColL = document.createElement('div');
                                    AusgebeColL.className = "col-sm-4";
                                    AusgabeI.appendChild(AusgebeColL);
                                    var AusgebeColR = document.createElement('div');
                                    AusgebeColR.className = "col-sm-8";
                                    AusgabeI.appendChild(AusgebeColR);

                                    var paraIL = document.createElement('p');
                                    AusgebeColL.appendChild(paraIL);
                                    var paraIR = document.createElement('p');
                                    paraIR.className = "textRight";
                                    AusgebeColR.appendChild(paraIR);

                                    paraIL.innerHTML = BBZs[j]["Name"];
                                    paraIR.innerHTML = BBZs[j]["Interesse"];

                                }
                            }
                        }
                    }
                }
                if (stgefunden === false) {
                    var keinTrefferSch = document.createElement('div');
                    keinTrefferSch.className = "jrow";
                    inhaltSch.appendChild(keinTrefferSch);

                    var ikeinTrefferSch = document.createElement('div');
                    ikeinTrefferSch.className = "col-12";
                    inhaltSch.appendChild(ikeinTrefferSch);

                    var paraKTS = document.createElement('p');
                    ikeinTrefferSch.appendChild(paraKTS);
                    paraKTS.innerHTML = "Es wurden keine Schulen gefunden die sich mit " + Interesse.value + " befassen und in der angegebenen Nähe liegen";

                }
            }
        }
        else {
            if (standort0.value === "") {

                for (i = 0; i < BBZs.length; i++) {
                    var BBZgefunden = false;
                    if (BBZs[i]["Interesse"] === InteresseKomp) {

                        BBZgefunden = true;
                        var AusgabeIa = document.createElement('div');
                        AusgabeIa.className = "jrow";
                        inhaltBBZ.appendChild(AusgabeIa);

                        var AusgebeColLa = document.createElement('div');
                        AusgebeColLa.className = "col-sm-4";
                        AusgabeIa.appendChild(AusgebeColLa);
                        var AusgebeColRa = document.createElement('div');
                        AusgebeColRa.className = "col-sm-8";
                        AusgabeIa.appendChild(AusgebeColRa);

                        var paraILa = document.createElement('p');
                        AusgebeColLa.appendChild(paraILa);
                        var paraIRa = document.createElement('p');
                        paraIRa.className = "textRight";
                        AusgebeColRa.appendChild(paraIRa);

                        paraILa.innerHTML = BBZs[i]["Name"];
                        paraIRa.innerHTML = BBZs[i]["Interesse"];
                    }
                    if (BBZgefunden = false) {

                        var keineQualBBZ = document.createElement('div');
                        keineQualBBZ.className = "jrow";
                        inhaltBBZ.appendChild(keineQualBBZ);

                        var ikeineQualBBZ = document.createElement('div');
                        ikeineQualBBZ.className = "col-12";
                        inhaltBBZ.appendChild(ikeineQualBBZ);

                        var paraKQB = document.createElement('p');
                        ikeineQualBBZ.appendChild(paraKQB);
                        paraKQB.innerHTML = "Es wurden keine BBZs gefunden, die sich mit " + InteresseKomp + " befassen";
                    }
                }
            }
            else {

                var stgefunden = false;

                for (i = 0; i < LatLongOrte.length; i++) {
                    if (LatLongOrte[i]["Ort"] === standort0.value) {
                        lat1 = LatLongOrte[i]["Lat"];
                        lon1 = LatLongOrte[i]["Long"];
                        stgefunden = true;
                    }
                }
                for (i = 0; i < LatLongOrte.length; i++) {
                    lat2 = LatLongOrte[i]["Lat"];
                    lon2 = LatLongOrte[i]["Long"];
                    LatLongOrte[i]["Entfernung"] = distance(lat1, lon1, lat2, lon2);
                }
                for (i = 0; i < LatLongOrte.length; i++) {
                    if (LatLongOrte[i]["Entfernung"] < umkreis) {
                        for (j = 0; j < BBZs.length; j++) {
                            if ((BBZs[j]["Ort"] === LatLongOrte[i]["Ort"]) && (BBZs[j]["Voraussetzung"] <= rank || rank === -1) && (BBZs[i]["Interesse"] === InteresseKomp)) {
                                schulegefunden = true;
                                var AusgabeI = document.createElement('div');
                                AusgabeI.className = "jrow";
                                inhaltBBZ.appendChild(AusgabeI);

                                var AusgebeColL = document.createElement('div');
                                AusgebeColL.className = "col-sm-4";
                                AusgabeI.appendChild(AusgebeColL);
                                var AusgebeColR = document.createElement('div');
                                AusgebeColR.className = "col-sm-8";
                                AusgabeI.appendChild(AusgebeColR);

                                var paraIL = document.createElement('p');
                                AusgebeColL.appendChild(paraIL);
                                var paraIR = document.createElement('p');
                                paraIR.className = "textRight";
                                AusgebeColR.appendChild(paraIR);

                                paraIL.innerHTML = BBZs[j]["Name"];
                                paraIR.innerHTML = BBZs[j]["Interesse"];

                            }
                        }
                    }
                }
            }
            if (stgefunden === false) {
                var keinTrefferSch = document.createElement('div');
                keinTrefferSch.className = "jrow";
                inhaltSch.appendChild(keinTrefferSch);

                var ikeinTrefferSch = document.createElement('div');
                ikeinTrefferSch.className = "col-12";
                inhaltSch.appendChild(ikeinTrefferSch);

                var paraKTS = document.createElement('p');
                ikeinTrefferSch.appendChild(paraKTS);
                paraKTS.innerHTML = "Es wurden keine Schulen gefunden die sich mit " + Interesse.value + " befassen und in der angegebenen Nähe liegen";

            }

        }
    }




    if (document.getElementById("ipStudium").checked) {

        var neuerContainerStu = document.createElement('div');
        neuerContainerStu.className = "container-fluid";
        neuerContainerStu.style.border = "1px solid rgb(131,146,178)";
        neuerContainerStu.style.marginBottom = "1px";
        VA.appendChild(neuerContainerStu);

        var ÜberschriftStu = document.createElement('div');
        ÜberschriftStu.className = "urow";
        ÜberschriftStu.style.overflow = "hidden";
        ÜberschriftStu.style.marginTop = "0";
        ÜberschriftStu.style.marginBottom = "0";
        neuerContainerStu.appendChild(ÜberschriftStu);

        var inhaltUStu = document.createElement('div');
        inhaltUStu.className = "col-12";
        ÜberschriftStu.appendChild(inhaltUStu);

        var paraStu = document.createElement('p');
        inhaltUStu.appendChild(paraStu);
        paraStu.style.fontSize = "35px";
        paraStu.innerHTML = "Studiengänge";

        var inhaltStu = document.createElement('div');
        inhaltStu.className = "jrow";
        inhaltStu.style.padding = " 0 18px 0 13px";
        inhaltStu.style.display = "none";
        inhaltStu.style.overflow = "hidden";
        neuerContainerStu.appendChild(inhaltStu);


        var l;
        for (l = 0; l < Studienfächer.length; l++) {

            var inhalt1j = document.createElement('div');
            inhalt1j.className = "frow";
            inhalt1j.style.borderRadius = "0 40px 40px 0";
            inhaltStu.appendChild(inhalt1j);

            var inhaltColLj = document.createElement('div');
            inhaltColLj.className = "col-12";
            inhalt1j.appendChild(inhaltColLj);

            var para1j = document.createElement('p');
            para1j.style.fontSize = "30px";
            inhaltColLj.appendChild(para1j);


            para1j.innerHTML = StudienfächerS[l];

            var k;
            for (k = 0; k < Studienfächer.length; k++) {

                var inhaltFach = document.createElement('div');
                inhaltFach.className = "jrow";
                inhaltStu.appendChild(inhaltFach);

                var inhaltStandort = document.createElement('div');
                inhaltStandort.className = "col-12";
                inhaltFach.appendChild(inhaltStandort);

                var paraStSt = document.createElement('p');
                paraStSt.style.fontSize = "30px";
                inhaltStandort.appendChild(paraStSt);

                paraStSt.innerHTML = Studienfächer[l][k];

            }

        }

    }

    $("div.jrow:even").addClass("row Reihen bg-white");
    $("div.jrow:odd").addClass("row Reihen bg-light");
    $("div.frow").addClass("row Reihen self-secondary content");
    $("div.urow").addClass("row Reihen self-primary collapsible");
    $("div.krow").addClass("row Reihen bg-light content");


    var coll = document.getElementsByClassName("collapsible");
    var j;


    for (j = 0; j < coll.length; j++) {
        coll[j].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
