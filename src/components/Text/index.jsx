import React from "react";

const sizeClasses = {
  txtOpenSansLight20: "font-light font-opensans",
  txtOpenSansLight24: "font-light font-opensans",
  txtOpenSansRegular16Bluegray90099: "font-normal font-opensans",
  txtOpenSansSemiBold24Black900: "font-opensans font-semibold",
  txtOpenSansRomanRegular3687: "font-normal font-opensans",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtOpenSansRomanBold15: "font-bold font-opensans",
  txtPlayfairDisplayBold1873: "font-bold font-playfairdisplay",
  txtOpenSansSemiBold18Bluegray900: "font-opensans font-semibold",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansSemiBold20Gray100: "font-opensans font-semibold",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansRomanRegular15: "font-normal font-opensans",
  txtOpenSansBold32: "font-bold font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtMontserratRegular1248: "font-montserrat font-normal",
  txtOpenSansSemiBold100: "font-opensans font-semibold",
  txtOpenSansSemiBold24: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold15Black900: "font-opensans font-semibold",
  txtOpenSansRomanLight20: "font-light font-opensans",
  txtOpenSansRegular28: "font-normal font-opensans",
  txtOpenSansRomanSemiBold20: "font-opensans font-semibold",
  txtOpenSansBold24: "font-bold font-opensans",
  txtOpenSansSemiBold20: "font-opensans font-semibold",
  txtOpenSansRomanRegular1763: "font-normal font-opensans",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansRomanSemiBold24: "font-opensans font-semibold",
  txtOpenSansSemiBold18Gray800: "font-opensans font-semibold",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtOpenSansSemiBold20Green700: "font-opensans font-semibold",
  txtOpenSansRomanRegular24: "font-normal font-opensans",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtOpenSansBold656: "font-bold font-opensans",
  txtOpenSansRegular20Bluegray90099: "font-normal font-opensans",
  txtOpenSansRomanSemiBold11: "font-opensans font-semibold",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansRomanRegular1475: "font-normal font-opensans",
  txtOpenSansRomanRegular2048: "font-normal font-opensans",
  txtOpenSansRomanSemiBold15: "font-opensans font-semibold",
  txtOpenSansBold12: "font-bold font-opensans",
  txtOpenSansLight16: "font-light font-opensans",
  txtOpenSansRomanCondensedBold36: "font-bold font-opensans",
  txtOpenSansRomanBold1763: "font-bold font-opensans",
  txtOpenSansRegular16Bluegray900: "font-normal font-opensans",
  txtOpenSansRegular32: "font-normal font-opensans",
  txtOpenSansRomanBold64: "font-bold font-opensans",
  txtUnnaBold48: "font-bold font-unna",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
