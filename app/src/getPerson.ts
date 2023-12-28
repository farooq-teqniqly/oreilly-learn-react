interface Person {
  name: string;
}

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Farooq" }), 1000);
  });
}

export function sillyExpensiveFunction(): number {
  console.log("Executing sillyExpensiveFunction.");
  const numbers = Array.from({ length: 1_000_000 }, (_, i) => i);
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum;
}
