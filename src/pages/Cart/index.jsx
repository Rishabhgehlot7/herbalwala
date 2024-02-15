import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import CartColumnfirstnameFour from "components/CartColumnfirstnameFour";
import Footer from "components/Footer";

const CartPage = () => {
  const tableData = React.useRef([
    { product: "Remove", price: "Rs 48", quantity: "-", total: "Rs 48" },
    { product: "Remove", price: "Rs70", quantity: "-", total: "Rs 70" },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[23px] py-[23px]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[93%] md:w-full">
              <Text
                className="sm:mt-0 mt-[46px] text-blue_gray-900 text-xl"
                size="txtOpenSansRegular20"
              >
                1
              </Text>
              <Img
                className="h-[120px] md:h-auto sm:ml-[0] ml-[51px] object-cover rounded-lg w-[32%] sm:w-full"
                src="images/img_rectangle73.png"
                alt="rectangleSeventyThree"
              />
              <div className="flex flex-col gap-4 items-start justify-start ml-6 sm:ml-[0]">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtOpenSansSemiBold24"
                >
                  Herbalvala relief Balm
                </Text>
                <Text
                  className="text-blue_gray-900 text-xl underline"
                  size="txtOpenSansLight20"
                >
                  {info?.getValue()}
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[565px] pb-6 sm:pl-5 pl-[35px] text-blue_gray-900 text-xl"
            size="txtOpenSansBold20"
          >
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Text
            className="pl-2 py-[35px] text-blue_gray-900 text-xl"
            size="txtOpenSansRegular20"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[222px] pb-6 text-blue_gray-900 text-xl"
            size="txtOpenSansBold20"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 sm:pr-5 pr-[65px] py-[65px]">
            <div className="flex flex-row items-start justify-between outline outline-[1px] outline-blue_gray-900 p-[3px] rounded w-[45%]">
              <Text
                className="ml-1 text-blue_gray-900 text-xl"
                size="txtOpenSansRegular20"
              >
                +
              </Text>
              <Text
                className="text-blue_gray-900 text-center text-xl"
                size="txtOpenSansRegular20"
              >
                1
              </Text>
              <Text
                className="mr-1.5 mt-0.5 text-blue_gray-900 text-xl"
                size="txtOpenSansRegular20"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[260px] pb-[22px] pl-0.5 pt-0.5 text-blue_gray-900 text-center text-xl"
            size="txtOpenSansBold20"
          >
            Quantity
          </Text>
        ),
      }),
      tableColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-900 text-xl"
            size="txtOpenSansRegular20"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[105px] pb-6 pl-1.5 text-blue_gray-900 text-xl"
            size="txtOpenSansBold20"
          >
            Total
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-900 flex flex-col h-[68px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex sm:flex-col flex-row gap-3 h-[50px] md:h-auto items-center justify-center max-w-[1200px] mx-auto py-2 w-full">
              <Text
                className="flex-1 text-base text-center text-white-A700 w-auto"
                size="txtOpenSansRegular16"
              >
                Use code FIRST50 for a 50% discount on your first order!
              </Text>
              <Img
                className="h-[50px] w-[107px]"
                src="images/img_cartaccounticons_light_green_a700.svg"
                alt="cartaccounticon"
              />
            </div>
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
                  className="h-6 mr-3 my-auto"
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
          <div className="flex md:flex-col flex-row font-unna gap-[18px] items-start justify-end mt-[31px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col relative w-[94%] md:w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-center max-w-[1200px] mx-auto py-4 rounded-[16px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-center p-2 w-auto">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                      size="txtUnnaBold48"
                    >
                      Your Cart Items
                    </Text>
                    <Line className="bg-blue_gray-900_cc h-0.5 w-[64%]" />
                  </div>
                </div>
                <div className="flex flex-col font-opensans gap-8 items-center justify-center p-6 sm:px-5 w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={"border-b border-blue_gray-900_66"}
                      headerClass=""
                    />
                  </div>
                  <div className="flex flex-col items-end justify-center w-full">
                    <div className="flex flex-col gap-4 items-start justify-center w-[484px] sm:w-full">
                      <div className="flex flex-col gap-6 items-start justify-center w-full">
                        <div className="flex flex-col gap-4 items-start justify-center md:px-10 px-12 sm:px-5 w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Subtotal
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Rs 118
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Shipping
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Rs 50
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Discount
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-xl w-auto"
                              size="txtOpenSansRegular20"
                            >
                              Rs 30
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900_66 h-px w-full" />
                      </div>
                      <div className="flex flex-row h-8 md:h-auto items-center justify-between md:px-10 px-12 sm:px-5 w-full">
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtOpenSansSemiBold20"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtOpenSansSemiBold20"
                        >
                          138
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col font-opensans items-start justify-end max-w-[1200px] mt-[-7px] mx-auto p-6 sm:px-5 rounded-[16px] shadow-bs w-full z-[1]">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtOpenSansRegular20"
                >
                  <span className="text-blue_gray-900 font-opensans text-left font-normal">
                    Returning customer?{" "}
                  </span>
                  <span className="text-blue_gray-900 font-opensans text-left font-bold">
                    Click Here to Login.
                  </span>
                </Text>
              </div>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-[184px] md:mt-0 mt-[594px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row font-opensans md:gap-10 gap-[120px] items-start justify-center max-w-[1200px] mt-12 mx-auto p-6 md:px-5 rounded-[16px] shadow-bs w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtOpenSansBold24"
                >
                  Billing Details
                </Text>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="First Name*"
                    />
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="Last Name*"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="Phone*"
                    />
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="Email Address*"
                    />
                  </div>
                  <CartColumnfirstnameFour className="flex flex-col gap-3 items-start justify-center w-full" />
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="City*"
                    />
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="State*"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="Pincode*"
                    />
                    <CartColumnfirstnameFour
                      className="flex flex-1 flex-col gap-3 items-start justify-center w-full"
                      streetaddress="Country*"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-[438px] sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                  size="txtOpenSansBold24"
                >
                  Billing Details
                </Text>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_frame133.svg"
                    alt="frame133"
                  />
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[21px] md:h-[22px] relative w-full">
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-blue_gray-900 w-max"
                          size="txtOpenSansSemiBold16"
                        >
                          Pay by Cards, NetBanking, Wallet & UPI
                        </Text>
                        <Img
                          className="absolute h-5 left-[14%] top-[0]"
                          src="images/img_blue1.svg"
                          alt="blueOne"
                        />
                      </div>
                    </div>
                    <Text
                      className="max-w-[406px] md:max-w-full text-blue_gray-900 text-justify text-xs"
                      size="txtOpenSansRegular12"
                    >
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our Privacy Policy
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[154px] h-[879px] md:h-auto items-start justify-between">
              <div className="flex flex-col gap-10 items-start justify-center w-[516px] sm:w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_frame133.svg"
                    alt="frame133_One"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtOpenSansBold24"
                  >
                    Ship to a Different Address
                  </Text>
                </div>
                <CartColumnfirstnameFour
                  className="flex flex-col gap-3 items-start justify-center w-full"
                  streetaddress="Order notes (optional)"
                />
              </div>
              <div className="flex flex-col items-end justify-end w-full">
                <Button
                  className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[271px]"
                  shape="round"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-green-800 flex font-opensans items-center justify-center mt-[92px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
