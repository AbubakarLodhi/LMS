/**
 * Sample Data for LMS Academy
 * Use this to populate your database with test courses
 */

const sampleCourses = [
  {
    title: "Web Development Fundamentals",
    description: "Learn the complete basics of web development including HTML5, CSS3, and JavaScript ES6+. This course covers everything a beginner needs to know.",
    instructor: "John Doe",
    duration: "8 weeks",
    level: "Beginner",
    price: 49.99,
    image: "https://via.placeholder.com/400x300?text=Web+Dev",
    students: 250,
    rating: 4.8
  },
  {
    title: "React.js Masterclass",
    description: "Master React with hooks, context API, and state management. Build professional React applications from scratch.",
    instructor: "Sarah Johnson",
    duration: "10 weeks",
    level: "Intermediate",
    price: 79.99,
    image: "https://via.placeholder.com/400x300?text=React",
    students: 180,
    rating: 4.9
  },
  {
    title: "Python for Data Science",
    description: "Learn Python programming with focus on data analysis, visualization, and machine learning fundamentals.",
    instructor: "Mike Chen",
    duration: "12 weeks",
    level: "Intermediate",
    price: 89.99,
    image: "https://via.placeholder.com/400x300?text=Python",
    students: 320,
    rating: 4.7
  },
  {
    title: "Node.js & Express API Development",
    description: "Build scalable REST APIs with Node.js and Express. Learn about databases, authentication, and deployment.",
    instructor: "Emily Wilson",
    duration: "9 weeks",
    level: "Intermediate",
    price: 69.99,
    image: "https://via.placeholder.com/400x300?text=Node.js",
    students: 210,
    rating: 4.8
  },
  {
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts including closures, prototypes, async/await, and design patterns.",
    instructor: "David Lee",
    duration: "6 weeks",
    level: "Advanced",
    price: 99.99,
    image: "https://via.placeholder.com/400x300?text=JavaScript",
    students: 150,
    rating: 4.9
  },
  {
    title: "MongoDB & Database Design",
    description: "Master MongoDB, database design principles, indexing, and optimization. Build efficient data models.",
    instructor: "Lisa Anderson",
    duration: "8 weeks",
    level: "Intermediate",
    price: 59.99,
    image: "https://via.placeholder.com/400x300?text=MongoDB",
    students: 280,
    rating: 4.6
  },
  {
    title: "CSS Grid & Flexbox",
    description: "Master modern CSS layout techniques. Learn CSS Grid and Flexbox with practical projects.",
    instructor: "James Brown",
    duration: "5 weeks",
    level: "Beginner",
    price: 39.99,
    image: "https://via.placeholder.com/400x300?text=CSS",
    students: 400,
    rating: 4.8
  },
  {
    title: "Full Stack MERN Development",
    description: "Complete MERN stack development course. Build full-stack applications with MongoDB, Express, React, and Node.js.",
    instructor: "Alexandra Martinez",
    duration: "16 weeks",
    level: "Advanced",
    price: 129.99,
    image: "https://via.placeholder.com/400x300?text=MERN",
    students: 120,
    rating: 4.9
  }
];

const sampleLessons = {
  // For "Web Development Fundamentals" course
  webDev: [
    {
      title: "Introduction to Web Development",
      description: "Learn what web development is and the technologies involved",
      content: "Web development involves creating websites and web applications. It includes frontend (HTML, CSS, JS) and backend (servers, databases). This lesson covers the basics of what you'll learn.",
      duration: 30,
      orderIndex: 1
    },
    {
      title: "HTML5 Fundamentals",
      description: "Master HTML5 semantic tags and structure",
      content: "HTML is the foundation of web pages. Learn about semantic HTML5 tags, forms, inputs, and best practices for writing accessible HTML code.",
      duration: 45,
      orderIndex: 2
    },
    {
      title: "CSS3 Styling and Layout",
      description: "Learn CSS3 properties and layout techniques",
      content: "CSS controls the appearance of web pages. Learn selectors, properties, colors, fonts, and modern layout techniques.",
      duration: 60,
      orderIndex: 3
    },
    {
      title: "JavaScript Basics",
      description: "Introduction to JavaScript programming",
      content: "JavaScript adds interactivity to web pages. Learn variables, data types, functions, and DOM manipulation.",
      duration: 90,
      orderIndex: 4
    },
    {
      title: "DOM Manipulation",
      description: "Learn to manipulate the DOM with JavaScript",
      content: "Master selecting elements, changing content, creating elements, and handling events with JavaScript.",
      duration: 75,
      orderIndex: 5
    }
  ]
};

// Instructions for using this data

const instructions = `
HOW TO USE SAMPLE DATA:

1. CREATE COURSES MANUALLY:
   - Go to http://localhost:3000/admin/courses
   - Click "New Course"
   - Copy data from sampleCourses array above
   - Fill in the form and submit

2. CREATE USING API (Optional):
   - Use Postman or curl to POST to http://localhost:5000/api/courses
   - Example:
   
   curl -X POST http://localhost:5000/api/courses \\
     -H "Content-Type: application/json" \\
     -d '{
       "title": "Web Development Fundamentals",
       "description": "Learn web development basics",
       "instructor": "John Doe",
       "duration": "8 weeks",
       "level": "Beginner",
       "price": 49.99,
       "image": "https://via.placeholder.com/400x300"
     }'

3. ADD LESSONS:
   - Click the course to view details
   - Click "Add Lesson" (admin view)
   - Fill in lesson data from sampleLessons array
   - Submit the form

4. TEST CRUD OPERATIONS:
   - Create: Use the forms above
   - Read: View courses and lessons
   - Update: Click Edit on a course
   - Delete: Click Delete on a course

DATA FIELDS EXPLANATION:

Course:
- title: Course name
- description: Full course description
- instructor: Teacher/instructor name
- duration: How long the course takes (e.g., "8 weeks")
- level: Difficulty (Beginner, Intermediate, Advanced)
- price: Cost in USD
- image: Course cover image URL
- students: Number of enrolled students
- rating: Course rating (0-5 stars)

Lesson:
- title: Lesson name
- description: Brief lesson description
- content: Full lesson content (text-based)
- duration: Lesson duration in minutes
- orderIndex: Lesson order in course
- videoUrl: Optional video URL (can be left empty)
`;

console.log(instructions);

module.exports = { sampleCourses, sampleLessons };
