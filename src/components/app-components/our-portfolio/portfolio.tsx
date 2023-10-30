import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="bg-brand py-16">
      {/* PORTFOLIO-SECTION-HEADING-TEXT START FROM HERE */}
      <section
        id="PORTFOLIO-SECTION-HEADING-TEXT"
        className="text-center relative overflow-hidden "
      >
        <h2 className="cursor-pointer stroke-text-light dark:stroke-text-dark text-7xl uppercase tracking-wider opacity-10 font-extrabold inline-block">
          WORK
        </h2>
        <h3 className="text-3xl font-bold absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 inline-block text-black">
          OUR PORTFOLIO
        </h3>
      </section>
      {/* PORTFOLIO-SECTION-HEADING-TEXT END FROM HERE */}

      {/* PORTFOLIO-SECTION-FILTER-BUTTON STARTS FROM HERE 🥧 */}
      <div className="flex items-center justify-center mt-12">
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

      {/* PORTFOLIO-GRID STARTS FROM HERE */}
      {/* PORTFOLIO-GRID END FROM HERE */}
    </div>
  );
};

export default Portfolio;
