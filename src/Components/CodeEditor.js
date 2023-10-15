import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

import { Box, Typography, Button, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";

import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
  
  
`;

const EditorHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const HeadingIcon = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const CodeEditor = ({ heading, icon, color, value, onChange }) => {
  const [expandWindow, setExpandWindow] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container style={expandWindow ? null : {flexGrow: 0} } >
      <EditorHeader>
        <HeadingIcon>
          <Box
            component="span"
            style={{
              borderRadius: 6,
              marginRight: 5,
              height: 22,
              width: 22,
              display: "flex",
              placeContent: "center",
              color: "#000",
              placeItems: "center",
              background: color,
            }}
          >
            {icon}
          </Box>
          {heading}
        </HeadingIcon>
        {/* window toggle */}
        <CloseFullscreen
          onClick={() => setExpandWindow((prevState) => !prevState)}
          style={{cursor: "pointer", alignSelf:"center"}}
          fontSize="small"
        />
      </EditorHeader>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        cursor={{
          line: 5,
          ch: 10,
        }}
        onCursor={(editor, data) => {}}
        scroll={{
          x: 50,
          y: 50,
        }}
        onScroll={(editor, data) => {}}
      />
    </Container>
  );
};

export default CodeEditor;
