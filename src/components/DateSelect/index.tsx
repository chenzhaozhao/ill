import { View } from "@tarojs/components";
import { Button, DatePickerView } from "antd-mobile";
import { useState } from "react";
import dayjs from "dayjs";
const DateSelect = ({ changeStep, defaultDate, questionCode }) => {
  const [date, setDate] = useState(defaultDate);
  console.log(questionCode,'oooo')
  const go = () => {
    changeStep({ [questionCode]: [dayjs(date).format("YYYY-MM-DD")] });
  };
  return (
    <View className=" bg-white mx-1-2  px-1-2 py-1 br-1">
      <View className="relative " style={{ height: "300px" }}>
        <DatePickerView
          defaultValue={new Date(date)}
          min={new Date("1952-01-01")}
          max={new Date("2004-12-31")}
          style={{ "--height": "300px" }}
          onChange={v => setDate(v)}
        />
      </View>
      <View>
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

export default DateSelect;
