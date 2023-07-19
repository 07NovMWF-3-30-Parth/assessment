import React from "react";

// in this component we showed how to show accordion
import Accordion from "./Accordion";

// in this file we collect the accordion data
import { accordionData } from './utils/content';

function App() {
  return (
    <div>
      <h1>React Accordion Assessment</h1>
      <div className="accordion">

        {/* we are usin map function to print all accordion data which is title and content */}
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
