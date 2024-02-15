import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[25px] items-center justify-center mt-10 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-center justify-start max-w-[1200px] w-full">
            <Img
              className="sm:flex-1 h-32 md:h-auto object-cover w-[138px] sm:w-full"
              src="images/img_whatsappimage20231128.png"
              alt="whatsappimageTwenty_One"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[134px]">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtOpenSansBold16"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-2 items-start justify-start w-[134px] md:w-full common-column-list">
                  <li>
                    <Text
                      className="common-pointer text-base text-white-A700"
                      size="txtOpenSansRegular16"
                      onClick={() => navigate("/aboutus")}
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-base text-white-A700"
                      size="txtOpenSansRegular16"
                      onClick={() => navigate("/useraccount")}
                    >
                      My Account
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRegular16"
                    >
                      Offers
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[113px]">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtOpenSansBold16"
                >
                  Legal
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-[113px]">
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/tc")}
                  >
                    T&C
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/pricacypolicy")}
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                  >
                    Shipping
                  </Text>
                  <Text
                    className="common-pointer max-w-[113px] md:max-w-full text-base text-white-A700"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/returnrefund")}
                  >
                    Returns & Refund Policy
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[81px]">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtOpenSansBold16"
                >
                  Support
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                  >
                    FAQs
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/contactus")}
                  >
                    Contact Us
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="sm:flex-1 h-40 md:h-auto object-cover w-[178px] sm:w-full"
              src="images/img_compantbadge.png"
              alt="compantbadge"
            />
            <div className="flex flex-col gap-12 items-end justify-center w-auto">
              <Text
                className="text-base text-white-A700"
                size="txtOpenSansRegular16"
              >
                <span className="text-white-A700 font-opensans text-left font-normal">
                  Copyright © 2023{" "}
                </span>
                <span className="text-white-A700 font-opensans text-left font-semibold">
                  HERBALWALA{" "}
                </span>
                <span className="text-white-A700 font-opensans text-left font-normal">
                  | Powered by{" "}
                </span>
                <span className="text-white-A700 font-opensans text-left font-semibold">
                  <>
                    Aditi Tech Service
                    <br />
                  </>
                </span>
              </Text>
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  shape="circle"
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_facebook.svg" alt="facebook" />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  shape="circle"
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_info.svg" alt="info" />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  shape="circle"
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_settings.svg" alt="settings" />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  shape="circle"
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-[26px]"
                    src="images/img_ictwotonemail.svg"
                    alt="ictwotonemail"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex md:flex-col flex-row gap-12 items-center justify-center max-w-[1440px] p-3 w-full">
            <Text
              className="text-base text-right text-white-A700 w-auto"
              size="txtOpenSansRegular16"
            >
              We facilitate your payments through trusted gateways
            </Text>
            <Img
              className="h-[33px] w-60"
              src="images/img_paymentgateways.svg"
              alt="paymentgateways"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
