function bekreftOrdre() {
    let ordre = {
        film: $("#velgFilm").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnummer: $("#telefonnummer").val(),
        email: $("#email").val(),
    };

    $.post("/lagreInfo", ordre, function() {
        overforeOrdre();

    });
    $("#velgFilm").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnummer").val("");
    $("#email").val("");
}

function overforeOrdre() {
    $.get("/overforeInfo", function(data) {
        nyttFormat(data);
        console.log(data);
    });

}
function nyttFormat(ordrer) {
    let out = "<table class='table table-striped table-bordered'>" +
    "<th><strong>Film</strong></th>\n" +
    "<th><strong>Antall</strong></th>\n" +
    "<th><strong>Fornavn</strong></th>\n" +
    "<th><strong>Etternavn</strong></th>\n" +
    "<th><strong>Telefonnummer</strong></th>\n" +
    "<th><strong>Email</strong></th>\n" +
    "</tr><br>";

    for (let o of ordrer) {
        out += "<tr>";
        out += "<td>" + o.film + "</td><td>" + o.antall + "</td><td>" + o.fornavn + "</td><td>"
            + o.etternavn + "</td><td>" + o.telefonnummer + "</td><td>" + o.email + "</td><td>";
        out += "</tr>";
    }
    out += "</table>";
    $("#output").html(out);

}

function slettBilletter() {
    $.post("/slettInfo")
    $("#output").html("");
}
