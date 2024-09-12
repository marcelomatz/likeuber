import About from "./About/About";
import BlogSection from "./BlogSection/BlogSection";
import BusinessCta from "./Hero/BusinessCta";
import Hero from "./Hero/Hero";

export default function MainPage() {
  return (
    <>
      <Hero />
      <BusinessCta />
      <BlogSection />
      <About />
    </>
  );
}
