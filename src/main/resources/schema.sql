CREATE TABLE Kinobillett
(
    id        INTEGER AUTO_INCREMENT NOT NULL,
    velg      VARCHAR(255) NOT NULL,
    antall    VARCHAR(255) NOT NULL,
    fNavn     VARCHAR(255) NOT NULL,
    eNavn     VARCHAR(255) NOT NULL,
    tlfNummer VARCHAR(255) NOT NULL,
    epost     VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
