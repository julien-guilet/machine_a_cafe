export class MachineACafe {

    constructor(prixCafe: number) { 
        this.prixCafe = prixCafe;
    }

    private peutServir = true;
    private argentEncaisse = 0;
    private argentRendu = 0;
    private prixCafe = 0.50;
    private piece = 0;

    public setPeutServir(peutServir: boolean) {
        this.peutServir = peutServir;
    }

    public getPrixCafe() {
        return this.prixCafe;
    }

    public getArgentEncaisse() {
        return this.argentEncaisse;
    }

    public getArgentRendu() {
        return this.argentRendu;
    }

    public insererPiece(piece: number) {
        this.piece = piece;
        this.argentEncaisse = this.argentEncaisse + this.piece;
    }

    public servirCafe() {
        if (this.peutServir) {
            this.piece == this.prixCafe;
            return true;
        }
        else {
            this.argentRendu = this.argentEncaisse;
            this.argentEncaisse = 0;
            return false;
        }
    }


}