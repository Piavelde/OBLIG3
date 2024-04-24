package com.example.oblig2;


//Importerer klasser fra Spring framework og JDBC
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinobillettRepository { //Denne klassen blir en repository-komponent for spring.
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Kinobillett innBillett) { //Her blir det lagret en ny kinobillett i databasen.
        String sql = "INSERT INTO Kinobillett(velg, antall, fNavn, eNavn, tlfNummer, epost) VALUES(?,?,?,?,?,?)"; //sql-spørring som setter inn data inn i Kinobillett tabell.
        db.update(sql, innBillett.getVelg(), innBillett.getAntall(), innBillett.getfNavn(), innBillett.geteNavn(), innBillett.getTlfNummer(), innBillett.getEpost()); //Erstatter spørsmålstegnene med felt fra innBillett.

    }

    public List<Kinobillett> hentAlleBilletter() { //Henter billetter fra Kinobillett-tabellen.
        String sql = "SELECT * FROM Kinobillett"; //SQL-spørring som henter alle rader i Kinobillett tabellen:
        List<Kinobillett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Kinobillett.class));
        return alleBilletter; //Spørringen blir utført og returnerer en liste.
    }

    public void slettAlleBilletter () {
        String sql1 = "DELETE FROM Kinobillett"; //SQL-spørring som sletter alle billetter fra raden i Kinobillett-tabellen.
        String sql2 = "DROP TABLE Kinobillett"; //SQL-spørring som sletter Kinobillett-tabellen.
        String sql3 = "CREATE TABLE Kinobillett\n" + //SQL-spørring som gjenoppretter Kinobillett-tabellen på nytt.
                "(\n" +
                " id INTEGER AUTO_INCREMENT NOT NULL, \n" +
                " velg VARCHAR(255) NOT NULL,\n" +
                " antall VARCHAR(255) NOT NULL, \n" +
                " fNavn VARCHAR(255) NOT NULL, \n" +
                " eNavn VARCHAR(255) NOT NULL, \n" +
                " tlfNummer VARCHAR(255) NOT NULL, \n" +
                " epost VARCHAR(255) NOT NULL, \n" +
                " PRIMARY KEY (id)\n" +
                ")";
        db.update(sql1);
        db.update(sql2);
        db.update(sql3);

    }
}


