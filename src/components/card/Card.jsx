import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
export default function Card(props) {

    const navigate = useNavigate();

    return (
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
                            src={props.productImage}
                            alt="starOne"
                        />
                        <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xs"
                            size="txtOpenSansBold12"
                        >
                            <>
                                {props.discount}%
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
                    {props.title}
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                        className="line-through text-base text-center text-red-800 w-auto"
                        size="txtOpenSansLight16"
                    >
                        Rs {props.actualPrice}
                    </Text>
                    <Text
                        className="text-blue_gray-900 text-center text-xl w-auto"
                        size="txtOpenSansRegular20"
                    >
                        Rs {props.price}
                    </Text>
                </div>
            </div>
            <Button
                className="cursor-pointer font-bold h-16 leading-[normal] text-center text-xl w-[100%]"
                shape="round"
                color="green_700"
                size="xl"
                variant="fill"
            >
                Add to cart
            </Button>
        </div>
    )
}
