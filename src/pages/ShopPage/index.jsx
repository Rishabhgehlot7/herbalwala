import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import ShopPageSortbydropdown from "components/ShopPageSortbydropdown";

const menuOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const loadMoreOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
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
                src="images/img_cartaccounticons_white_a700.svg"
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
                className="common-pointer text-center text-gray-800 text-lg w-auto"
                size="txtOpenSansSemiBold18Gray800"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-center text-green-700 text-lg w-auto"
                  size="txtOpenSansSemiBold18"
                >
                  Products
                </Text>
              </div>
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
          <div className="h-80 md:h-[326px] mt-1.5 md:px-5 relative w-full">
            <Img
              className="h-80 m-auto object-cover w-full"
              src="images/img_rectangle50_320x1440.png"
              alt="rectangleFifty"
            />
            <Text
              className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[100px] text-center text-white-A700 w-max"
              size="txtOpenSansSemiBold100"
            >
              SHOP
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1307px] mt-[87px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-1/5 md:w-full">
              <div className="h-[420px] relative w-full">
                <div className="absolute bg-gray-100 border border-gray-300 border-solid h-[420px] inset-y-[0] left-[0] my-auto rounded-[10px] shadow-bs w-[96%]"></div>
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[70%] md:w-full">
                      <div className="bg-gray-100 flex flex-col h-10 items-center justify-start mb-[5px] p-2 rounded-[50%] w-10">
                        <Button
                          className="flex h-6 items-center justify-center w-6"
                          shape="square"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            src="images/img_arrowright_blue_gray_900.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-blue_gray-900 text-xl tracking-[0.55px]"
                          size="txtOpenSansRegular20"
                        >
                          All Categories
                        </Text>
                        <Text
                          className="text-blue_gray-900_99 text-sm tracking-[0.25px]"
                          size="txtOpenSansRegular14"
                        >
                          Products on Sale
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-0.5 w-[97%] md:w-full">
                      <div className="bg-gray-100 flex flex-row items-center justify-start md:ml-[0] ml-[3px] px-2 w-[89%] md:w-full">
                        <div className="bg-gray-100 flex flex-col h-10 items-center justify-start p-2 rounded-[50%] w-10">
                          <div className="bg-gray-100 flex flex-col h-6 items-center justify-start p-1.5 w-6">
                            <Img
                              className="h-[7px] my-0.5"
                              src="images/img_arrowdown_blue_gray_900.svg"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                        <Text
                          className="text-base text-blue_gray-900 tracking-[0.35px]"
                          size="txtOpenSansSemiBold16"
                        >
                          Haircare
                        </Text>
                      </div>
                      <div className="bg-gray-100 flex flex-row gap-[18px] items-center justify-start px-2 rounded w-[76%] md:w-full">
                        <div className="bg-gray-100 h-10 rounded-[50%] w-10"></div>
                        <Text
                          className="capitalize text-base text-blue_gray-900 tracking-[0.35px]"
                          size="txtOpenSansRegular16Bluegray900"
                        >
                          Oil
                        </Text>
                      </div>
                      <div className="bg-gray-100 flex flex-col items-end justify-start md:ml-[0] ml-[11px] p-[7px]">
                        <Text
                          className="capitalize mb-0.5 mr-2 text-base text-blue_gray-900 tracking-[0.35px]"
                          size="txtOpenSansRegular16Bluegray900"
                        >
                          Hair mask
                        </Text>
                      </div>
                      <Text
                        className="bg-gray-100 capitalize h-10 justify-center md:ml-[0] ml-[11px] pb-2.5 sm:pl-5 pl-[35px] pr-[18px] pt-[7px] text-base text-blue_gray-900 tracking-[0.35px] w-[149px]"
                        size="txtOpenSansRegular16Bluegray900"
                      >
                        product 3
                      </Text>
                      <Text
                        className="bg-gray-100 h-10 justify-center pb-2.5 pt-[7px] sm:px-5 px-[35px] rounded text-base text-blue_gray-900 tracking-[0.44px] w-40"
                        size="txtOpenSansRegular16Bluegray900"
                      >
                        Others
                      </Text>
                      <SelectBox
                        className="capitalize font-bold h-10 leading-[normal] md:ml-[0] ml-[55px] text-center text-sm tracking-[0.75px] w-3/5 sm:w-full"
                        placeholderClassName="text-blue_gray-900"
                        indicator={
                          <Img
                            className="h-[7px] w-3 py-2 px-1.5"
                            src="images/img_arrowdown_blue_gray_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="menu"
                        options={menuOptionsList}
                        isSearchable={false}
                        placeholder="Show more"
                        shape="round"
                        color="gray_100"
                        size="sm"
                        variant="fill"
                      />
                      <div className="h-10 md:ml-[0] ml-[3px] md:pr-10 pr-12 sm:pr-5 relative w-[99%]">
                        <div className="bg-gray-100 h-10 my-auto rounded w-4/5"></div>
                        <Button
                          className="absolute flex h-10 inset-y-[0] items-center justify-center left-[3%] my-auto rounded-[50%] w-10"
                          shape="circle"
                          color="gray_100"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_arrowdown_blue_gray_900.svg"
                            alt="arrowright_One"
                          />
                        </Button>
                        <Text
                          className="absolute left-[20%] text-base text-blue_gray-900 top-[20%] tracking-[0.35px]"
                          size="txtOpenSansSemiBold16"
                        >
                          Skincare
                        </Text>
                      </div>
                      <div className="bg-gray-100 flex flex-col items-center justify-end md:ml-[0] ml-[3px] p-1.5 rounded w-[81%] md:w-full">
                        <div className="flex flex-row items-start justify-start w-[97%] md:w-full">
                          <Button
                            className="flex h-10 items-center justify-center rounded-[50%] w-10"
                            shape="circle"
                            color="gray_100"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_arrowright_blue_gray_900_40x40.svg"
                              alt="arrowright_Two"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900 tracking-[0.35px]"
                              size="txtOpenSansSemiBold16"
                            >
                              Bodycare
                            </Text>
                            <Text
                              className="text-blue_gray-900_99 text-sm tracking-[0.25px]"
                              size="txtOpenSansRegular14"
                            >
                              Products on 50% off
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ShopPageSortbydropdown className="h-[195px] relative w-[96%]" />
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-3/4 md:w-full">
              <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start sm:ml-[0] p-5 rounded-[16px] shadow-bs w-[282px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame65_5.png')",
                      }}
                    >
                      <div className="h-[35px] relative w-[35px]">
                        <Img
                          className="h-[35px] m-auto rounded w-[35px]"
                          src="images/img_star1_35x35.svg"
                          alt="starOne"
                        />
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                          size="txtOpenSansBold656"
                        >
                          <>
                            25%
                            <br />
                            off
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOpenSansBold20"
                      >
                        {" "}
                        Natural Toothpaste
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 70
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                      shape="round"
                      color="green_700"
                      size="xl"
                      variant="fill"
                    >
                      Buy
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start sm:ml-[0] p-5 rounded-[16px] shadow-bs w-[282px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame65_244x344.png')",
                      }}
                    >
                      <div className="h-[35px] relative w-[35px]">
                        <Img
                          className="h-[35px] m-auto rounded w-[35px]"
                          src="images/img_star1_6.svg"
                          alt="starOne"
                        />
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                          size="txtOpenSansBold656"
                        >
                          <>
                            10%
                            <br />
                            off
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOpenSansBold20"
                      >
                        Relief Balm
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 40
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                      shape="round"
                      color="green_700"
                      size="xl"
                      variant="fill"
                    >
                      Buy
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start sm:ml-[0] p-5 rounded-[16px] shadow-bs w-[282px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame65_4.png')",
                      }}
                    >
                      <div className="h-[35px] relative w-[35px]">
                        <Img
                          className="h-[35px] m-auto rounded w-[35px]"
                          src="images/img_star1_7.svg"
                          alt="starOne"
                        />
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                          size="txtOpenSansBold656"
                        >
                          <>
                            20%
                            <br />
                            off
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOpenSansBold20"
                      >
                        Tatva Hair Oil
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 200
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                      shape="round"
                      color="green_700"
                      size="xl"
                      variant="fill"
                    >
                      Buy
                    </Button>
                  </div>
                </List>
                <Button
                  className="flex h-[60px] items-center justify-center mb-[97px] md:mt-0 mt-[212px] rotate-[180deg] w-[60px]"
                  shape="circle"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  <Img src="images/img_arrowup.svg" alt="arrowup" />
                </Button>
              </div>
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[92%]">
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_8.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_8.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Rose Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 70
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_9.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_9.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Shea Butter-(Vit-E)
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 120
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_10.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_10.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Saffron Goat Milk
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 120
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_11.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_11.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Coffee Walnut Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 70
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-center p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_7.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_12.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Lemon Orange Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 70
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_6.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_13.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Kesar Chandan Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 70
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_12.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_14.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Neem Tulsi Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 70
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_13.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_15.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Charcoal Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 48
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_2.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_16.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      <span className="text-blue_gray-900 font-opensans text-left font-bold">
                        Rose Soap{" "}
                      </span>
                      <span className="text-blue_gray-900 font-opensans text-left text-[15px] font-normal">
                        (Pack of 2)
                      </span>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div className="h-[175px] relative w-full">
                    <Img
                      className="h-full m-auto object-cover rounded-lg w-[242px]"
                      src="images/img_frame65.png"
                      alt="frameSixtyFive"
                    />
                    <div className="absolute h-[35px] right-[3%] top-[5%] w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_17.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      <span className="text-blue_gray-900 font-opensans text-left font-bold">
                        Shea Butter-Vit-E{" "}
                      </span>
                      <span className="text-blue_gray-900 font-opensans text-left text-[10px] font-normal">
                        (pack of 2 )
                      </span>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 240
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_14.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_18.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Saffron Goat Milk{" "}
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 240
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_15.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_19.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Coffee Walnut Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div className="h-[175px] relative w-full">
                    <Img
                      className="h-full m-auto object-cover rounded-lg w-[242px]"
                      src="images/img_frame65_175x242.png"
                      alt="frameSixtyFive"
                    />
                    <div className="absolute h-[35px] right-[3%] top-[5%] w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_20.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      <span className="text-blue_gray-900 font-opensans text-left font-bold">
                        Neem Tulsi Soap{" "}
                      </span>
                      <span className="text-blue_gray-900 font-opensans text-left text-[10px] font-normal">
                        (pack of 2 )
                      </span>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_16.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_21.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Lemon Orange Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_17.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_22.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Kesar Chandan Soap
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div className="h-[175px] relative w-full">
                    <Img
                      className="h-full m-auto object-cover rounded-lg w-[242px]"
                      src="images/img_frame65_1.png"
                      alt="frameSixtyFive"
                    />
                    <div className="absolute h-[35px] right-[3%] top-[5%] w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_23.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      <span className="text-blue_gray-900 font-opensans text-left font-bold">
                        Charcoal Soap{" "}
                      </span>
                      <span className="text-blue_gray-900 font-opensans text-left text-[10px] font-normal">
                        (pack of 2 )
                      </span>
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 96
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_18.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_24.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Soap Combo Pack of 3
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 310
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_19.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_25.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Rainbow Pack{" "}
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 140
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] md:h-auto items-end justify-start p-2 rounded-lg w-[242px]"
                    style={{
                      backgroundImage: "url('images/img_frame65_20.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_26.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          10%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Relief Balm Combo{" "}
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 96
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_21.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_27.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          15%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Oil & Balm Combo
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 297
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[369px] md:h-auto items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-end justify-start p-2 rounded-lg w-full"
                    style={{
                      backgroundImage: "url('images/img_frame65_3.png')",
                    }}
                  >
                    <div className="h-[35px] relative w-[35px]">
                      <Img
                        className="h-[35px] m-auto rounded w-[35px]"
                        src="images/img_star1_28.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-[6.56px] text-center text-white-A700"
                        size="txtOpenSansBold656"
                      >
                        <>
                          20%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOpenSansBold20"
                    >
                      Tatva Hair Oil Combo
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        Rs 489
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[242px]"
                    shape="round"
                    color="green_700"
                    size="xl"
                    variant="fill"
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <SelectBox
            className="leading-[normal] md:ml-[0] ml-[812px] mt-[30px] text-blue_gray-900 text-center text-lg underline w-[9%] sm:w-full"
            placeholderClassName="text-blue_gray-900"
            indicator={
              <Img
                className="h-7 mr-[0] w-7"
                src="images/img_arrowdown_blue_gray_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="groupFortyTwo"
            options={loadMoreOptionsList}
            isSearchable={false}
            placeholder="Load more"
          />
          <Footer className="bg-green-800 flex items-center justify-center mt-[77px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ShopPagePage;
