import { Dispatch, HTMLAttributes } from "react";

// select input types
export interface IAutocomplete {
  containerClass?: string;
  direction?: "rtl" | "ltr";
  placeholder?: string;
  selectClass?: string;
  icon?: null | React.ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  value?: string | string[];
  onClear?: () => void;
  isMulti?: boolean;
}

// text input types
export interface ITextInput {
  inputClassName?: string;
}

// item types
export interface IItem extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  active?: boolean;
}

// icon types
export interface IChevronDownIcon {
  size?: number;
  fill?: string;
}

export interface ICloseIcon {
  size?: number;
  fill?: string;
}
