import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { Button } from "antd-mobile";
import "./index.scss";
const TextSelect = ({ options, changeStep, questionCode }) => {
  const [codes, setCodes] = useState<any[]>([]);
  const nullCode = options.filter(option =>
    option.optionContents.includes("无")
  )[0].optionCode;
  useEffect(() => {
    setCodes([]);
  }, [options]);
  const go = () =>  changeStep({ [questionCode]: codes });
  return (
    <View
      className="relative bg-white mx-1-2  px-1-2 py-1 br-1"
      style={{ marginTop: "1.5rem" }}
    >
      <View className=" absolute title">多选题</View>
      <View className="scroll-view">
        {options?.map(({ optionContents, optionCode }) => (
          <View
            key={optionCode}
            className={`text text-center text-box-3 ${
              codes.includes(optionCode) ? "active" : ""
            }`}
            onClick={() => {
              // 如果有无,其他选项取消;
              if (optionCode === nullCode) {
                codes.includes(nullCode) ? setCodes([]) : setCodes([nullCode]);
              } else {
                codes.includes(optionCode)
                  ? setCodes(
                      codes.filter(
                        code => code != optionCode && code !== nullCode
                      )
                    )
                  : setCodes(
                      [...codes, optionCode].filter(code => code !== nullCode)
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
          onClick={go}
          disabled={codes.length === 0}
          style={{ "--border-radius": "2rem" }}
        >
          继续
        </Button>
      </View>
    </View>
  );
};
export default TextSelect;
