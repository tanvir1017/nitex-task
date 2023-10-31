import AboutSection from "@/components/app-components/about/about-section";
import BoostYourWebsiteSection from "@/components/app-components/boost-your-website/boost-your-website";
import { ContactUs } from "@/components/app-components/contact-us/contact-us";
import Features from "@/components/app-components/features/features";
import HeadingSection from "@/components/app-components/heading-section/heading-section";
import JoinWithUsSection from "@/components/app-components/join-with-us/join-with-us";
import MeetOurExpert from "@/components/app-components/meet-our-expert/meet-our-expert";
import Portfolio from "@/components/app-components/our-portfolio/portfolio";
import PricingSection from "@/components/app-components/pricing/pricing";
import ServiceSection from "@/components/app-components/service/service-section";
import WhoWeAreSection from "@/components/app-components/who-we-are/who-we-are";

export default function Home() {
  return (
    <main className="App">
      <HeadingSection />
      <AboutSection />
      <BoostYourWebsiteSection />
      <WhoWeAreSection />
      <Features />
      <Portfolio />
      <ServiceSection />
      <PricingSection />
      <MeetOurExpert />
      {/* <SimpleSlider /> */}
      <JoinWithUsSection />
      <ContactUs />
    </main>
  );
}
