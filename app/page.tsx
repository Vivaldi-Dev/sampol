
import Banner from "./components/banner/Banner";
import Section from "./components/section/Section";
import Sectionfive from "./components/sectionfive/Sectionfive";
import Sectionseven from "./components/sectionseven/Sectionseven";
import Sectionsix from "./components/sectionsix/Sectionsix";
import Sectiontree from "./components/sectiontree/Sectiontree";
import Sectiontwo from "./components/sectiontwo/Sectiontwo";
import Setionfour from "./components/setionfour/Setionfour";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Section />
      <Sectiontree />
      <Sectiontwo />
      <Setionfour />
      <Sectionfive />
      <Sectionsix />
      <Sectionseven />
    </div>
  );
}
