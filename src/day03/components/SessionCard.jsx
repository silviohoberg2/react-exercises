export default function SessionCard({
  title,
  speaker,
  room,
  time,
  track,
  level,
  online,
  seats,
  highlight,
  language
}) {
  let cardClass = "session-card";

  if (online) {
    cardClass += " online";
  }

  if (seats === 0) {
    cardClass += " sold-out";
  }

  if (seats > 0 && seats <= 3) {
    cardClass += " few-seats";
  }

  if (highlight) {
    cardClass += " highlight";
  }

  return (
    <article className={cardClass}>
      {highlight && (
        <p className="badge">Highlight</p>
      )}

      <h2>{title}</h2>

      <p>Referent: {speaker}</p>
      <p>Uhrzeit: {time}</p>
      <p>Track: {track}</p>
      <p>Level: {level}</p>
      <p className={`language ${language === "Englisch" ? "english" : "german"}`}>
        Sprache: {language}
      </p>

      <p>
        {online ? "Online-Session" : `Raum: ${room}`}
      </p>

      {seats === 0 && (
        <p className="status">Ausgebucht</p>
      )}

      {seats > 0 && seats <= 3 && (
        <p className="status">Nur noch wenige Plätze</p>
      )}

      {seats > 3 && (
        <p>Freie Plätze: {seats}</p>
      )}
    </article>
  );
}