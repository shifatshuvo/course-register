import { useState } from "react";
// import Blog from "../Course/Course";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelect}) => {
  const [courses, setCourses] = useState([]);

  useState(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:w-11/12 my-4">
      <div>
        <h1 className="text-3xl font-semibold text-center md:py-4 py-2">Courses: {courses.length}</h1>
        <hr />
        <div className="md:grid grid-cols-3 gap-1 -blog-container">
          {courses.map((course) => (
            <Course
             key={course.id} 
             course={course} 
             handleSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleSelect: PropTypes.func
}

export default Courses;
