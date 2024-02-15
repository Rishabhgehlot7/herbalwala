import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ContactusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-900 flex flex-col h-[68px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] w-full">
            <Button
              className="common-pointer bg-transparent cursor-pointer flex h-[50px] items-center justify-center pl-[35px] w-full"
              onClick={() => navigate("/cart")}
              rightIcon={
                <Img
                  className="ml-[35px]"
                  src="images/img_cartaccounticons_white_a700.svg"
                  alt="Cart & Account Icons"
                />
              }
            >
              <div className="leading-[normal] sm:pl-5 text-base text-center text-white-A700">
                Use code FIRST50 for a 50% discount on your first order!
              </div>
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-center max-w-[1200px] mx-auto md:px-5 py-3 w-full">
            <Img
              className="common-pointer sm:flex-1 h-[87px] md:h-auto object-cover w-[94px] sm:w-full"
              src="images/img_whatsappimage20231128.png"
              alt="whatsappimageTwenty"
              onClick={() => navigate("/")}
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-14 h-14 md:h-auto items-center justify-center p-2 w-auto sm:w-full">
              <Text
                className="common-pointer text-blue_gray-900 text-center text-lg w-auto"
                size="txtOpenSansSemiBold18Bluegray900"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[78px] text-blue_gray-900 text-center text-lg"
                onClick={() => navigate("/shoppage")}
              >
                Products
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[53px] text-blue_gray-900 text-center text-lg"
                onClick={() => navigate("/aboutus")}
              >
                About{" "}
              </Button>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-center text-green-700 text-lg w-auto"
                  size="txtOpenSansSemiBold18"
                >
                  Contact
                </Text>
              </div>
            </div>
            <Input
              name="language"
              placeholder="Search "
              className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-blue_gray-900_7f sm:h-auto text-base text-left w-full"
              wrapClassName="flex md:flex-1 w-[42%] md:w-full"
              prefix={
                <Img
                  className="h-6 my-auto"
                  src="images/img_searchblack24dp_1.svg"
                  alt="search_black_24dp 1"
                />
              }
              shape="round"
              color="blue_gray_900"
              size="xs"
              variant="outline"
            ></Input>
          </div>
          <div className="flex md:flex-col flex-row gap-[18px] items-start justify-end md:ml-[0] ml-[120px] mt-[42px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col justify-start w-[94%] md:w-full">
              <div className="flex flex-col font-unna h-[75px] md:h-auto items-center justify-center md:ml-[0] ml-[412px] pb-2 px-2 w-auto sm:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                    size="txtUnnaBold48"
                  >
                    How to Reach Us
                  </Text>
                  <Line className="bg-blue_gray-900_cc h-0.5 w-[56%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-between mt-[66px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[37px] items-start justify-center p-[41px] md:px-10 sm:px-5 rounded-[11px] w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-[3px] w-[81%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[25px] items-center justify-start w-[78%] md:w-full">
                        <Img
                          className="h-[34px] w-[34px]"
                          src="images/img_ionlocation.svg"
                          alt="ionlocation"
                        />
                        <Text
                          className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-green-700 tracking-[1.44px]"
                          size="txtOpenSansRomanCondensedBold36"
                        >
                          location
                        </Text>
                      </div>
                      <Text
                        className="capitalize leading-[130.00%] mt-3 text-[15px] text-blue_gray-900 tracking-[0.60px] w-full"
                        size="txtOpenSansRomanRegular15"
                      >
                        Lal Sagar Rd, Puneet Nagar, Nayapura, Jodhpur, Rajasthan
                        342001
                      </Text>
                      <Text
                        className="capitalize mt-3.5 text-base text-blue_gray-900 tracking-[0.64px]"
                        size="txtOpenSansRomanBold16"
                      >
                        +91 8764239460
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[177px] md:h-auto mb-[19px] object-cover w-full"
                    src="images/img_rectangle98.png"
                    alt="rectangleNinetyEight"
                  />
                </div>
                <div className="h-[476px] relative w-[66%] md:w-full">
                  <Img
                    className="h-[476px] m-auto object-cover rounded-[11px] w-full"
                    src="images/img_rectangle8.png"
                    alt="rectangleEight"
                  />
                  <div className="absolute bottom-[39%] flex flex-col items-center justify-start right-[6%] w-[5%]">
                    <div className="h-[33px] relative w-full">
                      <Img
                        className="h-[33px] m-auto object-cover w-full"
                        src="defaultNoData.png"
                        alt="createfromframe"
                      />
                      <div className="absolute bg-white-A700 border border-blue_gray-100_01 border-solid md:h-[22px] h-[33px] inset-[0] justify-center m-auto py-1 rounded-[1px] w-full">
                        <Img
                          className="absolute h-[22px] inset-[0] justify-center m-auto w-[22px]"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                        <div className="absolute bg-blue_gray-100_01 h-px inset-[0] justify-center m-auto w-full"></div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start mt-1 p-[5px] rounded-[1px] w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_minus.svg"
                        alt="minus"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-opensans min-w-[136px] md:ml-[0] ml-[1046px] mr-[18px] mt-0.5 rounded text-center text-sm tracking-[0.56px]"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Larger Map
              </Button>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-2 md:mt-0 mt-[582px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <Footer className="bg-green-800 flex items-center justify-center mt-[87px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
