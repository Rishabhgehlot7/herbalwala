import React from "react";

import { Input, Text } from "components";

const CartColumnfirstnameFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-xl w-auto"
          size="txtOpenSansSemiBold20"
        >
          {props?.streetaddress}
        </Text>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Input
            name="frame121_Two"
            placeholder="House No./ Apartment No./ Plot No."
            className="!placeholder:text-gray-700_7f !text-gray-700_7f font-opensans leading-[normal] md:h-auto p-0 sm:h-auto text-base text-left w-full"
            wrapClassName="rounded w-full"
            shape="round"
            color="blue_gray_900"
            size="sm"
            variant="outline"
          ></Input>
          {!!props?.streetname ? (
            <Input
              name="frame122"
              placeholder="Street Name/ Locality"
              value={props?.streetname}
              className="!placeholder:text-gray-700_7f !text-gray-700_7f font-opensans leading-[normal] md:h-auto p-0 sm:h-auto text-base text-left w-full"
              wrapClassName="rounded w-full"
              shape="round"
              color="blue_gray_900"
              size="sm"
              variant="outline"
            ></Input>
          ) : null}
        </div>
      </div>
    </>
  );
};

CartColumnfirstnameFour.defaultProps = { streetaddress: "Street Address*" };

export default CartColumnfirstnameFour;
