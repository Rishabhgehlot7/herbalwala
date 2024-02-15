import React from "react";

import { CheckBox, Img, SelectBox } from "components";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPageSortbydropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-[7px] items-start justify-end mb-[undefinedpx] mt-auto mx-auto p-[13px] rounded-bl-[10px] rounded-br-[10px] shadow-bs w-full z-[1]">
          <CheckBox
            className="!text-blue_gray-900 font-opensans md:ml-[0] ml-[5px] mt-[9px] text-base text-left tracking-[0.35px]"
            inputClassName="border border-blue_gray-900 border-solid h-4 mr-[5px] w-4"
            name="title_Six"
            id="title_Six"
            label="Relevance"
            shape="square"
            color="white_A700"
            variant="fill"
          ></CheckBox>
          <CheckBox
            className="!text-blue_gray-900 font-opensans md:ml-[0] ml-[5px] text-base text-left tracking-[0.35px]"
            inputClassName="border border-blue_gray-900 border-solid h-4 mr-[5px] w-4"
            name="title_Seven"
            id="title_Seven"
            label="Price: Low to high"
            shape="square"
            color="white_A700"
            variant="fill"
          ></CheckBox>
          <CheckBox
            className="!text-blue_gray-900 font-opensans md:ml-[0] ml-[5px] text-base text-left tracking-[0.35px]"
            inputClassName="border border-blue_gray-900 border-solid h-4 mr-[5px] w-4"
            name="title_Eight"
            id="title_Eight"
            label="Price : High to low"
            shape="square"
            color="white_A700"
            variant="fill"
          ></CheckBox>
          <CheckBox
            className="!text-blue_gray-900 font-opensans md:ml-[0] ml-[5px] text-base text-left tracking-[0.35px]"
            inputClassName="border border-blue_gray-900 border-solid h-4 mr-[5px] w-4"
            name="title_Nine"
            id="title_Nine"
            label="Discount : High to low"
            shape="square"
            color="white_A700"
            variant="fill"
          ></CheckBox>
        </div>
        <SelectBox
          className="!text-blue_gray-900 border border-gray-300 border-solid font-opensans mb-[-7px] mx-auto rounded-[10px] text-left text-xl tracking-[0.55px] w-full z-[1]"
          placeholderClassName="!text-blue_gray-900"
          indicator={
            <Img
              className="h-[29px] mr-[0] w-7 right-[0] mb-[undefinedpx] z-[1]"
              src="images/img_arrowdown_blue_gray_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="language_One"
          options={languageOneOptionsList}
          isSearchable={false}
          placeholder="Sort By "
          color="white_A700"
          size="md"
          variant="fill"
        />
      </div>
    </>
  );
};

ShopPageSortbydropdown.defaultProps = {};

export default ShopPageSortbydropdown;
