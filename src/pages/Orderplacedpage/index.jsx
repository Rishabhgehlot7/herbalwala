import React from "react";

import { Button, Img, Line, Text } from "components";

const OrderplacedpagePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto p-[265px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-[100px] w-[100px]"
          src="images/img_partypopper.svg"
          alt="partypopper"
        />
        <div className="flex flex-col font-unna items-center justify-start mt-[34px] w-[65%] md:w-full">
          <div className="flex flex-col gap-[38px] items-center justify-start w-full">
            <div className="flex flex-col h-[70px] md:h-auto items-center justify-center pb-2 px-2 w-auto sm:w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtUnnaBold48"
                >
                  Congratulations
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-[56%]" />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-opensans h-[150px] items-center justify-end p-[54px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-row gap-[9px] items-start justify-center mt-2.5 w-auto">
                <Text
                  className="sm:text-[16.48px] md:text-[18.48px] text-[20.48px] text-blue_gray-900 w-auto"
                  size="txtOpenSansRomanRegular2048"
                >
                  Your order has been placed !
                </Text>
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer font-bold h-16 leading-[normal] mt-[38px] text-center text-xl w-[271px]"
          shape="round"
          color="green_700"
          size="xl"
          variant="fill"
        >
          Shop More
        </Button>
      </div>
    </>
  );
};

export default OrderplacedpagePage;
