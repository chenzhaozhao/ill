import { View } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
const TextSelect = ({ options, changeStep,questionCode }) => {
  const [current, setCurrent] = useState<any>(0);
  return (
    <View className=" bg-white mx-1-2 br-1 px-1-2 py-1">
      {options.map(({ optionContents, defaultChecked, optionCode,optionValue }, index) => (
        <View
          key={optionCode}
          className={`text  text-center text-box-2 ${
            index === current ? "active" : ""
          }`}
          onClick={() => {
            setCurrent(index);
            setTimeout(() => {
              changeStep({[questionCode]:[optionValue]});
            }, 300);
          }}
        >
          {optionContents}
        </View>
      ))}
    </View>
  );
};
export default TextSelect;
