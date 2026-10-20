
import { useState, useRef } from "react";

function FocusForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Zwei eigene Refs für die Eingabefelder
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);

    function focusName() {
        nameInputRef.current.focus();
    }

    function focusEmail() {
        emailInputRef.current.focus();
    }

    return (
        <section>
            <h2>FocusForm</h2>

            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    ref={nameInputRef}
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />
            </div>

            <div>
                <label htmlFor="email">E-Mail:</label>
                <input
                    type="email"
                    id="email"
                    ref={emailInputRef}
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
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
        </section>
    );
}

export default FocusForm;
