import { View } from "@tarojs/components";
import { PickerView, Button } from "antd-mobile";
import { useState } from "react";
const BMI = ({ changeStep, options, questionCode }) => {
  const [values, setValues] = useState(options.map(({ defaultValue }) => defaultValue));
  const go = () => {
    changeStep({ [questionCode]: values });
    
  };
  return (
    <View className=" text bg-white mx-1-2  px-1-2 py-1 br-1 text-center relative ">
      <View className=" flex">
        {options.map(
          (
            { optionContent, defaultValue, unit, minValue, maxValue },
            index
          ) => {
            const range = (() => {
              let arr: string[] = [];
              for (let i = minValue; i <= maxValue; i++) {
                arr.push(String(i));
              }
              return arr;
            })();
            return (
              <View style={{ flex: 1 }} key={optionContent}>
                <View className=" color-blue">{optionContent}</View>
                <PickerView
                  columns={[range, [unit]]}
                  defaultValue={[String(defaultValue)]}
                  style={{ "--height": "400px", "--item-height": "2rem" }}
                  onChange={v => {
                    let vs = values;
                    vs[index] = v[0];
                    setValues(vs);
                  }}
                />
              </View>
            );
          }
        )}
      </View>
      <View className=" mt-1">
        <Button
          block
          color="primary"
          size="large"
          onClick={go}
          style={{ "--border-radius": "2rem" }}
        >
          继续
        </Button>
      </View>
    </View>
  );
};

export default BMI;
