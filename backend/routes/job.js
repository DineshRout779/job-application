const express = require('express');
const {
  createJob,
  updateJob,
  deleteJob,
  getJobs,
} = require('../controllers/job');
const isLoggedin = require('../middlewares/isLoggedin');

const router = express.Router();

router.post('/', isLoggedin, createJob);
router.put('/:id', isLoggedin, updateJob);
router.delete('/:id', isLoggedin, deleteJob);
router.get('/', getJobs);

module.exports = router;
