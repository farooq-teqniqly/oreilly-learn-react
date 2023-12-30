import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

function App() {
  const fontWeights = [200, 400, 800];

  return (
    <div className={`inline-flex flex-col text-left px-4 py-3`}>
      <div>React starter app styled with TailwindCSS</div>
      <div>
        <span>And FontAwesome icons.</span>
        {fontWeights.map((w) => (
          <FontAwesomeIcon
            key={w}
            icon={faWind}
            className={`pl-4 text-blue-${w}`}
          ></FontAwesomeIcon>
        ))}
      </div>
    </div>
  );
}

export default App;
