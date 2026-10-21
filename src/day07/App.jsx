
import { useState, useRef, useEffect } from "react";
import ParticipantFilter from "./ParticipantFilter.jsx";
import ParticipantList from "./ParticipantList.jsx";

// Beispieldaten der Teilnehmer
const participants = [
    {
        id: 1,
        name: "Erwin Mustermann",
        course: "React",
        present: true
    },
    {
        id: 2,
        name: "Anna Müller",
        course: "JavaScript",
        present: true
    },
    {
        id: 3,
        name: "Peter Schmidt",
        course: "HTML & CSS",
        present: false
    },
    {
        id: 4,
        name: "Lisa Weber",
        course: "React",
        present: true
    },
    {
        id: 5,
        name: "Thomas Fischer",
        course: "JavaScript",
        present: false
    }
];

function App() {
    // State für Suche und Anwesenheitsfilter
    const [searchTerm, setSearchTerm] = useState("");
    const [attendanceFilter, setAttendanceFilter] =
        useState("all");

    // Referenz auf das Suchfeld
    const searchInputRef = useRef(null);

    // Suche und Filter zurücksetzen
    function handleResetSearch() {
        setSearchTerm("");
        setAttendanceFilter("all");

        searchInputRef.current?.focus();
    }

    // Teilnehmer filtern
    const filteredParticipants = participants.filter(
        (participant) => {
            const matchesSearch = participant.name
                .toLowerCase()
                .includes(searchTerm.trim().toLowerCase());

            const matchesAttendance =
                attendanceFilter === "all" ||
                (attendanceFilter === "present" && participant.present) ||
                (attendanceFilter === "absent" && !participant.present);

            return matchesSearch && matchesAttendance;
        }
    );

    // Abgeleitete Werte
    const totalParticipants = participants.length;
    const displayedParticipants = filteredParticipants.length;

    // Anwesende Teilnehmer zählen
    const presentParticipants = filteredParticipants.filter(
        (participant) => participant.present
    ).length;

    // Browser-Titel aktualisieren
    useEffect(() => {
        document.title =
            `Teilnehmerverwaltung – ${displayedParticipants} Teilnehmer`;
    }, [displayedParticipants]);

    return (
        <main>
            <h1>Teilnehmerverwaltung</h1>

            <ParticipantFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                attendanceFilter={attendanceFilter}
                onAttendanceChange={setAttendanceFilter}
                searchInputRef={searchInputRef}
                onResetSearch={handleResetSearch}
            />

            <p>Teilnehmer insgesamt: {totalParticipants}</p>

            <p>
                Aktuell angezeigt: {displayedParticipants}
            </p>

            <p>
                Davon anwesend: {presentParticipants}
            </p>

            <ParticipantList
                participants={filteredParticipants}
            />
        </main>
    );
}

export default App;
