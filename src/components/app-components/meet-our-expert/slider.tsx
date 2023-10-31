"use client";
import Image from "next/image";
import ScrollCarousel from "scroll-carousel-react";

const ScrollCarouselComponent = () => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log("I am ready")}
    >
      <div className="max-w-4xl mx-auto mt-28">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 px-2 lg-px-0">
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}
          <div className="">
            <div className="border h-[300px] pt-5 w-full overflow-clip bg-[#EBEBEB]">
              <Image
                src="/assets/images/team-member-one.webp"
                width={500}
                height={100}
                alt="developer one"
              />
            </div>

            <div className="border bg-[#EBEBEB] mt-1 py-2 px-5 text-center">
              <h2 className="font-bold text-gray-700 tracking-wider pb-3">
                ROBERT WILLSOM
              </h2>
              <hr className="border border-gray-400" />
              <h5 className="text-sm font-medium text-gray-700 tracking-wider pt-3">
                WEB DEVELOPER
              </h5>
            </div>
          </div>
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}{" "}
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}
          <div className="">
            <div className="border h-[300px] pt-5 w-full overflow-clip bg-[#EBEBEB]">
              <Image
                src="/assets/images/team-member-one.webp"
                width={500}
                height={100}
                alt="developer one"
              />
            </div>

            <div className="border bg-[#EBEBEB] mt-1 py-2 px-5 text-center">
              <h2 className="font-bold text-gray-700 tracking-wider pb-3">
                ROBERT WILLSOM
              </h2>
              <hr className="border border-gray-400" />
              <h5 className="text-sm font-medium text-gray-700 tracking-wider pt-3">
                WEB DEVELOPER
              </h5>
            </div>
          </div>
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}{" "}
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}
          <div className="">
            <div className="border h-[300px] pt-5 w-full overflow-clip bg-[#EBEBEB] p-6">
              <Image
                src="/assets/images/team-member-two.webp"
                width={500}
                height={100}
                alt="developer one"
              />
            </div>

            <div className="border bg-[#EBEBEB] mt-1 py-2 px-5 text-center">
              <h2 className="font-bold text-gray-700 tracking-wider pb-3">
                ROBERT WILLSOM
              </h2>
              <hr className="border border-gray-400" />
              <h5 className="text-sm font-medium text-gray-700 tracking-wider pt-3">
                WEB DEVELOPER
              </h5>
            </div>
          </div>
          {/* ROBERT WILLSOM WEB DEV CARD START FROM HERE */}
        </div>
      </div>
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
