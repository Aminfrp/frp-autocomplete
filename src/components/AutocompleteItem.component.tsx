import { memo } from "react";
import { IItem } from "./autocomplete.types";

export const AutocompleteItem = memo((props: IItem) => {
  const { label, active = false, ...rest } = props;

  return (
    <div
      className={`py-1 cursor-pointer hover:bg-gray-100 px-3 rounded truncate select-none ${
        active ? "bg-gray-300" : ""
      }`}
      {...rest}
    >
      {label}
    </div>
  );
});
