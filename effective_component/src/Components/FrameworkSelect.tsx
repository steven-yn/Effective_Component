import { useState } from "react";
import InputButton from "./Common/InputButton";
import Select from "./Common/Select";

const FrameworkSelect = () => {
  const frameWorks = ["Next.js", "Remix", "Gatsby", "Relay"];
  const [selected, change] = useState("Next.js");

  console.log("frameselect");

  return (
    <>
      <Select
        trigger={<InputButton value={selected} />}
        label={"React Framework"}
        value={selected}
        onChange={change}
        options={frameWorks}
      />
    </>
  );
};

export default FrameworkSelect;
