import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Slider,
  Text,
} from "components";
import ProductProductdetails from "components/ProductProductdetails";

const yesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-end mx-auto w-full">
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
              className="common-pointer text-blue_gray-900 text-center text-lg w-auto"
              size="txtOpenSansSemiBold18Bluegray900"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[78px] text-center text-green-600 text-lg"
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center max-w-[1200px] mt-4 mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-6 h-[553px] md:h-auto items-start justify-start w-full">
            <Img
              className="md:h-auto h-full object-cover rounded-bl-lg rounded-br-lg w-full"
              src="images/img_image.png"
              alt="image_Two"
            />
            <div className="h-[108px] w-full"></div>
          </div>
          <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-center pr-2 w-[486px] sm:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
                    size="txtOpenSansBold32"
                  >
                    Herbalvala Relief Balm
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="line-through text-2xl md:text-[22px] text-center text-red-800_7f sm:text-xl w-auto"
                      size="txtOpenSansLight24"
                    >
                      ₹80.00
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                      size="txtOpenSansRegular32"
                    >
                      ₹40.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="max-w-[560px] md:max-w-full text-blue_gray-900_99 text-xl"
                  size="txtOpenSansRegular20Bluegray90099"
                >
                  Natural Pain Relief: HerbalVala Relief Balm combines a blend
                  of potent herbs known for their analgesic and
                  anti-inflammatory properties.
                </Text>
              </div>
              <div className="flex flex-row gap-[70px] items-center justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtOpenSansRegular20"
                  >
                    Quantity
                  </Text>
                  <div className="flex flex-row items-center justify-between outline outline-[1px] outline-blue_gray-900 py-1 rounded w-auto">
                    <div className="flex flex-col h-7 md:h-auto items-center justify-center w-7">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        -
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-center text-xl w-auto"
                      size="txtOpenSansRegular20"
                    >
                      1
                    </Text>
                    <div className="flex flex-col h-7 md:h-auto items-center justify-center w-7">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtOpenSansRegular20"
                      >
                        +
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtOpenSansRegular20"
                  >
                    Extra
                  </Text>
                  <SelectBox
                    className="h-9 leading-[normal] text-left text-xl w-[54%] sm:w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frameSeventyOne"
                    options={yesOptionsList}
                    isSearchable={false}
                    placeholder="Yes"
                    shape="round"
                    color="blue_gray_900"
                    size="xs"
                    variant="outline"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[344px]"
                shape="round"
                color="green_700"
                size="xl"
                variant="fill"
              >
                Add to cart
              </Button>
            </div>
            <div className="overflow-x-auto w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[0.87]"
                magnifiedIndex={3}
                centerMode
                ref={sliderRef}
                className="w-full"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col gap-5 items-start justify-start mx-2.5">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-900 text-xl"
                          size="txtOpenSansSemiBold20"
                        >
                          <span className="text-blue_gray-900 font-opensans text-left font-semibold">
                            <>
                              Delivery
                              <br />
                            </>
                          </span>
                          <span className="text-blue_gray-900_99 font-opensans text-left text-base font-normal">
                            Enter your Pincode to check delivery time.
                          </span>
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <Text
                            className="h-9 outline outline-[1px] outline-blue_gray-900 pl-2 sm:pr-5 pr-[35px] py-[3px] rounded text-blue_gray-900 text-xl w-36"
                            size="txtOpenSansRegular20"
                          >
                            342304
                          </Text>
                          <Text
                            className="text-green-700 text-xl w-auto"
                            size="txtOpenSansSemiBold20Green700"
                          >
                            CHECK
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start outline outline-[0.5px] outline-blue_gray-900 p-2 rounded-lg w-full">
                        <Text
                          className="text-base text-blue_gray-900_99"
                          size="txtOpenSansRegular16Bluegray90099"
                        >
                          <>
                            Delivery available for this loaction.
                            <br />
                            Typically delivered in 5-7 working days.
                            <br />
                            Standard Delivery.
                          </>
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
        <div className="h-[669px] md:h-[673px] mt-7 md:px-5 relative w-full">
          <div className="absolute bg-gray-700 flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="h-[645px] relative w-full">
              <Img
                className="h-[645px] m-auto object-cover w-full"
                src="images/img_background.png"
                alt="background"
              />
              <ProductProductdetails className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto max-w-[1200px] w-full" />
            </div>
          </div>
          <Button
            className="absolute flex h-[60px] items-center justify-center right-[3%] rotate-[180deg] top-[0] w-[60px]"
            shape="circle"
            color="green_700"
            size="xl"
            variant="fill"
          >
            <Img src="images/img_arrowup.svg" alt="arrowup" />
          </Button>
        </div>
        <div className="flex flex-col font-unna gap-7 h-[631px] md:h-auto items-center justify-start max-w-[1200px] mt-[87px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtUnnaBold48"
            >
              Reviews
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
          </div>
          <div className="flex flex-col font-opensans h-[532px] md:h-auto items-start justify-start w-full">
            <div className="bg-white-A700 h-[532px] sm:h-[549px] md:h-[699px] p-[34px] sm:px-5 relative rounded-[11px] w-full">
              <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[39%] w-[88%]" />
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[87%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                  <div className="flex flex-col gap-[59px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-black-900"
                          size="txtOpenSansRomanBold64"
                        >
                          4.7
                        </Text>
                        <Img
                          className="h-[39px] ml-2 md:ml-[0] w-[39px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[84px] w-[77%] md:w-full">
                          <List
                            className="flex flex-col gap-px items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-evenly my-0 w-full">
                              <Text
                                className="text-blue_gray-900_99 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                5
                              </Text>
                              <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-start justify-start md:mt-0 my-0.5 rounded-sm w-[98%] md:w-full">
                                <div className="bg-amber-A400 h-[22px] rounded-sm w-[74%]"></div>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-evenly my-0 w-full">
                              <Text
                                className="text-blue_gray-900_99 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                4
                              </Text>
                              <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-start justify-start md:mt-0 my-0.5 rounded-sm w-[98%] md:w-full">
                                <div className="bg-amber-A400 h-[22px] rounded-sm w-[41%]"></div>
                              </div>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-evenly my-0 w-full">
                              <Text
                                className="text-blue_gray-900_99 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                3
                              </Text>
                              <div className="bg-blue_gray-100 h-[22px] sm:mt-0 my-0.5 rounded-sm w-[98%]"></div>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-evenly my-0 w-full">
                              <Text
                                className="text-blue_gray-900_99 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                2
                              </Text>
                              <div className="bg-blue_gray-100 h-[22px] sm:mt-0 my-0.5 rounded-sm w-[98%]"></div>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                              <Text
                                className="text-blue_gray-900_99 text-xl"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                1
                              </Text>
                              <div className="bg-blue_gray-100 h-[22px] sm:mt-0 my-0.5 rounded-sm w-[98%]"></div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-[15px] text-black-900"
                        size="txtOpenSansRomanBold15"
                      >
                        All Reviews (3)
                      </Text>
                      <Text
                        className="text-[15px] text-blue-A200"
                        size="txtOpenSansRomanSemiBold15"
                      >
                        + Add Review
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-3.5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col gap-[5px] justify-start w-full">
                            <div className="flex flex-row gap-3 items-center justify-start w-[42%] md:w-full">
                              <Img
                                className="h-[34px] w-[34px]"
                                src="images/img_solarusercirclebold.svg"
                                alt="solarusercircle"
                              />
                              <div className="md:h-5 h-[34px] relative w-[63%]">
                                <Text
                                  className="absolute left-[0] text-[15px] text-black-900 top-[0]"
                                  size="txtOpenSansRomanBold15"
                                >
                                  User 1
                                </Text>
                                <Text
                                  className="absolute bottom-[0] inset-x-[0] mx-auto text-[11px] text-blue_gray-900_99 w-max"
                                  size="txtOpenSansRomanSemiBold11"
                                >
                                  Date and time{" "}
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[46px] text-[15px] text-black-900"
                              size="txtOpenSansRomanSemiBold15Black900"
                            >
                              this herbalvala oil is very effective{" "}
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-5 sm:mt-0 mt-[31px]"
                          src="images/img_rating.svg"
                          alt="rating"
                        />
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row gap-3 items-start justify-between w-full">
                            <Img
                              className="h-[34px] w-[34px]"
                              src="images/img_solarusercirclebold.svg"
                              alt="solarusercircle"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtOpenSansRomanBold15"
                              >
                                User 2
                              </Text>
                              <Text
                                className="text-[11px] text-blue_gray-900_99"
                                size="txtOpenSansRomanSemiBold11"
                              >
                                Date and time{" "}
                              </Text>
                              <Text
                                className="mt-[5px] text-[15px] text-black-900"
                                size="txtOpenSansRomanSemiBold15Black900"
                              >
                                really very effective balm , a must try balm
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-5 sm:mt-0 mt-[31px]"
                          src="images/img_rating_amber_a400.svg"
                          alt="rating"
                        />
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex sm:flex-col flex-row gap-3 items-start justify-between w-full">
                            <Img
                              className="h-[34px] w-[34px]"
                              src="images/img_solarusercirclebold.svg"
                              alt="solarusercircle"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtOpenSansRomanBold15"
                              >
                                User 3
                              </Text>
                              <Text
                                className="text-[11px] text-blue_gray-900_99"
                                size="txtOpenSansRomanSemiBold11"
                              >
                                Date and time{" "}
                              </Text>
                              <Text
                                className="mt-[5px] text-[15px] text-black-900"
                                size="txtOpenSansRomanSemiBold15Black900"
                              >
                                Tried the toothpaste , literally loved it ,
                                worth every penny
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-5 sm:mt-0 mt-[31px]"
                          src="images/img_rating_amber_a400.svg"
                          alt="rating"
                        />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-unna gap-7 items-center justify-start max-w-[1200px] mt-[140px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtUnnaBold48"
            >
              You May Also Like...
            </Text>
            <Line className="bg-blue_gray-900_cc h-0.5 w-1/2" />
          </div>
          <div className="flex flex-col font-opensans h-[370px] md:h-auto items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[369px] justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-2 rounded-lg w-full"
                  style={{ backgroundImage: "url('images/img_frame65_4.png')" }}
                >
                  <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[162px] w-full">
                    <div className="h-16 relative w-16">
                      <Img
                        className="h-16 m-auto rounded-lg w-16"
                        src="images/img_star1_2.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                        size="txtOpenSansBold12"
                      >
                        <>
                          25%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-full"
                    size="txtOpenSansBold20"
                  >
                    Tatva Oil
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="line-through text-base text-center text-red-800 w-auto"
                      size="txtOpenSansLight16"
                    >
                      Rs249
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-center text-xl w-auto"
                      size="txtOpenSansRegular20"
                    >
                      Rs200
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
              <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-2 rounded-lg w-full"
                  style={{ backgroundImage: "url('images/img_frame65_5.png')" }}
                >
                  <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[162px] w-full">
                    <div className="h-16 relative w-16">
                      <Img
                        className="h-16 m-auto rounded-lg w-16"
                        src="images/img_star1_3.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                        size="txtOpenSansBold12"
                      >
                        <>
                          25%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-full"
                    size="txtOpenSansBold20"
                  >
                    Toothpaste
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="line-through text-base text-center text-red-800 w-auto"
                      size="txtOpenSansLight16"
                    >
                      Rs 110
                    </Text>
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
              <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-2 rounded-lg w-full"
                  style={{ backgroundImage: "url('images/img_frame65_6.png')" }}
                >
                  <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[162px] w-full">
                    <div className="h-16 relative w-16">
                      <Img
                        className="h-16 m-auto rounded-lg w-16"
                        src="images/img_star1_4.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                        size="txtOpenSansBold12"
                      >
                        <>
                          25%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-full"
                    size="txtOpenSansBold20"
                  >
                    Kesar Chandan Soap
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="line-through text-base text-center text-red-800 w-auto"
                      size="txtOpenSansLight16"
                    >
                      Rs 90
                    </Text>
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
              <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-2 rounded-lg w-full"
                  style={{ backgroundImage: "url('images/img_frame65_7.png')" }}
                >
                  <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[162px] w-full">
                    <div className="h-16 relative w-16">
                      <Img
                        className="h-16 m-auto rounded-lg w-16"
                        src="images/img_star1_5.svg"
                        alt="starOne"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                        size="txtOpenSansBold12"
                      >
                        <>
                          25%
                          <br />
                          off
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center px-2 w-full">
                  <Text
                    className="text-blue_gray-900 text-xl w-full"
                    size="txtOpenSansBold20"
                  >
                    Lemon Orange Soap
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="line-through text-base text-center text-red-800 w-auto"
                      size="txtOpenSansLight16"
                    >
                      Rs 70
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-center text-xl w-auto"
                      size="txtOpenSansRegular20"
                    >
                      Rs 50
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
          </div>
        </div>
        <div className="bg-green-800 flex flex-col font-opensans gap-[25px] items-center justify-end mt-[111px] pt-10 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full">
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
                <div className="flex flex-col gap-2 items-start justify-start w-[134px]">
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/aboutus")}
                  >
                    About Us
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/useraccount")}
                  >
                    My Account
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700 w-full"
                    size="txtOpenSansRegular16"
                    onClick={() => navigate("/shoppage")}
                  >
                    Offers
                  </Text>
                </div>
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
                  <a className="text-base text-white-A700 w-full">
                    <Text
                      className="common-pointer"
                      size="txtOpenSansRegular16"
                      onClick={() => navigate("/pricacypolicy")}
                    >
                      Privacy Policy
                    </Text>
                  </a>
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
                <a
                  href="javascript:"
                  className="text-base text-white-A700 w-full"
                >
                  <Text size="txtOpenSansBold16">Support</Text>
                </a>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-full"
                  >
                    <Text size="txtOpenSansRegular16">FAQs</Text>
                  </a>
                  <a className="text-base text-white-A700 w-full">
                    <Text
                      className="common-pointer"
                      size="txtOpenSansRegular16"
                      onClick={() => navigate("/contactus")}
                    >
                      Contact Us
                    </Text>
                  </a>
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
        <div className="flex flex-col items-end mt-[2084px] sm:px-5 px-[38px] w-full">
          <div className="bg-gray-400 h-[120px] md:px-5 w-[13%]"></div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
