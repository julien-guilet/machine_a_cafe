import { MachineACafe } from "../src/domaine/machineACafe";

describe("test works", () => {

    const pieceSuperieurOuEgaleAuPrixDuCafe: number[] = [0.50, 1, 2];
    const pieceInférieurAuPrixDuCafe: number[] = [0.01, 0.02, 0.05, 0.10, 0.20];
    const prixCafe: number = 0.50;

    test.each([...pieceSuperieurOuEgaleAuPrixDuCafe])("ETANT DONNE une machine à café " +
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



    test.each([...pieceInférieurAuPrixDuCafe])("ETANT DONNE une machine à café " +
        "QUAND on insère moins que le prix d'un café : %s€ " +
        "ALROS aucun café n'est servi " +
        "ET l'argent est rendu", (pieceInséré) => {
            // Arrange
            const machineACafe = new MachineACafe(prixCafe);
            const piece = pieceInséré;

            // Act
            machineACafe.insererPiece(piece);
            const resultat = machineACafe.servirCafe();

            // Assert
            expect(resultat).toBe(false);
            expect(machineACafe.getArgentRendu()).toBe(piece);
        });

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