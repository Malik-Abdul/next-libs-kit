"use client";

import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

const StateGraphRedux: React.FC = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    setIsRendered(true);
  }, []);

  const diagramDefinition = `
  flowchart LR
    React[React]:::reactNode --> ReactRedux[React-Redux]:::reactReduxNode --> Redux[Redux]:::reduxNode

    %% Custom styles dynamically applied
    classDef reactNode fill:#ea4335,stroke:#ffffff,color:#ffffff;
    classDef reactReduxNode fill:#0056b3,stroke:#ffffff,color:#ffffff;
    classDef reduxNode fill:#ba8ff3,stroke:#ffffff,color:#ffffff;
`;

  return (
    <div>
      {isRendered ? (
        <div className="mermaid-container">
          <div className="mermaid">{diagramDefinition}</div>
        </div>
      ) : null}
    </div>
  );
};

export default StateGraphRedux;
