"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <Slider {...settings}>
        <div className="mr-5">
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </Slider>
    </div>
  );
}
