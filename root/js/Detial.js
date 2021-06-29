/**
 * @DetialModel class
 */

export default class DetialModel {
  // Data
  #title;
  #screenShots;
  #about;
  #technical;

  // Constructor
  constructor(title, screenShots, about, technical) {
    this.#title = title;
    this.#screenShots = screenShots;
    this.#about = about;
    this.#technical = technical;
  }

  // Methods
  getTitle() {
    return this.#title;
  }
  getScreens() {
    return this.#screenShots;
  }
  getAbout() {
    return this.#about;
  }
  getTech() {
    return this.#technical;
  }
}
