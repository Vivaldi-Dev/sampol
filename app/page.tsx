"use client";
import Banner from "./components/banner/Banner";
import Section from "./components/section/Section";
import Sectionfive from "./components/sectionfive/Sectionfive";
import { FaWhatsapp } from "react-icons/fa";
import Sectionsix from "./components/sectionsix/Sectionsix";
import Sectiontree from "./components/sectiontree/Sectiontree";
import Sectiontwo from "./components/sectiontwo/Sectiontwo";
import StatsSection from "./components/statesection/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Textsection from "./components/textsection/Textsection";
import Link from "next/link";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Section id="quem-somos" />
      <Sectiontree />
      <Sectiontwo />
      <Textsection />
      <Sectionfive />
      <Sectionsix />
      <TestimonialsSection />
      <StatsSection />
      <Link
        href="https://wa.me/258872193787"
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50">
        <FaWhatsapp size={26} aria-hidden="true" />
      </Link>
    </div>
  );
}
