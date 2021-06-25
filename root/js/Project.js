import { projectArr } from "./data.js";

class Project {
  // Data
  static projects = projectArr;

  // Constructor
  constructor(title, screenShot, linkDetails) {
    this.title = title;
    this.screenShot = screenShot;
    this.linkDetails = linkDetails;
  }

  //   Methods
  addProject() {
    return Project.projects.map(
      (proj) => new Project(proj.title, proj.screenShot, proj.linkDetails)
    );
  }
  // Getters
  getTitle() {
    return this.title;
  }
  getScreen() {
    return this.screenShot;
  }
  getLink() {
    return this.linkDetails;
  }
}

export default Project;
