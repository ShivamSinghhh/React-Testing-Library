import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "choclate", imagePath: "images/choclate.png" },
        { name: "vanilla", imagePth: "/images/vanilla.png" },
      ])
    );
  }),
];
