
import CourseCard from "./CourseCard.jsx";

function CourseList({ courses, registrations }) {
  return (
    <section>
      <h2>Unsere Kurse</h2>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          registrations={registrations}
        />
      ))}
    </section>
  );
}

export default CourseList;
