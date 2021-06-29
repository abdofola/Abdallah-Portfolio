/**
 * @Jobs class
 */

import { jobsArr } from "./data.js";

class Jobs {
  // Data
  static jobs = jobsArr;
  // Constructor
    constructor(rangeOfYear, company, role, text) {
      this.rangeOfYear = rangeOfYear;
      this.company = company;
      this.role = role;
      this.text = text;
    }
// Methods
  assignJob() {
    return Jobs.jobs.map(
      (job) => new Jobs(job.rangeOfYear, job.company, job.role, job.text)
    );
  }
}

export default Jobs;
