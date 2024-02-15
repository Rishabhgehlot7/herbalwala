import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const PricacypolicyPage = () => {
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
          <div className="flex flex-col font-unna h-[70px] md:h-auto items-center justify-center mt-6 pb-2 px-2 md:px-5 w-auto sm:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Privacy Policy
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-[56%]" />
            </div>
          </div>
          <Text
            className="mt-[26px] text-black-900 text-xl"
            size="txtOpenSansRomanRegular20"
          >
            Last updated: November 09, 2023
          </Text>
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between max-w-[1176px] mt-16 mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtOpenSansRomanRegular24"
            >
              <>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
                <br />
                <br />
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy. This Privacy
                Policy has been created with the help of the Free Privacy Policy
                Generator.
                <br />
                <br />
                Interpretation and DefinitionsInterpretationThe words of which
                the initial letter is capitalized have meanings defined under
                the following conditions. The following definitions shall have
                the same meaning regardless of whether they appear in singular
                or in plural.
                <br />
                <br />
                Definitions For the purposes of this Privacy Policy:
                <br />
                <br />
                Account means a unique account created for You to access our
                Service or parts of our Service.
                <br />
                Affiliate means an entity that controls, is controlled by or is
                under common control with a party, where “control” means
                ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other
                managing authority.
                <br />
                <br />
                Company (referred to as either “the Company”, “We”, “Us” or
                “Our” in this Agreement) refers to rkp health care, nayapura
                lalsagar Jodhpur Rajasthan 342001.
                <br />
                <br />
                Cookies are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details
                of Your browsing history on that website among its many uses.
                <br />
                Country refers to: Rajasthan, India
                <br />
                <br />
                Device means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
                <br />
                Personal Data is any information that relates to an identified
                or identifiable individual.
                <br />
                Service refers to the Website.
                <br />
                <br />
                Service Provider means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party
                companies or individuals employed by the Company to facilitate
                the Service, to provide the Service on behalf of the Company, to
                perform services related to the Service or to assist the Company
                in analyzing how the Service is used.
                <br />
                <br />
                Usage Data refers to data collected automatically, either
                generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit).
                <br />
                <br />
                Website refers to herbalvala, accessible from
                http://herbalvala.com/
                <br />
                <br />
                You means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
                <br />
                <br />
                Collecting and Using Your Personal DataTypes of Data
                CollectedPersonal DataWhile using Our Service, We may ask You to
                provide Us with certain personally identifiable information that
                can be used to contact or identify You. Personally identifiable
                information may include, but is not limited to:
                <br />
                <br />
                Email address
                <br />
                First name and last name
                <br />
                Phone number
                <br />
                Address, State, Province, ZIP/Postal code, City
                <br />
                Usage Data
                <br />
                Usage DataUsage Data is collected automatically when using the
                Service.
                <br />
                <br />
                Usage Data may include information such as Your Device’s
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
                <br />
                <br />
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
                <br />
                <br />
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
                <br />
                <br />
                Tracking Technologies and CookiesWe use Cookies and similar
                tracking technologies to track the activity on Our Service and
                store certain information. Tracking technologies used are
                beacons, tags, and scripts to collect and track information and
                to improve and analyze Our Service. The technologies We use may
                include:
                <br />
                <br />
                Cookies or Browser Cookies. A cookie is a small file placed on
                Your Device. You can instruct Your browser to refuse all Cookies
                or to indicate when a Cookie is being sent. However, if You do
                not accept Cookies, You may not be able to use some parts of our
                Service. Unless you have adjusted Your browser setting so that
                it will refuse Cookies, our Service may use Cookies.Web Beacons.
                Certain sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).Cookies can
                be “Persistent” or “Session” Cookies. Persistent Cookies remain
                on Your personal computer or mobile device when You go offline,
                while Session Cookies are deleted as soon as You close Your web
                browser. Learn more about cookies on the Free Privacy Policy
                website article.
                <br />
                <br />
                We use both Session and Persistent Cookies for the purposes set
                out below:
                <br />
                Necessary / Essential Cookies
                <br />
                Type: Session Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
                <br />
                Cookies Policy / Notice Acceptance Cookies
                <br />
                Type: Persistent Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
                <br />
                Functionality Cookies
                <br />
                Type: Persistent Cookies
                <br />
                Administered by: Us
                <br />
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
                <br />
                <br />
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
                <br />
                Use of Your Personal DataThe Company may use Personal Data for
                the following purposes:
                <br />
                To provide and maintain our Service, including to monitor the
                usage of our Service.
                <br />
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
                <br />
                <br />
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
                <br />
                <br />
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application’s push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
                <br />
                <br />
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
                <br />
                <br />
                To manage Your requests: To attend and manage Your requests to
                Us.
                <br />
                <br />
                For business transfers: We may use Your information to evaluate
                or conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
                <br />
                <br />
                For other purposes: We may use Your information for other
                purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services,
                marketing and your experience.
                <br />
                <br />
                We may share Your personal information in the following
                situations:
                <br />
                <br />
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, to contact You.For business transfers: We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of Our business to another
                company.With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us.With business partners: We may share Your information with
                Our business partners to offer You certain products, services or
                promotions.With other users: when You share personal information
                or otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside.With Your consent: We may disclose Your
                personal information for any other purpose with Your
                consent.Retention of Your Personal DataThe Company will retain
                Your Personal Data only for as long as is necessary for the
                purposes set out in this Privacy Policy. We will retain and use
                Your Personal Data to the extent necessary to comply with our
                legal obligations (for example, if we are required to retain
                your data to comply with applicable laws), resolve disputes, and
                enforce our legal agreements and policies.
                <br />
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
                <br />
                Transfer of Your Personal DataYour information, including
                Personal Data, is processed at the Company’s operating offices
                and in any other places where the parties involved in the
                processing are located. It means that this information may be
                transferred to — and maintained on — computers located outside
                of Your state, province, country or other governmental
                jurisdiction where the data protection laws may differ than
                those from Your jurisdiction.
                <br />
                <br />
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
                <br />
                <br />
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
                <br />
                <br />
                Delete Your Personal DataYou have the right to delete or request
                that We assist in deleting the Personal Data that We have
                collected about You.
                <br />
                <br />
                Our Service may give You the ability to delete certain
                information about You from within the Service.
                <br />
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
                <br />
                <br />
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
                <br />
                <br />
                Disclosure of Your Personal DataBusiness TransactionsIf the
                Company is involved in a merger, acquisition or asset sale, Your
                Personal Data may be transferred. We will provide notice before
                Your Personal Data is transferred and becomes subject to a
                different Privacy Policy.
                <br />
                <br />
                Law enforcementUnder certain circumstances, the Company may be
                required to disclose Your Personal Data if required to do so by
                law or in response to valid requests by public authorities (e.g.
                a court or a government agency).
                <br />
                <br />
                Other legal requirementsThe Company may disclose Your Personal
                Data in the good faith belief that such action is necessary to:
                <br />
                <br />
                Comply with a legal obligationProtect and defend the rights or
                property of the CompanyPrevent or investigate possible
                wrongdoing in connection with the ServiceProtect the personal
                safety of Users of the Service or the publicProtect against
                legal liabilitySecurity of Your Personal Data. The security of
                Your Personal Data is important to Us, but remember that no
                method of transmission over the Internet, or method of
                electronic storage is 100% secure. While We strive to use
                commercially acceptable means to protect Your Personal Data, We
                cannot guarantee its absolute security.
                <br />
                <br />
                Children’s PrivacyOur Service does not address anyone under the
                age of 13. We do not knowingly collect personally identifiable
                information from anyone under the age of 13. If You are a parent
                or guardian and You are aware that Your child has provided Us
                with Personal Data, please contact Us. If We become aware that
                We have collected Personal Data from anyone under the age of 13
                without verification of parental consent, We take steps to
                remove that information from Our servers.
                <br />
                <br />
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent’s consent before We collect
                and use that information.
                <br />
                <br />
                Links to Other WebsitesOur Service may contain links to other
                websites that are not operated by Us. If You click on a third
                party link, You will be directed to that third party’s site. We
                strongly advise You to review the Privacy Policy of every site
                You visit.
                <br />
                <br />
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
                <br />
                <br />
                Changes to this Privacy PolicyWe may update Our Privacy Policy
                from time to time. We will notify You of any changes by posting
                the new Privacy Policy on this page.
                <br />
                <br />
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                “Last updated” date at the top of this Privacy Policy.
                <br />
                <br />
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
                <br />
                <br />
                Contact Us
                <br />
                If you have any questions about this Privacy Policy, You can
                contact us:
                <br />
                <br />
                By email: rkphealthcare@gmail.com
              </>
            </Text>
            <Button
              className="flex h-[60px] items-center justify-center mb-[7976px] md:mt-0 mt-[412px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <footer className="bg-green-800 flex font-opensans items-center justify-center mt-[149px] md:px-5 w-full">
            <div className="flex flex-col gap-[25px] items-center justify-center mr-0.5 mt-10 w-full">
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
                        className="common-pointer text-base text-white-A700 w-full"
                        size="txtOpenSansRegular16"
                        onClick={() => navigate("/tc")}
                      >
                        T&C
                      </Text>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 w-full"
                      >
                        <Text size="txtOpenSansRegular16">Privacy Policy</Text>
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

export default PricacypolicyPage;
