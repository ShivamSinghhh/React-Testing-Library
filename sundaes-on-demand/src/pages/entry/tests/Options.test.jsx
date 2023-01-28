import { screen, render } from "@testing-library/react";
import Options from "../Options";

test("display image for each scoop options", async () => {
  render(<Options optionType="scoops" />);
  // find all images
  const scoopImages = await screen.findAllByRole("img", { name: / scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm Alt text of images
  const altText = scoopImages.map((image) => image.alt);
  expect(altText).toEqual(["chocolate scoop", "vanilla scoop"]);
});
