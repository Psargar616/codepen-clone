import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Output = () => {
  // to avoid frequently updating the DOM as its a expensive operation use setTimeout in useEffect Hook
  const [src, setSrc] = useState();
  const { html, css, js } = useContext(DataContext);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(sourceCode);
    }, 2000);
    
    // unmount function
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  // displaying html, css and js content as output

  const sourceCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    
    `;

  return (
    <div style={{height:"50vh"}}>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Output;
