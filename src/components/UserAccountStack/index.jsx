import React from "react";

import { Line, Text } from "components";

const UserAccountStack = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[411px] inset-[0] justify-center m-auto w-full">
          <div className="h-[411px] m-auto w-full">
            <div className="h-[411px] m-auto w-full">
              <div className="absolute bg-white-A700 h-[411px] inset-[0] justify-center m-auto w-full"></div>
              <div className="absolute md:h-14 h-[58px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bg-green-700_19 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
                  <Text
                    className="md:ml-[0] ml-[13px] mt-[5px] text-[17.63px] text-center text-green-700"
                    size="txtOpenSansRomanBold1763"
                  >
                    {props?.myaccount}
                  </Text>
                </div>
                <Line className="absolute bg-black-900 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-green-700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[14%] w-full">
                <div className="md:h-[57px] h-[58px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
                    <Text
                      className="ml-4 md:ml-[0] text-[17.63px] text-blue_gray-900"
                      size="txtOpenSansRomanRegular1763"
                    >
                      {props?.dashboard}
                    </Text>
                  </div>
                  <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
                </div>
                <Line className="bg-black-900 h-px w-full" />
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[28%] w-full">
              <div className="md:h-[57px] h-[58px] relative w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
                  <Text
                    className="ml-4 md:ml-[0] text-[17.63px] text-blue_gray-900"
                    size="txtOpenSansRomanRegular1763"
                  >
                    {props?.orders}
                  </Text>
                </div>
                <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
          </div>
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="md:h-[57px] h-[58px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
                <Text
                  className="ml-4 md:ml-[0] text-[17.63px] text-blue_gray-900"
                  size="txtOpenSansRomanRegular1763"
                >
                  {props?.downloads}
                </Text>
              </div>
              <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
            </div>
            <Line className="bg-black-900 h-px w-full" />
          </div>
          <div className="absolute bottom-[28%] md:h-[57px] h-[58px] inset-x-[0] mx-auto w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
              <Text
                className="ml-4 md:ml-[0] text-[17.63px] text-blue_gray-900"
                size="txtOpenSansRomanRegular1763"
              >
                {props?.address}
              </Text>
            </div>
            <Line className="absolute bg-black-900 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
          </div>
        </div>
        <div className="absolute bottom-[14%] md:h-[57px] h-[58px] inset-x-[0] mx-auto w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
            <Text
              className="ml-4 md:ml-[0] text-[17.63px] text-blue_gray-900"
              size="txtOpenSansRomanRegular1763"
            >
              {props?.accountdetails}
            </Text>
          </div>
          <Line className="absolute bg-black-900 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
          <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="md:h-14 h-[58px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
              <Text
                className="md:ml-[0] ml-[18px] mt-[5px] text-[17.63px] text-blue_gray-900"
                size="txtOpenSansRomanRegular1763"
              >
                {props?.logout}
              </Text>
            </div>
            <Line className="absolute bg-white-A700 h-[53px] inset-y-[0] my-auto right-[0] w-[3px]" />
          </div>
          <Line className="bg-black-900 h-px w-full" />
        </div>
      </div>
    </>
  );
};

UserAccountStack.defaultProps = {
  myaccount: "My Account",
  dashboard: "Dashboard",
  orders: "Orders",
  downloads: "Downloads",
  address: "Address",
  accountdetails: "Account Details",
  logout: "Logout",
};

export default UserAccountStack;
