import { IOption, IRadioButtonSchema } from "common/types";
import React, { useState } from "react";
import { createElementId } from "../../../utilities";

interface IProps {
  schema: IRadioButtonSchema;
  onChange?: (checked: string) => void;
  result?: IOption;
}

function Option({
  disabled,
  checked,
  onChange,
  option,
}: {
  disabled?: boolean;
  checked: string;
  onChange: (value: string) => void;
  option: string;
}) {
  return (
    <div>
      <input
        checked={checked === option}
        disabled={disabled}
        id={createElementId(option)}
        onChange={(event) => onChange(event.target.value)}
        type="radio"
        value={option}
      />
      <label htmlFor={createElementId(option)}>{option}</label>
    </div>
  );
}

export default function RadioButtonRenderer({
  schema: { title, options },
  onChange,
  result,
}: IProps) {
  const [checked, setChecked] = useState("");

  const change = (value: string) => {
    setChecked(value);
    if (onChange) onChange(value);
  };

  return (
    <div>
      <p>{title}</p>
      {options.map((option, index) => (
        <Option
          checked={result ?? checked}
          disabled={result !== undefined}
          key={`RadioButton-${index}`}
          onChange={change}
          option={option}
        />
      ))}
    </div>
  );
}