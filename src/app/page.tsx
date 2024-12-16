import HeroSection from "./Component/Hero";
import NewArrivals from "./Component/Productlist";
import Arrivals from "./Component/Topselling";
import TestimonialCarousel from "./Component/Testi";
import NewsletterSubscription from "./Component/Newsletter";
import BrowseByDressStyle from "./Component/Dressstyle";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewArrivals />
      <Arrivals />
      <BrowseByDressStyle />

      <TestimonialCarousel />
      <NewsletterSubscription />
    </div>
  );
}
