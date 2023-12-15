export class MachineACafe {

    constructor(prixCafe: number) { 
        this.prixCafe = prixCafe;
    }

    private peutServir = true;
    private argentEncaisse = 0;
    private prixCafe = 0.50;
    private piece = 0;
    private allonge = false;
    private nombreAppuisSucre = 0;
    private defaillanceAjoutSucre = false;
    private defaillance = false;

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
        if (this.peutServir && this.piece >= this.prixCafe && !this.defaillance) {
            return true;
        }
        else {
            this.argentEncaisse = this.argentEncaisse - this.piece;
            return false;
        }
    }

    public setAllonge(allonge: boolean) {
        this.allonge = allonge;
    }

    public ajouterEau() {
        if (this.allonge) {
            return true;
        }
        else {
            return false;
        }
    }

    public setNombreAppuisSucre(nombreAppuisSucre: number): void {
        this.nombreAppuisSucre = nombreAppuisSucre;
    }

    public setDefaillanceAjoutSucre(defaillanceAjoutSucre: boolean): void {
        this.defaillanceAjoutSucre = defaillanceAjoutSucre;
    }

    public setDefaillance(defaillance: boolean): void {
        this.defaillance = defaillance;
    }
}