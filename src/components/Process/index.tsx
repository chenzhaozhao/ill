import { View } from "@tarojs/components";
const Process = ({ indicatorRanges, indicatorValue }) => {
  const starts = indicatorRanges.map(({ startValue }) => Number(startValue));
  const max = Math.max(...starts);
  const min = Math.min(...starts);
  const total = max - min;
  return (
    <View 
    className="relative"
    >
      <View
        className=" flex "
        style={{
          background: "#f2f4fa",
          height: ".6rem",
          borderRadius: ".2rem"
        }}
      >
        {indicatorRanges.map(({ startValue, endValue }) => (
          <View
            style={{
              width: `${((endValue - startValue) / total) * 100}%`,
              borderRight: "3px solid #fff"
            }}
          ></View>
        ))}
      </View>
      <View
        className="absolute"
        style={{
          width: `${(indicatorValue / total) * 100>100?100:(indicatorValue / total) * 100}%`,
          backgroundColor: "rgb(241, 108, 108)",
          height: ".6rem",
          top: "0",
          borderRadius: ".2rem"
        }}
      >
      </View>
      <View className=" flex " style={{ marginTop: "3px" }}>
        {indicatorRanges.map(({ startValue, description, endValue }) => (
          <View
            style={{ width: `${((endValue - startValue) / total) * 100}%` }}
          >
            <View>
              {startValue || 1}
              {description}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Process;
