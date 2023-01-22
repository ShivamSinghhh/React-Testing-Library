
import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from '@testing-library/react';
import App from "./App";

test("button has correct innitial color & updates when clicked", () => {
  render(<App />);
  // logRoles(container)
  // find an element with a role of button and text for "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click functionalities
  fireEvent.click(colorButton);
  // expect the background color to be blue when clicked
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

