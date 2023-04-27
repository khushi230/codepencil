import React, { useState } from "react";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import CodeIcon from "@mui/icons-material/Code";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const Editor = ({ heading, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div style={open ? null : { flexGrow: 0 }} className="flex-1">
      <div className="h-10 bg-black w-full flex justify-between px-3">
        <div className=" bg-gray text-primary p-3">
          <CodeIcon /> {heading}
        </div>
        <div className="bg-gray p-2 mt-2 text-primary">
          <button onClick={handleClick}>
            <OpenInFullIcon fontSize="small" />
          </button>
        </div>
      </div>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{ theme: "material", lineNumbers: true }}
      ></ControlledEditor>
    </div>
  );
};

export default Editor;
