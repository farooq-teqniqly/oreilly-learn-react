import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getViewer } from "./api/getViewer";

function Header() {
  const { isLoading, data } = useQuery({ queryKey: ["viewer"], queryFn: getViewer });

  if (isLoading || data === undefined) {
    return <div>Fetching data...</div>;
  }

  return (
    <header className="flex flex-col items-center text-slate-600">
      <div className="bg-slate-200">
        <img src={data.viewer.avatarUrl} alt="Viewer" className="rounded-full"></img>
      </div>
      <div className="font-bold">{data.viewer.name}</div>
      <h1 className="font-muted">GitHub Search</h1>
    </header>
  );
}

export default Header;
