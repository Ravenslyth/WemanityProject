//Fonction de conversion du numérique au format Romain

/*
  Boucle de logique qui va ,pour chaque élément de mon tableau listRules 
  vérifier si mon chiffre est < a la valeur de lecture 
  OUI -- Implémente la lettre Romaine correspondante / enléve la valeur associé a notre chiffre / effectue l'action tant que mon chiffre est plus grand que la valeur lu
  NON -- lecture Suivante
*/

function CvtToRom(nbr) {
  let result = "";

  const listRules = [
    { value: 1000, rule: "M" },
    { value: 500, rule: "D" },
    { value: 100, rule: "C" },
    { value: 50, rule: "L" },
    { value: 10, rule: "X" },
    { value: 5, rule: "V" },
    { value: 1, rule: "I" },
  ];

  for (let i = 0; i < listRules.length; i++) {
    while (nbr >= listRules[i].value) {
      result = result + listRules[i].rule;
      nbr = nbr - listRules[i].value;
    }
  }
  console.log(result);
  return result;
}

export default CvtToRom;
