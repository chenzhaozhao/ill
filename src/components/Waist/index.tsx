import { View } from "@tarojs/components";
import { PickerView, Button } from "antd-mobile";
import { useMemo, useState } from "react";
const Waist = ({ changeStep, option,questionCode }) => {
  const height = useMemo(() => {
    const { maxValue, minValue } = option;
    let arr: string[] = [];
    for (let i = minValue; i < maxValue; i++) {
      arr.push(String(i));
    }
    return arr.map(num => ({ label: num, value: num }));
  }, [option]);
  const [value,setValue]=useState(option.defaultValue)
  return (
    <View className=" text bg-white mx-1-2  px-1-2 py-1 br-1 text-center relative ">
      <View className="color-grey" style={{ float: "right" }}>
        (单位:{option.unit})
      </View>
      <View className=" mt-1">
        <PickerView
          columns={[height]}
          value={[String(option.defaultValue)]}
          style={{ "--height": "400px", "--item-height": "2rem" }}
          onChange={(v)=>setValue(v[0])}
        />
        <Button
          block
          color="primary"
          size="large"
          onClick={()=>changeStep({[questionCode]:[value]})}
          style={{ "--border-radius": "2rem" }}
        >
          继续
        </Button>
      </View>
    </View>
  );
};

export default Waist;
