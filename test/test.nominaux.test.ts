import { MachineACafe } from "../src/domaine/machineACafe";

describe("test works", () => {

    const pieceSuperieurOuEgaleAuPrixCafe: number[] = [0.50, 1, 2];
    const prixCafe = 0.50;

    test.each([...pieceSuperieurOuEgaleAuPrixCafe])("ETANT DONNE une machine à café " +
        "QUAND on insère au moins le prix d'un café : %s€ " +
        "ALORS un café est servi " +
        "ET l'argent est encaissé", (pieceInséré) => {

            // Arrange
            const machineACafe = new MachineACafe(prixCafe);
            const piece = pieceInséré;

            // Act
            machineACafe.insererPiece(piece);
            const resultat = machineACafe.servirCafe();

            // Assert
            expect(resultat).toBe(true);
            expect(machineACafe.getArgentEncaisse()).toBe(pieceInséré);
        });



    //     test("ETANT DONNE une machine à café " +
    //     "QUAND on insère moins que le prix d'un café " +
    //     "ALROS aucun café n'est servi "+
    //     "ET l'argent est rendu", () =>{
    // //CAS {1ct, 2cts, 5cts, 10cts, 20cts}
    //    // Arrange
    //    const machineACafe = new MachineACafe();
    //    const prixCafe = machineACafe.getPrixCafe();
    //    const argentInsere = prixCafe - 1;

    //    // Act
    //    machineACafe.insererArgent(argentInsere);
    //    const resultat = machineACafe.servirCafe();

    //    // Assert
    //    expect(resultat).toBe("Aucun café servi");
    //    expect(machineACafe.getArgentRendu()).toBe(argentInsere);
    //     });

    //     test("ETANT DONNE une machine a café ne pouvant pas servir " +
    //     "QUAND on insère au moins le prix d'un café " +
    //     "ALORS aucun café n'est servi "+
    //     "ET l'argent est rendu ", () =>{

    //    // Arrange
    //    const machineACafe = new MachineACafe();
    //    machineACafe.setPeutServir(false);
    //    const prixCafe = machineACafe.getPrixCafe();

    //    // Act
    //    machineACafe.insererArgent(prixCafe);
    //    const resultat = machineACafe.servirCafe();

    //    // Assert
    //    expect(resultat).toBe("Aucun café servi");
    //    expect(machineACafe.getArgentRendu()).toBe(prixCafe);
    //     });
});