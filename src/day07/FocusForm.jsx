
import { useState, useRef } from "react";

function FocusForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Zwei eigene Refs
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);

    function focusName() {
        nameInputRef.current.focus();
    }

    function focusEmail() {
        emailInputRef.current.focus();
    }

    // Eingaben überprüfen
    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim() === "") {
            setMessage("Bitte einen Namen eingeben!");
            nameInputRef.current.focus();
            return;
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            setMessage("Bitte eine gültige E-Mail eingeben!");
            emailInputRef.current.focus();
            return;
        }

        setMessage("Alle Eingaben sind gültig!");
    }

    return (
        <section>
            <h2>FocusForm</h2>

            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        ref={nameInputRef}
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                            setMessage("");
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailInputRef}
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                            setMessage("");
                        }}
                    />
                </div>

                <button
                    type="button"
                    onClick={focusName}
                >
                    Name fokussieren
                </button>

                <button
                    type="button"
                    onClick={focusEmail}
                >
                    E-Mail fokussieren
                </button>

                <button type="submit">
                    Eingaben prüfen
                </button>

                {message && <p>{message}</p>}
            </form>
        </section>
    );
}

export default FocusForm;
