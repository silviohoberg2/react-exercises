
import ParticipantCard from "./ParticipantCard.jsx";

function ParticipantList({ participants }) {
    return (
        <section>
            <h2>Teilnehmerliste</h2>

            {participants.length === 0 ? (
                <p>Keine passenden Teilnehmer gefunden.</p>
            ) : (
                <div className="participant-list">
                    {participants.map((participant) => (
                        <ParticipantCard
                            key={participant.id}
                            participant={participant}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ParticipantList;
