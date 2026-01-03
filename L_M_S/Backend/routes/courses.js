const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE new course
router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    instructor: req.body.instructor,
    duration: req.body.duration,
    level: req.body.level,
    price: req.body.price,
    image: req.body.image
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE course
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (req.body.title) course.title = req.body.title;
    if (req.body.description) course.description = req.body.description;
    if (req.body.instructor) course.instructor = req.body.instructor;
    if (req.body.duration) course.duration = req.body.duration;
    if (req.body.level) course.level = req.body.level;
    if (req.body.price !== undefined) course.price = req.body.price;
    if (req.body.image) course.image = req.body.image;
    if (req.body.students !== undefined) course.students = req.body.students;
    if (req.body.rating !== undefined) course.rating = req.body.rating;

    course.updatedAt = Date.now();
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE course
router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully', course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
