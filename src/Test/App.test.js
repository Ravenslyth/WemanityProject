import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import Interface from "../Components/Interface";

test("renders check App exist", () => {
  const { getByTestId } = render(<App />);
  const interfaceComponent = getByTestId("DOM-component");
  expect(interfaceComponent).toBeInTheDocument();
});

