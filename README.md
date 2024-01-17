# Méthodes et Test pour une machine à café
> Julien Guillet - Max Wacquier - Laura Nesta

## Etape 1
ETANT DONNE une machine à café  
QUAND on insère au moins le prix d'un café  
ALORS un café est servi  
ET l'argent est encaissé  
CAS {50cts, 1€, 2€}  
  
ETANT DONNE une machine à café  
QUAND on insère moins que le prix d'un café  
ALORS aucun café n'est servi  
ET l'argent est rendu  
CAS {1ct, 2cts, 5cts, 10cts, 20cts}  
  
ETANT DONNE une machine a café ne pouvant pas servir  
QUAND on insère au moins le prix d'un café  
ALORS aucun café n'est servi  
ET l'argent est rendu  
  
## Etape 2
Sucre : Possibilité de choisir entre 0 et 1 doses de sucre à l'aide d'un bouton
[2|A]

ETANT DONNE une machine a café  
ET que le bouton "sucre" a été appuyé un nombre impair de fois  
QUAND on insère au moins le prix d'un café  
ALORS un café sucré coule  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café  
ET que le bouton "sucre" a été appuyé un nombre impair de fois  
QUAND on insère moins que le prix d'un café  
ALORS aucun café ne coule  
ET l'argent est rendu  
  
ETANT DONNE une machine a café  
ET que le bouton "sucre" a été appuyé un nombre pair de fois  
QUAND on insère 50cts  
ALORS un café non sucré coule  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café ayant une défaillance lors de l'ajout de sucre  
ET que le bouton "sucre" a été appuyé  
QUAND on insère 50cts  
ALORS un café non sucré coule  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café ayant une défaillance  
ET que le bouton "sucre" a été appuyé  
QUAND on insère 50cts  
ALORS aucun café ne coule  
ET l'argent est rendu  
Détection tasse/gobelets : Consultation d'un capteur et déclenchement de la chute d'un gobelet si pas de tasse.  
[1|B]  

ETANT DONNE une machine a café ne détectant pas de tasse  
QUAND on insère 50cts  
ALORS un café avec gobelet est servi  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café ne détectant pas de tasse  
ET défaillante sur le service des gobelets  
QUAND on insère 50cts  
ALORS aucun café n'est servi  
ET l'argent est rendu  
  
ETANT DONNE une machine a café détectant une tasse  
QUAND on insère 50cts  
ALORS un café sans gobelet est servi  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café détectant une tasse  
ET défaillante sur le service des gobelets  
QUAND on insère 50cts  
ALORS un café est servi  
ET l'argent est encaissé  
  
## Etape 3 
Allongé : Possibilité si un client appuie sur un bouton d'avoir une dose d'eau en plus
[2|A]  

ETANT DONNE une machine a café  
ET que le bouton "allongé" a été appuyé un nombre impair de fois  
QUAND on insère au moins le prix d'un café  
ALORS un café allongé coule  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café  
ET que le bouton "allongé" a été appuyé un nombre impair de fois  
QUAND on insère moins que le prix d'un café  
ALORS aucun café ne coule  
ET l'argent est rendu  
  
ETANT DONNE une machine a café  
ET que le bouton "allongé" a été appuyé un nombre pair de fois  
QUAND on insère 50cts  
ALORS un café court coule  
ET l'argent est encaissé  
  
ETANT DONNE une machine a café ayant une défaillance lors de l'ajout d'eau  
ET que le bouton "allongé" a été appuyé  
QUAND on insère 50cts  
ALORS aucun café ne coule  
ET l'argent est rendu  
  
ETANT DONNE une machine a café ayant une défaillance  
ET que le bouton "allongé" a été appuyé  
QUAND on insère 50cts  
ALORS aucun café ne coule  
ET l'argent est rendu  
  
### Exemple d'interface 
```
export interface HardwareInterface{
    servirCafé(): number; // 0 si tout ok, sinon erreur
    registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void;
    registerBoutonSucreAppuyéCallback(callback: (newState: boolean) => void): void;

    // SUCRE
    ajouterDoseSucre(): number; // 0 = ok, > 0 = ko

    // ALLONGE
    ajouterDoseEau(): number; // 0 = ok, > 0 ko

    // DETECTION + GOBELETS
    faireTomberGobelet(): number; // 0 = ok, > 0 ko
    getTasseDétectée(): boolean;
}
```
