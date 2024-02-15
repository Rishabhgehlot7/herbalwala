import React from "react";

import { Img, Line, Text } from "components";

const ProductProductdetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
          <div className="flex flex-col h-[71px] md:h-auto items-start justify-center w-auto">
            <div className="flex flex-row gap-4 h-full items-center justify-start pl-4 sm:pr-5 pr-6 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_gray_100.svg"
                alt="arrowdown"
              />
              <Text
                className="text-gray-100 text-xl w-auto"
                size="txtOpenSansSemiBold20Gray100"
              >
                {props?.descriptionone}
              </Text>
            </div>
            <Line className="bg-gray-100 h-1 w-full" />
          </div>
          <div className="flex flex-col h-[67px] md:h-auto items-start justify-center w-auto">
            <div className="flex flex-row gap-4 h-full items-center justify-start pl-4 sm:pr-5 pr-6 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_gray_100.svg"
                alt="arrowright"
              />
              <Text
                className="text-gray-100 text-xl w-auto"
                size="txtOpenSansSemiBold20Gray100"
              >
                {props?.howtouse}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
          <Text
            className="max-w-6xl md:max-w-full text-blue_gray-900 text-xl"
            size="txtOpenSansRomanLight20"
          >
            {props?.descriptiontwo}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductProductdetails.defaultProps = {
  descriptionone: "Description",
  howtouse: "How to use",
  descriptiontwo:
    "Natural Pain Relief: HerbalVala Relief Balm combines a blend of potent herbs known for their analgesic and anti-inflammatory properties. When applied topically, the balm penetrates deep into the affected area, providing targeted pain relief and reducing discomfort caused by muscle strains, joint pain, arthritis, and other common ailments.Herbal Infusion: Our balm is infused with a powerful blend of natural herbal extracts, including eucalyptus, lavender, peppermint, and camphor. These botanical ingredients work synergistically to provide a calming and cooling sensation, promoting relaxation and easing tension for a truly rejuvenating experience.Versatile Application: HerbalVala Relief Balm offers a wide range of applications. Massage it onto sore muscles, temples, and pressure points to alleviate headaches and migraines. Apply it to insect bites, minor burns, or skin irritations to soothe and promote healing. Its versatile nature makes it an essential addition to your first aid kit.Fast-Acting and Long-Lasting: Experience quick relief with HerbalVala Relief Balm. Its fast-acting formula starts to work upon contact, providing immediate comfort. The long-lasting effects ensure that you can enjoy the benefits for an extended period, allowing you to get back to your daily activities with ease.Nourishing and Moisturizing: In addition to its therapeutic properties, HerbalVala Relief Balm, also nourishes and moisturizes the skin. Its non-greasy formula absorbs quickly, leaving your skin feeling soft, hydrated, and rejuvenated.Mind-Body Wellness: HerbalVala Relief Balm is more than just a topical solution; it promotes overall mind-body wellness. The soothing aroma of the herbal ingredients helps calm the mind and uplift the spirit, promoting a sense of tranquility and balance.",
};

export default ProductProductdetails;
