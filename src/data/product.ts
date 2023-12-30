interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "React Router",
    description: "A collection of navigational components that compose declaratively with your app",
    price: 8.0,
  },
  {
    id: 2,
    name: "React Redux",
    description: "A library that helps manage state across your app",
    price: 12.0,
  },
  {
    id: 3,
    name: "React Hook Form",
    description: "A library that helps you implement robust forms",
    price: 9.0,
  },
  {
    id: 4,
    name: "React Apollo",
    description: "A library that helps you interact with a REST API",
    price: 10.0,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    description: "A library that provides utility CSS classes",
    price: 7.0,
  },
];

export default products;
