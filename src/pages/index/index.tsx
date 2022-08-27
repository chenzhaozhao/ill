import { View, Image, Text } from "@tarojs/components";
import { ActionSheet, ProgressBar, Button } from "antd-mobile";
import TextSelect from "../../components/TextSelect";
import TextMul from "../../components/TextMul";
import SexSelect from "../../components/SexSelect";
import DateSelect from "../../components/DateSelect";
import PressSelect from "../../components/PressSelect";
import Waist from "../../components/Waist";
import BMI from "../../components/BMI";
import { ExclamationCircleOutline } from "antd-mobile-icons";
import request from "../../utils/request";
import "./index.scss";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
const bizType = "012502",
  configId = "62fb0d1c46f9606589a53787",
  userId = "yhzj_001",
  botImg = `data:image/png;base64,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`;
const Index = () => {
  const [step, setStep] = useState<number>(0);
  const [total, setTotal] = useState<number>(1);
  const [questionQueue, setQuestionQueue] = useState<any[]>([{}]);
  const [visible, setVisible] = useState(false);
  const [healthProblems, setHealthProblems] = useState<any[]>([]);
  const [codes, setCodes] = useState<string[]>([]);
  const [answers, setAnswers] = useState({});
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { healthProblems }
        }
      } = await request({
        url: `https://api4.jiankangyouyi.com/data-center/v1/api/auth/health-assessment`,
        method: "POST",
        params: { bizType },
        data: { configId }
      });
      setHealthProblems(healthProblems);
    })();
  }, []);
  const nextStep = answer => {
   answer && setAnswers({ ...answers, ...answer });
    setStep(step + 1);
  };
  useEffect(() => {
    (async () => {
      if (codes.length > 0 && step === 1) {
        const {
          data: {
            data: { accessToken }
          }
        } = await request({
          url: `assessment/v5/api/permission`,
          method: "POST",
          params: { bizType },
          data: { configId, userId }
        });
        const {
          data: {
            data: {
              questionnaire: { questionnaireItems, questionCount }
            }
          }
        } = await request({
          url: `assessment/v3/api/health-center/questionnaire`,
          method: "POST",
          params: { bizType },
          data: {
            configId,
            userId,
            accessToken,
            healthProblems: codes.map(code => ({ code, riskLevel: null })),
            mode: "1"
          }
        });
        let queue: any[] = [];
        for (let i = 0; i < questionnaireItems.length; i++) {
          let questionCodes = queue.map(({ questionCode }) => questionCode);
          if (!questionCodes.includes(questionnaireItems[i]?.questionCode)) {
            queue.push(questionnaireItems[i]);
          }
        }
        setAccessToken(accessToken);
        setTotal(questionCount);
        setQuestionQueue(queue);
      }
    })();
  }, [codes, step]);
  const submit = async () => {
    const {
      data: {
        data: { assessmentParams }
      }
    } = await request({
      url: `https://api3.jiankangyouyi.com/assessment/v7/api/questionnaire/analysis`,
      method: "POST",
      params: { bizType },
      data: {
        accessToken,
        configId,
        userId,
        userOptions: Object.entries(answers).map(
          ([questionCode, userOptionValues]) => ({
            questionCode,
            userOptionValues
          })
        )
      }
    });
    const {
      data: {
        data: { reportId }
      }
    } = await request({
      url: "assessment/v6/api/report-id",
      method: "POST",
      params: {
        bizType
      },
      data: {
        accessToken,
        assessmentParams,
        channel: "1",
        mode: "1",
        userId,
        configId,
        healthProblems: [{ code: "IMMUNITY", riskLevel: null }]
      }
    });
    Taro.navigateTo({
      url: `/pages/report/index?configId=${configId}&reportId=${reportId}&userId=${userId}`
    });
    console.log(reportId);
  };
  if (step === 0) {
    return (
      <View className=" bg-img w-full h-full">
        <View className=" box">
          <View className=" ill-title">疾病类型</View>
          <View className=" flex flex-wrap">
            {healthProblems.map(
              ({ code, name }: { code: string; name: string }) => {
                return (
                  <View
                    key={code}
                    className={`ill-item ${
                      codes.includes(code) ? "ill-item-active" : ""
                    }`}
                    onClick={() =>
                      codes.includes(code)
                        ? setCodes(codes.filter(CODE => CODE !== code))
                        : setCodes([...codes, code])
                    }
                  >
                    {name}
                  </View>
                );
              }
            )}
          </View>
          <Button
            block
            color="primary"
            size="large"
            style={{ "--border-radius": "1rem", marginTop: "2rem" }}
            onClick={() => setStep(1)}
            disabled={codes.length === 0}
          >
            开启评估
          </Button>
          <View
            className=" text-center"
            style={{ marginTop: ".5rem", color: "#666", marginBottom: "2rem" }}
          >
            测评结果仅供查看参考，不代表医生诊断
          </View>
        </View>
      </View>
    );
  }
  return (
    <View className="main">
      <ProgressBar percent={(step / total) * 100} />
      <View className="flex flex-end " style={{ marginTop: ".4rem" }}>
        <View className=" rate">
          <Text>{step <= total ? step : total} </Text>
          <Text style={{ color: "#ccc", fontWeight: "400" }}>/</Text>
          <Text> {total} </Text>
        </View>
      </View>
      {((item, step) => {
        if (step <= total) {
          const { questionType, question, questionCode } = item;
          return (
            <View>
              <View className=" flex mt-1 item-center px-1-2">
                <View>
                  <Image src={botImg} className="bot-img"></Image>
                </View>
                <View className=" text bg-white ml-1 text-box-1">
                  {Array.isArray(question?.questionContents)
                    ? question?.questionContents[0]
                    : question?.questionContent}{" "}
                  {question?.supplementContent && (
                    <ExclamationCircleOutline
                      onClick={() => setVisible(true)}
                    ></ExclamationCircleOutline>
                  )}
                </View>
              </View>
              <View className=" mt-1 ">
                {/* 日期选择 */}
                {(questionType === "4" ||questionType === "8") && (
                  <DateSelect
                    changeStep={nextStep}
                    defaultDate={question.optionBuilder.defaultDate}
                    questionCode={questionCode}
                  />
                )}
                {/* 性别选择 */}
                {questionType === "3" && (
                  <SexSelect
                    changeStep={nextStep}
                    options={question?.options || {}}
                    questionCode={questionCode}
                  />
                )}
                {/* BMI */}
                {questionType === "7" && (
                  <BMI
                    changeStep={nextStep}
                    options={question?.optionBuilders || []}
                    questionCode={questionCode}
                  />
                )}
                {/* 单选题 */}
                {questionType === "1" && (
                  <TextSelect
                    options={question?.options}
                    changeStep={nextStep}
                    questionCode={questionCode}
                  />
                )}
                {/* 多选题 */}
                {questionType === "2" && (
                  <TextMul
                    options={question?.options || []}
                    changeStep={nextStep}
                    questionCode={questionCode}
                  />
                )}
                {/* 数字单选 */}
                {questionType === "5" && (
                  <Waist
                    option={question?.optionBuilder || []}
                    changeStep={nextStep}
                    questionCode={questionCode}
                  />
                )}
                {/* press */}
                {questionType === "6" && (
                  <PressSelect
                    options={question?.optionBuilders || []}
                    changeStep={nextStep}
                    required={question.required}
                    questionCode={questionCode}
                  />
                )}
              </View>
              <ActionSheet
                actions={[
                  {
                    text: question?.supplementContent,
                    key: "supplementContent"
                  }
                ]}
                visible={visible}
                onClose={() => setVisible(false)}
              ></ActionSheet>
              <View className=" back" onClick={() => setStep(step - 1)}>
                上一题
              </View>
            </View>
          );
        } else {
          return (
            <>
              <View className=" flex mt-1 item-center px-1-2">
                <View>
                  <Image src={botImg} className="bot-img"></Image>
                </View>
                <View className=" text bg-white ml-1 text-box-1">
                  恭喜 💐 ！测评题目已完成，快来看看结果吧 ~ 😄
                </View>
              </View>
              <View className=" mt-2 px-1-2">
                <Button
                  block
                  color="primary"
                  size="large"
                  onClick={submit}
                  style={{ "--border-radius": "2rem" }}
                >
                  OK
                </Button>
              </View>
            </>
          );
        }
      })(questionQueue[step - 1], step)}
    </View>
  );
};
export default Index;
