package com.example.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Oblig2Controller {
    public final List<Kinobillett> alleOrdre = new ArrayList<>();

    @PostMapping("/lagreInfo")
    public void nyttFormat(Kinobillett ordre) { alleOrdre.add(ordre); }

    @GetMapping("/overforeInfo")
    public List<Kinobillett> overforeOrdre() { return alleOrdre; }

    @PostMapping("/slettInfo")
    public void slettBilletter() { alleOrdre.clear(); }


    }


