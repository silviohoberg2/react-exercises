export default function WorkshopCard({
  title,
  trainer,
  duration,
  level,
  online
}) {
  return (
    <article>
      <h2>{title}</h2>

      <p>Trainer: {trainer}</p>
      <p>Dauer: {duration} UE</p>
      {duration === 16 && (
      <p>2 Kurstage</p>
      )}
      <p>Level: {level}</p>

      <p>
        {online ? "Online möglich" : "Nur Präsenz"}
      </p>
    </article>
  );
}