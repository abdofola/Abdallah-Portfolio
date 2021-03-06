import DetialModel from "./Detial.js";
import { projDetials } from "./data.js";

const momoDetials = new DetialModel(
  projDetials[0].title,
  projDetials[0].screenShots,
  projDetials[0].about,
  projDetials[0].techs
);
const appDetials = new DetialModel(
  projDetials[1].title,
  projDetials[1].screenShots,
  projDetials[1].about,
  projDetials[1].techs
);
const boomDetials = new DetialModel(
  projDetials[2].title,
  projDetials[2].screenShots,
  projDetials[2].about,
  projDetials[2].techs
);
const facebookDetials = new DetialModel(
  projDetials[3].title,
  projDetials[3].screenShots,
  projDetials[3].about,
  projDetials[3].techs
);
const blogDetials = new DetialModel(
  projDetials[4].title,
  projDetials[4].screenShots,
  projDetials[4].about,
  projDetials[4].techs
);
const odooModuleDetials = new DetialModel(
  projDetials[5].title,
  projDetials[5].screenShots,
  projDetials[5].about,
  projDetials[5].techs
);

export {
  appDetials,
  boomDetials,
  facebookDetials,
  blogDetials,
  momoDetials,
  odooModuleDetials,
};
