import { render, screen, waitFor } from "@testing-library/react";

//Import interfaces et fonctions
import Interface from "../Components/Interface";
import CvtToRom from "../Controller/FunctionCvtToRom";
import CvtToNum from "../Controller/FunctionCvtToNum";

//Vérifie l'existance de mes composants dans mon Interface
test("renders check elements", () => {
  render(<Interface />);

  const TextFieldCvt = screen.getByTestId("numberToCvt");
  const TextFieldRom = screen.getByTestId("Rom");
  const BtnCvtNum = screen.getByTestId("btnNum");
  const BtnCvtRom = screen.getByTestId("btnRom");

  expect(TextFieldCvt).toBeInTheDocument();
  expect(TextFieldRom).toBeInTheDocument();
  expect(BtnCvtNum).toBeInTheDocument();
  expect(BtnCvtRom).toBeInTheDocument();
});

//Vérifie si ma valeur initial a convertir est bien à 0 avant insertion
test("renders check initial value", () => {
  render(<Interface />);
  const textField = screen.getByTestId("numberToCvt");
  const textFieldValue = textField.querySelector("input").value;
  expect(textFieldValue).toBe("0");
});

//Vérifie jusqu'a 10 fois le test de ma fonction de conversion Romaine
test("Test de la fonction de conversion du numérique au format romain jusqu'à 10", () => {
  //liste des cas qui doit étre validé
  const testCases = [
    { value: 1, rule: "I" },
    { value: 2, rule: "II" },
    { value: 3, rule: "III" },
    { value: 4, rule: "IV" },
    { value: 5, rule: "V" },
    { value: 6, rule: "VI" },
    { value: 7, rule: "VII" },
    { value: 8, rule: "VIII" },
    { value: 9, rule: "IX" },
    { value: 10, rule: "X" },
    { value: 49, rule: "XLIX" },
  ];

  testCases.forEach(({ value, rule }) => {
    const result = CvtToRom(value); // Appel de la fonction de conversion
    expect(result).toBe(rule); // Vérification du résultat
  });
});

//Vérifie jusqu'a 10 fois le test de ma fonction de conversion Romaine
test("Test de la fonction de conversion du Romain au format Numérique jusqu'à 10", () => {
  //liste des cas qui doit étre validé
  const testCases = [
    { value: 1, rule: "I" },
    { value: 2, rule: "II" },
    { value: 3, rule: "III" },
    { value: 4, rule: "IV" },
    { value: 5, rule: "V" },
    { value: 6, rule: "VI" },
    { value: 7, rule: "VII" },
    { value: 8, rule: "VIII" },
    { value: 9, rule: "IX" },
    { value: 10, rule: "X" },
    { value: 49, rule: "XLIX" },
  ];

  testCases.forEach(({ value, rule }) => {
    const result = CvtToNum(rule); // Appel de la fonction de conversion
    expect(result).toBe(value); // Vérification du résultat
  });
});
