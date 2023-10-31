import { Bell, Camera, Settings, Sparkles } from "lucide-react";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="pt-36 border">
      <div className="grid lg:grid-cols-2 ">
        <div className="lg:order-1 order-2">
          <Image
            src="/assets/images/service-group-image.webp"
            alt="section images"
            width={700}
            height={100}
            className=""
          />
        </div>

        <div className="lg:order-2 order-1">
          {/* SERVICE SECTION HEADING TITLE START FROM HERE 👈*/}
          <section
            id="SERVICE-SECTION"
            className="relative overflow-hidden lg:px-0 px-2 "
          >
            <h2 className="cursor-text stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-5 font-extrabold inline-block md:px-2 px-1 lg:px-0">
              SERVICE
            </h2>
            <h3 className="text-3xl font-semibold absolute left-0 top-2/4 inline-block text-gray-600 text-center lg:text-start">
              CLEAN IDEA AND UNIQUE DESIGN
            </h3>
          </section>
          {/* SERVICE SECTION HEADING TITLE END FROM HERE 👉*/}

          {/* SERVICE SECTION FEATURES CARD START FROM HERE 👉*/}
          <div className="max-w-xl 2xl:mt-20 lg:mt-10 mt-16">
            <section className="grid grid-cols-2">
              <div className="text-center border-gray-400 p-8">
                <Settings className="w-10 h-10 m-auto" strokeWidth={0.5} />
                <h3 className="font-semibold text-sm my-4">
                  EXCELLENT FEATURES
                </h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, distinctio!
                </p>
              </div>
              <div className="text-center border-gray-400 border-b border-l p-8">
                <Camera className="w-10 h-10 m-auto" strokeWidth={0.5} />
                <h3 className="font-semibold text-sm my-4">SIMPLE & CLEAN</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, distinctio!
                </p>
              </div>
              <div className="text-center border-gray-400 border-t border-r p-8">
                <Sparkles className="w-10 h-10 m-auto" strokeWidth={0.5} />
                <h3 className="font-semibold text-sm my-4">PARALLAX EFFECT</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, distinctio!
                </p>
              </div>
              <div className="text-center border-gray-400 p-8">
                <Bell className="w-10 h-10 m-auto" strokeWidth={0.5} />
                <h3 className="font-semibold text-sm my-4">24/7 SUPPORT</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore, distinctio!
                </p>
              </div>
            </section>
            {/* SERVICE SECTION FEATURES CARD END FROM HERE 👉*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
