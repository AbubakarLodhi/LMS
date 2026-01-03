import React, { useState, useEffect } from 'react';
import { courseAPI } from '../services/api';
import '../styles/Home.css';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [topCourses, setTopCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopCourses();
  }, []);

  const fetchTopCourses = async () => {
    try {
      const response = await courseAPI.getAll();
      setTopCourses(response.data.slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch courses');
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LMS Academy</h1>
          <p>Learn new skills from industry experts. Start your learning journey today!</p>
          <button className="btn-hero" onClick={() => navigate('/courses')}>
            Explore Courses <FiArrowRight />
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            📚👨‍💼👩‍💼🎓
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Structured Learning</h3>
            <p>Well-organized courses with clear learning objectives</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experts</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Quality Content</h3>
            <p>High-quality videos, materials, and assignments</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Learn at Your Pace</h3>
            <p>Complete courses on your own schedule</p>
          </div>
        </div>
      </section>

      {topCourses.length > 0 && (
        <section className="popular-courses">
          <h2>Popular Courses</h2>
          <div className="courses-preview">
            {topCourses.map(course => (
              <div key={course._id} className="preview-card">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <span className="price">${course.price}</span>
              </div>
            ))}
          </div>
          <button className="btn-all-courses" onClick={() => navigate('/courses')}>
            View All Courses
          </button>
        </section>
      )}

      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <button className="btn-cta" onClick={() => navigate('/courses')}>
          Browse Courses Now
        </button>
      </section>
    </div>
  );
};

export default Home;
