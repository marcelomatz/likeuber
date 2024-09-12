import About from "./About/About";
import AppDownload from "./AppDownload/AppDownload";
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
      <AppDownload />
    </>
  );
}
