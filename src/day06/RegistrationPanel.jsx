
import { useState } from "react";

function RegistrationPanel({
  courses,
  registrations,
  setRegistrations,
  onDelete
}) {
  const [courseId, setCourseId] = useState("");
  const [participants, setParticipants] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (courseId === "") {
      alert("Bitte einen Kurs auswählen!");
      return;
    }

    const course = courses.find(
      (course) => course.id === Number(courseId)
    );

    const registeredParticipants = registrations
      .filter(
        (registration) =>
          registration.courseId === course.id
      )
      .reduce(
        (total, registration) =>
          total + Number(registration.participants),
        0
      );

    const freeSeats = course.seats - registeredParticipants;

    if (
      !Number.isInteger(Number(participants)) ||
      Number(participants) < 1 ||
      Number(participants) > freeSeats
    ) {
      alert("Ungültige Teilnehmerzahl oder zu wenig freie Plätze!");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      courseId: Number(courseId),
      participants: Number(participants)
    };

    setRegistrations([
      ...registrations,
      newRegistration
    ]);

    setCourseId("");
    setParticipants(1);
  }

  return (
    <section>
      <h2>Kursanmeldung</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="course">Kurs auswählen: </label>

          <select
            id="course"
            value={courseId}
            onChange={(event) =>
              setCourseId(event.target.value)
            }
          >
            <option value="">Bitte auswählen</option>

            {courses.map((course) => {
              // Bereits angemeldete Teilnehmer berechnen
              const participantCount = registrations
                .filter(
                  (registration) =>
                    registration.courseId === course.id
                )
                .reduce(
                  (total, registration) =>
                    total + Number(registration.participants),
                  0
                );

              // Prüfen, ob der Kurs ausgebucht ist
              const isFullyBooked =
                course.seats - participantCount <= 0;

              return (
                <option
                  key={course.id}
                  value={course.id}
                  disabled={isFullyBooked}
                >
                  {course.title}
                  {isFullyBooked ? " - Ausgebucht" : ""}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="participants">
            Teilnehmerzahl:
          </label>

          <input
            type="number"
            id="participants"
            name="participants"
            min="1"
            value={participants}
            onChange={(event) =>
              setParticipants(event.target.value)
            }
          />
        </div>

        <button type="submit">
          Registrierung hinzufügen
        </button>
      </form>

      {/* Liste der vorhandenen Registrierungen */}
      <h3>Aktuelle Registrierungen</h3>

      {registrations.length === 0 ? (
        <p>Noch keine Registrierungen vorhanden.</p>
      ) : (
        <div>
          {registrations.map((registration) => {
            const course = courses.find(
              (course) =>
                course.id === registration.courseId
            );

            return (
              <div key={registration.id}>
                <p>
                  Kurs: {course ? course.title : "Unbekannt"}
                </p>

                <p>
                  Teilnehmer: {registration.participants}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    onDelete(registration.id)
                  }
                >
                  Löschen
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default RegistrationPanel;
