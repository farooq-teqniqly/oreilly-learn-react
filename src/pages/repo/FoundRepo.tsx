import React from "react";

interface Props {
  name: string;
  desc: string;
  stars: number;
}

export function FoundRepo({ name, desc, stars }: Props) {
  return (
    <div className="py-4">
      <div className="flex flex-row items-center justify-between mb-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="px-4 py-2 rounded-xl text-gray-800 bg-gray-200 font-semibold text-sm flex align-center w-max">
          {stars} stars
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
}