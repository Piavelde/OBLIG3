package com.example.oblig2;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

//Oppretter klassen "Kinobillett" som bruker getter- og settermetoder for å regulere tilgang til dataene.
public class Kinobillett {
    private String velg;
    private String antall;
    private String fNavn;
    private String eNavn;
    private String tlfNummer;
    private String epost;

    public String getVelg() {
        return velg;
    }

    public String getAntall() {
        return antall;

    }

    public String getfNavn() { return fNavn;

    }
    public String geteNavn() {
        return eNavn;
    }

    public String getTlfNummer() {
        return tlfNummer;

    }

    public String getEpost() {
        return epost;
    }

    public void setVelg(String velg) {
        this.velg = velg;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public void setfNavn(String fNavn) {
        this.fNavn = fNavn;
    }

    public void seteNavn(String eNavn) {
        this.eNavn = eNavn;
    }

    public void setTlfNummer(String tlfNummer) {
        this.tlfNummer = tlfNummer;
    }

    public void setEpost(String epost) {
        this.epost = epost;

    }
}
