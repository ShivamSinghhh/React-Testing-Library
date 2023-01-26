import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";


test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox",{name: /terms and conditions/i});
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole("button",{name: /confirm order/i});
  expect(confirmButton).toBeDisabled()
  });
  

test('checkbox enables button on first click and disable it on second click', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox",{name:/terms and conditions/i});
  const confirmButton = screen.getByRole("button",{name:/confirm order/i});
  fireEvent.click(checkBox); 
  expect(checkBox).toBeChecked();
  expect(confirmButton).toBeEnabled(); 

  fireEvent.click(checkBox); 
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled()
});
