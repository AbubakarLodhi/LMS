import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CourseCard.css';
import { FiEdit2, FiTrash2, FiBook } from 'react-icons/fi';

const CourseCard = ({ course, onEdit, onDelete, isAdmin = false }) => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate(`/course/${course._id}`);
  };

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-level">{course.level}</div>
      </div>

      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">👨‍🏫 {course.instructor}</p>
        <p className="course-description">{course.description.substring(0, 80)}...</p>

        <div className="course-info">
          <span className="duration">⏱️ {course.duration}</span>
          <span className="students">👥 {course.students}</span>
        </div>

        <div className="course-footer">
          <div className="price-rating">
            <span className="price">${course.price}</span>
            <span className="rating">⭐ {course.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="course-actions">
          <button className="btn-view" onClick={handleViewCourse}>
            <FiBook /> View
          </button>
          {isAdmin && (
            <>
              <button className="btn-edit" onClick={() => onEdit(course)}>
                <FiEdit2 /> Edit
              </button>
              <button className="btn-delete" onClick={() => onDelete(course._id)}>
                <FiTrash2 /> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
