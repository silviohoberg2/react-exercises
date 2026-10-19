import { useEffect, useState } from "react";

function NameEffect() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "React Exercises";
    } else {
      document.title = `Hallo ${name}`;
    }
  }, [name]);

  return (
    <section>
      <h2>Name Effect</h2>

      <label htmlFor="name">
        Name
      </label>{" "}

      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
      />
    </section>
  );
}

export default NameEffect;