import { useState } from "react";
import Autocomplete from "./components/Autocomplete";

function App() {
  const [options, setOption] = useState([
    "option 1",
    "option 2",
    "option 3",
    "option 4",
  ]);
  const [options1, setOption1] = useState([
    "مقدار 1",
    "مقدار 2",
    "مقدار 3",
    "مقدار 4",
  ]);

  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [selectedOption1, setSelectedOption1] = useState("");

  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchValue1, setSearchValue1] = useState("");

  return (
    <div className="flex justify-center pt-48 gap-5">
      <Autocomplete
        isOpen={isOpen}
        setOpen={setOpen}
        placeholder="Fill this input ..."
        value={selectedOption}
        onClear={() => setSelectedOption([])}
        direction="ltr"
        isMulti
      >
        <Autocomplete.Input
          placeholder="Search Here ..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setOption((prev) => [...prev, searchValue]);
              setSearchValue("");
            }
          }}
        />
        {options
          .filter((option) => option.includes(searchValue))
          .map((option, index) => (
            <Autocomplete.Item
              key={index}
              label={option}
              onClick={() => {
                if (selectedOption.includes(option)) {
                  setSelectedOption((prev) =>
                    prev.filter((item) => item !== option)
                  );
                  return;
                }
                setSelectedOption((prev) => [...prev, option]);
                setOpen(false);
              }}
              active={selectedOption.includes(option)}
            />
          ))}
      </Autocomplete>

      <Autocomplete
        isOpen={isOpen1}
        setOpen={setOpen1}
        placeholder="مقدار را پر کنید"
        value={selectedOption1}
        onClear={() => setSelectedOption1("")}
        direction="rtl"
      >
        <Autocomplete.Input
          onChange={(e) => setSearchValue1(e.target.value)}
          value={searchValue1}
          placeholder="جستجو کنید"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setSearchValue1("");
              setOption1((prev) => [...prev, searchValue1]);
            }
          }}
        />
        {options1
          .filter((option) => option.includes(searchValue1))
          .map((option, index) => (
            <Autocomplete.Item
              key={index}
              label={option}
              onClick={() => {
                setSelectedOption1(option);
                setOpen1(false);
              }}
              active={selectedOption1 === option}
            />
          ))}
      </Autocomplete>
    </div>
  );
}

export default App;
