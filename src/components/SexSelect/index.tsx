import { View } from "@tarojs/components";
import { useState } from "react";
import { Avatar } from "antd-mobile";
const SexSelect = ({ changeStep, options }) => {
  const [sex, setSex] = useState(options.filter(option => option.defaultChecked).map(option => option.optionContent)[0]);
  return (
    <View className="bg-white mx-1-2  px-1-2 py-1 br-1">
      <View
        className=" flex justify-around item-center"
        style={{ height: "180px" }}
      >
        {options?.map(({ imageUrls, optionContent }) => {
          
          return (
            <View
              key={optionContent}
              onClick={e => {
                e.stopPropagation;
                setSex(optionContent)
                setTimeout(()=>{changeStep()},300)
              }}
            >
              <Avatar
                src={imageUrls[optionContent===sex?1:0]}
                style={{ "--size": "110px" }}
              ></Avatar>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default SexSelect;
