import React, {useEffect, useState} from 'react';
import heroImage from '/hero-image.svg';
import heroMdImage from '/hero-md.svg';
import heroSmImage from '/hero-sm.svg';

const Hero = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect (()=>{
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListner('resize', handleResize);
  },[]);

  let backgroundImage;
  if (screenSize<450){
    backgroundImage = heroSmImage;
  } else if (screenSize < 768){
    backgroundImage = heroMdImage;
  } else {
    backgroundImage = heroImage;
  };

  let backgroundStyle = {
    background: `url('${backgroundImage}')`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div className='container-fluid m-0 p-0 hero' style={backgroundStyle} >
    </div>
  )
}

export default Hero