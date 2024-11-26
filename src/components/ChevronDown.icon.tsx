import { IChevronDownIcon } from "./autocomplete.types";

const ChevronDown = (props: IChevronDownIcon) => {
  const { size = 18, fill = "#000000" } = props;
  return (
    <svg fill={fill} height={size} width={size} viewBox="0 0 386.257 386.257">
      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
    </svg>
  );
};

export default ChevronDown;
