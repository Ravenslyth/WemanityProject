function CvtToNum(rom) {
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

  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < rom.length; i++) {
    let currentRule = listRules.find((rule) => rule.rule === rom[i]);

    if (!currentRule) {
      return "Erreur : Symbole romain invalide";
    }

    // Si le symbole romain actuel est plus grand que le précédent, on le soustrait deux fois
    if (prevValue < currentRule.value) {
      // Si le symbole précédent est invalide pour être soustrait, cela signifie que la chaîne est invalide
      if (
        prevValue !== 0 &&
        (currentRule.value / prevValue > 10 ||
          (prevValue !== 1 && currentRule.value / prevValue > 5))
      ) {
        return "Erreur : Symbole romain invalide";
      }
      result += currentRule.value - 2 * prevValue;
    } else {
      result += currentRule.value;
    }

    prevValue = currentRule.value;
  }

  return result;
}

export default CvtToNum;
