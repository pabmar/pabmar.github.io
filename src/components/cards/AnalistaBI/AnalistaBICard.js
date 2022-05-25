import React from "react"; 
import HerramientasBI from "./HerramientasBI";
 
 
import CurriculumBi from "./CurriculumBI";

 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
 
// import required modules
import { Navigation } from "swiper";
 
  
const AnalistaBiCard = () =>{
  return  (
 

  <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><CurriculumBi></CurriculumBi></SwiperSlide>
        <SwiperSlide><HerramientasBI></HerramientasBI></SwiperSlide>
  
      </Swiper>
    </>
  ) 
  
  

}

export default AnalistaBiCard



