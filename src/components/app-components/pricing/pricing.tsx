import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="bg-[url('/assets/images/pricing-background-images.webp')] bg-no-repeat bg-cover ">
      <div className="bg-[#f9e407d1] py-16">
        {/* PRICING SECTION HEADING TITLE START FROM HERE */}
        <section
          id="ABOUT-SECTION-HEADING-TEXT"
          className="text-center relative overflow-hidden "
        >
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-10 font-extrabold inline-block">
            PRICING
          </h2>
          <h3 className="lg:text-3xl text-lg font-semibold absolute lg:left-1/2 lg:top-3/4 lg:-translate-x-1/2 lg:-translate-y-1/2  px-2 lg:px-0 inline-block text-black">
            CHOOSE YOUR PLAN
          </h3>
        </section>
        {/* PRICING SECTION HEADING TITLE END FROM HERE */}

        {/* PRICING SECTION PRICING PLAN START FROM HERE */}
        <div className="lg:container px-5 2xl:mt-36 lg:mt-24 mt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-3 sm:gap-3 lg:place-items-center">
            {/* Pricing card Standard start from here */}
            <div className="overflow-hidden border">
              <div className="lg:w-[380px] w-full h-[700px] bg-white">
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT START FROM HERE */}
                <div className="h-[200px] bg-[url('/assets/images/card-image-one.webp')] bg-no-repeat bg-cover relative">
                  <div className="absolute top-1/2 left-1/2 lg:left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h3 className="text-white font-medium text-2xl tracking-widest">
                      STANDARD
                    </h3>
                    <div className="flex my-6">
                      <p className="text-2xl font-thin">$</p>
                      <div className="flex items-end">
                        <h2 className="text-6xl font-extrabold">107</h2>{" "}
                        <p className="">/MONTH</p>
                      </div>
                    </div>
                    <p className="text-xs">15 days trial on all accounts</p>
                  </div>
                </div>
                <div className="text-center py-10">
                  {/* Package Items That's Provide By Agency */}
                  <ul className="">
                    <li className="border border-t-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 100
                      pages website
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Sell 1 Products & Accept Donations
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Developer Platform
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 90
                      Page, Galleries
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 500
                      GB Cloud Storage
                    </li>
                  </ul>
                  {/* Package Items That's Provide By Agency */}
                </div>
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT END FROM HERE */}
              </div>
              <Button className="w-full rounded-none mt-2 bg-white text-gray-600 hover:bg-black hover:text-brand">
                GET STARTED
              </Button>
            </div>
            {/* Pricing card Standard end from here */}
            {/* Pricing card Premium start from here */}
            <div>
              <div className="lg:w-[380px] w-full h-[700px] bg-white">
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT START FROM HERE */}
                <div className="h-[200px] bg-[url('/assets/images/girl-talking-on-phone.webp')] bg-no-repeat bg-cover relative">
                  <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h3 className="text-white font-medium text-2xl tracking-widest">
                      PREMIUM
                    </h3>
                    <div className="flex my-6">
                      <p className="text-2xl font-thin">$</p>
                      <div className="flex items-end">
                        <h2 className="text-6xl font-extrabold">433</h2>{" "}
                        <p className="">/MONTH</p>
                      </div>
                    </div>
                    <p className="text-xs">15 days trial on all accounts</p>
                  </div>
                </div>
                <div className="text-center py-10">
                  {/* Package Items That's Provide By Agency */}
                  <ul className="">
                    <li className="border border-t-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 100
                      pages website
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Sell 1 Products & Accept Donations
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Developer Platform
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 90
                      Page, Galleries
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 500
                      GB Cloud Storage
                    </li>
                    <li className="border border-l-0 border-b-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Mobile Website & Store
                    </li>
                  </ul>
                  {/* Package Items That's Provide By Agency */}
                </div>
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT END FROM HERE */}
              </div>
              <Button className="w-full rounded-none mt-2 bg-white text-gray-600 hover:bg-black hover:text-brand">
                GET STARTED
              </Button>
            </div>
            {/* Pricing card Premium end from here */}
            {/* Pricing card ULTIMA start from here */}
            <div>
              <div className="lg:w-[380px] w-full h-[700px] bg-white">
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT START FROM HERE */}
                <div className="h-[200px] bg-[url('/assets/images/card-image-three.webp')] bg-no-repeat bg-cover relative">
                  <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h3 className="text-white font-medium text-2xl tracking-widest">
                      ULTIMATE
                    </h3>
                    <div className="flex my-6">
                      <p className="text-2xl font-thin">$</p>
                      <div className="flex items-end">
                        <h2 className="text-6xl font-extrabold">1233</h2>{" "}
                        <p className="">/MONTH</p>
                      </div>
                    </div>
                    <p className="text-xs">15 days trial on all accounts</p>
                  </div>
                </div>
                <div className="text-center py-10">
                  {/* Package Items That's Provide By Agency */}
                  <ul className="">
                    <li className="border border-t-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 100
                      pages website
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Sell 1 Products & Accept Donations
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Developer Platform
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 90
                      Page, Galleries
                    </li>
                    <li className="border border-l-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} /> 500
                      GB Cloud Storage
                    </li>
                    <li className="border border-l-0 border-b-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      Mobile Website & Store
                    </li>
                    <li className="border border-l-0 border-b-0 border-r-0 py-5 w-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" strokeWidth={0.5} />{" "}
                      24/7 Support
                    </li>
                  </ul>
                  {/* Package Items That's Provide By Agency */}
                </div>
                {/* PRICING CARD IMAGE SECTION WITH OVERLY TEXT END FROM HERE */}
              </div>
              <Button className="w-full rounded-none mt-2 bg-white text-gray-600 hover:bg-black hover:text-brand">
                GET STARTED
              </Button>
            </div>
            {/* Pricing card ULTIMA end from here */}
          </div>
        </div>
        {/* PRICING SECTION PRICING PLAN END FROM HERE */}
      </div>
    </div>
  );
};

export default PricingSection;
