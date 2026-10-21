
function ParticipantCard({ participant }) {
    return (
        <article className="participant-card">
            <h3>{participant.name}</h3>

            <p>
                Kurs: {participant.course}
            </p>

            <p>
                Status: {participant.present
                    ? "Anwesend"
                    : "Nicht anwesend"}
            </p>
        </article>
    );
}

export default ParticipantCard;
