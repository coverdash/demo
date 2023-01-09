/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Gist from "react-gist";

import CoverdashQuotes from "@coverdash/quotes";
import "@coverdash/quotes/lib/cjs/styles.css";

function App() {
  return (
    <>
      <CoverdashQuotes
        isDemo={true}
        allowScroll={false}
        license="xxxx-xxx-xxxx-xxx-xxxx-xxx-xxxx"
        autoResize={true}
      />
      <div
        style={{
          width: "91%",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
        }}
      >
        <Gist id="1bba821989eedd7f5882bb5d261aa051" />
      </div>
    </>
  );
}

export default App;
