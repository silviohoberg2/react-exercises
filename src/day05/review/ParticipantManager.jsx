import { useState } from "react";

function ParticipantManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1
  });

  const [participantsList, setParticipantsList] = useState([]);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    const newValue =
      name === "participants"
        ? Number(value)
        : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie einen Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse ein!");
      return;
    }

    const newParticipant = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants
    };

    setParticipantsList([
      ...participantsList,
      newParticipant
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1
    });
  }

  return (
    <section>
      <h2>Teilnehmerverwaltung</h2>

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name*
          </label>{" "}

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">
            E-Mail*
          </label>{" "}

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="participants">
            Teilnehmer*
          </label>{" "}

          <input
            type="number"
            id="participants"
            name="participants"
            min="1"
            value={formData.participants}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          Hinzufügen
        </button>
      </form>

      <h3>Teilnehmerliste</h3>

      {participantsList.length === 0 && (
        <p>Noch keine Teilnehmer vorhanden.</p>
      )}

      {participantsList.map((participant) => (
        <article key={participant.id}>
          <h4>{participant.name}</h4>
          <p>E-Mail: {participant.email}</p>
          <p>
            Teilnehmer: {participant.participants}
          </p>
        </article>
      ))}
    </section>
  );
}

export default ParticipantManager;