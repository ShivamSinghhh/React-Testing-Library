import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("checkbox enables button on first click and disable it on second click", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  await user.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

describe("Popover responds to hovers", () => {
  const user = userEvent.setup();
  test("popover should start out hidden", () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      /No icecream will actually be delivered!/i
    );
    expect(nullPopover).not.toBeInTheDocument();
  });

  test("popover should appear on mouse hover on checkbox label", async () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    console.log(termsAndConditions);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /No icecream will actually be delivered!/i
    );
    expect(popover).toBeInTheDocument();
  });

  test("popover should disappear on mouse leave on checkbox label", async () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.unhover(termsAndConditions);
    const popover = screen.queryByText(
      /No icecream will actually be delivered!/i
    );
    expect(popover).not.toBeInTheDocument();
  });
});
