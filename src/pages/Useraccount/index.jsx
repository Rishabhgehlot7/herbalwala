import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import UserAccountStack from "components/UserAccountStack";

const UseraccountPage = () => {
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
                  src="images/img_cart_account_icons_white_a700_1.svg"
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
              <Button
                className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[68px] text-blue_gray-900 text-center text-lg"
                onClick={() => navigate("/contactus")}
                size="xs"
              >
                Contact
              </Button>
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[120px] mt-[98px] md:px-5 w-[89%] md:w-full">
            <UserAccountStack className="h-[411px] md:mt-0 mt-1 relative rounded-[14px] w-[23%] md:w-full" />
            <div className="bg-white-A700 flex flex-col items-start justify-center md:ml-[0] ml-[22px] p-[78px] md:px-10 sm:px-5 rounded-[10px] w-[70%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-1.5 rounded-[7px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[25px] w-[92%] md:w-full">
                  <div className="bg-white-A700 flex flex-col h-[129px] items-center justify-start md:mt-0 mt-[23px] p-[21px] sm:px-5 rounded-[7px] w-[129px]">
                    <Img
                      className="h-[86px] w-[86px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                  <div className="flex flex-col gap-[31px] items-start justify-start md:ml-[0] ml-[50px]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Your Name
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtOpenSansRomanRegular24"
                    >
                      Phone Number
                    </Text>
                  </div>
                  <Img
                    className="h-[29px] md:ml-[0] ml-[280px] rounded-[7px] w-[29px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </div>
              <Text
                className="mt-[75px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtOpenSansSemiBold24Black900"
              >
                <span className="text-black-900 font-opensans text-left font-normal">
                  Hello{" "}
                </span>
                <span className="text-green-700 font-opensans text-left font-bold">
                  Your Name
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  {" "}
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  (not{" "}
                </span>
                <span className="text-green-700 font-opensans text-left font-bold">
                  Your Name
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  ?{" "}
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  Log out
                </span>
                <span className="text-black-900 font-opensans text-left font-normal">
                  <>
                    )<br />
                    Welcome! to your account{" "}
                  </>
                </span>
              </Text>
              <Text
                className="mb-[5px] mt-[51px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[95%] sm:w-full"
                size="txtOpenSansSemiBold24Black900"
              >
                <span className="text-black-900 font-opensans text-left font-normal">
                  From your account dashboard you can view your{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-black-900 font-opensans text-left font-normal underline"
                >
                  recent orders
                </a>
                <span className="text-black-900 font-opensans text-left font-normal">
                  , manage your{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-black-900 font-opensans text-left font-normal underline"
                >
                  shipping and billing addresses
                </a>
                <span className="text-black-900 font-opensans text-left font-normal">
                  , and{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-black-900 font-opensans text-left font-normal underline"
                >
                  edit your password and account details
                </a>
                <span className="text-black-900 font-opensans text-left font-normal">
                  .
                </span>
              </Text>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-[55px] md:ml-[0] ml-[18px] md:mt-0 mt-[527px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <Footer className="bg-green-800 flex items-center justify-center mt-[180px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UseraccountPage;
