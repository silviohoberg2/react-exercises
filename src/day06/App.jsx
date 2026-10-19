
import { useState } from "react";
import CourseList from "./CourseList.jsx";
import RegistrationPanel from "./RegistrationPanel.jsx";

const courses = [
  {
    id: 1,
    title: "HTML & CSS",
    seats: 12
  },
  {
    id: 2,
    title: "JavaScript",
    seats: 10
  },
  {
    id: 3,
    title: "React",
    seats: 8
  }
];

function App() {
  const [registrations, setRegistrations] = useState([]);

  // Gesamtzahl aller Teilnehmer berechnen
  const totalParticipants = registrations.reduce(
    (total, registration) =>
      total + Number(registration.participants),
    0
  );

  // Registrierung anhand der ID löschen
  function handleDeleteRegistration(id) {
    setRegistrations(
      registrations.filter(
        (registration) => registration.id !== id
      )
    );
  }

  return (
    <main>
      <h1>CoursePlanner</h1>

      <p>
        Teilnehmer gesamt: {totalParticipants}
      </p>

      <CourseList
        courses={courses}
        registrations={registrations}
      />

      <RegistrationPanel
        courses={courses}
        registrations={registrations}
        setRegistrations={setRegistrations}
        onDelete={handleDeleteRegistration}
      />
    </main>
  );
}

export default App;
