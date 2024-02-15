import React from "react";

import { Img, Line, Text } from "components";

const PaymentPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-unna items-center justify-start mx-auto p-[319px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[27px] items-center justify-start w-[74%] md:w-full">
          <Img
            className="h-[100px] w-[100px]"
            src="images/img_linemdloadingtwotoneloop.svg"
            alt="linemdloadingtw"
          />
          <div className="flex flex-col gap-[38px] items-center justify-start w-full">
            <div className="flex flex-col h-[70px] md:h-auto items-center justify-center pb-2 px-2 w-[588px] sm:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtUnnaBold48"
                >
                  Processing Payment
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-[47%]" />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-opensans h-[150px] items-center justify-start p-[25px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-col h-[78px] md:h-auto items-center justify-center my-[11px] w-[538px] sm:w-full">
                <Text
                  className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-blue_gray-900 text-center w-auto"
                  size="txtOpenSansRomanRegular2048"
                >
                  Please do not go back while payment is processing
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
