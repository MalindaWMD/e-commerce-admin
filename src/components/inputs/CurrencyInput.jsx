import React from "react";
import { IMaskInput } from "react-imask";

const maskBlock = {
  num: {
    mask: Number,
    scale: 2,
    thousandsSeparator: ",",
    padFractionalZeros: true,
    radix: ".",
    mapToRadix: ["."],
  },
};

const CurrencyInput = (props) => {
  const handleChange = (value) => {
    if (props.onChange) {
      props.onChange(props.name, value);
    }
  };
  return (
    <IMaskInput
      mask={"num"}
      lazy={false}
      blocks={maskBlock}
      unmask={true}
      className={props.className}
      value={props.value}
      onAccept={handleChange}
    />
  );
};

export default CurrencyInput;
