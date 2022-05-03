import Map from "../components/Map";
import MostPopularSites from "../components/MostPopularSites";
import BoondockSites from "../components/BoondockSites";
import FeaturedParks from "../components/FeaturedParks";
import RandomContent from "../components/RandomContent";

export const HomePage = () => {
  return (
    <div>

      <section>
        <h1>Search for your next adventure.</h1>
        <form>
          <input type="search" name="locationSearch" placeholder="Search Locations"/>
        </form>
      </section>

      <Map/>

      <MostPopularSites/>

      <BoondockSites/>

      <FeaturedParks/>

      <RandomContent/>

    </div>
  );
};

export default HomePage;
