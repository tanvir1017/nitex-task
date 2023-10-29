import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import Image from "next/image";

const BoostYourWebsiteSection = () => {
  return (
    <div className="bg-[#FAFAFA] py-16 lg:bg-none 2xl:bg-[url('/assets/images/lamp-light.webp')] bg-no-repeat bg-left-top">
      <div className="container">
        <div className="flex items-center justify-stretch">
          <div>
            <section
              id="ABOUT-SECTION-HEADING-TEXT"
              className="relative overflow-hidden "
            >
              <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-5 font-extrabold inline-block">
                RESPONSIVE
              </h2>
              <h3 className="text-3xl font-semibold absolute left-0 top-2/4 inline-block">
                BOOST YOUR WEBSITE
              </h3>
            </section>
            <section className="max-w-lg">
              <p className="text-sm my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quia obcaecati sapiente ducimus aut in?
              </p>
              <ul className="space-y-3">
                <li>
                  <Sparkle className="w-4 h-4 me-3 text-yellow-500 inline-flex items-center" />{" "}
                  Responsive Design & Retina Ready.
                </li>
                <li>
                  <Sparkle className="w-4 h-4 me-3 text-yellow-500 inline-flex items-center" />{" "}
                  Business Solution Any Company.
                </li>
                <li>
                  <Sparkle className="w-4 h-4 me-3 text-yellow-500 inline-flex items-center" />{" "}
                  Powerful Admin Panel.
                </li>
                <li>
                  <Sparkle className="w-4 h-4 me-3 text-yellow-500 inline-flex items-center" />{" "}
                  24/7 Support.
                </li>
              </ul>

              <Button className="rounded-none bg-brand text-black hover:bg-brand my-6 px-8 uppercase">
                Purchase
              </Button>
            </section>
          </div>
          <section>
            <Image
              src="/assets/images/running-man-illustrator.webp"
              width={500}
              height={500}
              alt="boost productivity section illustration"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoostYourWebsiteSection;
