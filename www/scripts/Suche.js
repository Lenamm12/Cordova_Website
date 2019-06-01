var VA = document.getElementById("VolleAnzeige");
var Collapsable = document.createElement('div');
var markers = [];

var schulstandorte = [
    { id: 0, name: 'Berufsbildungszentrum (BBZ) Hochwald', strasse: 'Weiskircher Straße 32', plzort: '66687 Wadern-Nunkirchen', tel: 'Tel.: (06874)186990-0', fax: 'Fax: (06874)186990-30', mail: 'sekretariat@bbz-hochwald.de', web: 'www.bbz-hochwald.de', lat: 49.494164, long: 6.837221 },
    { id: 1, name: 'Berufsbildungszentrum (BBZ) Homburg', strasse: 'Karlstraße 6', plzort: '66424 Homburg', tel: 'Tel.: (06841)9301-0', fax: 'Fax: (06841)9301-12', mail: 'info@bbz-hom.de', web: 'www.bbz-hom.de', lat: 49.324948, long: 7.336302 },
    { id: 2, name: 'Berufsbildungszentrum (BBZ) Lebach', strasse: 'Friedensstraße 4', plzort: '66822 Lebach', tel: 'Tel.: (06881)2610', fax: 'Fax: (06881)52602', mail: 'buero@bbzlebach.de', web: 'www.bbzlebach.de', lat: 49.413281, long: 6.908502 },
    { id: 3, name: 'Berufsbildungszentrum (BBZ) Merzig', strasse: 'Waldstraße 51', plzort: '66663 Merzig', tel: 'Tel.: (06861)939830', fax: 'Fax: (06861)9398320', mail: 'info@bbz-merzig.de', web: 'www.bbz-merzig.de', lat: 49.438334, long: 6.638133 },
    { id: 4, name: 'Berufsbildungszentrum (BBZ) St. Ingbert', strasse: 'Johann-Josef-Heinrich-Straße 2', plzort: '66386 St. Ingbert', tel: 'Tel.: (06894)99889-0', fax: 'Fax: (06894)99889-99', mail: 'info@bbz-igb.de', web: 'www.bbz-igb.de', lat: 49.270487, long: 7.105797 },
    { id: 5, name: 'Berufsbildungszentrum (BBZ) St. Wendel', strasse: 'Werschweilerstraße 41', plzort: '66606 St. Wendel', tel: 'Tel.: (06851)9311-0', fax: 'Fax: (06851)9311-20', mail: 'tgbbz@dr-walter-bruch-schule.de', web: 'www.dr-walter-bruch-schule.de', lat: 49.470595, long: 7.171765 },
    { id: 6, name: 'Berufsbildungszentrum (BBZ) Sulzbach', strasse: 'Schillerstraße 7', plzort: '66280 Sulzbach', tel: 'Tel.: (06897)92260', fax: 'Fax: (06897)54346', mail: 'zentrale@bbz-sulzbach.de', web: 'www.bbz-sulzbach.de', lat: 49.299594, long: 7.061913 },
    { id: 7, name: 'Berufsbildungszentrum (BBZ) Völklingen ', strasse: 'Am Bachberg 1', plzort: '66333 Völklingen', tel: 'Tel.: (06898)91280', fax: 'Fax: (06898)295834', mail: 'post@bbz-voelklingen.de', web: 'www.bbz-voelklingen.de', lat: 49.253092, long: 6.869646 },
    { id: 8, name: 'Kaufmännisches Berufsbildungszentrum (K BBZ) Dillingen', strasse: 'Hinterstraße 11', plzort: '66763 Dillingen', tel: 'Tel.: (06831)976126', fax: 'Fax: (06831)976127', mail: 'info@kbbz-dillingen.de', web: 'www.kbbz-dillingen.de', lat: 49.351423, long: 6.728970 },
    { id: 9, name: 'Kaufmännisches Berufsbildungszentrum (K BBZ) Neunkirchen', strasse: 'Unten am Steinwald', plzort: '66538 Neunkirchen', tel: 'Tel.: (06821)92280', fax: 'Fax: (06821)922830', mail: 'info@kbbz-neunkirchen.de', web: 'www.kbbz-neunkirchen.de', lat: 49.347219, long: 7.194003 },
    { id: 10, name: 'Kaufmännisches Berufsbildungszentrum (K BBZ) Saarbrücken', strasse: 'Stengelstraße 29', plzort: '66117 Saarbrücken', tel: 'Tel.: (0681)926760', fax: 'Fax: (0681)5849240', mail: 'sekretariat@kbbz-sb.de', web: 'www.kbbz-sb.de', lat: 49.233573, long: 6.984171 },
    { id: 11, name: 'Kaufmännisches Berufsbildungszentrum (K BBZ) Halberg', strasse: 'Kurt-Schumacher-Straße 20', plzort: '66130 Saarbrücken', tel: 'Tel.: (0681)880060', fax: 'Fax: (0681)8800644', mail: 'info@kbbz-halberg.de', web: 'www.kbbz-halberg.de', lat: 49.206670, long: 7.046268 },
    { id: 12, name: 'Kaufmännisches Berufsbildungszentrum (K BBZ) Saarlouis', strasse: 'Im Glacis 22', plzort: '66740 Saarlouis', tel: 'Tel.: (06831)94610', fax: 'Fax: (06831)946161', mail: 'sekretariat@kbbzsaarlouis.de', web: 'www.kbbzsaarlouis.de', lat: 49.316060, long: 6.757524 },
    { id: 13, name: 'Sozialpflegerisches Berufsbildungszentrum (S BBZ) Saarbrücken', strasse: 'Schmollerstraße 10', plzort: '66111 Saarbrücken', tel: 'Tel.: (0681)93802-0/-10/-11', fax: 'Fax: (0681)9380216', mail: 'verwaltung@sbbzsb.de', web: 'www.sbbzsb.de', lat: 49.235844, long: 7.004291 },
    { id: 14, name: 'Technisch-Gewerbliches Berufsbildungszentrum (TG BBZ) Dillingen', strasse: 'Wallerfanger Straße 14', plzort: '66763 Dillingen', tel: 'Tel.: (06831)72042', fax: 'Fax: (06831)702745', mail: 'sekretariat@tgbbzdillingen.de', web: 'www.tgbbzdillingen.de', lat: 49.346345, long: 6.715612 },
    { id: 15, name: 'Technisch-Gewerbliches und Sozialpflegerisches Berufsbildungszentrum (TGS BBZ) Neunkirchen', strasse: 'Jägermeisterpfad 4', plzort: '66538 Neunkirchen', tel: 'Tel.: (06821)92350', fax: 'Fax: (06821)923544', mail: 'info@tgsbbznk.de', web: 'www.tgsp-bbz-nk.de', lat: 49.355719, long: 7.185854 },
    { id: 16, name: 'Technisch-Gewerbliches Berufsbildungszentrum (TG BBZ) I Saarbrücken', strasse: 'Am Mügelsberg 1', plzort: '66111 Saarbrücken', tel: 'Tel.: (0681)9334-110', fax: 'Fax: (0681)374551', mail: 'info@tgbbz1-sb.de', web: 'www.tgbbz1-sb.de', lat: 49.239316, long: 7.001216 },
    { id: 17, name: 'Technisch-Gewerbliches Berufsbildungszentrum (TG BBZ) II Saarbrücken', strasse: 'Am Mügelsberg 1', plzort: '66111 Saarbrücken', tel: 'Tel.: (0681)9334-200', fax: 'Fax: (0681)9334-203', mail: 'info@tgbbz2-saarbruecken.de', web: 'www.tgbbz2-sb.de', lat: 49.239316, long: 7.001216 },
    { id: 18, name: 'Technisch-Gewerbliches und Sozialpflegerisches Berufsbildungszentrum (TGS BBZ) Saarlouis', strasse: 'Zeughausstraße 25', plzort: '66740 Saarlouis', tel: 'Tel.: (06831)949830', fax: 'Fax: (06831)9498320', mail: 'sekretariat@tgsbbz-saarlouis.de', web: 'www.tgsbbz-saarlouis.de', lat: 49.317882, long: 6.755122 },
    { id: 19, name: 'Günther-Wöhe-Schulen für Wirtschaft', strasse: 'Keplerstraße 7', plzort: '66117 Saarbrücken', tel: 'Tel.: (0681)926470', fax: 'Fax: (0681)9264726', mail: 'sek-fos@gws-sbr.de', web: 'www.gws-sbr.de', lat: 49.233396, long: 6.985205 }
];

var schulformen = [
    { id: 0, art: 'Berufsvorbereitungsjahr', form: 'Produktionsschule' },
    { id: 1, art: 'Berufsvorbereitungsjahr', form: 'Werkstattschule' },
    { id: 2, art: 'Berufsvorbereitungsjahr', form: 'Berufsgrundbildungsjahr' },
    { id: 3, art: 'Berufsvorbereitungsjahr', form: 'Berufsgrundschule' },
    { id: 4, art: 'Berufsfachschule', form: 'Gewerbeschule' },
    { id: 5, art: 'Berufsfachschule', form: 'Handelsschule' },
    { id: 6, art: 'Berufsfachschule', form: 'Sozialpflegeschule' },
    { id: 7, art: 'Berufsfachschule', form: 'Kinderpflege' },
    { id: 8, art: 'Berufsfachschule', form: 'Haushaltsführung und ambulante Betreuung' },
    { id: 9, art: 'Berufsschule', form: 'Berufsschule' },
    { id: 10, art: 'Fachoberschule', form: 'Design' },
    { id: 11, art: 'Fachoberschule', form: 'Ernährung und Hauswirtschaft' },
    { id: 12, art: 'Fachoberschule', form: 'Naturwissenschaft und Umwelttechnik' },
    { id: 13, art: 'Fachoberschule', form: 'Gesundheit und Soziales' },
    { id: 14, art: 'Fachoberschule', form: 'Technik' },
    { id: 15, art: 'Fachoberschule', form: 'Französisch in Wirtschaft und Verwaltung' },
    { id: 16, art: 'Fachoberschule', form: 'Technische Informatik' },
    { id: 17, art: 'Fachoberschule', form: 'Tourismus' },
    { id: 18, art: 'Fachoberschule', form: 'Wirtschaft' },
    { id: 19, art: 'Fachoberschule', form: 'Wirtschaftsinformatik' },
    { id: 20, art: 'Berufliches Gymnasium', form: 'Gesundheit und Soziales' },
    { id: 21, art: 'Berufliches Gymnasium', form: 'Technik' },
    { id: 22, art: 'Berufliches Gymnasium', form: 'Wirtschaft' },
    { id: 23, art: 'Höhere Berufsfachschule', form: 'Automatisierungstechnik' },
    { id: 24, art: 'Höhere Berufsfachschule', form: 'Fremdsprachen in Wirtschaft und Verwaltung' },
    { id: 25, art: 'Höhere Berufsfachschule', form: 'Hotel-, Gaststätten- und Fremdenverkehrsgewerbe' },
    { id: 26, art: 'Höhere Berufsfachschule', form: 'Wirtschaftsinformatik' },
    { id: 27, art: 'Berufliche Weiterbildung', form: 'Akademie für Betriebs- und Unternehmensführung' },
    { id: 28, art: 'Berufliche Weiterbildung', form: 'Fachschule für Sozialpädagogik' },
    { id: 29, art: 'Berufliche Weiterbildung', form: 'Fachschule für das Hotel und Gaststättengewerbe' },
    { id: 30, art: 'Berufliche Weiterbildung', form: 'Fachschule für Meister/-innen der Hauswirtschaft' },
    { id: 31, art: 'Berufliche Weiterbildung', form: 'Fachschule für Technik' }
];

var schulformenprostandort = [
    [0, -1, 2, 3, -1, 5, 6, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, 17, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//
    [0, -1, 2, 3, 4, 5, 6, -1, -1, 9, -1, -1, -1, 13, 14, -1, -1, -1, 18, 19, 20, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, -1, 2, 3, -1, 5, 6, -1, -1, 9, -1, -1, -1, 13, -1, -1, -1, -1, 18, -1, 20, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, 31],//
    [0, -1, 2, 3, 4, 5, 6, -1, 8, 9, -1, -1, -1, 13, 14, -1, -1, -1, 18, -1, 20, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1],//
    [0, -1, 2, 3, 4, 5, 6, -1, 8, 9, -1, -1, -1, 13, 14, -1, -1, -1, 18, -1, 20, 21, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1],//
    [0, 1, 2, 3, 4, 5, 6, -1, 8, 9, -1, -1, -1, 13, 14, -1, -1, -1, 18, 19, 20, 21, 22, -1, -1, -1, -1, -1, 28, -1, -1, -1],//
    [0, -1, 2, -1, 4, 5, -1, -1, -1, 9, -1, -1, -1, -1, -1, 15, -1, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, 1, 2, -1, 4, 5, -1, -1, -1, 9, -1, -1, 12, -1, 14, -1, 16, -1, 18, -1, -1, 21, -1, 23, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 2, -1, -1, 5, -1, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, 18, 19, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 2, -1, -1, 5, -1, -1, -1, 9, -1, -1, -1, -1, -1, 15, -1, -1, 18, -1, 20, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1],//
    [-1, -1, 2, -1, -1, -1, -1, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 24, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1, -1, -1, 26, 27, -1, -1, -1, -1],
    [-1, -1, 2, -1, -1, 5, -1, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, -1, -1, 3, -1, -1, 6, 7, -1, 9, -1, -1, -1, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 28, -1, 30, -1],//
    [0, 1, 2, -1, 4, -1, -1, -1, -1, 9, -1, -1, -1, -1, 14, -1, 16, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//
    [0, 1, 2, 3, 4, -1, 6, 7, -1, 9, -1, -1, -1, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, 1, 2, -1, 4, -1, -1, -1, -1, 9, -1, -1, -1, -1, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, -1, 2, -1, -1, -1, -1, -1, -1, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, -1, -1, -1, 29, -1, -1],
    [0, -1, 2, 3, -1, -1, 6, 7, -1, 9, 10, -1, -1, 13, 14, -1, -1, -1, -1, -1, 20, -1, 22, -1, -1, -1, -1, -1, 28, -1, -1, -1],
    [-1, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 19, 20, -1, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1]//
];

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.zoom = 10.5;
            infoWindow.setPosition(pos);
            infoWindow.setContent('Position gefunden.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Der Geolocationservice wurde unterbrochen' :
        'Der Browser unterstützt keine Geolocation');
    infoWindow.open(map);
}

function postCollapsable(ÜbergabeDiv, InhaltText, AusgabeDiv) {

    var neuerContainer = document.createElement('div');
    neuerContainer.className = "container-fluid";
    neuerContainer.style.border = "1px solid rgb(131,146,178)";
    neuerContainer.style.marginBottom = "1px";
    ÜbergabeDiv.appendChild(neuerContainer);

    var Überschrift = document.createElement('div');
    Überschrift.className = "urow";
    Überschrift.style.overflow = "hidden";
    Überschrift.style.marginTop = "0";
    Überschrift.style.marginBottom = "0";
    neuerContainer.appendChild(Überschrift);

    var inhalt = document.createElement('div');
    inhalt.className = "col-12";
    Überschrift.appendChild(inhalt);

    var para = document.createElement('p');
    inhalt.appendChild(para);
    para.style.fontSize = "35px";
    para.innerHTML = InhaltText;

    AusgabeDiv.className = "jrow";
    AusgabeDiv.style.padding = " 0 18px 0 13px";
    AusgabeDiv.style.display = "none";
    AusgabeDiv.style.overflow = "hidden";
    neuerContainer.appendChild(AusgabeDiv);
}

function postÜberschrift(ÜbergabeDiv, ÜberschriftText) {
    var Überschrift = document.createElement('div');
    Überschrift.className = "frow";
    Überschrift.style.borderRadius = "0 40px 40px 0";
    ÜbergabeDiv.appendChild(Überschrift);

    var inhaltColL = document.createElement('div');
    inhaltColL.className = "col-12";
    Überschrift.appendChild(inhaltColL);

    var para = document.createElement('p');
    para.style.fontSize = "30px";
    inhaltColL.appendChild(para);


    para.innerHTML = ÜberschriftText;
}

function postInhalt(ÜbergabeDiv, InhaltText) {
    var Inhalt = document.createElement('div');
    Inhalt.className = "jrow";
    ÜbergabeDiv.appendChild(Inhalt);

    var AusgabeCol = document.createElement('div');
    AusgabeCol.className = "col-12";
    Inhalt.appendChild(AusgabeCol);

    var para = document.createElement('p');
    para.style.fontSize = "30px";
    AusgabeCol.appendChild(para);

    para.innerHTML = InhaltText;
}

function postGeteilt(ÜbergabeDiv, InhaltLinks, InhaltRechts) {
    var Inhalt = document.createElement('div');
    Inhalt.className = "jrow";
    ÜbergabeDiv.appendChild(Inhalt);

    var AusgabeColL = document.createElement('div');
    AusgabeColL.className = "col-6";
    Inhalt.appendChild(AusgabeColL);
    var AusgabeColR = document.createElement('div');
    AusgabeColR.className = "col-4";
    Inhalt.appendChild(AusgabeColR);

    var paraL = document.createElement('p');
    paraL.style.fontSize = "30px";
    AusgabeColL.appendChild(paraL);
    var paraR = document.createElement('p');
    paraR.className = "textRight";
    paraR.style.fontSize = "30px";
    AusgabeColR.appendChild(paraR);

    paraL.innerHTML = InhaltLinks;
    paraR.innerHTML = InhaltRechts;
}

function formatierung() {

    $("div.jrow:even").addClass("row Reihen bg-white");
    $("div.jrow:odd").addClass("row Reihen bg-light");
    $("div.frow").addClass("row Reihen self-secondary content");
    $("div.urow").addClass("row Reihen self-primary collapsible");
    $("div.krow").addClass("row Reihen bg-light content");
    
    var coll = document.getElementsByClassName("collapsible");
    
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

function postMarker(lat, lng) {
    var marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map
    });
    markers.push(marker);
}

function getSchulen() {
    
    while (VA.firstChild) {
        VA.removeChild(VA.firstChild);
    }

    while (Collapsable.firstChild) {
        Collapsable.removeChild(Collapsable.firstChild);
    }

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];

    var MeinInteresse = document.getElementById('Interessen').value;
    postCollapsable(VA, " Suchergebnisse Bezüglich '" + MeinInteresse + "'", Collapsable);
    var gefundeneSchule;
    for (i = 0; i < schulformen.length; i++) {
        if (MeinInteresse === schulformen[i].form) {
            for (j = 0; j < schulformenprostandort.length; j++) {
                for (var k = 0; k < schulformenprostandort[j].length; k++) {
                    if (schulformenprostandort[j][k] === schulformen[i].id) {
                        gefundeneSchule = schulstandorte[j];
                        postÜberschrift(Collapsable, gefundeneSchule.name);
                        postGeteilt(Collapsable, gefundeneSchule.strasse, schulformen[i].art)
                        postInhalt(Collapsable, gefundeneSchule.plzort);
                        postInhalt(Collapsable, gefundeneSchule.mail);
                        postInhalt(Collapsable, gefundeneSchule.web);
                        postInhalt(Collapsable, gefundeneSchule.tel);
                        postInhalt(Collapsable, gefundeneSchule.fax);
                        postMarker(gefundeneSchule.lat, gefundeneSchule.long);
                    }
                }


            }
        }
    }
    formatierung();
}