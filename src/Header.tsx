import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getViewer } from "./api/getViewer";

function Header() {
  const { isLoading, data } = useQuery({ queryKey: ["viewer"], queryFn: getViewer });

  if (isLoading || data === undefined) {
    return <div>Fetching data...</div>;
  }

  return (
    <header>
      <img src={data.viewer.avatarUrl} alt="Viewer"></img>
      <div>{data.viewer.name}</div>
      <h1>GitHib Search</h1>
    </header>
  );
}

export default Header;
