import "./CourseCard.css";

function CourseCard({ course, registrations }) {
  // Registrierungen für diesen Kurs filtern
  const courseRegistrations = registrations.filter(
    (registration) =>
      registration.courseId === course.id
  );

  // Teilnehmer dieses Kurses berechnen
  const participantCount = courseRegistrations.reduce(
    (total, registration) =>
      total + Number(registration.participants),
    0
  );

  // Freie Plätze berechnen
  const freeSeats = course.seats - participantCount;

  // Prüfen, ob der Kurs ausgebucht ist
  const isFullyBooked = freeSeats <= 0;

  // CSS-Klasse abhängig vom Buchungsstatus festlegen
  let statusClass = "course-card-free";

  if (isFullyBooked) {
    statusClass = "course-card-full";
  } else if (participantCount > 0) {
    statusClass = "course-card-partial";
  }

  return (
    <article className={`course-card ${statusClass}`}>
      <h3>{course.title}</h3>

      <p>Anmeldungen: {courseRegistrations.length}</p>

      <p>Teilnehmer: {participantCount}</p>

      <p>
        {isFullyBooked
          ? "Ausgebucht"
          : `Freie Plätze: ${freeSeats}`}
      </p>
    </article>
  );
}

export default CourseCard;
