import React from "react";
import products from "../data/product";

function ProductsPage() {
  return (
    <div className={`text-center p-4`}>
      <h2 className={`text-xl font-bold text-slate-600`}>Here are some great tools for React</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} className={`p-1 text-slate-800 hover:text-slate-400 hover:cursor-pointer`}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
