const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const { title, description, requirements, location, salary } = req.body;
    const employerId = req.user.id;

    const job = new Job({
      title,
      description,
      requirements,
      location,
      salary,
      employer: employerId,
    });

    await job.save();

    res.status(201).json({ job, message: 'Job posted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updates = req.body;

    const job = await Job.findByIdAndUpdate(
      jobId,
      { $set: updates },
      { new: true }
    );

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    await Job.findByIdAndDelete(jobId);

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const { keyword, location, industry, salary, jobType, experienceLevel } =
      req.query;

    let query = {};

    if (keyword) query.title = { $regex: keyword, $options: 'i' };
    if (location) query.location = location;
    if (industry) query.industry = industry;
    if (salary) query.salary = { $gte: salary };
    if (jobType) query.jobType = jobType;
    if (experienceLevel) query.experienceLevel = experienceLevel;

    const jobs = await Job.find(query);

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
