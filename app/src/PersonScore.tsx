import { useEffect } from "react";
import { getPerson } from "./getPerson";

export function PersonScore() {
  useEffect(() => {
    async function fetchData() {
      const person = await getPerson();
      console.log(person);
    }
    fetchData();
  }, []);

  return null;
}
