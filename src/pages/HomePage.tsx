import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className={`text-center p-4 flex flex-col items-center text-slate-600`}>
      <FontAwesomeIcon icon={faScrewdriverWrench} className={`fa-10x`} />
      <span className={`text-9xl`}>React Tools</span>
      <span className={`text-2xl pt-4`}>This is a sample React site styled with TailwindCSS.</span>
    </div>
  );
}

export default HomePage;
