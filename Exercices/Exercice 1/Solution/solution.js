/*
## Exercice 1

Jean, Pierre, Maxime et Henri aimeraient connaître leur IMC (indice de masse corporel) grâce à la formule IMC = masse/(taille au carré en mètre)

- Stocker les informations nécessaires
- Calculer les IMC selon les données suivantes :
    - Jean pèse 80kg et mesure 1.69m
    - Henri pèse 79kg et mesure 1.81m
    - Pierre pèse 62kg et mesure 1.68m
    - Maxime pèse 100kg et mesure 1.72m
- Afficher le IMC ainsi que la corpulence : Jean a un IMC de **20kg/m2**  et a donc une corpulence **normale**
    - **en dessous de 18,4 kg/m²**, on considère que la personne est maigre,
    - **entre 18,5 et 24,9 kg/m²**, on considère que la personne a une corpulence "normale",
    - **entre 25 et 29,9 kg/m²**, on considère que la personne est en surpoids,
    - **entre 30 à 34,9 kg/m²**, on considère que la personne est en obésité modérée,
    - **entre 35 et 39,9 kg/m²**, on considère que la personne est en obésité sévère**,**
    - **au-dessus de 40 kg/m²**, on considère que la personne est en obésité morbide.
- Afficher l'IMC le plus haut
*/

const people = [
  {
    name: "Jean",
    weight: 80,
    height: 169,
  },
  {
    name: "Henri",
    weight: 79,
    height: 181,
  },
  {
    name: "Pierre",
    weight: 62,
    height: 168,
  },
  {
    name: "Maxime",
    weight: 100,
    height: 172,
  },
];

//IMC = masse/(taille au carré en mètre)
const computeIMC = (weight, height) => {
  const heightInMeter = height / 100;
  return weight / (heightInMeter * heightInMeter);
};

computeIMC({}, -1);
