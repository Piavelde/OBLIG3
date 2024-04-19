package com.example.oblig2;

import jdk.jfr.DataAmount;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Kinobillett {
    private String film;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String telefonnummer;
    private String email;
}
