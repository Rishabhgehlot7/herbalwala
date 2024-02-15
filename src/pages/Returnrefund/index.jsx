import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ReturnrefundPage = () => {
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
          <div className="flex flex-col font-unna h-[70px] md:h-auto items-center justify-center mt-[29px] pb-2 px-2 md:px-5 w-auto sm:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
                size="txtUnnaBold48"
              >
                Return & Refund Policy
              </Text>
              <Line className="bg-blue_gray-900_cc h-0.5 w-[44%]" />
            </div>
          </div>
          <Text
            className="mt-[26px] text-black-900 text-xl"
            size="txtOpenSansRomanRegular20"
          >
            Last updated: November 09, 2023
          </Text>
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between max-w-[1176px] mt-[81px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtOpenSansRomanRegular24"
            >
              <>
                Thank you for shopping at herbalvala.
                <br />
                <br />
                If, for any reason, You are not completely satisfied with a
                purchase We invite You to review our policy on refunds and
                returns. This Return and Refund Policy has been created with the
                help of the Return and Refund Policy Generator.
                <br />
                <br />
                The following terms are applicable for any products that You
                purchased with Us.
                <br />
                <br />
                Interpretation and DefinitionsInterpretationThe words of which
                the initial letter is capitalized have meanings defined under
                the following conditions. The following definitions shall have
                the same meaning regardless of whether they appear in singular
                or in plural.
                <br />
                <br />
                DefinitionsFor the purposes of this Return and Refund Policy:
                <br />
                <br />
                Company (referred to as either “the Company”, “We”, “Us” or
                “Our” in this Agreement) refers to RKP health care, puneet nagar
                nayapura lalsagar Jodhpur.
                <br />
                <br />
                Goods refer to the items offered for sale on the Service.
                <br />
                Orders mean a request by You to purchase Goods from Us.
                <br />
                <br />
                Service refers to the Website.
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
                Your Order Cancellation RightsYou are entitled to cancel Your
                Order within 7 days without giving any reason for doing so.
                <br />
                <br />
                The deadline for cancelling an Order is 7 days from the date on
                which You received the Goods or on which a third party you have
                appointed, who is not the carrier, takes possession of the
                product delivered.
                <br />
                In order to exercise Your right of cancellation, You must inform
                Us of your decision by means of a clear statement. You can
                inform us of your decision by:
                <br />
                <br />
                By email: rkphealthcare@gmal.com
                <br />
                <br />
                By phone number: 8764239460
                <br />
                <br />
                We will reimburse You no later than 14 days from the day on
                which We receive the returned Goods. We will use the same means
                of payment as You used for the Order, and You will not incur any
                fees for such reimbursement.
                <br />
                <br />
                Conditions for ReturnsIn order for the Goods to be eligible for
                a return, please make sure that:
                <br />
                The Goods were purchased in the last 7 daysThe Goods are in the
                original packagingThe following Goods cannot be returned:
                <br />
                <br />
                The supply of Goods made to Your specifications or clearly
                personalized.The supply of Goods which according to their nature
                are not suitable to be returned, deteriorate rapidly or where
                the date of expiry is over.The supply of Goods which are not
                suitable for return due to health protection or hygiene reasons
                and were unsealed after delivery.The supply of Goods which are,
                after delivery, according to their nature, inseparably mixed
                with other items.We reserve the right to refuse returns of any
                merchandise that does not meet the above return conditions in
                our sole discretion.
                <br />
                <br />
                Only regular priced Goods may be refunded. Unfortunately, Goods
                on sale cannot be refunded. This exclusion may not apply to You
                if it is not permitted by applicable law.
                <br />
                <br />
                Returning GoodsYou are responsible for the cost and risk of
                returning the Goods to Us. You should send the Goods at the
                following address:
                <br />
                <br />
                27 puneet nagar nayapura lalsagar mandore jodhpur rajasthan
                342001
                <br />
                We cannot be held responsible for Goods damaged or lost in
                return shipment. Therefore, We recommend an insured and
                trackable mail service. We are unable to issue a refund without
                actual receipt of the Goods or proof of received return
                delivery.
                <br />
                <br />
                GiftsIf the Goods were marked as a gift when purchased and then
                shipped directly to you, You’ll receive a gift credit for the
                value of your return. Once the returned product is received, a
                gift certificate will be mailed to You.
                <br />
                <br />
                If the Goods weren’t marked as a gift when purchased, or the
                gift giver had the Order shipped to themselves to give it to You
                later, We will send the refund to the gift giver.
                <br />
                <br />
                Contact UsIf you have any questions about our Returns and
                Refunds Policy, please contact us:
                <br />
                <br />
                By email: rkphealthcare@gmal.com
                <br />
                <br />
                By phone number: 8764239460
              </>
            </Text>
            <Button
              className="flex h-[60px] items-center justify-center mb-[2262px] md:mt-0 mt-[390px] rotate-[180deg] w-[60px]"
              shape="circle"
              color="green_700"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_arrowup.svg" alt="arrowup" />
            </Button>
          </div>
          <Footer className="bg-green-800 flex font-opensans items-center justify-center mt-28 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ReturnrefundPage;
