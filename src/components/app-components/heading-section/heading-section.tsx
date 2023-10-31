import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavbarNewUILook } from "../navigation/navbar";

const HeadingSection = () => {
  return (
    <>
      <div id="#" className="bg-[#FCFBFC] pt-10">
        {/* Heading section  about the webpage*/}
        <div className="lg:flex lg:flex-row flex flex-col-reverse items-center justify-between">
          <div className="max-w-2xl ">
            <section className="px-8">
              <h1 className="lg:text-6xl text-3xl lg:mt-0 mt-10 font-bold">
                CREATIVE <br className="lg:block hidden" /> AND PROFESSIONAL
              </h1>
              <p className="mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                expedita minima cupiditate quo eius labore officiis numquam,
                neque adipisci provident!
              </p>
              <Button className="rounded-none bg-transparent text-black border border-black px-6 py-3 hover:bg-transparent my-6">
                CONTACT US
              </Button>
            </section>
          </div>
          <section>
            <Image
              src="/assets/images/full-man-heading-seciton.webp"
              width={500}
              height={500}
              alt="A man is fully tree manipulation"
            />
          </section>
        </div>
        {/* Heading section  about the webpage*/}
      </div>
      {/* <Navbar /> */}

      <NavbarNewUILook />
    </>
  );
};

export default HeadingSection;
