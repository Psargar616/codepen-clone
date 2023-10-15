import React from "react";
import CodeEditor from "./CodeEditor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";

import { DataContext } from "../Context/DataProvider";
const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 53vh;
`;
const Code = () => {
   
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <CodeEditor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <CodeEditor
        heading="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <CodeEditor
        heading="JS"
        icon="()"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;

// if you do this import DataContext from "../Context/DataProvider"
// you will get error below:
// ERROR
// Cannot destructure property 'html' of '(0 , react__WEBPACK_IMPORTED_MODULE_0__.useContext)(...)' as it is undefined.
// TypeError: Cannot destructure property 'html' of '(0 , react__WEBPACK_IMPORTED_MODULE_0__.useContext)(...)' as it is undefined.
//     at Code (http://localhost:3000/main.17db11c12f54553fd97f.hot-update.js:41:5)
//     at renderWithHooks (http://localhost:3000/static/js/bundle.js:46114:22)
//     at updateFunctionComponent (http://localhost:3000/static/js/bundle.js:48996:24)
//     at beginWork (http://localhost:3000/static/js/bundle.js:50708:20)
//     at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:35706:18)
//     at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:35750:20)
//     at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:35807:35)
//     at beginWork$1 (http://localhost:3000/static/js/bundle.js:55681:11)
//     at performUnitOfWork (http://localhost:3000/static/js/bundle.js:54928:16)
//     at workLoopSync (http://localhost:3000/static/js/bundle.js:54851:9)
