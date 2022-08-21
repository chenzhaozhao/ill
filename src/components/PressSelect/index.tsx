import { View, Text } from "@tarojs/components";
import { Button, Picker } from "antd-mobile";
import { useState, useEffect } from "react";
import { DownOutline } from "antd-mobile-icons";
const PressSelect = ({ changeStep, options, required }) => {
  const [Options, setOptions] = useState<any[]>([]);
  useEffect(() => {setOptions(options);}, []);
  console.log(Options,'uuuu')
  return (
    <View className=" text bg-white mx-1-2  px-1-2 py-1 br-1 text-center relative ">
      {!required && (
        <Button className=" absolute skip" onClick={changeStep}>
          跳过
        </Button>
      )}
      <View>
        {Options.map(
          (
            {
              optionContent,
              unit,
              optionCode,
              maxValue,
              minValue,
              defaultValue,
              visible = false,
              value
            },
          ) => {
            const range = (() => {
              let arr: string[] = [];
              for (let i = minValue; i <= maxValue; i++) {
                arr.push(String(i));
              }
              return arr;
            })();
            return (
              <View key={optionCode}>
                <View className=" press-text h-2">{optionContent}</View>
                <View className=" flex justify-center">
                  <View
                    className=" h-2 w-half select-default"
                    onClick={() =>
                      setOptions(
                        Options.map((option) => ({
                          ...option,
                          visible: optionCode=== option.optionCode ? true : false,

                        }))
                      )
                    }
                  >
                    {value ? (
                      <Text>
                        {value} {unit}
                      </Text>
                    ) : (
                      <Text>
                        请选择 <DownOutline />
                      </Text>
                    )}
                  </View>
                </View>
                <Picker
                  columns={[range]}
                  defaultValue={[defaultValue]}
                  visible={visible}
                  onClose={() => {
                    setOptions(
                      Options.map(option => ({ ...option, visible: false,}))
                    );
                  }}
                  value={[value]}
                  onConfirm={v =>setTimeout(()=>setOptions(Options.map((option) => ({
                            ...option,
                            visible: false,
                            value:optionCode==option.optionCode?v[0]:option.value
                          }))
                        ),100)
                  }
                ></Picker>
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

export default PressSelect;
