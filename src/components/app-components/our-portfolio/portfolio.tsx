"use client";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import Image from "next/image";

const gridImageData: string[] = [
  "first-image-of-portfolio.webp",
  "second-images-of-portfolio.webp",
  "third-image-for-portfolio.webp",
  "fourth-image-for-portfolio.webp",
  "fifth-image-for-portfolio.webp",
  "sixth-image-for-portfolio.webp",
  "seventh-image-for-portfolio.webp",
  "eighth-image-for-portfolio.webp",
];

const Portfolio = () => {
  return (
    <div className="mt-16">
      <div className="bg-brand py-16">
        {/* PORTFOLIO-SECTION-HEADING-TEXT START FROM HERE */}
        <section
          id="PORTFOLIO-SECTION"
          className="text-center relative overflow-hidden "
        >
          <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-10 font-extrabold lg:inline-block hidden">
            WORK
          </h2>
          <h3 className="text-3xl font-bold lg:absolute lg:left-1/2 lg:top-3/4 lg:-translate-x-1/2 lg:-translate-y-3/4 inline-block text-black ">
            OUR PORTFOLIO
          </h3>
        </section>
        {/* PORTFOLIO-SECTION-HEADING-TEXT END FROM HERE */}

        {/* PORTFOLIO-SECTION-FILTER-BUTTON STARTS FROM HERE 🥧 */}
        <div className="flex flex-wrap lg:space-y-0 space-y-2 items-center justify-center mt-12">
          <Button className="rounded-none">
            <Grip />
          </Button>
          <Button className="rounded-none bg-transparent border border-black text-black ms-2 hover:bg-black hover:text-brand transition-colors">
            Business
          </Button>
          <Button className="rounded-none bg-transparent border border-black text-black ms-2 hover:bg-black hover:text-brand transition-colors">
            Corporate
          </Button>
          <Button className="rounded-none bg-transparent border border-black text-black ms-2 hover:bg-black hover:text-brand transition-colors">
            Branding
          </Button>
          <Button className="rounded-none bg-transparent border border-black text-black ms-2 hover:bg-black hover:text-brand transition-colors">
            Photography
          </Button>
        </div>
        {/* PORTFOLIO-SECTION-FILTER-BUTTON end FROM HERE 🥧 */}
      </div>
      {/* PORTFOLIO-GRID STARTS FROM HERE */}
      <div className="">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-0">
          {gridImageData.map((item: string) => (
            <div
              key={item}
              className="w-full h-[230px] overflow-hidden relative"
            >
              <Image
                src={`/assets/images/${item}`}
                alt={item}
                fill
                className="object-cover absolute"
              />
            </div>
          ))}
        </div>
      </div>
      {/* PORTFOLIO-GRID END FROM HERE */}
    </div>
  );
};

export default Portfolio;
