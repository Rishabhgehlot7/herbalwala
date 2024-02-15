import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";

const HomePagePage = () => {
  const navigate = useNavigate();

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
                src="images/img_cartaccounticons.svg"
                alt="cartaccounticon"
              />
            </div>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-center max-w-[1200px] mx-auto md:px-5 py-3 w-full">
            <Img
              className="sm:flex-1 h-[87px] md:h-auto object-cover w-[94px] sm:w-full"
              src="images/img_whatsappimage20231128.png"
              alt="whatsappimageTwenty"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-14 h-14 md:h-auto items-center justify-center p-2 w-auto sm:w-full">
              <Text
                className="text-center text-green-700 text-lg w-auto"
                size="txtOpenSansSemiBold18"
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
          <div className="h-80 md:px-5 relative w-full">
            <Img
              className="h-80 m-auto object-cover w-full"
              src="images/img_rectangle50.png"
              alt="rectangleFifty"
            />
            <Img
              className="absolute h-80 inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image2.png"
              alt="imageTwo"
            />
          </div>
          <div className="flex md:flex-col flex-row font-unna gap-[18px] items-start justify-end mt-[146px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col gap-7 items-center justify-start max-w-[1200px] w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                  size="txtUnnaBold48"
                >
                  Hot Sale
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
              </div>
              <div className="flex flex-col font-opensans h-[438px] md:h-auto items-start justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[438px] justify-start w-full"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full"
                    onClick={() => navigate("/product")}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[244px] items-start justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_frame65_244x344.png')",
                      }}
                    >
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[264px] w-full">
                        <div className="h-16 relative w-16">
                          <Img
                            className="h-16 m-auto rounded-lg w-16"
                            src="images/img_star1.svg"
                            alt="starOne"
                          />
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                            size="txtOpenSansBold12"
                          >
                            <>
                              10%
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
                        Herbalvala Relief Balm
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="line-through text-base text-center text-red-800 w-auto"
                          size="txtOpenSansLight16"
                        >
                          Rs 48
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 40
                        </Text>
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
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[244px] items-start justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame65_2.png')",
                      }}
                    >
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[264px] w-full">
                        <div className="h-16 relative w-16">
                          <Img
                            className="h-16 m-auto rounded-lg w-16"
                            src="images/img_star1_64x64.svg"
                            alt="starOne"
                          />
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                            size="txtOpenSansBold12"
                          >
                            <>
                              10%
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
                        <span className="text-blue_gray-900 font-opensans text-left font-bold">
                          Rose Soap{" "}
                        </span>
                        <span className="text-blue_gray-900 font-opensans text-left text-[15px] font-normal">
                          (Pack of 2)
                        </span>
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="line-through text-base text-center text-red-800 w-auto"
                          size="txtOpenSansLight16"
                        >
                          Rs 140
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 100
                        </Text>
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
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 h-full items-start justify-start p-5 rounded-[16px] shadow-bs w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[244px] items-start justify-start p-2 rounded-lg w-full"
                      style={{
                        backgroundImage: "url('images/img_frame65_3.png')",
                      }}
                    >
                      <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[264px] w-full">
                        <div className="h-16 relative w-16">
                          <Img
                            className="h-16 m-auto rounded-lg w-16"
                            src="images/img_star1_1.svg"
                            alt="starOne"
                          />
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                            size="txtOpenSansBold12"
                          >
                            <>
                              20%
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
                        <span className="text-blue_gray-900 font-opensans text-left font-bold">
                          Tatva Hair Oil{" "}
                        </span>
                        <span className="text-blue_gray-900 font-opensans text-left text-[15px] font-normal">
                          (Pack of 2)
                        </span>
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="line-through text-base text-center text-red-800 w-auto"
                          size="txtOpenSansLight16"
                        >
                          Rs 498
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-center text-xl w-auto"
                          size="txtOpenSansRegular20"
                        >
                          Rs 400
                        </Text>
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
                </List>
              </div>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-[321px] md:mt-0 mt-[158px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[90px] mt-8"
            onClick={() => navigate("/shoppage")}
            rightIcon={
              <Img
                className="h-7 ml-2"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
          >
            <div className="leading-[normal] text-blue_gray-900 text-center text-lg underline">
              See all
            </div>
          </Button>
          <div className="flex flex-col font-unna gap-7 items-center justify-center max-w-[1200px] mt-[150px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Blogs
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-full" />
            </div>
            <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-center w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col gap-7 h-[286px] items-center justify-center md:px-10 px-12 sm:px-5 py-10 rounded-[16px] shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_blogcard1.png')" }}
              >
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtOpenSansRegular28"
                >
                  <>
                    8 Best <br />
                    Low Maintenance Techniques
                    <br />
                    For Haircare
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[400px]"
                  shape="round"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  Read
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col gap-6 h-[286px] items-center justify-center md:px-10 px-12 sm:px-5 py-10 rounded-[16px] shadow-bs w-full"
                style={{ backgroundImage: "url('images/img_blogcard2.png')" }}
              >
                <Text
                  className="max-w-[492px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtOpenSansRegular28"
                >
                  The Radiant Smile Revolution: Unleashing The Power of Natural
                  Toothpaste
                </Text>
                <Button
                  className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[400px]"
                  shape="round"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  Read
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 items-center justify-center max-w-[1200px] mt-[179px] mx-auto md:px-5 w-full">
            <div className="flex flex-col font-unna gap-[15px] items-center justify-start w-auto sm:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                size="txtUnnaBold48"
              >
                Customers Love Us{" "}
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-[54%]" />
            </div>
            <div className="flex flex-col font-opensans gap-5 h-[640px] md:h-auto items-center justify-center rounded-[16px] shadow-bs2 w-full">
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full justify-start w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_frame35.png')" }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_frame36.png')" }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{
                    backgroundImage: "url('images/img_frame36_310x285.png')",
                  }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_frame37.png')" }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
              </List>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-full justify-start w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{
                    backgroundImage: "url('images/img_frame35_310x386.png')",
                  }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{
                    backgroundImage: "url('images/img_frame37_310x386.png')",
                  }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient  bg-no-repeat flex flex-1 flex-col h-[310px] items-end justify-start p-4 rounded-lg shadow-bs w-full"
                  style={{ backgroundImage: "url('images/img_frame38.png')" }}
                >
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtOpenSansRegular16"
                  >
                    Customer
                  </Text>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[90px]"
              onClick={() => navigate("/shoppage")}
              rightIcon={
                <Img
                  className="h-7 ml-2"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-opensans leading-[normal] text-blue_gray-900 text-center text-lg underline">
                See all
              </div>
            </Button>
          </div>
          <div className="flex flex-col font-unna gap-[26px] items-center justify-start max-w-[1200px] mt-[120px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                  size="txtUnnaBold48"
                >
                  Testimonials
                </Text>
                <Line className="bg-blue_gray-900_cc h-0.5 w-4/5" />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center shadow-bs3 w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col gap-[12.48px] items-center justify-center px-[18.73px] py-[31.21px] rounded-[16px] w-[380px] sm:w-full">
                <Img
                  className="h-[132px] md:h-auto rounded-[50%] w-[132px]"
                  src="images/img_unsplashohkelokq3re.png"
                  alt="unsplashohkelok"
                />
                <div className="flex flex-col gap-[12.48px] items-center justify-start w-auto">
                  <div className="flex flex-col font-playfairdisplay gap-[11px] items-center justify-start w-[38%] md:w-full">
                    <Text
                      className="text-[18.73px] text-center text-purple-900 w-auto"
                      size="txtPlayfairDisplayBold1873"
                    >
                      Navya Gehlot
                    </Text>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[122px]"
                        value={4}
                        starCount={5}
                        color="#c4c4c4"
                        activeColor="#f79e1b"
                        size={19}
                      ></RatingBar>
                    </div>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[329px] md:max-w-full text-[12.48px] text-black-900 text-center"
                    size="txtMontserratRegular1248"
                  >
                    “These products are legit awesome, loved them . Bought
                    coffee walnut soap , it can also work as an exfoliator.”
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col gap-[12.48px] items-center justify-center px-[18.73px] py-[31.21px] rounded-[16px] w-[380px] sm:w-full">
                <Img
                  className="h-[132px] md:h-auto rounded-[50%] w-[132px]"
                  src="images/img_unsplashwmd64tmfc4k.png"
                  alt="unsplashwmd64tm"
                />
                <div className="flex flex-col gap-[12.48px] items-center justify-start w-auto">
                  <Text
                    className="text-[18.73px] text-center text-purple-900 w-auto"
                    size="txtPlayfairDisplayBold1873"
                  >
                    Neha
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[122px]"
                      value={5}
                      starCount={5}
                      activeColor="#f79e1b"
                      size={19}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[329px] md:max-w-full text-[12.48px] text-black-900 text-center"
                    size="txtMontserratRegular1248"
                  >
                    “Products are awesome . packaging is also cute , will
                    definitely recommend you all to try once. Natural products
                    are good for our skin ”
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col gap-[12.48px] items-center justify-center px-[18.73px] py-[31.21px] rounded-[16px] w-96 sm:w-full">
                <Img
                  className="h-[132px] md:h-auto rounded-[50%] w-[132px]"
                  src="images/img_unsplash6anudmpilw4.png"
                  alt="unsplash6anudmp"
                />
                <div className="flex flex-col gap-[12.48px] items-center justify-start w-auto">
                  <Text
                    className="text-[18.73px] text-center text-purple-900 w-auto"
                    size="txtPlayfairDisplayBold1873"
                  >
                    Siddhart
                  </Text>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="flex justify-between w-[122px]"
                      value={3}
                      starCount={5}
                      color="#c4c4c4"
                      activeColor="#f79e1b"
                      size={19}
                    ></RatingBar>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[329px] md:max-w-full text-[12.48px] text-black-900 text-center"
                    size="txtMontserratRegular1248"
                  >
                    “very good toothpaste , literally loved it . when i first
                    used it was not sure but when i tried it for a week then i
                    got to know about its result.”
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Footer className="bg-green-800 flex font-opensans items-center justify-center mt-[180px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
