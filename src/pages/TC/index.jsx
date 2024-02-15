import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const TCPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
          <div className="flex flex-col font-unna h-[75px] md:h-auto items-center justify-center mt-3.5 pb-2 px-2 md:px-5 w-auto sm:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Terms and Conditions
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-[47%]" />
            </div>
          </div>
          <Text
            className="mt-5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtOpenSansRomanRegular24"
          >
            Welcome to herbalvala.com!
          </Text>
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between max-w-[1176px] mt-[62px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtOpenSansRomanRegular24"
            >
              <span className="text-black-900 font-opensans text-left font-normal">
                These terms and conditions outline the rules and regulations for
                the use of RKP HEALTH CARE’s Website, located at{" "}
              </span>
              <a
                href="javascript:"
                className="text-black-900 font-opensans text-left font-normal underline"
              >
                http://herbalvala.com/
              </a>
              <span className="text-black-900 font-opensans text-left font-normal">
                <>
                  .<br />
                  <br />
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use herbalvala.com if you do
                  not agree to take all of the terms and conditions stated on
                  this page.
                  <br />
                  <br />
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: “Client”, “You” and “Your” refers to you, the
                  person log on this website and compliant to the Company’s
                  terms and conditions. “The Company”, “Ourselves”, “We”, “Our”
                  and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
                  refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary
                  to undertake the process of our assistance to the Client in
                  the most appropriate manner for the express purpose of meeting
                  the Client’s needs in respect of provision of the Company’s
                  stated services, in accordance with and subject to, prevailing
                  law of in. Any use of the above terminology or other words in
                  the singular, plural, capitalization and/or he/she or they,
                  are taken as interchangeable and therefore as referring to
                  same.
                  <br />
                  <br />
                  CookiesWe employ the use of cookies. By accessing
                  herbalvala.com, you agreed to use cookies in agreement with
                  the RKP HEALTH CARE’s Privacy Policy.
                  <br />
                  <br />
                  Most interactive websites use cookies to let us retrieve the
                  user’s details for each visit. Cookies are used by our website
                  to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                  <br />
                  <br />
                  LicenseUnless otherwise stated, RKP HEALTH CARE and/or its
                  licensors own the intellectual property rights for all
                  material on herbalvala.com. All intellectual property rights
                  are reserved. You may access this from herbalvala.com for your
                  own personal use subjected to restrictions set in these terms
                  and conditions.
                  <br />
                  <br />
                  You must not:
                  <br />
                  <br />
                  Republish material from herbalvala.comSell, rent or
                  sub-license material from herbalvala.comReproduce, duplicate
                  or copy material from herbalvala.comRedistribute content from
                  herbalvala.comThis Agreement shall begin on the date hereof.
                  Our Terms and Conditions were created with the help of the
                  Free Terms and Conditions Generator.
                  <br />
                  Parts of this website offer an opportunity for users to post
                  and exchange opinions and information in certain areas of the
                  website. RKP HEALTH CARE does not filter, edit, publish or
                  review Comments prior to their presence on the website.
                  Comments do not reflect the views and opinions of RKP HEALTH
                  CARE,its agents and/or affiliates. Comments reflect the views
                  and opinions of the person who post their views and opinions.
                  To the extent permitted by applicable laws, RKP HEALTH CARE
                  shall not be liable for the Comments or for any liability,
                  damages or expenses caused and/or suffered as a result of any
                  use of and/or posting of and/or appearance of the Comments on
                  this website.
                  <br />
                  <br />
                  RKP HEALTH CARE reserves the right to monitor all Comments and
                  to remove any Comments which can be considered inappropriate,
                  offensive or causes breach of these Terms and Conditions.
                  <br />
                  <br />
                  You warrant and represent that:
                  <br />
                  <br />
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;The Comments do
                  not invade any intellectual property right, including without
                  limitation copyright, patent or trademark of any third
                  party;The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacyThe Comments will not be used to solicit or
                  promote business or custom or present commercial activities or
                  unlawful activity.You hereby grant RKP HEALTH CARE a
                  non-exclusive license to use, reproduce, edit and authorize
                  others to use, reproduce and edit any of your Comments in any
                  and all forms, formats or media.
                  <br />
                  <br />
                  Hyperlinking to our ContentThe following organizations may
                  link to our Website without prior written approval:
                  <br />
                  <br />
                  Government agencies;Search engines;News organizations;Online
                  directory distributors may link to our Website in the same
                  manner as they hyperlink to the Websites of other listed
                  businesses; andSystem wide Accredited Businesses except
                  soliciting non-profit organizations, charity shopping malls,
                  and charity fundraising groups which may not hyperlink to our
                  Web site.These organizations may link to our home page, to
                  publications or to other Website information so long as the
                  link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking
                  party and its products and/or services; and (c) fits within
                  the context of the linking party’s site.
                  <br />
                  We may consider and approve other link requests from the
                  following types of organizations:
                  <br />
                  <br />
                  commonly-known consumer and/or business information
                  sources;dot.com community sites;associations or other groups
                  representing charities;online directory distributors;internet
                  portals;accounting, law and consulting firms; andeducational
                  institutions and trade associations.We will approve link
                  requests from these organizations if we decide that: (a) the
                  link would not make us look unfavorably to ourselves or to our
                  accredited businesses; (b) the organization does not have any
                  negative records with us; (c) the benefit to us from the
                  visibility of the hyperlink compensates the absence of RKP
                  HEALTH CARE; and (d) the link is in the context of general
                  resource information.
                  <br />
                  <br />
                  These organizations may link to our home page so long as the
                  link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking
                  party and its products or services; and (c) fits within the
                  context of the linking party’s site.
                  <br />
                  If you are one of the organizations listed in paragraph 2
                  above and are interested in linking to our website, you must
                  inform us by sending an e-mail to RKP HEALTH CARE. Please
                  include your name, your organization name, contact information
                  as well as the URL of your site, a list of any URLs from which
                  you intend to link to our Website, and a list of the URLs on
                  our site to which you would like to link. Wait 2-3 weeks for a
                  response.
                  <br />
                  Approved organizations may hyperlink to our Website as
                  follows:
                  <br />
                  <br />
                  By use of our corporate name; orBy use of the uniform resource
                  locator being linked to; orBy use of any other description of
                  our Website being linked to that makes sense within the
                  context and format of content on the linking party’s site.No
                  use of RKP HEALTH CARE’s logo or other artwork will be allowed
                  for linking absent a trademark license agreement.
                  <br />
                  <br />
                  iFramesWithout prior approval and written permission, you may
                  not create frames around our Webpages that alter in any way
                  the visual presentation or appearance of our Website.
                  <br />
                  <br />
                  Content LiabilityWe shall not be hold responsible for any
                  content that appears on your Website. You agree to protect and
                  defend us against all claims that is rising on your Website.
                  No link(s) should appear on any Website that may be
                  interpreted as libelous, obscene or criminal, or which
                  infringes, otherwise violates, or advocates the infringement
                  or other violation of, any third party rights.
                  <br />
                  <br />
                  Reservation of RightsWe reserve the right to request that you
                  remove all links or any particular link to our Website. You
                  approve to immediately remove all links to our Website upon
                  request. We also reserve the right to amen these terms and
                  conditions and it’s linking policy at any time. By
                  continuously linking to our Website, you agree to be bound to
                  and follow these linking terms and conditions.
                  <br />
                  <br />
                  Removal of links from our websiteIf you find any link on our
                  Website that is offensive for any reason, you are free to
                  contact and inform us any moment. We will consider requests to
                  remove links but we are not obligated to or so or to respond
                  to you directly.
                  <br />
                  We do not ensure that the information on this website is
                  correct, we do not warrant its completeness or accuracy; nor
                  do we promise to ensure that the website remains available or
                  that the material on the website is kept up to date.
                  <br />
                  <br />
                  DisclaimerTo the maximum extent permitted by applicable law,
                  we exclude all representations, warranties and conditions
                  relating to our website and the use of this website. Nothing
                  in this disclaimer will:
                  <br />
                  <br />
                  limit or exclude our or your liability for death or personal
                  injury;limit or exclude our or your liability for fraud or
                  fraudulent misrepresentation;limit any of our or your
                  liabilities in any way that is not permitted under applicable
                  law; orexclude any of our or your liabilities that may not be
                  excluded under applicable law.The limitations and prohibitions
                  of liability set in this Section and elsewhere in this
                  disclaimer: (a) are subject to the preceding paragraph; and
                  (b) govern all liabilities arising under the disclaimer,
                  including liabilities arising in contract, in tort and for
                  breach of statutory duty.
                  <br />
                  <br />
                  As long as the website and the information and services on the
                  website are provided free of charge, we will not be liable for
                  any loss or damage of any nature.
                </>
              </span>
            </Text>
            <Button
              className="flex h-[60px] items-center justify-center mb-[4174px] md:mt-0 mt-[419px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <footer className="bg-green-800 flex font-opensans items-center justify-center mt-[126px] md:px-5 w-full">
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
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtOpenSansRegular16"
                            onClick={() => navigate("/aboutus")}
                          >
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtOpenSansRegular16"
                            onClick={() => navigate("/useraccount")}
                          >
                            My Account
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtOpenSansRegular16"
                            onClick={() => navigate("/shoppage")}
                          >
                            Offers
                          </Text>
                        </a>
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
                        className="text-base text-white-A700 w-full"
                        size="txtOpenSansRegular16"
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
              <div className="bg-gray-900 flex md:flex-col flex-row gap-12 items-center justify-center max-w-[1438px] p-3 w-full">
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
        </div>
      </div>
    </>
  );
};

export default TCPage;
