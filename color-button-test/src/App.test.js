import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from '@testing-library/react';
import App, { replaceCamelCaseWithSpace } from "./App";

test("button has correct innitial color & updates when clicked", () => {
  render(<App />);
  // logRoles(container)
  // find an element with a role of button and text for "Change to Midnight Blue"
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click functionalities
  fireEvent.click(colorButton);
  // expect the background color to be MidnightBlue when clicked
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();
  // check that checkbox is starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

it("should make button disabled & checkbox checked and vice-versa", () => {
  // after
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("button color should be gray when disabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "grey" });
});

//----------------------------------------------------------------//
describe("spaces before camelcase capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpace("Red")).toBe("Red");
  });
  test("works for single capital letter", () => {
    expect(replaceCamelCaseWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple capital letters", () => {
    expect(replaceCamelCaseWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
