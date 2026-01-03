import React, { useState, useEffect } from 'react';
import { courseAPI } from '../services/api';
import CourseCard from '../components/CourseCard';
import '../styles/CourseList.css';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CourseList = ({ isAdmin = false }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    level: 'Beginner',
    price: '',
    image: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await courseAPI.getAll();
      setCourses(response.data);
    } catch (error) {
      toast.error('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        await courseAPI.update(editingCourse._id, formData);
        toast.success('Course updated successfully');
      } else {
        await courseAPI.create(formData);
        toast.success('Course added successfully');
      }
      resetForm();
      fetchCourses();
    } catch (error) {
      toast.error('Failed to save course');
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await courseAPI.delete(courseId);
        toast.success('Course deleted successfully');
        fetchCourses();
      } catch (error) {
        toast.error('Failed to delete course');
      }
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      instructor: course.instructor,
      duration: course.duration,
      level: course.level,
      price: course.price,
      image: course.image
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      instructor: '',
      duration: '',
      level: 'Beginner',
      price: '',
      image: ''
    });
    setEditingCourse(null);
    setShowForm(false);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterLevel === 'all' || course.level === filterLevel;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <div className="loading">Loading courses...</div>;
  }

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>📚 Explore Courses</h1>
        {isAdmin && (
          <button className="btn-add-course" onClick={() => setShowForm(!showForm)}>
            <FiPlus /> New Course
          </button>
        )}
      </div>

      {showForm && isAdmin && (
        <form className="course-form" onSubmit={handleAddCourse}>
          <h2>{editingCourse ? 'Edit Course' : 'Add New Course'}</h2>
          
          <div className="form-grid">
            <input
              type="text"
              placeholder="Course Title *"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            
            <input
              type="text"
              placeholder="Instructor Name *"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              required
            />
            
            <input
              type="text"
              placeholder="Duration (e.g., 8 weeks) *"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
            />
            
            <input
              type="number"
              placeholder="Price ($) *"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
            
            <select
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          
          <textarea
            placeholder="Course Description *"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows="4"
          ></textarea>
          
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {editingCourse ? 'Update Course' : 'Add Course'}
            </button>
            <button type="button" className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="filters">
        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="filter-select"
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="no-courses">
          <p>No courses found. {isAdmin && 'Create one to get started!'}</p>
        </div>
      ) : (
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <CourseCard
              key={course._id}
              course={course}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
