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
  flowchart TB
    subgraph Components
        direction TB
        App[App] --> E[E]
        App[App] --> F[F]
        E[E] --> C[C]
        E[E] --> D[D]
        C[C] --> A[A]
        C[C] --> B[B]
        F[F] --> H[H]
        F[F] --> G[G]
    end
    subgraph Redux State Container
        direction LR
        top2[Store] --> A
        top2[Store] --> D
        top2[Store] --> G
        top2[Store] --> F
    end
    %% Custom styles dynamically applied
  style A fill:#ea4335,stroke:#333
  style D fill:#ea4335,stroke:#333
  style F fill:#ea4335,stroke:#333
  style G fill:#ea4335,stroke:#333
  `;

  return (
    <div>
      <h3>Components Flow with Redux</h3>
      {isRendered ? (
        <div className="mermaid-container">
          <div className="mermaid">{diagramDefinition}</div>
        </div>
      ) : null}
    </div>
  );
};

export default StateGraphRedux;
