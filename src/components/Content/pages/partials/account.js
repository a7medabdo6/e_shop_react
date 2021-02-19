import React from "react";
import { Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: ".+20", text: "+20", value: "+20" },
  { key: "+966", text: "+966", value: "+966" },
  { key: "+525", text: "+525", value: "+525" },
];
export default function account() {
  return (
    <div>
      <Input
        label={<Dropdown defaultValue=".com" options={options} />}
        labelPosition="left"
        placeholder="Find domain"
      />
    </div>
  );
}
