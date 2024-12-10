"use client";

import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

const StateGraph: React.FC = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    setIsRendered(true);
  }, []);

  const diagramDefinition = `
    graph TD
      App --> E["E"]
      App --> F["F"]
      E --> C["C"]
      E --> D["D"]
      C --> A["A"]
      C --> B["B"]
      F --> H["H"]
      F --> G["G"]

      %% Custom styles dynamically applied
      style A fill:#ea4335,stroke:#333
  style D fill:#ea4335,stroke:#333
  style F fill:#ea4335,stroke:#333
  style G fill:#ea4335,stroke:#333
  `;
  return (
    <div>
      <h3>Components Flow</h3>
      {isRendered ? (
        <div className="mermaid-container">
          <div className="mermaid">{diagramDefinition}</div>
        </div>
      ) : null}
    </div>
  );
};

export default StateGraph;
