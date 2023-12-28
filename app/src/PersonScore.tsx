import { useEffect, useState } from "react";
import { getPerson } from "./getPerson";

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const person = await getPerson();
      setLoading(false);
      setName(person.name);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore((s) => s + 1)}>Add</button>
      <button onClick={() => setScore((s) => s - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}
