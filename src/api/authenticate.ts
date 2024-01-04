export interface User {
  id: string;
  name: string;
}

export function authenticate(): Promise<User | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve({ id: "1", name: "Farooq" }), 1000));
}

export function signout(): Promise<undefined> {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), 1000));
}
