import DetialModel from "./Detial.js";
import { projDetials } from "./data.js";

const appDetials = new DetialModel(
  projDetials[0].title,
  projDetials[0].screenShots,
  projDetials[0].about,
  projDetials[0].techs
);
const boomDetials = new DetialModel(
  projDetials[1].title,
  projDetials[1].screenShots,
  projDetials[1].about,
  projDetials[1].techs
);

export { appDetials, boomDetials };
