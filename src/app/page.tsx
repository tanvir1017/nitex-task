import AboutSection from "@/components/app-components/about/about-section";
import BoostYourWebsiteSection from "@/components/app-components/boost-your-website/boost-your-website";
import Features from "@/components/app-components/features/features";
import HeadingSection from "@/components/app-components/heading-section/heading-section";
import WhoWeAreSection from "@/components/app-components/who-we-are/who-we-are";

export default function Home() {
  return (
    <main className="App">
      <HeadingSection />
      <AboutSection />
      <BoostYourWebsiteSection />
      <WhoWeAreSection />
      <Features />
    </main>
  );
}
