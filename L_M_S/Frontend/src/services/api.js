import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Courses API
export const courseAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/courses`),
  getById: (id) => axios.get(`${API_BASE_URL}/courses/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/courses`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/courses/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/courses/${id}`)
};

// Lessons API
export const lessonAPI = {
  getByCourse: (courseId) => axios.get(`${API_BASE_URL}/lessons/course/${courseId}`),
  getById: (id) => axios.get(`${API_BASE_URL}/lessons/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/lessons`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/lessons/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/lessons/${id}`)
};
