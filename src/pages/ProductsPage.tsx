import React, { useState, ChangeEvent } from "react";
import products from "../data/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductsPage() {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold text-slate-600 pb-4">Here are some great tools for React</h2>
      <div className="flex justify-center">
        <form className="w-auto pb-4">
          <div className="relative border border-solid border-slate-gray-500 p-2 rounded">
            <input
              type="search"
              name="search"
              placeholder="Search this list"
              className="bg-transparent outline-none pl-8 w-full"
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <span className="absolute inset-y-0 left-2 flex items-center pl-2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </form>
      </div>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id} className="p-1 text-slate-800 hover:text-slate-400 hover:cursor-pointer">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
