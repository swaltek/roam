import { VStack } from "@chakra-ui/react";

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
      <section>
        <h1>Search for your next adventure.</h1>
        <form>
          <input
            type="search"
            name="locationSearch"
            placeholder="Search Locations"
          />
        </form>
      </section>

      <Map loadListings/>

      <MostPopularSites />

      <BoondockSites />

      <FeaturedParks />

      <RandomContent />
    </VStack>
  );
};

export default HomePage;
