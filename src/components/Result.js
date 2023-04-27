import React, { useContext } from "react";

import { DataContext } from "./../context/DataProvider";

const Result = () => {
  const { html, css, javascript } = useContext(DataContext);

  const srcCode = `
<html>
<body>${html}</body>
<style>${css}</style>
<script>${javascript}</script>
</html>
`;

  return (
    <div className=" h-80 bg-secondary">
      <iframe
        srcDoc={srcCode}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Result;
