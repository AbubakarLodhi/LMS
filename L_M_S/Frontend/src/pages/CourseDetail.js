import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseAPI, lessonAPI } from '../services/api';
import '../styles/CourseDetail.css';
import { FiChevronRight, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CourseDetail = ({ isAdmin = false }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddLessonForm, setShowAddLessonForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    videoUrl: '',
    duration: 0,
    orderIndex: 0
  });

  const fetchCourseAndLessons = useCallback(async () => {
    try {
      setLoading(true);
      const courseRes = await courseAPI.getById(courseId);
      setCourse(courseRes.data);

      const lessonsRes = await lessonAPI.getByCourse(courseId);
      setLessons(lessonsRes.data);
    } catch (error) {
      toast.error('Failed to load course details');
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchCourseAndLessons();
  }, [fetchCourseAndLessons]);

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const lessonData = {
        ...formData,
        courseId,
        orderIndex: lessons.length + 1
      };
      await lessonAPI.create(lessonData);
      setFormData({
        title: '',
        description: '',
        content: '',
        videoUrl: '',
        duration: 0,
        orderIndex: 0
      });
      setShowAddLessonForm(false);
      fetchCourseAndLessons();
      toast.success('Lesson added successfully');
    } catch (error) {
      toast.error('Failed to add lesson');
    }
  };

  const handleDeleteLesson = async (lessonId) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      try {
        await lessonAPI.delete(lessonId);
        toast.success('Lesson deleted successfully');
        fetchCourseAndLessons();
      } catch (error) {
        toast.error('Failed to delete lesson');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!course) {
    return <div className="not-found">Course not found</div>;
  }

  return (
    <div className="course-detail">
      <div className="course-header">
        <img src={course.image} alt={course.title} className="header-image" />
        <div className="header-content">
          <button className="btn-back" onClick={() => navigate('/courses')}>
            ← Back to Courses
          </button>
          <h1>{course.title}</h1>
          <p className="instructor">👨‍🏫 Instructor: {course.instructor}</p>
          <div className="course-stats">
            <span>📚 {lessons.length} Lessons</span>
            <span>👥 {course.students} Students</span>
            <span>⭐ {course.rating.toFixed(1)}</span>
            <span>💵 ${course.price}</span>
          </div>
        </div>
      </div>

      <div className="course-body">
        <section className="about-section">
          <h2>About This Course</h2>
          <p>{course.description}</p>
          <div className="course-meta">
            <div className="meta-item">
              <span className="label">Level:</span>
              <span className="value">{course.level}</span>
            </div>
            <div className="meta-item">
              <span className="label">Duration:</span>
              <span className="value">{course.duration}</span>
            </div>
          </div>
        </section>

        <section className="lessons-section">
          <div className="lessons-header">
            <h2>📖 Course Lessons</h2>
            {isAdmin && (
              <button 
                className="btn-add-lesson"
                onClick={() => setShowAddLessonForm(!showAddLessonForm)}
              >
                <FiPlus /> Add Lesson
              </button>
            )}
          </div>

          {showAddLessonForm && isAdmin && (
            <form className="lesson-form" onSubmit={handleAddLesson}>
              <input
                type="text"
                placeholder="Lesson Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Lesson Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <textarea
                placeholder="Lesson Content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              ></textarea>
              <input
                type="url"
                placeholder="Video URL (optional)"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              />
              <input
                type="number"
                placeholder="Duration (minutes)"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
              <div className="form-actions">
                <button type="submit" className="btn-submit">Add Lesson</button>
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowAddLessonForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="lessons-list">
            {lessons.length === 0 ? (
              <p className="no-lessons">No lessons yet. {isAdmin && 'Add one to get started!'}</p>
            ) : (
              lessons.map((lesson) => (
                <div key={lesson._id} className="lesson-item">
                  <div className="lesson-index">{lesson.orderIndex}</div>
                  <div className="lesson-info">
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    {lesson.duration > 0 && <span className="duration">⏱️ {lesson.duration} min</span>}
                  </div>
                  <div className="lesson-actions">
                    <button className="btn-read">
                      <FiChevronRight /> Read
                    </button>
                    {isAdmin && (
                      <>
                        <button className="btn-edit" onClick={() => alert('Edit feature coming soon')}>
                          <FiEdit2 />
                        </button>
                        <button className="btn-delete" onClick={() => handleDeleteLesson(lesson._id)}>
                          <FiTrash2 />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;
