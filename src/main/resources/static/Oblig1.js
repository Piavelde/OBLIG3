//Variabler som er brukerens input:
let kjoptBillett;
let innVelg;
let innAntall;
let innFNavn;
let innENavn;
let innTlfNummer;
let innEpost;


//Variabelen "altFyltUt" blir "hovedvariabelen". Denne forteller om alle nødvendige felt er fylt ut.
let altFyltUt = false;
//Dette er variablene som sier om felt er fylt ut eller ei. Hvis en eller flere av disse er true
// indikerer det at gyldig data har blitt fylt inn.
let velgFyltUt = false;
let antallFyltUt = false;
let fNavnFyltUt = false;
let eNavnFyltUt = false;
let tlfNummerFyltUt = false;
let epostFyltUt = false;


//Oppretter en funksjon kalt validering. Her blir inputdataene fra HTML-dokumentet hentet.
function validering() {
    innVelg = document.getElementById("velg").value;
    innAntall = document.getElementById("antall").value;
    innFNavn = document.getElementById("fNavn").value;
    innENavn = document.getElementById("eNavn").value;
    innTlfNummer = document.getElementById("tlfNummer").value;
    innEpost = document.getElementById("epost").value;


    //I denne delen av skriptet kommer if- og elsesetninger.


    //Her blir det sjekket om valg av film er fylt ut. Hvis valg av film ikke er valgt vil det komme en feilmelding i rød skrift.
    if (velgFyltUt === "") { //
        document.getElementById("velgAlert").innerHTML = "<span style ='color: red'>" + 'Må velge film' + "</span>";

        //Når "velgFyltUt" er tom blir "innVelg" en tom streng. Dette er for å nullstille verdien.
        innVelg = "";
        document.getElementById("velg").value = "";

    //Hvis valg av film er valgt fjernes feilmeldingen.
    } else {
        velgFyltUt = true;
        document.getElementById("velgAlert").innerHTML = "";

    }
    //Her blir det sjekket om antall filmbilletter har blitt fylt ut og om det som har blitt fylt ut er et tall. Hvis det ikke er slik vil det komme en feilmelding i rød skrift.
    if (isNaN(innAntall) || innAntall === '') {
        document.getElementById("antallAlert").innerHTML = "<span style ='color: red'>" + 'Må skrive noe inn i antall' + "</span>";

        //"innAntall" settes til en tom streng og inputfeltet tilbakesettes til en tom verdi. Dette er for å nullstille verdiene slik at undøvendig data ikke kommer med.
        innAntall = "";
        document.getElementById("antall").value = "";

    }
    //Hvis antall filmbilletter er valgt og det som er fylt ut er tall vil feilmeldingen fjernes.
    else {
        innAntall = document.getElementById("antall").value;
        antallFyltUt = true;
        document.getElementById("antallAlert").innerHTML = "";


    }
    //Her blir det kontrollert om fornavn har blitt fylt ut og om det er tallverdier ikke har blitt skrevet inn. Hvis det er slik vil det komme en feilmelding i rød skrift.
    if (innFNavn === '' || !isNaN(innFNavn)) {
        document.getElementById("fNavnAlert").innerHTML = "<span style ='color: red'>" + 'Må skrive noe inn i fornavnet' + "</span>";

        //"innFNavn" settes til en tom streng og inputfeltet tilbakesettes til en tom verdi. Dette er for å nullstille verdiene slik at undøvendig data ikke kommer med.
        innFNavn = "";
        document.getElementById("fNavn").value = "";


    } else {
        //Hvis fornavn er fylt ut og tall ikke er skrevet inn vil feilmeldingen fjernes.
        innFNavn = document.getElementById("fNavn").value;
        fNavnFyltUt = true;
        document.getElementById("fNavnAlert").innerHTML = "";

    }
    //Her blir det kontrollert om etternavn har blitt fylt ut og om tallverdier ikke har blitt skrevet inn. Hvis det er slik vil det komme en feilmelding i rød skrift.
    if (innENavn === '' || !isNaN(innENavn)) {
        document.getElementById("eNavnAlert").innerHTML = "<span style ='color: red'>" + 'Må skrive noe inn i etternavnet' + "</span>";
        innENavn = "";
        document.getElementById("eNavn").value = "";

    }
    else {
        //Hvis etternavn er fylt ut og tall ikke er skrevet inn vil feilmeldingen fjernes.
        innENavn = document.getElementById("eNavn").value;
        eNavnFyltUt= true;
        document.getElementById("eNavnAlert").innerHTML = "";

    }
    //Her blir det kontrollert om telefonnummer har blitt fylt ut, tallverdier har blitt skrevet inn og om det er skrevet inn 10 sifre .
    // Hvis det er slik vil det komme en feilmelding i rød skrift.
    if (innTlfNummer === '' || !document.getElementById("tlfNummer").value.match(/^[0-9]{8}$/)) {
        document.getElementById("tlfAlert").innerHTML = "<span style ='color: red'>" + 'Må skrive noe inn i telefonnummer' + "</span>";
        innTlfNummer = "";
        document.getElementById("tlfNummer").value = "";

    //Hvis telefonnummer er fylt ut vil feilmeldingen fjernes.
    } else {
        innTlfNummer = document.getElementById("tlfNummer").value;
        tlfNummerFyltUt = true;
        document.getElementById("tlfAlert").innerHTML = "";
    }
    //Her blir det kontrollert om epost har blitt fylt ut og om @ har blitt skrevet inn. Hvis det er slik vil det komme en feilmelding i rød skrift.
    // Hvis det er slik vil det komme en feilmelding i rød skrift.
    if (innEpost === '' || !innEpost.includes('@')) {
        document.getElementById("epostAlert").innerHTML = "<span style ='color: red'>" + 'Må skrive noe inn i epost' + "</span>";
        innEpost = "";
        document.getElementById("epost").value = "";

        //Hvis epost er fylt ut og @ har blitt skrevet inn vil feilmeldingen fjernes.
    } else {
        innEpost = document.getElementById("epost").value;
        epostFyltUt = true;
        document.getElementById("epostAlert").innerHTML = "";

    }
    //Denne variabelen sjekker om alle betingelsene er fylt ut. Hvis de er det setter den en variabel lik true.
    if(velgFyltUt && antallFyltUt && fNavnFyltUt && eNavnFyltUt && tlfNummerFyltUt && epostFyltUt) {
        altFyltUt = true;

    }
}

//Oppretter en funksjon kalt "KjopBillett". Den kaller en funksjon som kalt "validering" som sjekker at alle felt er korrekt utfylt.
//Hvis alt er som det skal blir objektet "kjoptBillett" opprettet. Denne inneholder innputdataen.
function kjopBillett() {
    validering();
    if (altFyltUt) {
        kjoptBillett = {
            velg: innVelg,
            antall: innAntall,
            fNavn: innFNavn,
            eNavn: innENavn,
            tlfNummer: innTlfNummer,
            epost: innEpost
        }
        //bruker JQuery for å sende "kjoptBillett" objektet til server.
        $.post("/lagre", kjoptBillett, function () {
            getAll();

        });

        //Etter at "kjoptBillett" objektet er sendt blir skjemaet her tømt og gjort klart for nytt billettkjøp.
        document.getElementById("velg").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fNavn").value = "";
        document.getElementById("eNavn").value = "";
        document.getElementById("tlfNummer").value = "";
        document.getElementById("epost").value = "";


        //Her blir kontrollvariablene tilbakesatt.
        velgFyltUt = false;
        antallFyltUt = false;
        fNavnFyltUt = false;
        eNavnFyltUt = false;
        tlfNummerFyltUt = false;
        epostFyltUt = false;
        altFyltUt = false;

    }
}


//Her blir det sendt en GET-forespørsel med JQuery's "$.get" metode. Når disse dataene har blitt mottatt kaller den "printBilletter" funksjonen.
function getAll() {
    $.get("/getAll", function(data) {
        printBilletter(data);
    });
}
//Oppretter en funksjon kalt "printBilletter". Her blir det laget en tabell med kolonnene "Film:", "Antall:", "Fornavn:", "Etternavn:",
//"Telefonnummer:" og "Email:".
function printBilletter(billetter) {
    let ut = "<table><tr>" +
        "<th class='padding p-3'>Film:</th><th class ='padding p-3'>Antall:</th><th class='padding p-3'>Fornavn:</th><th class='padding p-3'>Etternavn:</th>" +
        "<th class='padding p-3'>Telefonnummer:</th><th class='padding p-3'>Epost:</th>" +
        "</tr>";

    //Lager en løkke som iterer gjennom en liste med billetter. Den lager en tabell ut av dataene for hver kinobillett. Hver celle har CSS-klasser.
    for (let i = 0; i < billetter.length; i++) {
        ut += "<tr>";
        ut += "<td class='padding p-3'>"+billetter[i].velg+"</td><td class='padding p-3'>"+billetter[i].antall+"</td><td class='padding p-3'>"+billetter[i].fNavn+"</td>"+
            "<td class='padding-p3'>"+billetter[i].eNavn+"</td><td class='padding p-3'>"+billetter[i].tlfNummer+"</td><td class='padding p-3'>"+billetter[i].epost+"</td>";
        ut += "</tr>";
    }

    document.getElementById("arrayField").innerHTML = ut;
}

//Setter "altFyltUt" for å resette og forbereder koden for neste operasjon.
altFyltUt=false;

//Oppretter funksjonen "slettBilletter". Her sjekkes det om "arrayField" har innhold. Hvis den har innhold vil billetten bli slettet.
function slettBilletter() {
    if (document.getElementById("arrayField").innerHTML !==""){
        //Bruker JQuery for å sende en GET-forespørsel "slettAlt".
        $.get("/slettAlt", function() {
            document.getElementById("arrayField").innerHTML = "";
        });

        }
    }