import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import request from "../../utils/request";
import "./index.scss";
import { Divider, Tag } from "antd-mobile";
import RiskLevel from "../../components/RiskLevel";
const Report = () => {
  const [assessmentReport, setAssessmentReport] = useState<{
    [key: string]: any;
  }>({});
  useEffect(() => {
    (async () => {
      //  @ts-ignore
      const {
        configId,
        reportId,
        userId
      } = Taro.getCurrentInstance().router?.params;
      const {
        data: {
          data: { assessmentReport }
        }
      } = await request({
        url: "assessment/v6/api/report",
        method: "POST",
        params: { bizType: "012502" },
        data: {
          configId,
          reportId,
          userId
        }
      });
      setAssessmentReport(assessmentReport);
    })();
  }, []);
  return (
    <View className="main">
      <View className=" title">健康状态评估报告</View>
      <View className="base-info">
        <View className=" sex">
          {assessmentReport?.userInfo?.gender === "1" ? (
            <>
              <svg
                // t="1661448657172"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1362"
                width="25"
                height="25"
              >
                <path
                  d="M262.826667 498.346667h6.826666C307.2 628.053333 399.36 716.8 505.173333 716.8c109.226667 0 211.626667-92.16 252.586667-218.453333 34.133333 0 61.44-44.373333 61.44-102.4 0-17.066667-3.413333-34.133333-6.826667-47.786667 3.413333-20.48 6.826667-40.96 6.826667-58.026667C819.2 133.12 675.84 0 508.586667 0 341.333333 0 204.8 129.706667 204.8 290.133333c0 17.066667 3.413333 37.546667 6.826667 58.026667-3.413333 17.066667-6.826667 30.72-6.826667 47.786667 0 58.026667 27.306667 102.4 58.026667 102.4z m494.933333-34.133334h-3.413333c-3.413333-3.413333-10.24-3.413333-17.066667 0-3.413333 3.413333-10.24 6.826667-10.24 10.24-30.72 116.053333-126.293333 208.213333-221.866667 208.213334-92.16 0-174.08-81.92-204.8-204.8 0-6.826667-3.413333-10.24-10.24-10.24h-27.306666c-10.24 0-27.306667-27.306667-27.306667-68.266667v-20.48h51.2c13.653333-3.413333 20.48-10.24 20.48-20.48 0-54.613333 10.24-109.226667 20.48-119.466667h44.373333c54.613333 0 81.92-17.066667 95.573334-40.96 37.546667 51.2 122.88 102.4 215.04 109.226667 6.826667 37.546667 37.546667 61.44 37.546666 64.853333 3.413333 3.413333 6.826667 3.413333 10.24 3.413334H785.066667v20.48c0 44.373333-17.066667 68.266667-27.306667 68.266666z"
                  fill=""
                  p-id="1363"
                ></path>
                <path
                  d="M829.44 675.84l-109.226667-20.48c-6.826667 0-10.24 0-17.066666 6.826667C648.533333 716.8 580.266667 750.933333 508.586667 750.933333s-143.36-34.133333-197.973334-92.16c-3.413333-3.413333-10.24-6.826667-17.066666-6.826666l-112.64 20.48C71.68 713.386667 0 856.746667 0 965.973333v40.96c0 10.24 6.826667 17.066667 17.066667 17.066667h989.866666c10.24 0 17.066667-6.826667 17.066667-17.066667v-30.72c0-112.64-78.506667-262.826667-194.56-300.373333zM426.666667 375.466667h-34.133334c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h34.133334c10.24 0 17.066667-6.826667 17.066666-17.066667s-6.826667-17.066667-17.066666-17.066666zM631.466667 375.466667h-34.133334c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h34.133334c10.24 0 17.066667-6.826667 17.066666-17.066667s-6.826667-17.066667-17.066666-17.066666z"
                  fill=""
                  p-id="1364"
                ></path>
              </svg>
              <Text style={{ marginLeft: "0.5rem" }}>男</Text>
            </>
          ) : (
            <>
              <svg
                // t="1661448743037"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2267"
                width="25"
                height="25"
              >
                <path
                  d="M829.44 692.906667l-109.226667-37.546667c-6.826667-3.413333-13.653333 0-17.066666 3.413333C648.533333 716.8 576.853333 750.933333 505.173333 750.933333s-143.36-34.133333-197.973333-92.16c-3.413333-3.413333-10.24-6.826667-17.066667-3.413333l-109.226666 37.546667C64.853333 733.866667 0 870.4 0 976.213333v30.72c0 10.24 6.826667 17.066667 17.066667 17.066667h989.866666c10.24 0 17.066667-6.826667 17.066667-17.066667v-30.72c0-119.466667-85.333333-245.76-194.56-283.306666zM426.666667 375.466667h-34.133334c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h34.133334c10.24 0 17.066667-6.826667 17.066666-17.066667s-6.826667-17.066667-17.066666-17.066666zM631.466667 375.466667h-34.133334c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h34.133334c10.24 0 17.066667-6.826667 17.066666-17.066667s-6.826667-17.066667-17.066666-17.066666z"
                  fill=""
                  p-id="2268"
                ></path>
                <path
                  d="M354.986667 651.946667s3.413333 0 0 0h3.413333c44.373333 40.96 95.573333 64.853333 146.773333 64.853333 54.613333 0 109.226667-23.893333 157.013334-64.853333 30.72-6.826667 174.08-34.133333 218.453333-75.093334 6.826667-6.826667 6.826667-17.066667 0-23.893333-23.893333-23.893333-47.786667-102.4-58.026667-194.56-3.413333-27.306667-3.413333-51.2-3.413333-68.266667C819.2 133.12 675.84 0 508.586667 0 341.333333 0 204.8 129.706667 204.8 290.133333v37.546667c0 6.826667 0 17.066667-3.413333 23.893333-10.24 95.573333-34.133333 174.08-58.026667 197.973334-6.826667 6.826667-6.826667 17.066667 0 23.893333 44.373333 47.786667 194.56 75.093333 211.626667 78.506667z m10.24-44.373334c-27.306667-34.133333-51.2-78.506667-61.44-129.706666 0-6.826667-3.413333-10.24-10.24-10.24-3.413333-3.413333-10.24 0-17.066667 0H273.066667c-10.24 0-27.306667-27.306667-27.306667-68.266667 0-10.24-3.413333-20.48-6.826667-27.306667v-6.826666c3.413333 0 6.826667-3.413333 10.24-6.826667 51.2-23.893333 133.12-75.093333 153.6-160.426667 64.853333 64.853333 235.52 157.013333 368.64 174.08h10.24c0 6.826667 3.413333 17.066667 3.413334 23.893334 0 44.373333-13.653333 68.266667-20.48 68.266666h-3.413334c-3.413333-3.413333-10.24-3.413333-17.066666 0-3.413333 3.413333-10.24 6.826667-10.24 10.24-13.653333 58.026667-44.373333 109.226667-88.746667 150.186667-40.96 37.546667-92.16 61.44-136.533333 61.44-54.613333-3.413333-105.813333-30.72-143.36-78.506667z"
                  fill=""
                  p-id="2269"
                ></path>
              </svg>
              <Text style={{ marginLeft: "0.5rem" }}>女</Text>
            </>
          )}
        </View>
        <View className=" age">
          <svg
            // t="1661449468474"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5872"
            width="25"
            height="25"
          >
            <path
              d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 142.485334h-64v233.130666a32 32 0 0 0 32 32h172.757333v-64H544V291.84z"
              p-id="5873"
            ></path>
          </svg>
          <Text style={{ marginLeft: "0.5rem" }}>
            {assessmentReport?.userInfo?.age}岁
          </Text>
        </View>
        <Divider />
        <View>
          家族史：{assessmentReport?.userInfo?.familyMedicalHistory || "无"}
        </View>
        <View>
          疾病史：{assessmentReport?.userInfo?.pastMedicalHistory || "无"}
        </View>
      </View>
      <View className="result">健康综述</View>
      <View className="result-desc">
        {assessmentReport?.report?.healthReview}
      </View>
      <View className="result">已患疾病</View>
      <View className="ills">
        {assessmentReport?.report?.diseasesAnalysis?.map(
          ({ diseaseName, imageUrl }) => (
            <View key={diseaseName}>
              <Image src={imageUrl} className="img"></Image>
              <View>{diseaseName}</View>
            </View>
          )
        )}
      </View>
      {assessmentReport?.report?.indicatorAnalysis?.length > 0 && (
        <View className="result">异常指标解读</View>
      )}
      {assessmentReport?.report?.indicatorAnalysis?.length > 0 && (
        <View className="indicator">
          {assessmentReport?.report?.indicatorAnalysis?.map(
            ({ indicatorName, descriptions }) => (
              <View key={indicatorName}>
                <View className="indicatorName">{indicatorName}</View>
                <View className="descriptions">{descriptions}</View>
              </View>
            )
          )}
        </View>
      )}
      {assessmentReport?.report?.riskFactorAnalysis?.length > 0 && (
        <View className="result">主要风险因素</View>
      )}
      {assessmentReport?.report?.riskFactorAnalysis?.length > 0 && (
        <View className="riskFactorAnalysis">
          {assessmentReport?.report?.riskFactorAnalysis.map(
            (
              { currentValue, referAdvice, descriptions, riskFactorLevel },
              index
            ) => (
              <View key={currentValue}>
                <View className=" flex">
                  <View>
                    <Tag color="#3187ff" style={{ "--border-radius": "100%" }}>
                      {index + 1}
                    </Tag>
                  </View>
                  <View className="flex-1 ml-sm">
                    <View>{currentValue}</View>
                    <View className=" text-grey text-sm">
                      参考范围:{referAdvice}
                    </View>
                  </View>
                  <View className=" text-sm text-grey">
                    <View>
                      <RiskLevel level={riskFactorLevel} />
                    </View>
                    <View>本次结果:{currentValue}</View>
                  </View>
                </View>
                <View className="descriptions">{descriptions}</View>
              </View>
            )
          )}
        </View>
      )}
    </View>
  );
};

export default Report;
