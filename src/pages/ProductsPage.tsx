import React from "react";
import products from "../data/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductsPage() {
  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold text-slate-600">Here are some great tools for React</h2>
      <div className="flex justify-center">
        <form className="w-auto">
          <div className="relative border border-solid border-slate-gray-500 p-2 rounded">
            <input
              type="search"
              name="search"
              placeholder="Search this list"
              className="bg-transparent outline-none pl-8 w-full"
            />
            <span className="absolute inset-y-0 left-2 flex items-center pl-2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </form>
      </div>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="p-1 text-slate-800 hover:text-slate-400 hover:cursor-pointer">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
