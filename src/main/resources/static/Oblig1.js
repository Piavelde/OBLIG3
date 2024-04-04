//Oppretter her et array for å kunne lagre kjøpte billetter.
let billettene = []; //

function kjopBillett() {

    //Henter verdier fra HTML-filen.
    let inputFilm = document.getElementById("filmer").value;
    let inputBilletter = document.getElementById("antallBilletter").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTlf = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;


    //Oppretter et objekt kalt "billett" med verdiene hentet fra HTML-filen.
    const billett = {
        film: inputFilm,
        antall: inputBilletter,
        fornavn: inputFornavn,
        etternavn: inputEtternavn,
        telefonnummer: inputTlf,
        epost: inputEpost

    };

    //If og else setninger som evaluerer inputverdiene og viser errormeldinger hvis det ikke blir skrevet inn noe.
    if (billett.antall === "") {
        document.getElementById("errorAntall").innerHTML = "Må skrive noe inn i antall";

    } else {
        document.getElementById("errorAntall").innerHTML = "";
    }
    if (billett.fornavn === "") {
        document.getElementById("errorFornavn").innerHTML = "Må skrive noe inn i fornavn";
    } else {
        document.getElementById("errorFornavn").innerHTML = "";
    }
    if (billett.etternavn === "") {
        document.getElementById("errorEtternavn").innerHTML = "Må skrive noe inn i etternavn";
    } else {
        document.getElementById("errorEtternavn").innerHTML = "";
    }
    if (billett.telefonnummer === "") {
        document.getElementById("errorTelefonnr").innerHTML = "Må skrive noe inn i telefonnummer";
    } else {
        document.getElementById("errorTelefonnr").innerHTML = "";
    }
    if (billett.epost === "") {
        document.getElementById("errorEpost").innerHTML = "Må skrive noe inn i epost";
    } else {
        document.getElementById("errorEpost").innerHTML = "";
    }

    //Legger til billett-objektet i arrayet.
    billettene.push(billett);

    //Viser billettene.
    skrivUt();

    //Dette sletter inputfeltene.
    document.getElementById("filmer").value = "";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

}

//
function skrivUt() {
    let ut = "";
    //For-løkke som går gjennom hver billett i arrayet.
    for (let i = 0; i < billettene.length; i++) {
        ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
            + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer + " " + billettene[i].epost;
    }

    //Viser strengen "ut" i "utskrift" div.
    document.getElementById("utskrift").innerHTML = ut;
}

//Tømmer arrayet.
function slettAlleBillettene() {
    billettene = [];
    console.log(billettene);
    skrivUt();
}
