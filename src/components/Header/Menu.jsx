import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
export default function Menu() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);




    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        console.log(mediaQuery)
        if (mediaQuery.matches) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [])

    return (
        <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-center max-w-[1200px] mx-auto md:px-5 py-3 w-full sm:flex sm:justify-evenly sm:flex-row">
            <Img
                className="sm:flex-1 h-[87px] md:h-auto object-cover w-[94px] sm:hidden"
                src="images/img_whatsappimage20231128.png"
                alt="whatsappimageTwenty"
            />
            <div className={`gap-14 items-center p-2 w-[60%] md:flex-row md:static md:justify-evenly flex-row
              sm:w-[60%] sm:z-10  sm:flex-col h-auto flex justify-center py-10 sm:fixed bg-gray-100 left-0 top-0  ${show ? "duration-300 translate-x-[-500px]" : "duration-300 translate-x-0"}`} >
                <Text
                    className="text-center text-green-700 text-lg w-auto cursor-pointer"
                    size="txtOpenSansSemiBold18"
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
            <div className='text-2xl p-2  rounded-full hidden sm:block' onClick={() => setShow(!show)}>
                <img src="https://cdn-icons-png.flaticon.com/512/2311/2311531.png" alt="" width={25} />
            </div>

        </div>
    )
}
