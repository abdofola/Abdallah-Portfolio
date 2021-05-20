/**
 * @Jobs class
 */

import Job from "./Job.js";
import { jobsArr } from "./data.js";

class Jobs {
  constructor() {
    this.jobs = jobsArr;
  }

  assignJob() {
    return this.jobs.map(
      (job) => new Job(job.rangeOfYear, job.company, job.domain, job.text)
    );
  }
}

export default Jobs;
