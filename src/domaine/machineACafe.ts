export class MachineACafe {

    constructor(prixCafe: number) { 
        this.prixCafe = prixCafe;
    }

    private peutServir = true;
    private argentEncaisse = 0;
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

    public insererPiece(piece: number) {
        this.piece = piece;
        this.argentEncaisse = this.argentEncaisse + this.piece;
    }

    public servirCafe() {
        if (this.peutServir && this.piece >= this.prixCafe) {
            return true;
        }
        else {
            this.argentEncaisse = this.argentEncaisse - this.piece;
            return false;
        }
    }


}