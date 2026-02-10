
import Banner from "./components/banner/Banner";
import Section from "./components/section/Section";
import Sectionfive from "./components/sectionfive/Sectionfive";
import Sectionseven from "./components/sectionseven/Sectionseven";
import Sectionsix from "./components/sectionsix/Sectionsix";
import Sectiontree from "./components/sectiontree/Sectiontree";
import Sectiontwo from "./components/sectiontwo/Sectiontwo";
import StatsSection from "./components/statesection/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Textsection from "./components/textsection/Textsection";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Section id="quem-somos" />
      <Sectiontree />
      <Sectiontwo />
      <Textsection />
      {/* <Setionfour /> */}
      <Sectionfive />
      <Sectionsix />
      <TestimonialsSection />
      <StatsSection />
    </div>
  );
}
