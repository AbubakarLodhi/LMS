const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const Course = require('../models/Course');

// GET all lessons for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const lessons = await Lesson.find({ courseId: req.params.courseId }).sort({ orderIndex: 1 });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single lesson
router.get('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE new lesson
router.post('/', async (req, res) => {
  const lesson = new Lesson({
    courseId: req.body.courseId,
    title: req.body.title,
    description: req.body.description,
    videoUrl: req.body.videoUrl,
    content: req.body.content,
    duration: req.body.duration,
    orderIndex: req.body.orderIndex
  });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE lesson
router.put('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    if (req.body.title) lesson.title = req.body.title;
    if (req.body.description) lesson.description = req.body.description;
    if (req.body.videoUrl !== undefined) lesson.videoUrl = req.body.videoUrl;
    if (req.body.content) lesson.content = req.body.content;
    if (req.body.duration !== undefined) lesson.duration = req.body.duration;
    if (req.body.orderIndex !== undefined) lesson.orderIndex = req.body.orderIndex;

    lesson.updatedAt = Date.now();
    const updatedLesson = await lesson.save();
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE lesson
router.delete('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json({ message: 'Lesson deleted successfully', lesson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
