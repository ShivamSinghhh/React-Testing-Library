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

test("display image for each topping options",async()=>{
  render(<Options optionType="toppings" />);
  
  const toppingImages = await screen.findAllByRole("img", { name: / topping$/i });
  expect(toppingImages).toHaveLength(3)

  const imageTitle = toppingImages.map((image)=> image.alt)
  expect(imageTitle).toEqual(["Cherries topping","M&Ms topping","Hot fudge topping"])
})

