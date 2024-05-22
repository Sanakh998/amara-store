import React, { useEffect, useState } from "react";
import heroImage from "/hero-image.svg";
import heroMdImage from "/hero-md.svg";
import heroSmImage from "/hero-sm.svg";

const Hero = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [coverImage, setCoverImage] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  useEffect(()=>{
    const updateCoverImage = () => {
      if (screenSize < 450) {
        setCoverImage(heroSmImage);
      } else if (screenSize < 768) {
        setCoverImage(heroMdImage);
      } else {
        setCoverImage(heroImage);
      }
    
    };

    updateCoverImage();
  },[screenSize])

  let backgroundStyle = {
    height: "85vh",
    backgroundImage: `url('${coverImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="container-fluid m-0 p-0 hero" style={backgroundStyle}></div>
  );
};

export default Hero;
