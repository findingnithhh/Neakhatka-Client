// components/Editor.js

import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = ({ value, onChange }: any) => {
  const editorStyle = {
    height: "200px", // Customize the height here
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      style={editorStyle}
    />
  );
};

export { Editor };
