import React from 'react';
import './StudentsSaying.css';
import StudentSayingCard from './studentsayingcard/StudentSayingCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
// import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const StudentSayings: React.FC = () => {
    return (
        <>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
            <SwiperSlide><StudentSayingCard color="#FFEDB6" logocolor="#FFC81E" username="John Doe" program="Program Name" link="https//:" review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean." rating={3} /></SwiperSlide>
          </Swiper>
        </>
      );
}
export default StudentSayings