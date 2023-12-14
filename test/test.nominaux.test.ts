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
            expect(machineACafe.getArgentEncaisse()).toBe(0);
        });

    test("ETANT DONNE une machine a café ne pouvant pas servir " +
        "QUAND on insère au moins le prix d'un café " +
        "ALORS aucun café n'est servi " +
        "ET l'argent est rendu ", () => {

            // Arrange
            const machineACafe = new MachineACafe(prixCafe);
            machineACafe.setPeutServir(false);
            const piece = machineACafe.getPrixCafe();

            // Act
            machineACafe.insererPiece(piece);
            const resultat = machineACafe.servirCafe();

            // Assert
            expect(resultat).toBe(false);
            expect(machineACafe.getArgentEncaisse()).toBe(0);
        });

        test("ETANT DONNE une machine a café " +
        "QUAND on insère au moins le prix d'un café " +
        "ET qu'on insère une pièce inférieur au prix d'un café " +
        "ET qu'on insère au moins le prix d'un café " +
        "ALORS deux café est servi " +
        "ET de l'argent est rendu ", () => {

            // Arrange
            const machineACafe = new MachineACafe(prixCafe);
            const piece1 = pieceSuperieurOuEgaleAuPrixDuCafe[0];
            const piece2 = pieceInférieurAuPrixDuCafe[0];
            const piece3 = pieceSuperieurOuEgaleAuPrixDuCafe[0];

            // Act
            machineACafe.insererPiece(piece1);
            const resultat1 = machineACafe.servirCafe();
            machineACafe.insererPiece(piece2);
            const resultat2 = machineACafe.servirCafe();
            machineACafe.insererPiece(piece3);
            const resultat3 = machineACafe.servirCafe();

            // Assert
            expect(resultat1).toBe(true);
            expect(resultat2).toBe(false);
            expect(resultat3).toBe(true);
            expect(machineACafe.getArgentEncaisse()).toBe(1);
        });
});