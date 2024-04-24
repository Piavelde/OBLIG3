package com.example.oblig2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Oblig2Controller {

    @Autowired
    private KinobillettRepository rep;

    @PostMapping("/lagre") //Definerer post-endepunkt for å lagre billetter.
    public void lagreBillett(Kinobillett kjoptBillett){ //Tar imot et kinobillett-objekt og legger det til alleBilletter.
        rep.lagreBillett(kjoptBillett); // Her blir den kjøpte billetten lagt til listen med alle billettene.
    }
    @GetMapping("/getAll") //Definerer get-endepunkt for å hente billetter.
    public List<Kinobillett> getAll() { // Her blir kinobillett objektet tatt imot og lagt inn i listen med alle billetter.
        return rep.hentAlleBilletter(); //Metoden returnerer listen alleBilletter. Den inneholder alle lagrede kinobilletter.
    }
    @GetMapping("/slettAlt") //Definerer get-endepunkt for å slette billetter
    public void slettAlt(){ //Når metoden kalles sletter den "alleBilletter" listen.
        rep.slettAlleBilletter(); // Tømmer innholdet i "alleBilletter" listen.
    }
    }





