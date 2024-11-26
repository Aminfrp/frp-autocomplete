import { PropsWithChildren, useEffect, useRef } from "react";
import { IAutocomplete } from "./autocomplete.types";
import { AutocompleteInput } from "./AutocompleteInput.component";
import { AutocompleteItem } from "./AutocompleteItem.component";
import ChevronDown from "./ChevronDown.icon";
import CloseIcon from "./Close.icon";

export const Autocomplete = (props: PropsWithChildren<IAutocomplete>) => {
  const {
    containerClass = "",
    selectClass = "",
    direction = "rtl",
    placeholder = "مقدار خود را وارد کنید",
    icon = null,
    setOpen,
    isOpen = false,
    children,
    value = "",
    onClear = () => {},
    isMulti = false,
  } = props;

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div
      ref={inputRef}
      className={`relative min-w-64  ${containerClass}`}
      dir={direction}
    >
      {/* select input section */}
      <div
        className={`flex  gap-3 items-center border rounded px-4 py-2 cursor-pointer ${selectClass}`}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <span
          className={`transition duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {icon ?? <ChevronDown size={12} />}
        </span>
        <div
          className={`${
            value.length !== 0 ? "text-black" : "text-gray-400"
          } select-none`}
        >
          {value.length === 0 ? (
            placeholder
          ) : isMulti ? (
            <div className="flex flex-wrap gap-1">
              {(value as string[]).map((val) => (
                <span className="p-1 bg-gray-300 space-x-2 rounded text-sm">
                  {val}
                </span>
              ))}
            </div>
          ) : (
            value
          )}
        </div>
        {value.length !== 0 && (
          <div
            className={`cursor-pointer ${
              direction === "rtl" ? "mr-auto" : "ml-auto"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            <CloseIcon size={12} />
          </div>
        )}
      </div>

      {/* popup menu */}
      <div
        className={`absolute top-12 w-full rounded transition-all duration-100 space-y-2  px-4 z-50 shadow  ${
          isOpen
            ? "max-h-60  border overflow-auto  py-2"
            : "max-h-0 py-0 overflow-hidden"
        } ${direction === "rtl" ? "right-0" : "left-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

Autocomplete.Input = AutocompleteInput;
Autocomplete.Item = AutocompleteItem;
