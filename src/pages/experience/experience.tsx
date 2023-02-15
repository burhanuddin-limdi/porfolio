import React, { useLayoutEffect } from "react";
import { Navbar } from "../../navbar/navbar";
import "./experience.css";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Experience: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to("#experience", 1, {
      y: 0,
      opacity: 1,
    });
    gsap.to(".experience", {
      duration: 1,
      delay: 1,
      y: 0,
      opacity: 1,
      stagger: -0.33,
    });
  });
  return (
    <>
      <Navbar />
      <div
        id="experience"
        className="w-screen h-screen overflow-x-clip overflow-y-auto"
      >
        <div
          className="hidden ml:flex h-fit w-fit absolute inset-0 m-auto z-20 bottom-4 px-20
        flex-wrap xl:flex-nowrap justify-center top-[25vh] xl:top-0"
        >
          <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1 mx-5 my-5">
            <p className="font-medium text-lg mb-3">
              JUNIOR FRONTEND DEVELOPER
            </p>
            <p className="text-[#ACABAB]">AiHello Inc.</p>
            <p className="text-xs">November 2022 - present</p>
            <p className="text-[#ACABAB]">
              AiHello is an Amazon PPC Company. There are two different web apps
              for mobile and destop. My job is to develop and maintain the
              mobile application of the company. The mobile app is made using
              angular and angular material.
            </p>
          </div>
          <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1 mx-5 my-5">
            <p className="font-medium text-lg mb-3">FRONTEND INTERN</p>
            <p className="text-[#ACABAB]">Thinkgroupy Services Pvt. Ltd.</p>
            <p className="text-xs">August 2022 - November 2022</p>
            <p className="text-[#ACABAB]">
              Thinkgroupy is a cyber security startup. My job was to develop the
              web application for the company. I worked with the backend team in
              deveopment of the project. The frontend part was made in angular.
            </p>
          </div>
          <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1 mx-5 my-5">
            <p className="font-medium text-lg mb-3">FRONTEND INTERN</p>
            <p className="text-[#ACABAB]">Bambudi Technologies Pvt. Ltd.</p>
            <p className="text-xs">April 2022 - July 2022</p>
            <p className="text-[#ACABAB]">
              This was my first experience working in the industry. Here I
              learned about angular, scrum and jira. I got the opportunity to
              learn and work under great mentors. My job to fix variuos issues
              and bugs in the web app.
            </p>
          </div>
        </div>
        <div className="block ml:hidden h-fit absolute inset-0 m-auto z-20">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1">
                <p className="font-medium text-lg mb-3">
                  JUNIOR FRONTEND DEVELOPER
                </p>
                <p className="text-[#ACABAB]">AiHello Inc.</p>
                <p className="text-xs">November 2022 - present</p>
                <p className="text-[#ACABAB]">
                  AiHello is an Amazon PPC Company. There are two different web
                  apps for mobile and destop. My job is to develop and maintain
                  the mobile application of the company. The mobile app is made
                  using angular and angular material.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1">
                <p className="font-medium text-lg mb-3">FRONTEND INTERN</p>
                <p className="text-[#ACABAB]">Thinkgroupy Services Pvt. Ltd.</p>
                <p className="text-xs">August 2022 - November 2022</p>
                <p className="text-[#ACABAB]">
                  Thinkgroupy is a cyber security startup. My job was to develop
                  the web application for the company. I worked with the backend
                  team in deveopment of the project. The frontend part was made
                  in angular.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="experience border border-[#f5f5fa] rounded w-[360px] h-[280px] fredoka py-6 px-6 bg-[#101014] relative space-y-1">
                <p className="font-medium text-lg mb-3">FRONTEND INTERN</p>
                <p className="text-[#ACABAB]">Bambudi Technologies Pvt. Ltd.</p>
                <p className="text-xs">April 2022 - July 2022</p>
                <p className="text-[#ACABAB]">
                  This was my first experience working in the industry. Here I
                  learned about angular, scrum and jira. I got the opportunity
                  to learn and work under great mentors. My job to fix variuos
                  issues and bugs in the web app.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="absolute text-[14rem] text-[#151515] jetbrains font-medium z-[0] -left-[4rem] bottom-[3rem]">
          {"<Experience/>"}
        </p>
        <svg
          className="w-[97vw] absolute top-0 bottom-0 right-0 m-auto z-[19] experience-line-in rotate-180"
          id="experience-line"
          viewBox="0 0 1424 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 52H1397C1410.81 52 1422 40.8071 1422 27V27C1422 13.1929 1410.81 2 1397 2H0"
            stroke="#FF5C00"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
};
