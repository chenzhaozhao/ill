import { View } from "@tarojs/components";
import { PickerView, Button } from "antd-mobile";
const BMI = ({ changeStep, options }) => {
  return (
    <View className=" text bg-white mx-1-2  px-1-2 py-1 br-1 text-center relative ">
      <View className=" flex">
        {options.map(
          ({ optionContent, defaultValue, unit, minValue, maxValue }) => {
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
                  value={[String(defaultValue)]}
                  style={{ "--height": "400px", "--item-height": "2rem" }}
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
          onClick={changeStep}
          style={{ "--border-radius": "2rem" }}
        >
          继续
        </Button>
      </View>
    </View>
  );
};

export default BMI;
