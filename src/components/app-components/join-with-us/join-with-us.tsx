import { Button } from "@/components/ui/button";

const JoinWithUsSection = () => {
  return (
    <div className="bg-[url('/assets/images/sixth-image-for-portfolio.webp')] bg-no-repeat bg-cover bg-center">
      <div className="bg-[#1515157c]">
        <div className="container mx-auto text-center py-24 2xl:py-36 text-white">
          <h2 className="lg:text-4xl text-2xl font-bold">
            ARE YOU IMPRESSED BY OUR WORK
          </h2>
          <p>Impedit aspernatur aperiam maxime labore neque officiis.</p>
          {/* Interested of our work SECTION Buttons section start from here  */}
          <div className="max-w-sm  py-12 mx-auto">
            <div className="grid place-content-center grid-cols-2">
              <Button className="rounded-none bg-brand text-black hover:bg-brand me-4">
                Purchase Now
              </Button>
              <Button className="rounded-none text-black bg-white hover:bg-white ">
                GET IN TOUCH
              </Button>
            </div>
          </div>
          {/* Interested of our work SECTION Buttons section End from here  */}
        </div>
      </div>
    </div>
  );
};

export default JoinWithUsSection;
