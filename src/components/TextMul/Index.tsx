import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { Button } from "antd-mobile";
import "./index.scss";
const TextSelect = ({ options, changeStep }) => {
  const [current, setCurrent] = useState<any[]>([]);
  const nullCode = options.filter(option =>
    option.optionContents.includes("无")
  )[0].optionCode;
  useEffect(() => {
    setCurrent([]);
  }, [options]);
  return (
    <View className="relative bg-white mx-1-2  px-1-2 py-1 br-1" style={{marginTop:'1.5rem'}}>
      <View className=" absolute title">多选题</View>
      <View className="scroll-view">
        {options?.map(({ optionContents, optionCode }) => (
          <View
            key={optionCode}
            className={`text text-center text-box-3 ${
              current.includes(optionCode) ? "active" : ""
            }`}
            onClick={() => {
              // 如果有无,其他选项取消;
              if (optionCode === nullCode) {
                current.includes(nullCode)
                  ? setCurrent([])
                  : setCurrent([nullCode]);
              } else {
                current.includes(optionCode)
                  ? setCurrent(
                      current.filter(
                        code => code != optionCode && code !== nullCode
                      )
                    )
                  : setCurrent(
                      [...current, optionCode].filter(code => code !== nullCode)
                    );
              }
            }}
          >
            {optionContents}
          </View>
        ))}
      </View>
      <View>
        <Button
          block
          color="primary"
          size="large"
          onClick={changeStep}
          disabled={current.length === 0}
          style={{ "--border-radius": "2rem" }}
        >
          继续
        </Button>
      </View>
    </View>
  );
};
export default TextSelect;
