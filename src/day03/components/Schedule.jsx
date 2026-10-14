import sessions from "../data/sessions.js";
import SessionCard from "./SessionCard.jsx";
import InfoBox from "./InfoBox.jsx";

export default function Schedule() {
  return (
    <section className="schedule">
      <h1>Conference Schedule</h1>

      <InfoBox title="Hinweis">
        <p>
          Änderungen im Ablauf werden kurzfristig bekanntgegeben.
        </p>
      </InfoBox>

      <div className="session-grid">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            title={session.title}
            speaker={session.speaker}
            room={session.room}
            time={session.time}
            track={session.track}
            level={session.level}
            online={session.online}
            seats={session.seats}
            highlight={session.highlight}
            language={session.language}
          />
        ))}
      </div>
    </section>
  );
}