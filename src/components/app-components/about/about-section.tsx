// @ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="py-16">
      {/*About Section Heading Text Start From Here */}

      <section
        id="ABOUT-SECTION"
        className="text-center relative overflow-hidden "
      >
        <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-10 font-extrabold inline-block">
          ABOUT
        </h2>
        <h3 className="lg:text-3xl font-semibold absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 inline-block text-gray-600">
          THIS IS THE ONE PAGE POLO
        </h3>
      </section>
      <section className="max-w-2xl block mx-auto my-2 lg:px-0 px-5">
        <p className="lg:text-center text-left text-sm">
          Molestie ultricies quam. Donec at sem. Praesent pretium. Maorbi quis
          nulla vehicula felsd laoreet. Sed ullamcorper arcu ente. Sed tempus
          tempor cild Nulla vierra ultrices magnal Nam rutrum congue diam.do
          eiusmod tempor incididunt ut dolore magna aliqua. Utdi eni ad minim
          veniam, quis nostrud exercitationconsequat.{" "}
        </p>
      </section>
      {/*About Section Heading Text End From Here */}

      {/*About Section Heading Buttons Start From Here */}
      <div className="max-w-sm mt-12 mx-auto">
        <div className="grid place-content-center grid-cols-2">
          <Button className="rounded-none bg-black text-brand me-4 hover:bg-black">
            More Info
          </Button>
          <Button className="rounded-none bg-brand text-black hover:bg-brand">
            Join Experience
          </Button>
        </div>
      </div>
      {/*About Section Heading Buttons End From Here */}

      {/*About Section Card Start From Here */}

      <div className="mx-auto max-w-3xl mt-16">
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 items-center justify-around">
          {/* Card Number One 1️⃣ Start From here */}
          <div className="h-[15.3125rem] w-[14rem] bg-black grid">
            <div className="m-auto">
              <Image
                src="/assets/images/card-star-icon.webp"
                width={80}
                height={80}
                alt="start-icon-for-card"
                className="m-auto"
              />
              <h4 className="text-white mt-5 font-bold">Responsive Design</h4>
            </div>
          </div>
          {/* Card Number One 1️⃣ End From here */}

          {/* Card Number One 2️⃣ Start From here */}
          <div className="h-[15.3125rem] w-[14rem] bg-[#FFE300] grid relative overflow-hidden">
            <Image
              src="/assets/images/overflow-circle-for-card.webp"
              width={150}
              height={150}
              alt="circle"
              className="absolute top-2/4 left-2/4 translate-x-[12%] translate-y-[12%]"
            />
            <div className="m-auto">
              <Image
                src="/assets/images/world-icon-for-card.webp"
                width={80}
                height={80}
                alt="start-icon-for-card"
                className="m-auto"
              />
              <div className="text-center px-5">
                <h4 className="text-black mt-5 font-bold mb-2">
                  Awesome Features
                </h4>
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                  ipsum.
                </p>
              </div>
            </div>
          </div>
          {/* Card Number One 2️⃣ End From here */}

          {/* Card Number One 3️⃣ Start From here */}
          <div className="h-[15.3125rem] w-[14rem] bg-black grid">
            <div className="m-auto">
              <Image
                src="/assets/images/Lock-icon-for-card.webp"
                width={70}
                height={70}
                alt="start-icon-for-card"
                className="m-auto"
              />
              <h4 className="text-white mt-5 font-bold">Powerful Security</h4>
            </div>
          </div>
          {/* Card Number One 3️⃣ End From here */}
        </div>
      </div>

      {/*About Section Card End From Here */}

      {/*About Section Impression Number 🔢 Start From Here */}

      {/* <div className="bg-[url('/assets/images/bg-tablet.webp')] bg-no-repeat bg-right-top bg-cover w-80"></div> */}
      <div className="mx-auto mt-36 lg:px-0 px-3">
        <h2 className="text-center text-3xl font-bold text-gray-700">
          HERE'RE SOME IMPRESSIVE NUMBER ABOUT US
        </h2>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          // onExit={() => setCounterOn(false)}
        >
          {counterOn && (
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:place-items-center max-w-2xl mx-auto my-16">
              <div className="text-center">
                <h3 className="text-4xl tracking-wider font-extrabold text-gray-600">
                  <CountUp start={0} duration={10} end={7522} delay={0} />
                </h3>
                <p className="text-xs">Project Complete</p>
              </div>
              <div className="text-center lg:mb-0 mb-10">
                <h3 className="text-4xl tracking-wider font-extrabold text-gray-600">
                  <CountUp start={0} duration={10} end={4222} delay={0} />
                </h3>
                <p className="text-xs">On Going Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl tracking-wider font-extrabold text-gray-600">
                  <CountUp start={0} duration={10} end={6980} delay={0} />+
                </h3>
                <p className="text-xs">Happy Client</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl tracking-wider font-extrabold text-gray-600">
                  <CountUp start={0} duration={10} end={100} delay={0} />%
                </h3>
                <p className="text-xs">Positive Feedback</p>
              </div>
            </div>
          )}
        </ScrollTrigger>
      </div>
      {/*About Section Impression Number 🔢 End From Here */}
    </div>
  );
};

export default AboutSection;
