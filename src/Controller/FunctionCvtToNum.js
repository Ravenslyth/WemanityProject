//Fonction de conversion du Romain au format Numerique

function CvtToNum(rom) {
  let result = 0;

  const invalidChars = /[^IVXLCDM]/;
  if (invalidChars.test(rom)) {
    return 0;
  }

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

  let i = 0;

  while (i < rom.length) {
    let currentRule = listRules.find((rule) => rule.rule === rom[i]);
    if (currentRule) {
      let nextRule = listRules.find((rule) => rule.rule === rom[i + 1]);

      if (nextRule && currentRule.value < nextRule.value) {
        result += nextRule.value - currentRule.value;
        i += 2;
      } else {
        result += currentRule.value;
        i++;
      }
    } else {
      return;
    }
  }

  return result;
}

export default CvtToNum;
