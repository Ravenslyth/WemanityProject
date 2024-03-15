//Fonction de conversion du numérique au format Romain
function CvtToRom(nbr) {
  let result = "";

  
  const listRules = [
    { value: 1000, rule: "M" },
    { value: 900, rule: "CM" },
    { value: 500, rule: "D" },
    { value: 400, rule: "CD" },
    { value: 100, rule: "C" },
    { value: 90, rule: "XC" },
    { value: 50, rule: "L" },
    { value: 40, rule: "XL" },
    { value: 10, rule: "X" },
    { value: 9, rule: "IX" },
    { value: 5, rule: "V" },
    { value: 4, rule: "IV" },
    { value: 1, rule: "I" },
  ];

  for (let i = 0; i < listRules.length; i++) {
    while (nbr >= listRules[i].value) {
      result = result + listRules[i].rule;
      nbr = nbr - listRules[i].value;
    }
  }
  return result;
}

export default CvtToRom;
