import { Input } from "antd";
import React from "react";

const InputSearch = ({ placeholder, setState }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => setState(e.target.value)}
      className="w-[28rem]"
    />
  );
};

export default InputSearch;
