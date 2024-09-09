import React, { useEffect, useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          position="fixed"
          bottom="50px"
          right="50px"
          colorScheme="teal"
          onClick={scrollToTop}
          zIndex="10"
          borderRadius="50%"
          padding="10px"
        >
          <Icon as={FaArrowUp} w={6} h={6} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
