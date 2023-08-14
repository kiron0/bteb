import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollButton() {
          const [visible, setVisible] = useState(false);

          const toggleVisible = () => {
                    const scrolled = document.documentElement.scrollTop;
                    if (scrolled > 500) {
                              setVisible(true);
                    } else if (scrolled <= 500) {
                              setVisible(false);
                    }
          };

          const scrollToTop = () => {
                    window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                    });
          };

          window.addEventListener("scroll", toggleVisible);

          return (
                    <span className="fixed cursor-pointer text-white text-[2.5rem] w-full z-[20] left-[84%] md:left-[91%] lg:left-[96%] bottom-[125px] md:bottom-[70px] h-[20px]">
                              <BsArrowUpShort
                                        className="bg-primary hover:bg-primary duration-500 glass rounded-tl-3xl rounded-br-3xl"
                                        onClick={scrollToTop}
                                        style={{ display: visible ? "inline" : "none" }}
                              />
                    </span>
          );
};
