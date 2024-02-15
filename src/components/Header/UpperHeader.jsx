import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const UpperHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-900 flex flex-col h-[68px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[120px] w-screen">
            <div className="flex sm:flex-col flex-row gap-3 h-[50px] md:h-auto items-center justify-center max-w-[1200px] mx-auto py-2 w-full sm:flex">
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
    )
}

export default UpperHeader