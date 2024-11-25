import { InputHTMLAttributes } from "react";
import { ITextInput } from "./autocomplete.types";

export const AutocompleteInput = (
  props: ITextInput & InputHTMLAttributes<HTMLInputElement>
) => {
  const { inputClassName = "", ...rest } = props;
  return (
    <input
      className={`w-full border rounded focus:outline-none px-2 py-1 ${inputClassName}`}
      type="text"
      onChange={(e) => console.log(e.target.value)}
      {...rest}
    />
  );
};
