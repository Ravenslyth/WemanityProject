import { render, screen, waitFor } from "@testing-library/react";
import Interface from "../Components/Interface";

test("renders check elements", () => {
  render(<Interface />);

  const TextFieldCvt = screen.getByTestId("numberToCvt");
  const TextFieldRom = screen.getByTestId("Rom");

  expect(TextFieldCvt).toBeInTheDocument();
  expect(TextFieldRom).toBeInTheDocument();
});

test("renders check initial value", () => {
  render(<Interface />);
  const textField = screen.getByTestId("numberToCvt");
  const textFieldValue = textField.querySelector("input").value;
  expect(textFieldValue).toBe("0");
});
