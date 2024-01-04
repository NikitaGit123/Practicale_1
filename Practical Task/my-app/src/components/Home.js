import React from 'react';

export default function Home({ data }) {
  const {
    instructor,
    course,
    about_instructor,
    testimonial,
  } = data;

  return (
     <div>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2qogRgQYyi9yej9oMjLGm1RKDKn9tRVfZ67m0zCowAzXL4c5"
          alt="Your Alt Text"
          className="background-image"
        />
        <div className="text-overlay">
          <h1>{instructor.name}</h1>
          <p>{course.title}</p>
          <div className="price-card">
          <span>Course Fees </span>
            <h3>{course.fee.amount} {course.fee.currency}</h3>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>About</li>
          <li>Instructor</li>
          <li>Review</li>
        </ul>
      </nav>
    </div>
  );
}
