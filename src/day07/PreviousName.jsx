
import { useState, useRef, useEffect } from "react";

function PreviousName() {
  // Aktuelle Eingabewerte
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Vorherigen Namen speichern
  const previousNameRef = useRef("");

  // Referenzen für beide Eingabefelder
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  // Vorherigen Namen nach dem Rendern aktualisieren
  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  function focusName() {
    nameInputRef.current?.focus();
  }

  function focusEmail() {
    emailInputRef.current?.focus();
  }

  return (
    <section>
      <h2>PreviousName</h2>

      <div>
        <label htmlFor="previous-name">
          Name:
        </label>

        <input
          type="text"
          id="previous-name"
          ref={nameInputRef}
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="previous-email">
          E-Mail:
        </label>

        <input
          type="email"
          id="previous-email"
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

      <p>
        Aktueller Name: {name || "-"}
      </p>

      <p>
        Vorheriger Name: {previousNameRef.current || "-"}
      </p>
    </section>
  );
}

export default PreviousName;
