import { VStack, Input } from "@chakra-ui/react";
import "../styles/Home.css"
import Map from "../components/Map";
import MostPopularSites from "../components/MostPopularSites";
import BoondockSites from "../components/BoondockSites";
import FeaturedParks from "../components/FeaturedParks";
import RandomContent from "../components/RandomContent";
import HeaderImage from "../components/HeaderImage";

export const HomePage = () => {
  return (
    <VStack>
      <HeaderImage imageUrl="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg" />
      <section className="home-searchbar-section">
        <h1 className="home-searchbar-title">Search for your next adventure.</h1>
        <form className="home-searchbar-form">
          <Input
            className="home-searchbar"
            type="search"
            name="locationSearch"
            placeholder="Search Locations"
          />
        </form>
      </section>
      <section class="map-section">
        <div className="map-content-container">
          <Map loadListings/>
        </div>
      </section>
      <MostPopularSites />

      {/* <BoondockSites /> */}

      <FeaturedParks />

      <RandomContent />
    </VStack>
  );
};

export default HomePage;
