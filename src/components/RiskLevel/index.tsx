import { View, Image } from "@tarojs/components";

const RiskLevel = ({ level }) => {
  const on = new Array(Number(level)).fill(1);
  const off=new Array(Number(5-level)).fill(1)
  return (
    <View>
      危险等级:
      
      {on.map((a,b)=><Image key={b}
        style={{ width: "10px", height: "17px" }}
        src="https://apps.jiankangyouyi.com/e-standard-product/theme1/report/health/risk-on.png"
      ></Image>)}
      {off.map((a,b)=><Image
      key={b}
        style={{ width: "10px", height: "17px" }}
        src="https://apps.jiankangyouyi.com/e-standard-product/theme1/report/health/risk-off.png"
      ></Image>)}
    </View>
  );
};

export default RiskLevel;
