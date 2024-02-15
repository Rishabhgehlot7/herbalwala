import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header/Header";

const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">

          <Header />
          <div className="flex md:flex-col flex-row font-unna gap-[18px] items-start justify-end md:ml-[0] ml-[120px] mt-[46px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col gap-[54px] items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col h-[70px] md:h-auto items-center justify-center pb-2 px-2 w-auto">
                <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                    size="txtUnnaBold48"
                  >
                    Our Story
                  </Text>
                  <Line className="bg-blue_gray-900_cc h-0.5 w-[64%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between w-full">
                <div className="h-[901px] relative w-3/5 md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-[23px] items-start justify-center mb-[-164.97px] mx-auto p-[27px] sm:px-5 rounded-[11px] z-[1]">
                    <Text
                      className="ml-2 md:ml-[0] mt-2 sm:text-[32.87px] md:text-[34.87px] text-[36.87px] text-black-900"
                      size="txtOpenSansRomanRegular3687"
                    >
                      How We Started
                    </Text>
                    <Text
                      className="leading-[160.52%] mb-[25px] ml-2.5 md:ml-[0] text-[14.75px] text-black-900 w-[99%] sm:w-full"
                      size="txtOpenSansRomanRegular1475"
                    >
                      Our company RKP HealthCare is supplying and marketing
                      Ayurveda, Herbals, Cosmetics & Food products with brand
                      name “Herbalvala”. Our Company was established in 2023 at
                      Jodhpur, Rajasthan. Our company was founded on the
                      philosophy by following a research oriented approach to
                      bring the best range of Organic products, natural
                      cosmetics etc., that is formulated using high grade raw
                      materials. Innovation and timely execution of the business
                      plan are at the core of our organization’s strategy.
                    </Text>
                  </div>
                  <div className="bg-blue_gray-100 h-[736px] mt-auto mx-auto w-full">
                    <Img
                      className="h-[58px] m-auto"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Img
                      className="absolute h-[736px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[33px] items-start justify-start mb-[234px] pl-2 py-2 rounded-[11px]">
                  <Text
                    className="leading-[145.00%] md:ml-[0] ml-[19px] sm:text-[32.87px] md:text-[34.87px] text-[36.87px] text-black-900 w-[95%] sm:w-full"
                    size="txtOpenSansRomanRegular3687"
                  >
                    We Are Trusted Company
                  </Text>
                  <Text
                    className="leading-[160.52%] mb-[27px] ml-5 md:ml-[0] text-[14.75px] text-black-900"
                    size="txtOpenSansRomanRegular1475"
                  >
                    <span className="text-black-900 font-opensans text-left font-normal">
                      <>
                        Our mission is to provide high-quality herbal medicines
                        and remedies at affordable prices in the interest of
                        patients’ health and to provide medicinal and
                        pharmaceutical experts with high-quality herbal products
                        in accordance with current health standards.
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-opensans text-left text-base font-semibold">
                      <>
                        VALUES :<br />
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-opensans text-left font-normal">
                      <>
                        The values that we share are the key for the success of
                        Our company HERBALVALA:
                        <br /> QUALITY
                        <br /> EFFICIENCY
                        <br /> CUSTOMER FOCUS
                        <br /> PARTNERSHIP
                        <br /> FIRMNESS OF PURPOSE
                        <br /> INNOVATION
                        <br /> DYNAMIC DEVELOPMENT
                        <br /> CONFIDENCE
                        <br /> RESPONSIBILITY
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-[386px] md:mt-0 mt-[579px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <Footer className="bg-green-800 flex font-opensans items-center justify-center mt-[150px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
