import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhoWeAreSection = () => {
  return (
    <div
      id="WHO-WE-ARE"
      className='bg-[url("/assets/images/girl-talking-on-phone.webp")] bg-no-repeat bg-cover'
    >
      <div className="bg-[#1212127a] ">
        <div className="container mx-auto text-center py-4">
          <div className="mx-auto text-white bg-[url('/assets/images/section-circle.webp')] bg-no-repeat bg-right-top py-32">
            <div className="space-y-10">
              {/* Agency Brand Logo 👉*/}
              <Image
                src="/assets/images/brand-logo.png"
                height={180}
                width={180}
                className="m-auto"
                alt="brand-logo"
              />
              {/* Agency Brand Logo  👈*/}

              {/* Who we are content text  👈*/}

              <section className="max-w-3xl mx-auto space-y-10">
                <h2 className="font-bold text-5xl tracking-wider">
                  WHO WE ARE
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer ux adipiscing elit,
                  sed diam nonummy nibh and euismod tincidunt ut laoreet dolore
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
              </section>

              {/* Who we are content text  👈*/}

              {/* WHO WE ARE SECTION Buttons section start from here  */}
              <div className="max-w-sm mt-12 mx-auto">
                <div className="grid place-content-center grid-cols-2">
                  <Button className="rounded-none border text-white border-white bg-transparent hover:bg-transparent me-4">
                    More Info
                  </Button>
                  <Button className="rounded-none bg-brand text-black hover:bg-brand">
                    Join Experience
                  </Button>
                </div>
              </div>
              {/* WHO WE ARE SECTION Buttons section End from here  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
