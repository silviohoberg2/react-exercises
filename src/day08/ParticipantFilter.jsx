
function ParticipantFilter({
    searchTerm,
    onSearchChange,
    attendanceFilter,
    onAttendanceChange,
    searchInputRef,
    onResetSearch
}) {
    return (
        <section>
            <h2>Teilnehmer filtern</h2>

            <div>
                <label htmlFor="search">
                    Name suchen:
                </label>

                <input
                    type="search"
                    id="search"
                    ref={searchInputRef}
                    value={searchTerm}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                    placeholder="Name eingeben..."
                />
            </div>

            <div>
                <label htmlFor="attendance">
                    Anwesenheit:
                </label>

                <select
                    id="attendance"
                    value={attendanceFilter}
                    onChange={(event) =>
                        onAttendanceChange(event.target.value)
                    }
                >
                    <option value="all">Alle</option>
                    <option value="present">Anwesend</option>
                    <option value="absent">Nicht anwesend</option>
                </select>
            </div>

            <button
                type="button"
                onClick={onResetSearch}
            >
                Suche zurücksetzen
            </button>
        </section>
    );
}

export default ParticipantFilter;
