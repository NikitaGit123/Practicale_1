import React from 'react';


const MainPage = ({ data }) => {
  const {
    instructor,
    course,
    about_instructor,
    testimonial,
  } = data;

  return (
    <div>
        <section className="course-about">
        <h2>About the Course</h2>
        <p>{course.about.html_content}</p>

        <h2>What to expect from the course</h2>
        <p>1. {course.what_to_expect.html_content_1}</p>
        <p>2. {course.what_to_expect.html_content_2}</p>
        <p>3. {course.what_to_expect.html_content_3}</p>

        <h2>Key Topics Covered</h2>
        <p>1. {course.key_topics.html_content_1}</p>
        <p>2. {course.key_topics.html_content_2}</p>
        <p>3. {course.key_topics.html_content_3}</p>
        <p>4. {course.key_topics.html_content_4}</p>

      </section>

      <section className="instructor-section course-about">
        <div className="instructor-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2qogRgQYyi9yej9oMjLGm1RKDKn9tRVfZ67m0zCowAzXL4c5" alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h2>Instructor</h2>
          <p>{about_instructor.html_content}</p>
          <p>{instructor.name}'s social media:</p>
            {Object.entries(instructor.social_media).map(([platform, active]) => (
              <span key={platform}>{active && platform} </span>
            ))}
        </div>
      </section>

      <section className="testimonial-section course-about">
        <div className="testimonial-card">
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">- {testimonial.reviewer_name}, {testimonial.reviewer_designation}</p>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
